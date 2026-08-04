import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatAmount } from "@/lib/format-number";
import type { CurrencyBalance, StarPackage } from "./types";
import { StarIcon, ArrowDownToLine, Repeat2 } from "lucide-react";
import { BuyStarsSheet } from "./buy-stars-sheet";
import { WithdrawSheet } from "./withdraw-sheet";
import { ConvertSheet } from "./convert-sheet";

interface BalanceCardProps {
    primary: CurrencyBalance;
    secondary?: CurrencyBalance;
    onPurchase: (pkg: StarPackage) => void;
    onConvert: (starAmount: number) => void;
}

export function BalanceCard({ primary, secondary, onPurchase, onConvert }: BalanceCardProps) {
    return (
        <Card className="border-none bg-card shadow-none">
            <CardContent className="flex flex-col items-center gap-1 py-6 text-center">
                <span className="text-sm text-muted-foreground">موجودی شما</span>
                <div className="flex items-baseline gap-2">
                    <div className="flex items-center">
                        <StarIcon className="size-6 fill-yellow-500 stroke-yellow-500 me-1" />
                        <span className="text-4xl font-bold tracking-tight text-foreground">
                            {formatAmount(primary.amount)}
                        </span>
                    </div>
                    <span className="text-base font-medium text-muted-foreground">{primary.label}</span>
                </div>

                {secondary ? (
                    <div className="mt-1 flex flex-col items-center gap-0.5">
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-sm font-medium text-foreground/80">
                                {formatAmount(secondary.amount)}
                            </span>
                            <span className="text-xs text-muted-foreground">{secondary.label}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground/60">۱۰۰ STAR = ۱ DOTO</span>
                    </div>
                ) : null}

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <BuyStarsSheet onPurchase={onPurchase}>
                        <Button size="sm" className="gap-1.5 rounded-full px-4">
                            <StarIcon className="size-3.5 fill-current" />
                            خرید ستاره
                        </Button>
                    </BuyStarsSheet>

                    <ConvertSheet starBalance={primary.amount} onConvert={onConvert}>
                        <Button size="sm" variant="secondary" className="gap-1.5 rounded-full px-4">
                            <Repeat2 className="size-3.5" />
                            تبدیل به DOTO
                        </Button>
                    </ConvertSheet>

                    <WithdrawSheet>
                        <Button size="sm" variant="outline" className="gap-1.5 rounded-full px-4">
                            <ArrowDownToLine className="size-3.5" />
                            برداشت
                        </Button>
                    </WithdrawSheet>
                </div>
            </CardContent>
        </Card>
    );
}