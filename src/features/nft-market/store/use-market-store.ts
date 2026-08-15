"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import {
  AssetType,
  Currency,
  IdeaAsset,
  Listing,
  SaleMode,
  Transaction,
  UsernameAsset,
} from "../types/market";
import {
  ALL_MOCK_USERS,
  CURRENT_USER,
  INITIAL_IDEAS,
  INITIAL_LISTINGS,
  INITIAL_TRANSACTIONS,
  INITIAL_USERNAMES,
  MOCK_EXCHANGE_RATE_IRR_PER_DOTO,
  findUserName,
} from "../mock/market-data";

// ==========================================================================
// این استور، منبع حقیقت مرکزی (single source of truth) کل ماژول
// NFT Marketplace هست: Usernameها، ایده‌ها، Listingها، تراکنش‌ها و کاربر جاری.
// هر بخش دیگه‌ای از پروژه (پروفایل، هدر با موجودی کیف‌پول، نوتیفیکیشن و ...)
// می‌تونه به همین استور وصل بشه — نیازی به استور جدا نیست.
// ==========================================================================

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

export interface ListForSaleInput {
  mode: SaleMode;
  price: number;
  currency: Currency;
  durationHours?: number; // فقط برای auction، پیش‌فرض 24
  minIncrement?: number; // فقط برای auction، پیش‌فرض 5٪ قیمت پایه
}

export interface SubmitIdeaInput {
  title: string;
  description: string;
  imageUrl: string;
  documents: { name: string; sizeKb: number }[];
  price: number;
  currency: Currency;
}

interface MarketState {
  currentUserId: string;
  users: typeof ALL_MOCK_USERS;
  usernames: UsernameAsset[];
  ideas: IdeaAsset[];
  listings: Listing[];
  transactions: Transaction[];
  exchangeRateIrrPerDoto: number;

  // ---- مشتقات ساده (به عنوان تابع، نه state) ----
  getListing: (listingId?: string) => Listing | undefined;
  getWalletBalance: () => number;

  // ---- ثبت ایده ----
  submitIdea: (input: SubmitIdeaInput) => IdeaAsset;

  // ---- مدیریت Username ----
  setActiveUsername: (usernameId: string) => void;

  // ---- خرید/فروش عمومی (هم Username هم Idea) ----
  listForSale: (
    assetType: AssetType,
    assetId: string,
    input: ListForSaleInput,
  ) => void;
  cancelListing: (assetType: AssetType, assetId: string) => void;
  buyNow: (
    assetType: AssetType,
    assetId: string,
  ) => { ok: boolean; message: string };
  placeBid: (
    assetType: AssetType,
    assetId: string,
    amount: number,
  ) => { ok: boolean; message: string };
  settleExpiredAuction: (assetType: AssetType, assetId: string) => void;
}

export const useMarketStore = create<MarketState>()(
  persist(
    (set, get) => ({
      currentUserId: CURRENT_USER.id,
      users: ALL_MOCK_USERS,
      usernames: INITIAL_USERNAMES,
      ideas: INITIAL_IDEAS,
      listings: INITIAL_LISTINGS,
      transactions: INITIAL_TRANSACTIONS,
      exchangeRateIrrPerDoto: MOCK_EXCHANGE_RATE_IRR_PER_DOTO,

      getListing: (listingId) => {
        if (!listingId) return undefined;
        return get().listings.find((l) => l.id === listingId);
      },

      getWalletBalance: () => {
        const user = get().users.find((u) => u.id === get().currentUserId);
        return user?.walletBalanceDoto ?? 0;
      },

      submitIdea: (input) => {
        const idea: IdeaAsset = {
          id: genId("id"),
          title: input.title,
          description: input.description,
          imageUrl: input.imageUrl,
          documents: input.documents,
          ownerId: get().currentUserId,
          status: "live",
          createdAt: new Date().toISOString(),
        };

        const listing: Listing = {
          id: genId("l"),
          assetType: "idea",
          assetId: idea.id,
          title: idea.title,
          ownerId: idea.ownerId,
          mode: "fixed",
          currency: input.currency,
          price: input.price,
          status: "active",
          createdAt: new Date().toISOString(),
        };
        idea.listingId = listing.id;

        set((s) => ({
          ideas: [idea, ...s.ideas],
          listings: [listing, ...s.listings],
        }));

        return idea;
      },

      setActiveUsername: (usernameId) => {
        set((s) => ({
          usernames: s.usernames.map((u) =>
            u.ownerId !== s.currentUserId
              ? u
              : { ...u, isActive: u.id === usernameId },
          ),
        }));
      },

      listForSale: (assetType, assetId, input) => {
        const state = get();
        const ownerId = state.currentUserId;

        const listing: Listing = {
          id: genId("l"),
          assetType,
          assetId,
          title:
            assetType === "username"
              ? (state.usernames.find((u) => u.id === assetId)?.handle ?? "")
              : (state.ideas.find((i) => i.id === assetId)?.title ?? ""),
          ownerId,
          mode: input.mode,
          currency: input.currency,
          price: input.price,
          status: "active",
          createdAt: new Date().toISOString(),
          ...(input.mode === "auction"
            ? {
                endsAt: new Date(
                  Date.now() + (input.durationHours ?? 24) * 60 * 60 * 1000,
                ).toISOString(),
                minIncrement:
                  input.minIncrement ??
                  Math.max(0.01, +(input.price * 0.05).toFixed(2)),
                bids: [],
              }
            : {}),
        };

        set((s) => ({
          listings: [listing, ...s.listings],
          usernames:
            assetType === "username"
              ? s.usernames.map((u) =>
                  u.id === assetId ? { ...u, listingId: listing.id } : u,
                )
              : s.usernames,
          ideas:
            assetType === "idea"
              ? s.ideas.map((i) =>
                  i.id === assetId ? { ...i, listingId: listing.id } : i,
                )
              : s.ideas,
        }));
      },

      cancelListing: (assetType, assetId) => {
        set((s) => {
          const asset =
            assetType === "username"
              ? s.usernames.find((u) => u.id === assetId)
              : s.ideas.find((i) => i.id === assetId);
          const listingId = asset?.listingId;

          return {
            listings: s.listings.map((l) =>
              l.id === listingId ? { ...l, status: "unlisted" } : l,
            ),
            usernames:
              assetType === "username"
                ? s.usernames.map((u) =>
                    u.id === assetId ? { ...u, listingId: undefined } : u,
                  )
                : s.usernames,
            ideas:
              assetType === "idea"
                ? s.ideas.map((i) =>
                    i.id === assetId ? { ...i, listingId: undefined } : i,
                  )
                : s.ideas,
          };
        });
      },

      buyNow: (assetType, assetId) => {
        const state = get();
        const asset =
          assetType === "username"
            ? state.usernames.find((u) => u.id === assetId)
            : state.ideas.find((i) => i.id === assetId);
        const listing = state.listings.find((l) => l.id === asset?.listingId);

        if (
          !asset ||
          !listing ||
          listing.mode !== "fixed" ||
          listing.status !== "active"
        ) {
          return {
            ok: false,
            message: "این آیتم دیگه برای خرید در دسترس نیست.",
          };
        }
        if (listing.ownerId === state.currentUserId) {
          return { ok: false, message: "شما مالک این آیتم هستید." };
        }

        const priceInDoto =
          listing.currency === "DOTO"
            ? listing.price
            : listing.price / state.exchangeRateIrrPerDoto;
        const buyerBalance = state.getWalletBalance();

        if (buyerBalance < priceInDoto) {
          return { ok: false, message: "موجودی کیف‌پول شما کافی نیست." };
        }

        const tx: Transaction = {
          id: genId("tx"),
          assetType,
          assetId,
          title: listing.title,
          fromUserId: listing.ownerId,
          toUserId: state.currentUserId,
          price: priceInDoto,
          mode: "fixed",
          time: new Date().toISOString(),
        };

        set((s) => ({
          listings: s.listings.map((l) =>
            l.id === listing.id ? { ...l, status: "sold" } : l,
          ),
          usernames:
            assetType === "username"
              ? s.usernames.map((u) =>
                  u.id === assetId
                    ? {
                        ...u,
                        ownerId: state.currentUserId,
                        listingId: undefined,
                        isActive: false,
                      }
                    : u,
                )
              : s.usernames,
          ideas:
            assetType === "idea"
              ? s.ideas.map((i) =>
                  i.id === assetId
                    ? {
                        ...i,
                        ownerId: state.currentUserId,
                        listingId: undefined,
                      }
                    : i,
                )
              : s.ideas,
          users: s.users.map((u) => {
            if (u.id === state.currentUserId)
              return {
                ...u,
                walletBalanceDoto: u.walletBalanceDoto - priceInDoto,
              };
            if (u.id === listing.ownerId)
              return {
                ...u,
                walletBalanceDoto: u.walletBalanceDoto + priceInDoto,
              };
            return u;
          }),
          transactions: [tx, ...s.transactions],
        }));

        return {
          ok: true,
          message: `خرید با موفقیت انجام شد. ${listing.title} حالا مال شماست.`,
        };
      },

      placeBid: (assetType, assetId, amount) => {
        const state = get();
        const asset =
          assetType === "username"
            ? state.usernames.find((u) => u.id === assetId)
            : state.ideas.find((i) => i.id === assetId);
        const listing = state.listings.find((l) => l.id === asset?.listingId);

        if (
          !asset ||
          !listing ||
          listing.mode !== "auction" ||
          listing.status !== "active"
        ) {
          return { ok: false, message: "این مزایده دیگه فعال نیست." };
        }
        if (
          listing.endsAt &&
          new Date(listing.endsAt).getTime() <= Date.now()
        ) {
          return { ok: false, message: "زمان این مزایده تمام شده است." };
        }
        if (listing.ownerId === state.currentUserId) {
          return {
            ok: false,
            message: "شما نمی‌توانید روی آیتم خودتان پیشنهاد بدهید.",
          };
        }

        const currentTop = listing.bids?.length
          ? Math.max(...listing.bids.map((b) => b.amount))
          : listing.price;
        const minAllowed = currentTop + (listing.minIncrement ?? 0.01);

        if (amount < minAllowed) {
          return {
            ok: false,
            message: `پیشنهاد باید حداقل ${minAllowed.toFixed(2)} DOTO باشد.`,
          };
        }
        if (amount > state.getWalletBalance()) {
          return { ok: false, message: "موجودی کیف‌پول شما کافی نیست." };
        }

        const bid = {
          id: genId("b"),
          bidderId: state.currentUserId,
          bidderName: findUserName(state.currentUserId),
          amount,
          time: new Date().toISOString(),
        };

        set((s) => ({
          listings: s.listings.map((l) =>
            l.id === listing.id ? { ...l, bids: [...(l.bids ?? []), bid] } : l,
          ),
        }));

        return { ok: true, message: "پیشنهاد شما با موفقیت ثبت شد." };
      },

      settleExpiredAuction: (assetType, assetId) => {
        const state = get();
        const asset =
          assetType === "username"
            ? state.usernames.find((u) => u.id === assetId)
            : state.ideas.find((i) => i.id === assetId);
        const listing = state.listings.find((l) => l.id === asset?.listingId);

        if (
          !asset ||
          !listing ||
          listing.mode !== "auction" ||
          listing.status !== "active"
        )
          return;
        if (!listing.endsAt || new Date(listing.endsAt).getTime() > Date.now())
          return;

        const topBid = listing.bids?.length
          ? listing.bids.reduce((a, b) => (b.amount > a.amount ? b : a))
          : undefined;

        if (!topBid) {
          set((s) => ({
            listings: s.listings.map((l) =>
              l.id === listing.id ? { ...l, status: "expired" } : l,
            ),
          }));
          return;
        }

        const tx: Transaction = {
          id: genId("tx"),
          assetType,
          assetId,
          title: listing.title,
          fromUserId: listing.ownerId,
          toUserId: topBid.bidderId,
          price: topBid.amount,
          mode: "auction",
          time: new Date().toISOString(),
        };

        set((s) => ({
          listings: s.listings.map((l) =>
            l.id === listing.id ? { ...l, status: "sold" } : l,
          ),
          usernames:
            assetType === "username"
              ? s.usernames.map((u) =>
                  u.id === assetId
                    ? {
                        ...u,
                        ownerId: topBid.bidderId,
                        listingId: undefined,
                        isActive: false,
                      }
                    : u,
                )
              : s.usernames,
          ideas:
            assetType === "idea"
              ? s.ideas.map((i) =>
                  i.id === assetId
                    ? { ...i, ownerId: topBid.bidderId, listingId: undefined }
                    : i,
                )
              : s.ideas,
          users: s.users.map((u) => {
            if (u.id === topBid.bidderId)
              return {
                ...u,
                walletBalanceDoto: u.walletBalanceDoto - topBid.amount,
              };
            if (u.id === listing.ownerId)
              return {
                ...u,
                walletBalanceDoto: u.walletBalanceDoto + topBid.amount,
              };
            return u;
          }),
          transactions: [tx, ...s.transactions],
        }));
      },
    }),
    { name: "nft-market-storage" },
  ),
);

// ---- سلکتورهای آماده برای استفاده در کامپوننت‌ها ----
export const useMyUsernames = () =>
  useMarketStore(
    useShallow((s) => s.usernames.filter((u) => u.ownerId === s.currentUserId)),
  );

export const useMyIdeas = () =>
  useMarketStore(
    useShallow((s) => s.ideas.filter((i) => i.ownerId === s.currentUserId)),
  );

export const useActiveListings = (assetType?: AssetType) =>
  useMarketStore(
    useShallow((s) =>
      s.listings.filter(
        (l) =>
          l.status === "active" && (!assetType || l.assetType === assetType),
      ),
    ),
  );

export const useMyTransactions = () =>
  useMarketStore(
    useShallow((s) =>
      s.transactions.filter(
        (t) =>
          t.fromUserId === s.currentUserId || t.toUserId === s.currentUserId,
      ),
    ),
  );
