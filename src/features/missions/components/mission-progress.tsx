export function MissionProgress() {
  const currentXp = 70;
  const remainingPoints = 550;

  return (
    <section className="mt-5 rounded-3xl border bg-card p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">سطح فعلی</p>
          <h3 className="font-bold">کاوشگر، سطح ۵</h3>
        </div>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
          {remainingPoints.toLocaleString("fa-IR")} امتیاز تا سطح بعد
        </span>
      </div>

      <div
        role="progressbar"
        aria-label="پیشرفت تا سطح بعد"
        aria-valuenow={currentXp}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-4 h-2.5 overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-gradient-to-l from-gray-500 to-primary transition-all"
          style={{ width: `${currentXp}%` }}
        />
      </div>
    </section>
  );
}