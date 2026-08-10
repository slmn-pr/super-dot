export default function ChartCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-sm font-bold">{title}</h2>

      <p className="mt-1 text-xs text-muted-foreground">{description}</p>

      <div className="mt-5 flex h-52 items-center justify-center rounded-xl border border-dashed border-border">
        <span className="text-xs text-muted-foreground">
          نمودار در مرحله بعد
        </span>
      </div>
    </div>
  );
}
