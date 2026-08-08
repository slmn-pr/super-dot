"use client";

import { useState } from "react";
import { CheckCircle2, Coins, CreditCard, Sparkles } from "lucide-react";

import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
  BottomSheetClose,
} from "@/components/ui/bottom-sheet";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatAmount } from "@/lib/format-number";

import { DOTO_PACKAGES } from "./mock-data";
import type { DotoPackage } from "./types";

interface BuyDotoSheetProps {
  children: React.ReactNode;
  onPurchase: (pkg: DotoPackage) => void;
}

type Step = "select" | "confirm" | "success";

export function BuyDotoSheet({ children, onPurchase }: BuyDotoSheetProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("select");
  const [selected, setSelected] = useState<DotoPackage | null>(null);
  const [loading, setLoading] = useState(false);

  function handleOpen(value: boolean) {
    setOpen(value);

    if (!value) {
      setTimeout(() => {
        setStep("select");
        setSelected(null);
        setLoading(false);
      }, 300);
    }
  }

  function handleContinue() {
    if (!selected) return;

    setStep("confirm");
  }

  async function handlePay() {
    if (!selected) return;

    setLoading(true);

    // شبیه‌سازی پرداخت
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);

    onPurchase(selected);
    setStep("success");
  }

  const totalDoto = selected?.doto + (selected?.bonus ?? 0) || 0;

  return (
    <BottomSheet open={open} onOpenChange={handleOpen}>
      <BottomSheetTrigger render={<button />}>{children}</BottomSheetTrigger>

      <BottomSheetContent className="rounded-t-[28px]">
        {/* SELECT */}
        {step === "select" && (
          <>
            <BottomSheetHeader className="px-5 pt-2">
              <BottomSheetTitle className="text-xl">خرید DOTO</BottomSheetTitle>

              <BottomSheetDescription>
                مقدار DOTO موردنظر خود را انتخاب کنید
              </BottomSheetDescription>
            </BottomSheetHeader>

            <div className="flex max-h-[55vh] flex-col gap-2.5 overflow-y-auto px-5 py-3">
              {DOTO_PACKAGES.map((pkg) => {
                const isSelected = selected?.id === pkg.id;

                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelected(pkg)}
                    className={cn(
                      "relative flex items-center justify-between rounded-2xl border p-4 text-right transition-all",
                      isSelected
                        ? "border-primary bg-muted text-foreground shadow-md"
                        : "border-zinc-200 bg-white hover:border-zinc-300",
                    )}
                  >
                    {/* DOTO amount */}
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex size-11 items-center justify-center rounded-2xl bg-muted",
                        )}
                      >
                        <Coins className={cn("size-5 text-foreground")} />
                      </span>

                      <div>
                        <p className={cn("font-bold text-foreground")}>
                          {formatAmount(pkg.doto)} DOTO
                        </p>

                        {pkg.bonus ? (
                          <p
                            className={cn(
                              "mt-0.5 text-xs",
                              isSelected
                                ? "text-emerald-300"
                                : "text-emerald-600",
                            )}
                          >
                            + {formatAmount(pkg.bonus)} DOTO هدیه
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-end gap-1">
                      <span className={cn("font-bold text-foreground")}>
                        {formatAmount(pkg.price)}
                      </span>

                      <span className={cn("text-sm text-foreground")}>
                        تومان
                      </span>

                      {pkg.popular ? (
                        <Badge className={cn("mt-0.5 border-0 text-[10px] bg-primary text-accent-foreground")}>
                          پرطرفدار
                        </Badge>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>

            <BottomSheetFooter className="px-5 pb-2">
              <Button
                className="h-12 w-full rounded-2xl bg-zinc-950 text-base font-bold hover:bg-zinc-800"
                disabled={!selected}
                onClick={handleContinue}
              >
                ادامه
              </Button>
            </BottomSheetFooter>
          </>
        )}

        {/* CONFIRM */}
        {step === "confirm" && selected && (
          <>
            <BottomSheetHeader className="px-5 pt-2">
              <BottomSheetTitle className="text-xl">
                تأیید خرید
              </BottomSheetTitle>

              <BottomSheetDescription>
                اطلاعات خرید را بررسی کنید
              </BottomSheetDescription>
            </BottomSheetHeader>

            <div className="px-5 py-5">
              {/* Summary */}
              <div className="rounded-[24px] bg-zinc-50 p-5">
                <div className="flex flex-col items-center text-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Coins className="size-7 text-zinc-800" />
                  </div>

                  <p className="mt-3 text-2xl font-bold text-zinc-950">
                    {formatAmount(totalDoto)}
                  </p>

                  <span className="mt-1 text-sm text-zinc-400">DOTO</span>
                </div>

                <div className="my-5 h-px bg-zinc-200" />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">قیمت بسته</span>

                  <span className="font-semibold text-zinc-900">
                    {formatAmount(selected.price)} تومان
                  </span>
                </div>

                {selected.bonus ? (
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-zinc-500">هدیه</span>

                    <span className="text-sm font-semibold text-emerald-600">
                      + {formatAmount(selected.bonus)} DOTO
                    </span>
                  </div>
                ) : null}

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-700">
                    مبلغ پرداخت
                  </span>

                  <span className="text-lg font-bold text-zinc-950">
                    {formatAmount(selected.price)} تومان
                  </span>
                </div>
              </div>

              {/* Payment method */}
              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-100">
                  <CreditCard className="size-5 text-zinc-700" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-zinc-900">
                    پرداخت آنلاین
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-400">
                    پرداخت امن از درگاه
                  </p>
                </div>
              </div>
            </div>

            <BottomSheetFooter className="px-5 pb-2">
              <Button
                className="h-12 w-full rounded-2xl bg-zinc-950 text-base font-bold hover:bg-zinc-800"
                onClick={handlePay}
                disabled={loading}
              >
                {loading ? "در حال پردازش..." : "پرداخت و خرید DOTO"}
              </Button>

              <Button
                variant="ghost"
                className="h-11 w-full rounded-2xl"
                onClick={() => setStep("select")}
                disabled={loading}
              >
                بازگشت
              </Button>
            </BottomSheetFooter>
          </>
        )}

        {/* SUCCESS */}
        {step === "success" && selected && (
          <>
            <BottomSheetHeader>
              <BottomSheetTitle className="sr-only">خرید موفق</BottomSheetTitle>
            </BottomSheetHeader>

            <div className="flex flex-col items-center px-5 py-10 text-center">
              <div className="animate-in zoom-in-50 flex size-20 items-center justify-center rounded-full bg-emerald-50 duration-300">
                <CheckCircle2 className="size-10 text-emerald-500" />
              </div>

              <div className="mt-5">
                <p className="text-xl font-bold text-zinc-950">خرید موفق بود</p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  مقدار{" "}
                  <span className="font-bold text-zinc-900">
                    {formatAmount(totalDoto)} DOTO
                  </span>{" "}
                  با موفقیت به کیف پول شما اضافه شد.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-full bg-zinc-50 px-4 py-2">
                <Sparkles className="size-4 text-zinc-700" />

                <span className="text-sm font-semibold text-zinc-800">
                  موجودی شما به‌روزرسانی شد
                </span>
              </div>
            </div>

            <BottomSheetFooter className="px-5 pb-2">
              <BottomSheetClose
                render={
                  <Button className="h-12 w-full rounded-2xl bg-zinc-950 text-base font-bold hover:bg-zinc-800" />
                }
              >
                بستن
              </BottomSheetClose>
            </BottomSheetFooter>
          </>
        )}
      </BottomSheetContent>
    </BottomSheet>
  );
}
