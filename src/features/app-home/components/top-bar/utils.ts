export const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianDigits(value: string | number): string {
  return String(value).replace(/[0-9]/g, (d) => faDigits[Number(d)]);
}

export function getGreeting(date = new Date()): string {
  const h = date.getHours();
  if (h < 5) return "شب بخیر";
  if (h < 12) return "صبح بخیر";
  if (h < 17) return "ظهر بخیر";
  if (h < 20) return "عصر بخیر";
  return "شب بخیر";
}


