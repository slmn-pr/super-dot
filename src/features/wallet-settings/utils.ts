/**
 * Iranian bank card checksum validation (mod 11 / Luhn-like).
 *
 * The first 15 digits are multiplied by descending weights 16..2,
 * summed, and reduced mod 11. The result must match the 16th digit
 * (with the 0/11-remainder edge case handled below).
 */
export function validateIranianCardNumber(value: string): boolean {
  const digits = value.replace(/\D/g, "");

  if (digits.length !== 16) {
    return false;
  }

  // Reject obviously fake numbers like 4444444444444444.
  if (/^(\d)\1{15}$/.test(digits)) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < 15; i++) {
    sum += Number(digits[i]) * (16 - i);
  }

  const remainder = sum % 11;
  const checkDigit = remainder < 2 ? 0 : 11 - remainder;

  return checkDigit === Number(digits[15]);
}

/** Formats a raw digit string as "6037 9918 1234 5678" for display. */
export function formatCardNumber(value: string): string {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

/** Strips non-digits and clamps to maxLength. Used for all numeric inputs. */
export function onlyDigits(value: string, maxLength: number): string {
  return value.replace(/\D/g, "").slice(0, maxLength);
}

/**
 * Checks whether an MM/YY expiry has already passed.
 * Assumes 20YY for the two-digit year.
 */
export function isExpiryInPast(month: string, year: string): boolean {
  if (month.length !== 2 || year.length !== 2) return false;

  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  const y = Number(year);
  const m = Number(month);

  if (y < currentYear) return true;
  if (y === currentYear && m < currentMonth) return true;

  return false;
}