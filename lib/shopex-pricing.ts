// lib/shopex-pricing.ts
import type { Product } from "@/lib/marketplace";

/**
 * TODO: این تابع فعلاً فقط یک Placeholder است.
 * قیمت محصولات در حال حاضر بر حسب تومان است (`product.price`)، اما پرداخت در ShopEx
 * بر پایه DOTO انجام می‌شود. وقتی نرخ واقعی/فیلد قیمتِ Doto مشخص شد، فقط همین
 * تابع را عوض کنید — بقیه کامپوننت‌ها تغییری نیاز ندارند.
 *
 * گزینه‌های رایج برای پیاده‌سازی نهایی:
 *  1) اضافه کردن فیلد `priceDoto` به `Product` و برگرداندن مستقیم آن.
 *  2) گرفتن نرخ لحظه‌ای تومان-به-دوتو از یک API/جدول قیمت و ضرب کردن.
 */
export function getOrderAmountDoto(product: Product): number {
  // eslint-disable-next-line no-console
  console.warn(
    `[shopex-pricing] getOrderAmountDoto is a placeholder — تبدیل واقعی تومان به DOTO هنوز وصل نشده (product: ${product.id})`,
  );
  return 0;
}
