import { Inbox } from "lucide-react";

export function TransactionsEmptyState() {
    return (
        <div className="flex flex-col items-center gap-3 py-14 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Inbox className="size-6" strokeWidth={1.5} />
            </span>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">
                    هنوز تراکنشی برای شما ثبت نشده است.
                </p>
                <p className="text-xs text-muted-foreground">
                    اولین تراکنش شما اینجا نمایش داده خواهد شد.
                </p>
            </div>
        </div>
    );
}