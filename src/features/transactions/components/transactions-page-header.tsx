import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TransactionsPageHeaderProps {
  activeCurrency?: string;
  onCurrencyClick: (currency: string) => void;
}

export default function TransactionsPageHeader({
  activeCurrency,
  onCurrencyClick,
}: TransactionsPageHeaderProps) {
  const router = useRouter();

  return (
    <header className="mb-6">
      <div className="mb-4 flex items-center gap-2">
        <Button
          onClick={() => router.back()}
          variant="outline"
          size="icon"
          // className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card transition hover:bg-muted"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

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
              ? "bg-primary text-accent-foreground"
              : "bg-muted text-muted-foreground",
          ].join(" ")}
        >
          دوتو (DOTO)
        </button>

        <button
          type="button"
          onClick={() => onCurrencyClick("ریال")}
          className={[
            "rounded-xl px-4 py-2 text-sm font-medium transition",
            activeCurrency === "ریال"
              ? "bg-primary text-accent-foreground"
              : "bg-muted text-muted-foreground",
          ].join(" ")}
        >
          ریال
        </button>
      </div>
    </header>
  );
}
