import { formatAmount } from "../utils";

export default function StatCard({
  title,
  value,
  currency,
  icon,
  isCount = false,
}: {
  title: string;
  value: number;
  currency?: string;
  icon: React.ReactNode;
  isCount?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{title}</span>

        <div className="text-muted-foreground">{icon}</div>
      </div>

      <div className="text-lg font-bold">
        {value >= 0 ? "" : "-"}
        {formatAmount(Math.abs(value))}
      </div>

      {!isCount && currency && (
        <div className="mt-1 text-[11px] text-muted-foreground">{currency}</div>
      )}
    </div>
  );
}
