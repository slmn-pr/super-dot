"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Listing } from "../types/market";
import { useMarketStore } from "../store/use-market-store";
import { formatPrice } from "../utils/currency";

export function TradeDialog({
  listing,
  trigger,
}: {
  listing: Listing;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [feedback, setFeedback] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  const buyNow = useMarketStore((s) => s.buyNow);
  const placeBid = useMarketStore((s) => s.placeBid);

  const topBid = listing.bids?.length
    ? Math.max(...listing.bids.map((b) => b.amount))
    : listing.price;
  const minAllowed = +(topBid + (listing.minIncrement ?? 0.01)).toFixed(2);

  const handleBuy = () => {
    const result = buyNow(listing.assetType, listing.assetId);
    setFeedback(result);
    if (result.ok) setTimeout(() => setOpen(false), 1200);
  };

  const handleBid = () => {
    const amount = parseFloat(bidAmount);
    if (Number.isNaN(amount)) {
      setFeedback({ ok: false, message: "مبلغ پیشنهادی معتبر نیست." });
      return;
    }
    const result = placeBid(listing.assetType, listing.assetId, amount);
    setFeedback(result);
    if (result.ok) setTimeout(() => setOpen(false), 1200);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) {
          setFeedback(null);
          setBidAmount("");
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="text-right" dir="rtl">
        <DialogHeader className="text-right">
          <DialogTitle>
            {listing.mode === "fixed" ? "تایید خرید" : "ثبت پیشنهاد قیمت"}
          </DialogTitle>
          <DialogDescription>{listing.title}</DialogDescription>
        </DialogHeader>

        {listing.mode === "fixed" ? (
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-xl bg-muted p-3">
              <span className="text-muted-foreground">قیمت نهایی</span>
              <span className="font-semibold">
                {formatPrice(listing.price, listing.currency)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              با تایید این خرید، مبلغ از کیف‌پول شما کسر و مالکیت این آیتم فوراً
              به شما منتقل می‌شود.
            </p>
          </div>
        ) : (
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-xl bg-muted p-3">
              <span className="text-muted-foreground">
                بالاترین پیشنهاد فعلی
              </span>
              <span className="font-semibold">
                {formatPrice(topBid, "DOTO")}
              </span>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="bid-amount">پیشنهاد شما (DOTO)</Label>
              <Input
                id="bid-amount"
                type="number"
                step="0.01"
                min={minAllowed}
                placeholder={`حداقل ${minAllowed.toFixed(2)}`}
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                حداقل مبلغ قابل قبول: {minAllowed.toFixed(2)} DOTO
              </p>
            </div>
          </div>
        )}

        {feedback && (
          <p
            className={`text-sm ${feedback.ok ? "text-emerald-600" : "text-red-500"}`}
          >
            {feedback.message}
          </p>
        )}

        <DialogFooter>
          <Button
            className="w-full"
            onClick={listing.mode === "fixed" ? handleBuy : handleBid}
            disabled={feedback?.ok}
          >
            {listing.mode === "fixed" ? "تایید و خرید" : "ثبت پیشنهاد"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
