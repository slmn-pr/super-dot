import { BarChart3, WalletCardsIcon } from "lucide-react";
import { formatAmount } from "../utils";
import { INITIAL_DOTO_BALANCE } from "../consts";

export default function BalanceCard({
  activeCurrency,
}: {
  activeCurrency: string;
}) {
  return (
    <section className="mb-4 rounded-2xl border border-border bg-card p-5">
      <div className="mb-3 flex items-center gap-2 text-muted-foreground">
        <WalletCardsIcon className="h-4 w-4" />

        <span className="text-xs">موجودی فعلی</span>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-3xl font-bold tracking-tight">
            {formatAmount(activeCurrency === "DOTO" ? INITIAL_DOTO_BALANCE : 0)}
          </div>

          <div className="mt-1 text-sm text-muted-foreground">
            {activeCurrency}
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-xs">
          <BarChart3 className="h-4 w-4" />
          فعالیت مالی
        </div>
      </div>
    </section>
  );
}
