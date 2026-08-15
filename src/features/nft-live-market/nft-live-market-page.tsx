"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, UserIcon } from "lucide-react";
import { ListingCard } from "../nft-market/components/listing-card";
import { useActiveListings } from "../nft-market/store/use-market-store";
import { AssetType } from "../nft-market/types/market";

const TABS: { key: AssetType | "all"; label: string }[] = [
  { key: "all", label: "همه" },
  { key: "username", label: "Username" },
  { key: "idea", label: "Idea" },
];

export default function NftLiveMarketPage() {
  const [tab, setTab] = useState<AssetType | "all">("all");
  const listings = useActiveListings(tab === "all" ? undefined : tab);

  const { auctions, fixed } = useMemo(() => {
    return {
      auctions: listings.filter((l) => l.mode === "auction"),
      fixed: listings.filter((l) => l.mode === "fixed"),
    };
  }, [listings]);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold">بازار زنده</h1>
        </div>

        <Link href="/profile/usernames">
          <Button variant="outline" size="sm">
            <UserIcon className="ml-2 h-4 w-4" />
            دارایی‌های من
          </Button>
        </Link>
      </div>

      <p className="mb-5 text-sm text-muted-foreground">
        شبیه‌سازی زنده‌ی عرضه و تقاضا برای Username و Idea — بعضی آیتم‌ها با
        قیمت ثابت و بعضی به‌صورت مزایده در حال فروش هستن.
      </p>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {TABS.map((t) => (
          <Button
            key={t.key}
            variant={tab === t.key ? "default" : "secondary"}
            size="sm"
            className="shrink-0 rounded-full"
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </Button>
        ))}
      </div>

      <section className="mb-8">
        <h3 className="mb-3 font-semibold">در حال مزایده</h3>
        {auctions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            در حال حاضر مزایده‌ی فعالی وجود ندارد.
          </p>
        ) : (
          <div className="flex gap-3 overflow-x-auto snap-x pb-2 pt-1 px-1 no-scrollbar">
            {auctions.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h3 className="mb-3 font-semibold">قیمت ثابت</h3>
        {fixed.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            آیتمی با قیمت ثابت موجود نیست.
          </p>
        ) : (
          <div className="flex gap-3 overflow-x-auto snap-x pb-2 pt-1 px-1 no-scrollbar">
            {fixed.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
