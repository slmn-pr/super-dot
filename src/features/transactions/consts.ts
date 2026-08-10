import { CURRENCY_BALANCES } from "../wallet/components/mock-data";
import { Period } from "./types";

export const INITIAL_DOTO_BALANCE =
  CURRENCY_BALANCES.find((c) => c.code === "DOTO")?.amount ?? 0;

export const PERIODS: { id: Period; label: string }[] = [
  { id: "7d", label: "۷ روز" },
  { id: "30d", label: "۳۰ روز" },
  { id: "90d", label: "۳ ماه" },
  { id: "1y", label: "۱ سال" },
];
