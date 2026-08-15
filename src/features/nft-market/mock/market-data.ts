import {
  Bid,
  IdeaAsset,
  Listing,
  MockUser,
  Transaction,
  UsernameAsset,
} from "../types/market";

// --------------------------------------------------------------------------
// نرخ تبدیل فرضی. فقط برای نمایش قیمت به ریال استفاده می‌شه، منطق داخلی
// همیشه با DOTO محاسبه می‌شه. (فرض: 1 DOTO = 850,000 ریال)
// --------------------------------------------------------------------------
export const MOCK_EXCHANGE_RATE_IRR_PER_DOTO = 850_000;

// کاربر فعلی (اکانتی که با اون لاگین کردیم)
export const CURRENT_USER: MockUser = {
  id: "u-me",
  displayName: "کاوه محمدی",
  walletBalanceDoto: 4.2,
};

// کاربران دیگه، برای شبیه‌سازی عرضه/رقابت در مزایده‌ها
export const OTHER_USERS: MockUser[] = [
  { id: "u-1", displayName: "سارا احمدی", walletBalanceDoto: 12.5 },
  { id: "u-2", displayName: "بهنام رضایی", walletBalanceDoto: 3.1 },
  { id: "u-3", displayName: "نگار حسینی", walletBalanceDoto: 8.9 },
];

const now = Date.now();
const hoursFromNow = (h: number) =>
  new Date(now + h * 60 * 60 * 1000).toISOString();
const hoursAgo = (h: number) =>
  new Date(now - h * 60 * 60 * 1000).toISOString();

// --------------------------------------------------------------------------
// Usernameها
// دوتاش مال کاربر فعلیه (یکی active، یکی نه) تا صفحه "مدیریت داراییِ من" پر باشه.
// --------------------------------------------------------------------------
export const INITIAL_USERNAMES: UsernameAsset[] = [
  {
    id: "un-1",
    handle: "@kaveh",
    ownerId: "u-me",
    isActive: true,
    acquiredAt: hoursAgo(400),
  },
  {
    id: "un-2",
    handle: "@studio",
    ownerId: "u-me",
    isActive: false,
    acquiredAt: hoursAgo(120),
  },
  {
    id: "un-3",
    handle: "@alex",
    ownerId: "u-1",
    isActive: false,
    acquiredAt: hoursAgo(900),
    listingId: "l-1",
  },
  {
    id: "un-4",
    handle: "@crypto",
    ownerId: "u-2",
    isActive: false,
    acquiredAt: hoursAgo(1200),
    listingId: "l-2",
  },
  {
    id: "un-5",
    handle: "@design",
    ownerId: "u-3",
    isActive: true,
    acquiredAt: hoursAgo(300),
    listingId: "l-3",
  },
  {
    id: "un-6",
    handle: "@apple",
    ownerId: "u-1",
    isActive: false,
    acquiredAt: hoursAgo(60),
    listingId: "l-4",
  },
];

// --------------------------------------------------------------------------
// ایده‌ها
// --------------------------------------------------------------------------
export const INITIAL_IDEAS: IdeaAsset[] = [
  {
    id: "id-1",
    title: "AI Resume Builder",
    description:
      "ابزاری برای ساخت خودکار رزومه با کمک هوش مصنوعی بر اساس تجربه‌ی کاربر.",
    imageUrl: "/banners/username_market.png",
    documents: [{ name: "pitch-deck.pdf", sizeKb: 820 }],
    ownerId: "u-2",
    status: "live",
    createdAt: hoursAgo(200),
    listingId: "l-5",
  },
  {
    id: "id-2",
    title: "Travel GPT",
    description: "دستیار هوشمند برنامه‌ریزی سفر با پیشنهادهای شخصی‌سازی‌شده.",
    imageUrl: "/banners/username_market.png",
    documents: [],
    ownerId: "u-3",
    status: "live",
    createdAt: hoursAgo(500),
    listingId: "l-6",
  },
  {
    id: "id-3",
    title: "Pet Social",
    description: "شبکه‌ی اجتماعی مخصوص صاحبان حیوانات خانگی.",
    imageUrl: "/banners/username_market.png",
    documents: [
      { name: "wireframes.pdf", sizeKb: 340 },
      { name: "market-research.docx", sizeKb: 210 },
    ],
    ownerId: "u-1",
    status: "live",
    createdAt: hoursAgo(50),
    listingId: "l-7",
  },
];

// --------------------------------------------------------------------------
// Listingها (هم fixed هم auction، طبق تصمیم: mode روی خود آیتم مشخص می‌شه)
// --------------------------------------------------------------------------
const bidsForAlex: Bid[] = [
  {
    id: "b-1",
    bidderId: "u-3",
    bidderName: "نگار حسینی",
    amount: 0.42,
    time: hoursAgo(5),
  },
  {
    id: "b-2",
    bidderId: "u-2",
    bidderName: "بهنام رضایی",
    amount: 0.48,
    time: hoursAgo(2),
  },
];

export const INITIAL_LISTINGS: Listing[] = [
  {
    id: "l-1",
    assetType: "username",
    assetId: "un-3",
    title: "@alex",
    ownerId: "u-1",
    mode: "auction",
    currency: "DOTO",
    price: 0.35, // starting price
    status: "active",
    createdAt: hoursAgo(30),
    endsAt: hoursFromNow(6),
    minIncrement: 0.03,
    bids: bidsForAlex,
  },
  {
    id: "l-2",
    assetType: "username",
    assetId: "un-4",
    title: "@crypto",
    ownerId: "u-2",
    mode: "fixed",
    currency: "DOTO",
    price: 1.25,
    status: "active",
    createdAt: hoursAgo(10),
  },
  {
    id: "l-3",
    assetType: "username",
    assetId: "un-5",
    title: "@design",
    ownerId: "u-3",
    mode: "fixed",
    currency: "IRR",
    price: 265_000,
    status: "active",
    createdAt: hoursAgo(15),
  },
  {
    id: "l-4",
    assetType: "username",
    assetId: "un-6",
    title: "@apple",
    ownerId: "u-1",
    mode: "auction",
    currency: "DOTO",
    price: 1.8,
    status: "active",
    createdAt: hoursAgo(1),
    endsAt: hoursFromNow(48),
    minIncrement: 0.1,
    bids: [],
  },
  {
    id: "l-5",
    assetType: "idea",
    assetId: "id-1",
    title: "AI Resume Builder",
    ownerId: "u-2",
    mode: "fixed",
    currency: "DOTO",
    price: 0.63,
    status: "active",
    createdAt: hoursAgo(200),
  },
  {
    id: "l-6",
    assetType: "idea",
    assetId: "id-2",
    title: "Travel GPT",
    ownerId: "u-3",
    mode: "auction",
    currency: "DOTO",
    price: 0.5,
    status: "active",
    createdAt: hoursAgo(20),
    endsAt: hoursFromNow(3),
    minIncrement: 0.05,
    bids: [
      {
        id: "b-3",
        bidderId: "u-1",
        bidderName: "سارا احمدی",
        amount: 0.6,
        time: hoursAgo(1),
      },
    ],
  },
  {
    id: "l-7",
    assetType: "idea",
    assetId: "id-3",
    title: "Pet Social",
    ownerId: "u-1",
    mode: "fixed",
    currency: "DOTO",
    price: 0.18,
    status: "active",
    createdAt: hoursAgo(50),
  },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: "tx-1",
    assetType: "username",
    assetId: "un-hist-1",
    title: "@shadow",
    fromUserId: "u-2",
    toUserId: "u-1",
    price: 0.42,
    mode: "fixed",
    time: hoursAgo(0.03),
  },
  {
    id: "tx-2",
    assetType: "idea",
    assetId: "id-hist-1",
    title: "AI Resume Builder v0",
    fromUserId: "u-3",
    toUserId: "u-2",
    price: 0.63,
    mode: "auction",
    time: hoursAgo(0.16),
  },
];

export const ALL_MOCK_USERS: MockUser[] = [CURRENT_USER, ...OTHER_USERS];

export function findUserName(userId: string): string {
  return (
    ALL_MOCK_USERS.find((u) => u.id === userId)?.displayName ?? "کاربر ناشناس"
  );
}

export const USERNAMES = [
  { name: "@alex", price: "0.42 DOTO" },
  { name: "@crypto", price: "1.02 DOTO" },
  { name: "@design", price: "0.31 DOTO" },
  { name: "@apple", price: "2.10 DOTO" },
];

export const IDEAS = [
  { title: "AI Resume Builder", price: "0.35 DOTO" },
  { title: "Travel GPT", price: "0.65 DOTO" },
  { title: "Pet Social", price: "0.18 DOTO" },
];
