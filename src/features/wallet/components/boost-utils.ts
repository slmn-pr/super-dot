import { BOOST_PLANS } from "./mock-data";
import type { BoostLocationScope, BoostPlan } from "./types";

export const AUDIENCE_MIN = 100;
export const AUDIENCE_MAX = 1_000_000;
export const IMPRESSIONS_MIN = 1;
export const IMPRESSIONS_MAX = 10;

export const LOCATION_OPTIONS: {
  value: BoostLocationScope;
  label: string;
  hint: string;
}[] = [
  { value: "single_city", label: "یک شهر", hint: "نمایش در یک شهر مشخص" },
  { value: "multi_city", label: "چند شهر", hint: "نمایش در چند شهر انتخابی" },
  { value: "country", label: "تمام کشور", hint: "نمایش سراسری" },
];

export function locationCountFor(scope: BoostLocationScope): number {
  if (scope === "single_city") return 1;
  if (scope === "multi_city") return 3;
  return Infinity;
}

/**
 * تعیین پلن بر اساس تنظیمات کاربر (نمایش روزانه + گستردگی موقعیت).
 * سند فرمول دقیق انتخاب پلن را مشخص نکرده؛ این نگاشت بر اساس محدودیت‌های
 * هر پلن است (BOOST_PLANS در mock-data.ts) و تنها یک‌بار اینجا تعریف شده
 * تا در سراسر پروژه یکسان رفتار کند.
 */
export function resolveBoostPlan(
  dailyImpressions: number,
  locationScope: BoostLocationScope,
): BoostPlan {
  const locationCount = locationCountFor(locationScope);

  const eligible = BOOST_PLANS.find((plan) => {
    const maxLoc =
      plan.maxLocations === "unlimited" ? Infinity : plan.maxLocations;
    return (
      dailyImpressions <= plan.maxDailyImpressions && locationCount <= maxLoc
    );
  });

  return eligible ?? BOOST_PLANS[BOOST_PLANS.length - 1];
}
