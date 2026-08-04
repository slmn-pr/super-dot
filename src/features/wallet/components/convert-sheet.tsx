"use client";

import { useMemo, useState } from "react";
import { ArrowDown, CheckCircle2, Repeat2 } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { formatAmount } from "@/lib/format-number";
import { STAR_TO_DOTO_RATE } from "../wallet-page";

interface ConvertSheetProps {
    children: React.ReactNode;
    starBalance: number;
    onConvert: (starAmount: number) => void;
}

type Step = "select" | "confirm" | "success";

const QUICK_PERCENTAGES = [25, 50, 100];

export function ConvertSheet({ children, starBalance, onConvert }: ConvertSheetProps) {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<Step>("select");
    const [rawAmount, setRawAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const amount = Number(rawAmount) || 0;
    const dotoResult = amount / STAR_TO_DOTO_RATE;

    const error = useMemo(() => {
        if (rawAmount === "") return null;
        if (amount <= 0) return "مقدار باید بزرگ‌تر از صفر باشد";
        if (amount > starBalance) return "موجودی STAR شما کافی نیست";
        if (amount < STAR_TO_DOTO_RATE) return `حداقل مقدار تبدیل ${STAR_TO_DOTO_RATE} ستاره است`;
        return null;
    }, [amount, rawAmount, starBalance]);

    const canContinue = amount > 0 && !error;

    function handleOpen(o: boolean) {
        setOpen(o);
        if (!o) {
            setTimeout(() => {
                setStep("select");
                setRawAmount("");
                setLoading(false);
            }, 300);
        }
    }

    function setPercentage(pct: number) {
        const value = Math.floor((starBalance * pct) / 100);
        setRawAmount(String(value));
    }

    async function handleConfirm() {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1000));
        setLoading(false);
        onConvert(amount);
        setStep("success");
    }

    return (
        <BottomSheet open={open} onOpenChange={handleOpen}>
            <BottomSheetTrigger render={<button />}>{children}</BottomSheetTrigger>

            <BottomSheetContent>
                {step === "select" && (
                    <>
                        <BottomSheetHeader>
                            <BottomSheetTitle>تبدیل STAR به DOTO</BottomSheetTitle>
                            <BottomSheetDescription>
                                مقدار ستاره‌ای که می‌خواهید تبدیل کنید را وارد کنید
                            </BottomSheetDescription>
                        </BottomSheetHeader>

                        <div className="flex flex-col gap-4 px-5 py-2">
                            <div className="flex flex-col gap-1.5">
                                <Input
                                    inputMode="numeric"
                                    placeholder="مقدار STAR"
                                    value={rawAmount}
                                    onChange={(e) => setRawAmount(e.target.value.replace(/[^\d]/g, ""))}
                                    className="text-center text-lg font-semibold"
                                />
                                <span className="text-center text-xs text-muted-foreground">
                                    موجودی قابل تبدیل: {formatAmount(starBalance)} STAR
                                </span>
                            </div>

                            <div className="flex justify-center gap-2">
                                {QUICK_PERCENTAGES.map((pct) => (
                                    <button
                                        key={pct}
                                        type="button"
                                        onClick={() => setPercentage(pct)}
                                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary/70"
                                    >
                                        {pct === 100 ? "همه" : `${pct}%`}
                                    </button>
                                ))}
                            </div>

                            {error ? (
                                <p className="text-center text-xs text-destructive">{error}</p>
                            ) : amount > 0 ? (
                                <div className="flex flex-col items-center gap-1 rounded-2xl bg-muted/50 p-4">
                                    <span className="text-xs text-muted-foreground">دریافتی شما</span>
                                    <span className="text-2xl font-bold text-foreground">
                                        {formatAmount(dotoResult)} DOTO
                                    </span>
                                </div>
                            ) : null}
                        </div>

                        <BottomSheetFooter>
                            <Button className="w-full" disabled={!canContinue} onClick={() => setStep("confirm")}>
                                ادامه
                            </Button>
                        </BottomSheetFooter>
                    </>
                )}

                {step === "confirm" && (
                    <>
                        <BottomSheetHeader>
                            <BottomSheetTitle>تأیید تبدیل</BottomSheetTitle>
                            <BottomSheetDescription>جزئیات تبدیل را بررسی کنید</BottomSheetDescription>
                        </BottomSheetHeader>

                        <div className="px-5 py-4">
                            <div className="flex flex-col items-center gap-3 rounded-2xl bg-muted/50 p-4">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-foreground">{formatAmount(amount)} STAR</span>
                                </div>
                                <ArrowDown className="size-4 text-muted-foreground" />
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-foreground">
                                        {formatAmount(dotoResult)} DOTO
                                    </span>
                                </div>
                                <span className="text-[10px] text-muted-foreground/60">
                                    نرخ تبدیل: {STAR_TO_DOTO_RATE} STAR = ۱ DOTO
                                </span>
                            </div>
                        </div>

                        <BottomSheetFooter>
                            <Button className="w-full" onClick={handleConfirm} disabled={loading}>
                                {loading ? "در حال پردازش..." : "تأیید تبدیل"}
                            </Button>
                            <Button variant="ghost" className="w-full" onClick={() => setStep("select")}>
                                بازگشت
                            </Button>
                        </BottomSheetFooter>
                    </>
                )}

                {step === "success" && (
                    <>
                        <BottomSheetHeader>
                            <BottomSheetTitle className="sr-only">تبدیل موفق</BottomSheetTitle>
                        </BottomSheetHeader>

                        <div className="flex flex-col items-center gap-4 px-5 py-10 text-center">
                            <span className="flex size-20 items-center justify-center rounded-full bg-brand-muted animate-in zoom-in-50 duration-300">
                                <Repeat2 className="size-10 text-brand" />
                            </span>
                            <div>
                                <p className="text-xl font-bold text-foreground">تبدیل موفق!</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {formatAmount(dotoResult)} DOTO به کیف پول شما اضافه شد
                                </p>
                            </div>
                        </div>

                        <BottomSheetFooter>
                            <BottomSheetClose render={<Button className="w-full" />}>بستن</BottomSheetClose>
                        </BottomSheetFooter>
                    </>
                )}
            </BottomSheetContent>
        </BottomSheet>
    );
}