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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AssetType, Currency, SaleMode } from "../types/market";
import { useMarketStore } from "../store/use-market-store";

const DURATION_OPTIONS = [
  { value: "6", label: "۶ ساعت" },
  { value: "24", label: "۲۴ ساعت" },
  { value: "72", label: "۳ روز" },
];

export function ListForSaleDialog({
  assetType,
  assetId,
  assetTitle,
  trigger,
}: {
  assetType: AssetType;
  assetId: string;
  assetTitle: string;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<SaleMode>("fixed");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState<Currency>("DOTO");
  const [duration, setDuration] = useState("24");
  const [error, setError] = useState<string | null>(null);

  const listForSale = useMarketStore((s) => s.listForSale);

  const handleSubmit = () => {
    const parsedPrice = parseFloat(price);
    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      setError("قیمت معتبر وارد کنید.");
      return;
    }
    listForSale(assetType, assetId, {
      mode,
      price: parsedPrice,
      currency,
      durationHours: mode === "auction" ? parseInt(duration, 10) : undefined,
    });
    setOpen(false);
    setPrice("");
    setError(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="text-right" dir="rtl">
        <DialogHeader className="text-right">
          <DialogTitle>گذاشتن برای فروش</DialogTitle>
          <DialogDescription>{assetTitle}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>روش فروش</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={mode === "fixed" ? "default" : "outline"}
                onClick={() => setMode("fixed")}
              >
                قیمت ثابت
              </Button>
              <Button
                type="button"
                variant={mode === "auction" ? "default" : "outline"}
                onClick={() => setMode("auction")}
              >
                مزایده
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="price">
                {mode === "auction" ? "قیمت شروع" : "قیمت فروش"}
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="مثلاً 0.5"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>واحد</Label>
              <Select
                value={currency}
                onValueChange={(v) => setCurrency(v as Currency)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DOTO">DOTO</SelectItem>
                  <SelectItem value="IRR">ریال</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {mode === "auction" && (
            <div className="space-y-1.5">
              <Label>مدت زمان مزایده</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DURATION_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                حداقل افزایش هر پیشنهاد به‌طور خودکار ۵٪ قیمت شروع در نظر گرفته
                می‌شود.
              </p>
            </div>
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        <DialogFooter>
          <Button className="w-full" onClick={handleSubmit}>
            ثبت آگهی فروش
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
