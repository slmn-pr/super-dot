import {
    ArrowDownToLine,
    ArrowLeftRight,
    ArrowUpFromLine,
    Award,
    Gift,
    Heart,
    Rocket,
    type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatAmount, formatTransactionDate } from "@/lib/format-number";
import type { Transaction, TransactionCategory } from "./types";

const CATEGORY_ICONS: Record<TransactionCategory, LucideIcon> = {
    all: ArrowDownToLine,
    gift: Gift,
    deposit: ArrowDownToLine,
    support: Heart,
    reward: Award,
    withdraw: ArrowUpFromLine,
    boost: Rocket,
    convert: ArrowLeftRight,
};

const STATUS_LABEL: Record<Transaction["status"], string> = {
    success: "موفق",
    pending: "در حال بررسی",
    failed: "ناموفق",
};

interface TransactionItemProps {
    transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
    const Icon = CATEGORY_ICONS[transaction.category];
    const isIncoming = transaction.direction === "in";

    return (
        <div className="flex items-center gap-3 py-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                {Icon && <Icon className="size-4.5" strokeWidth={1.75} />}
            </span>

            <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm font-medium text-foreground">
                    {transaction.title}
                </span>
                <span className="text-xs text-muted-foreground">
                    {formatTransactionDate(transaction.date)}
                </span>
            </div>

            <div className="flex flex-col items-end gap-0.5">
                <span
                    className={cn(
                        "text-sm font-semibold",
                        isIncoming ? "text-emerald-600" : "text-foreground"
                    )}
                >
                    {isIncoming ? "+" : "-"}
                    {formatAmount(transaction.amount)}{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                        {transaction.currency}
                    </span>
                </span>
                {transaction.status !== "success" ? (
                    <Badge
                        variant={transaction.status === "failed" ? "destructive" : "secondary"}
                        className="px-1.5 py-0 text-[10px] leading-4"
                    >
                        {STATUS_LABEL[transaction.status]}
                    </Badge>
                ) : null}
            </div>
        </div>
    );
}