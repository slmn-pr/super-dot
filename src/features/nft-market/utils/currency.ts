import { Currency } from "../types/market";

export function formatPrice(amount: number, currency: Currency): string {
  if (currency === "IRR") {
    return `${Math.round(amount).toLocaleString("fa-IR")} ریال`;
  }
  return `${amount.toFixed(2)} DOTO`;
}

export function toDoto(
  amount: number,
  currency: Currency,
  exchangeRateIrrPerDoto: number,
): number {
  return currency === "DOTO" ? amount : amount / exchangeRateIrrPerDoto;
}
