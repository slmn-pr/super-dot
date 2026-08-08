import { LucideIcon } from "lucide-react";
import { MISSION_CATEGORY_STYLES } from "../consts";
import type { Mission } from "../_mock";
import { cn } from "@/lib/utils";

interface MissionCardProps {
  title: string;
  description: string;
  reward: string;
  progress: number;
  icon: LucideIcon;
  category: Mission["category"];
  categoryLabel: string;
}

export function MissionCard({
  title,
  description,
  reward,
  progress,
  icon: Icon,
  category,
  categoryLabel,
}: MissionCardProps) {
  const style = MISSION_CATEGORY_STYLES[category];

  return (
    <div className="rounded-3xl border bg-card p-4 transition-shadow hover:shadow-sm">
      <div className="flex gap-3">
        <div
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-2xl",
            style.iconBg,
            style.iconText,
          )}
        >
          <Icon size={24} aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-tight">{title}</h3>

            <span
              className={cn(
                "shrink-0 rounded-full px-2 py-1 text-[11px] font-medium",
                style.badgeBg,
                style.badgeText,
              )}
            >
              {categoryLabel}
            </span>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            پیشرفت ({progress.toLocaleString("fa-IR")}٪)
          </span>
          <span className={cn("font-medium", style.badgeText)}>{reward}</span>
        </div>

        <div
          role="progressbar"
          aria-label={`پیشرفت ماموریت ${title}`}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 overflow-hidden rounded-full bg-muted"
        >
          <div
            className={cn(
              "h-full rounded-full transition-all",
              style.progressBar,
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
