"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Heart,
  Plane,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "هدفون بی‌سیم پرو",
    price: "۴,۸۹۰,۰۰۰",
    oldPrice: "۵,۹۰۰,۰۰۰",
    discount: "۱۷٪",
    rating: "4.8",
    source: "مارکت‌پلیس داخلی",
    isChina: false,
    position: "right-[2%] top-[6%]",
  },
  {
    name: "کوادکوپتر ۴K هوشمند",
    price: "۱۲,۴۵۰,۰۰۰",
    oldPrice: "۱۶,۰۰۰,۰۰۰",
    discount: "۲۲٪",
    rating: "4.9",
    source: "مستقیم از علی‌بابا چین",
    isChina: true,
    position: "left-[2%] top-[24%]",
  },
  {
    name: "ساعت هوشمند اسپرت",
    price: "۲,۸۹۰,۰۰۰",
    oldPrice: "۳,۴۰۰,۰۰۰",
    discount: "۱۵٪",
    rating: "4.7",
    source: "تحویل ۱۰ روزه از چین",
    isChina: true,
    position: "right-[8%] bottom-[2%]",
  },
];

export function ShopExHero() {
  return (
    <section className="relative min-h-[780px] overflow-hidden border-b border-[#F4F4F5] bg-[#FFFFFF] dir-rtl">
      {/* Background Glow & Pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#3B82F6]/[0.06] blur-[130px]" />
        <div className="absolute right-[10%] top-[25%] h-[320px] w-[320px] rounded-full bg-[#3B82F6]/[0.04] blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#09090B_1px,transparent_1px),linear-gradient(to_bottom,#09090B_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container relative mx-auto flex min-h-[780px] max-w-7xl items-center px-5 py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Content Left (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F4F4F5] bg-[#FFFFFF]/90 px-4 py-2 text-xs font-semibold text-[#09090B] shadow-sm backdrop-blur">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#3B82F6]">
                <ShoppingBag className="h-3 w-3" />
              </span>
              <span>ShopEx</span>
              <span className="h-3 w-px bg-[#F4F4F5]" />
              <span className="text-[#09090B]/60">
                فروشگاه بین‌المللی سوپردات
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-4xl font-extrabold leading-[1.15] text-[#09090B] sm:text-5xl lg:text-6xl">
              خرید از بازار ایران و{" "}
              <span className="relative inline-block text-[#3B82F6]">
                سفارش مستقیم از چین
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base leading-8 text-[#09090B]/70 sm:text-lg">
              میلیون‌ها کالا از فروشندگان داخلی و{" "}
              <strong className="text-[#09090B]">
                سایت علی‌بابا (Alibaba)
              </strong>{" "}
              را یکجا مقایسه کنید؛ با پرداخت ریالی سفارش دهید و تحویل درب منزل
              در ایران بگیرید.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-13 rounded-xl bg-[#3B82F6] px-8 text-white shadow-lg shadow-[#3B82F6]/20 hover:bg-[#3B82F6]/90 text-base font-semibold"
              >
                شروع خرید و جستجو
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-13 rounded-xl border-[#F4F4F5] bg-[#F4F4F5]/60 px-7 text-[#09090B] hover:bg-[#F4F4F5] text-base font-medium"
              >
                <Globe className="ml-2 h-4 w-4 text-[#3B82F6]" />
                سفارش اختصاصی از علی‌بابا
              </Button>
            </div>

            {/* Feature Highlights / Stats */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#F4F4F5] text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#3B82F6] shrink-0" />
                <span className="text-[#09090B]/80 font-medium">
                  پرداخت تماماً ریالی
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#3B82F6] shrink-0" />
                <span className="text-[#09090B]/80 font-medium">
                  ترخیص و تحویل در ایران
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="h-4 w-4 text-[#3B82F6] shrink-0" />
                <span className="text-[#09090B]/80 font-medium">
                  ارسال مستقیم هوایی/دریایی
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual / Product Universe */}
          <div className="relative mx-auto h-[540px] w-full max-w-[620px]">
            {/* Interactive Search Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-1/2 top-1/2 z-30 w-[92%] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="rounded-[28px] border border-[#F4F4F5] bg-[#FFFFFF]/95 p-3.5 shadow-2xl shadow-[#3B82F6]/10 backdrop-blur-xl">
                {/* Search Header Tabs */}
                <div className="mb-3 flex items-center justify-between px-2 text-xs font-semibold">
                  <span className="text-[#09090B]">جستجوی هوشمند کالا</span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6]">
                    <Globe className="h-3.5 w-3.5" />
                    <span>متصل به Alibaba.com</span>
                  </div>
                </div>

                {/* Input Bar */}
                <div className="flex items-center gap-3 rounded-2xl bg-[#F4F4F5] px-5 py-3.5">
                  <Search className="h-5 w-5 text-[#09090B]/40" />
                  <span className="text-sm text-[#09090B]/60">
                    نام محصول یا لینک علی‌بابا را وارد کنید...
                  </span>
                  <div className="mr-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[#3B82F6] text-white shadow-sm">
                    <ArrowLeft className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between px-2 text-xs text-[#09090B]/60">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#3B82F6]" />
                    <span>تخفیف‌های ویژه امروز</span>
                  </div>
                  <span className="text-[10px] text-[#09090B]/40">
                    محاسبه خودکار گمرک و حمل
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Product Cards */}
            {products.map((product, index) => (
              <ProductFloatingCard
                key={product.name}
                product={product}
                delay={index * 0.3}
              />
            ))}

            {/* Center glow effect */}
            <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/[0.08] blur-[90px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFloatingCard({
  product,
  delay,
}: {
  product: (typeof products)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute ${product.position} z-20 w-[200px] sm:w-[220px]`}
    >
      <div className="overflow-hidden rounded-[24px] border border-[#F4F4F5] bg-[#FFFFFF]/95 p-3 shadow-xl shadow-black/5 backdrop-blur-xl">
        {/* Product Image Holder */}
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[18px] bg-[#F4F4F5]">
          {/* Discount Badge */}
          <div className="absolute right-2 top-2 rounded-lg bg-[#3B82F6] px-2 py-0.5 text-[10px] font-extrabold text-white">
            {product.discount}
          </div>

          {/* China Tag if applicable */}
          {product.isChina && (
            <div className="absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-[#09090B] px-2 py-0.5 text-[9px] font-medium text-white">
              <Globe className="h-2.5 w-2.5 text-[#3B82F6]" />
              <span>چین</span>
            </div>
          )}

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFFFFF] shadow-inner">
            <ShoppingBag className="h-7 w-7 text-[#09090B]/40" />
          </div>

          <button className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFFF]/90 text-[#09090B] hover:text-[#3B82F6] transition-colors">
            <Heart className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Product Details */}
        <div className="px-1 pt-2.5">
          <div className="text-xs font-bold text-[#09090B] truncate">
            {product.name}
          </div>

          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-[10px] font-semibold text-[#09090B]">
                {product.rating}
              </span>
            </div>
            <span className="text-[9px] font-medium text-[#3B82F6]">
              {product.source}
            </span>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between border-t border-[#F4F4F5] pt-2">
            <div>
              <div className="text-xs font-extrabold text-[#09090B]">
                {product.price}{" "}
                <span className="text-[9px] font-normal">تومان</span>
              </div>
              <div className="text-[10px] text-[#09090B]/40 line-through">
                {product.oldPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
