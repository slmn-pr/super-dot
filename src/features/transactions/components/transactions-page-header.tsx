import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface TransactionsPageHeaderProps {
  activeCurrency?: string;
  onCurrencyClick: (currency: string) => void;
}

export default function TransactionsPageHeader({
  activeCurrency,
  onCurrencyClick,
}: TransactionsPageHeaderProps) {
  return (
    <header className="mb-6">
      <div className="mb-4 flex items-center gap-2">
        <Link
          href="/wallet"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card transition hover:bg-muted"
        >
          <ChevronRight className="h-4 w-4" />
        </Link>

        <div>
          <h1 className="text-xl font-bold text-foreground">تحلیل تراکنش‌ها</h1>

          <p className="mt-1 text-xs text-muted-foreground">
            وضعیت و فعالیت مالی کیف پول شما
          </p>
        </div>
      </div>

      {/* Currency */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onCurrencyClick("DOTO")}
          className={[
            "rounded-xl px-4 py-2 text-sm font-medium transition",
            activeCurrency === "DOTO"
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground",
          ].join(" ")}
        >
          DOTO
        </button>

        <button
          type="button"
          onClick={() => onCurrencyClick("STAR")}
          className={[
            "rounded-xl px-4 py-2 text-sm font-medium transition",
            activeCurrency === "STAR"
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground",
          ].join(" ")}
        >
          STAR
        </button>
      </div>
    </header>
  );
}
