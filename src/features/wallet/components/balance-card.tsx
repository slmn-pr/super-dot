import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowLeftRight,
  ArrowUpToLine,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { formatAmount } from "@/lib/format-number";

import type { CurrencyBalance, DotoPackage, StarPackage } from "./types";

import { BuyDotoSheet, BuyStarsSheet } from "./buy-doto-sheet";
import { WithdrawSheet } from "./withdraw-sheet";
import { ConvertSheet } from "./convert-sheet";

interface BalanceCardProps {
  primary: CurrencyBalance;
  secondary?: CurrencyBalance;
  onPurchase: (pkg: DotoPackage) => void;
  onConvert: (starAmount: number) => void;
}

export function BalanceCard({
  primary,
  secondary,
  onPurchase,
  onConvert,
}: BalanceCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border  bg-white w-full ">
      <CardContent className="">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-zinc-400">
              موجودی قابل استفاده
            </p>

            {/* <div className="mt-1 flex items-center gap-1.5">
              <span className="text-sm font-semibold text-zinc-700">
                {primary.label}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div> */}
          </div>
        </div>

        {/* Main Balance */}
        <div className="mt-7">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-bold">{primary.label}</span>

            <span className="text-[42px] font-bold leading-none tracking-[-1.5px] text-zinc-950">
              {formatAmount(primary.amount)}
            </span>

            <Image
              src="/my_dot_logo.svg"
              width={30}
              height={30}
              alt="DOTO"
              className="shrink-0"
            />
          </div>

          {/* Secondary balance */}
          {secondary ? (
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-sm text-zinc-400">ارزش تقریبی</span>

              <span className="text-sm font-semibold text-zinc-700">
                {formatAmount(secondary.amount)}
              </span>

              <span className="text-xs text-zinc-400">{secondary.label}</span>
            </div>
          ) : null}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-zinc-100" />

        {/* Actions */}
        <div className="grid grid-cols-3 gap-2">
          <ConvertSheet starBalance={primary.amount} onConvert={onConvert}>
            <Button
              variant="secondary"
              className="h-11 w-full rounded-2xl bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
            >
              <ArrowLeftRight className="ml-1.5 size-4" />
              تبدیل
            </Button>
          </ConvertSheet>

          <WithdrawSheet>
            <Button
              variant="outline"
              className="h-11 w-full rounded-2xl border-zinc-200 bg-white"
            >
              <ArrowUpToLine className="ml-1.5 size-4" />
              برداشت
            </Button>
          </WithdrawSheet>

          <BuyDotoSheet onPurchase={onPurchase}>
            <Button className="h-11 w-full rounded-2xl bg-zinc-950 text-white shadow-sm hover:bg-zinc-800">
              <Sparkles className="ml-1.5 size-4" />
              خرید
            </Button>
          </BuyDotoSheet>
        </div>

        {/* Small hint */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-zinc-400">
          <ArrowDownToLine className="size-3" />
          تراکنش‌های شما امن و قابل پیگیری هستند
        </div>
      </CardContent>
    </Card>
  );
}
