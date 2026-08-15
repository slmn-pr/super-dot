"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GavelIcon, TagIcon } from "lucide-react";
import { Listing } from "../types/market";
import { useMarketStore } from "../store/use-market-store";
import { formatPrice } from "../utils/currency";
import { CountdownTimer } from "./count-down-timer";
import { TradeDialog } from "./trade-dialog";

export function ListingCard({ listing }: { listing: Listing }) {
  const currentUserId = useMarketStore((s) => s.currentUserId);
  const settleExpiredAuction = useMarketStore((s) => s.settleExpiredAuction);

  const isMine = listing.ownerId === currentUserId;
  const topBid = listing.bids?.length
    ? Math.max(...listing.bids.map((b) => b.amount))
    : undefined;
  const isExpired =
    listing.mode === "auction" &&
    listing.endsAt &&
    new Date(listing.endsAt).getTime() <= Date.now();

  return (
    <Card className="w-56 shrink-0 snap-start rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <Badge
          variant={listing.mode === "auction" ? "default" : "secondary"}
          className="gap-1"
        >
          {listing.mode === "auction" ? (
            <GavelIcon className="h-3 w-3" />
          ) : (
            <TagIcon className="h-3 w-3" />
          )}
          {listing.mode === "auction" ? "مزایده" : "قیمت ثابت"}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {listing.assetType === "username" ? "Username" : "Idea"}
        </span>
      </div>

      <h4 className="mt-3 truncate font-bold">{listing.title}</h4>

      {listing.mode === "auction" ? (
        <>
          <p className="mt-2 text-xs text-muted-foreground">
            {topBid !== undefined ? "بالاترین پیشنهاد" : "قیمت شروع"}
          </p>
          <div className="mt-1 font-semibold">
            {formatPrice(topBid ?? listing.price, "DOTO")}
          </div>
          {listing.endsAt && (
            <CountdownTimer
              endsAt={listing.endsAt}
              onExpire={() =>
                settleExpiredAuction(listing.assetType, listing.assetId)
              }
              className="mt-2 block text-xs"
            />
          )}
        </>
      ) : (
        <>
          <p className="mt-2 text-xs text-muted-foreground">قیمت</p>
          <div className="mt-1 font-semibold">
            {formatPrice(listing.price, listing.currency)}
          </div>
        </>
      )}

      {isMine ? (
        <Button size="sm" variant="outline" className="mt-4 w-full" disabled>
          آیتم شما
        </Button>
      ) : isExpired ? (
        <Button size="sm" variant="outline" className="mt-4 w-full" disabled>
          مزایده تمام شد
        </Button>
      ) : (
        <TradeDialog
          listing={listing}
          trigger={
            <Button size="sm" className="mt-4 w-full">
              {listing.mode === "auction" ? "ثبت پیشنهاد" : "خرید"}
            </Button>
          }
        />
      )}
    </Card>
  );
}
