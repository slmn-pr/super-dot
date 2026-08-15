"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2Icon, ChevronRight } from "lucide-react";
import { formatPrice } from "../nft-market/utils/currency";
import { CountdownTimer } from "../nft-market/components/count-down-timer";
import { ListForSaleDialog } from "../nft-market/components/list-for-sale-dialog";
import {
  useMarketStore,
  useMyUsernames,
} from "../nft-market/store/use-market-store";

export default function MyUsernamesPage() {
  const usernames = useMyUsernames();
  const getListing = useMarketStore((s) => s.getListing);
  const setActiveUsername = useMarketStore((s) => s.setActiveUsername);
  const cancelListing = useMarketStore((s) => s.cancelListing);

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">مدیریت Usernameهای من</h1>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Usernameهای تحت مالکیت خودت رو اینجا می‌بینی. می‌تونی یکی رو به عنوان
        یوزرنیم فعال اکانتت انتخاب کنی یا برای فروش بذاری.
      </p>

      {usernames.length === 0 ? (
        <Card className="rounded-2xl p-6 text-center text-sm text-muted-foreground">
          هنوز هیچ Usernameای در مالکیت شما نیست.
        </Card>
      ) : (
        <div className="space-y-3">
          {usernames.map((u) => {
            const listing = getListing(u.listingId);
            return (
              <Card key={u.id} className="rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{u.handle}</span>
                    {u.isActive && (
                      <Badge className="gap-1" variant="secondary">
                        <CheckCircle2Icon className="h-3 w-3" />
                        فعال روی اکانت
                      </Badge>
                    )}
                  </div>
                  {listing && listing.status === "active" && (
                    <Badge
                      variant={
                        listing.mode === "auction" ? "default" : "outline"
                      }
                    >
                      {listing.mode === "auction"
                        ? "در حال مزایده"
                        : "برای فروش"}
                    </Badge>
                  )}
                </div>

                {listing && listing.status === "active" && (
                  <div className="mt-3 rounded-xl bg-muted p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        {listing.mode === "auction"
                          ? "بالاترین پیشنهاد"
                          : "قیمت فروش"}
                      </span>
                      <span className="font-semibold">
                        {formatPrice(
                          listing.mode === "auction" && listing.bids?.length
                            ? Math.max(...listing.bids.map((b) => b.amount))
                            : listing.price,
                          listing.mode === "auction"
                            ? "DOTO"
                            : listing.currency,
                        )}
                      </span>
                    </div>
                    {listing.mode === "auction" && listing.endsAt && (
                      <CountdownTimer
                        endsAt={listing.endsAt}
                        className="mt-1 block text-xs"
                      />
                    )}
                    {listing.bids && listing.bids.length > 0 && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {listing.bids.length} پیشنهاد ثبت شده
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-4 flex gap-2">
                  {!u.isActive && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setActiveUsername(u.id)}
                    >
                      استفاده در اکانت
                    </Button>
                  )}
                  {listing && listing.status === "active" ? (
                    <Button
                      size="sm"
                      variant="destructive"
                      className="flex-1"
                      onClick={() => cancelListing("username", u.id)}
                    >
                      لغو فروش
                    </Button>
                  ) : (
                    <ListForSaleDialog
                      assetType="username"
                      assetId={u.id}
                      assetTitle={u.handle}
                      trigger={
                        <Button size="sm" className="flex-1">
                          گذاشتن برای فروش
                        </Button>
                      }
                    />
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
