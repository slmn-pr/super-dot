import { Flag, Trophy } from "lucide-react";

interface MissionHeaderProps {
  newMissionsCount: number;
  points: number;
}

export function MissionHeader({
  newMissionsCount,
  points,
}: MissionHeaderProps) {
  return (
    <section className="rounded-3xl border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Flag size={22} strokeWidth={2} aria-hidden="true" />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">ماموریت‌های امروز</p>
          <h1 className="text-lg font-bold leading-tight">
            {newMissionsCount?.toLocaleString("fa-IR")} ماموریت جدید داری
          </h1>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t pt-4">
        <span className="text-sm text-muted-foreground">امتیاز شما</span>

        <div className="flex items-center gap-1">
          <strong className="text-base font-bold">
            {points?.toLocaleString("fa-IR")}
          </strong>

          <Trophy
            size={16}
            className="text-muted-foreground"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
