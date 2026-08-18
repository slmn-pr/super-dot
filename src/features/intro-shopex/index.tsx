import type { Metadata } from "next";
import { ShopExCTA } from "./sections/cta";
import { ShopExCategories } from "./sections/shopex-categories";
import { ShopExDeals } from "./sections/shopex-deals";
import { ShopExEcosystem } from "./sections/shopex-ecosystem";
import { ShopExHero } from "./sections/shopex-hero";
import { ShopExShoppingJourney } from "./sections/shopex-shopping-journey";
import { ShopExSmartShopping } from "./sections/shopex-smart-shopping";

export const metadata: Metadata = {
  title: "ShopEx | تجربه هوشمند و یکپارچه خرید - سوپردات",
  description:
    "فروشگاه هوشمند ShopEx؛ جستجو، مقایسه و خرید کالا با تضمین قیمت، ارسال سریع و پرداخت یکپارچه در اکوسیستم سوپردات.",
};

export default function IntroShopExPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-x-hidden bg-[#FFFFFF] text-[#09090B] antialiased selection:bg-[#3B82F6]/20 selection:text-[#3B82F6]"
    >
      {/* 1. Hero Section - معرفی اولیه و پرقدرت */}
      <ShopExHero />

      {/* 2. Categories - دسته‌بندی‌های اصلی کالاها */}
      <ShopExCategories />

      {/* 3. Deals - تخفیف‌ها و پیشنهادهای داغ */}
      <ShopExDeals />

      {/* 4. Journey - مراحل ۴ گانه و ساده خرید */}
      <ShopExShoppingJourney />

      {/* 5. Smart Search & Filter - جستجوی هوشمند و ابزار مقایسه */}
      <ShopExSmartShopping />

      {/* 6. Ecosystem - یکپارچگی با سایر سرویس‌های سوپردات */}
      <ShopExEcosystem />

      {/* 7. Final Call To Action - دعوت پایانی به خرید */}
      <ShopExCTA />
    </main>
  );
}
