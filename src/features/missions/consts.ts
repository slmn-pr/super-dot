import type { Mission } from "./_mock";

type MissionCategory = Mission["category"];

interface CategoryStyle {
  iconBg: string;
  iconText: string;
  badgeBg: string;
  badgeText: string;
  progressBar: string;
}

export const MISSION_CATEGORY_STYLES: Record<MissionCategory, CategoryStyle> = {
  daily: {
    iconBg: "bg-sky-500/10",
    iconText: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-600 dark:text-sky-400",
    progressBar: "bg-sky-500",
  },
  travel: {
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-600 dark:text-violet-400",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-600 dark:text-violet-400",
    progressBar: "bg-violet-500",
  },
  shopping: {
    iconBg: "bg-pink-500/10",
    iconText: "text-pink-600 dark:text-pink-400",
    badgeBg: "bg-pink-500/10",
    badgeText: "text-pink-600 dark:text-pink-400",
    progressBar: "bg-pink-500",
  },
  finance: {
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-600 dark:text-emerald-400",
    progressBar: "bg-emerald-500",
  },
};