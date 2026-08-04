const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/**
 * Converts a number (or numeric string) to Persian digits.
 * e.g. 1234 -> "۱۲۳۴"
 */
export function toPersianDigits(value: number | string): string {
  return String(value).replace(
    /[0-9]/g,
    (digit) => PERSIAN_DIGITS[Number(digit)],
  );
}

/**
 * Formats an amount with thousands separators and Persian digits.
 * e.g. 125000 -> "۱۲۵٬۰۰۰"
 */
export function formatAmount(value: number): string {
  const withSeparators = new Intl.NumberFormat("en-US").format(value);
  return toPersianDigits(withSeparators);
}

/**
 * Formats a Date into a short Persian-digit date string, e.g. "۱۲ تیر".
 * Falls back gracefully if Intl.DateTimeFormat("fa-IR") formatting is unavailable.
 */
export function formatTransactionDate(date: Date): string {
  try {
    const formatted = new Intl.DateTimeFormat("fa-IR", {
      day: "numeric",
      month: "long",
    }).format(date);
    return formatted;
  } catch {
    return toPersianDigits(date.toLocaleDateString());
  }
}
