"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Heart,
  ShoppingBag,
  Star,
  Timer,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const deals = [
  {
    title: "هدفون بی‌سیم پرو اکتیو",
    price: "۴,۸۹۰,۰۰۰",
    oldPrice: "۵,۹۰۰,۰۰۰",
    discount: "۱۷٪",
    rating: "4.8",
    isChina: false,
    source: "انبار ایران",
  },
  {
    title: "ساعت هوشمند گیمینگ",
    price: "۶,۲۵۰,۰۰۰",
    oldPrice: "۷,۴۰۰,۰۰۰",
    discount: "۱۵٪",
    rating: "4.9",
    isChina: true,
    source: "مستقیم از چین",
  },
  {
    title: "کیبورد مکانیکال RGB",
    price: "۳,۴۹۰,۰۰۰",
    oldPrice: "۴,۲۰۰,۰۰۰",
    discount: "۱۷٪",
    rating: "4.7",
    isChina: true,
    source: "تخفیف علی‌بابا",
  },
  {
    title: "اسپیکر قابل حمل ضدآب",
    price: "۲,۱۹۰,۰۰۰",
    oldPrice: "۲,۸۰۰,۰۰۰",
    discount: "۲۲٪",
    rating: "4.6",
    isChina: false,
    source: "انبار ایران",
  },
];

export function ShopExDeals() {
  // Simple Timer Simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#09090B] py-20 text-white dir-rtl border-b border-white/10">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header Area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-400">
              <Flame className="h-4 w-4 text-blue-400" />
              <span>فرصت‌های استثنایی امروز</span>
            </div>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl">
              پیشنهادهای داغ با قیمت مستقیم از مبدأ
            </h2>
          </div>

          {/* Countdown & View All */}
          <div className="flex items-center justify-between gap-6 sm:justify-end">
            {/* Timer */}
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs">
              <Timer className="h-4 w-4 text-blue-400" />
              <span className="text-white/60 font-medium">زمان باقیمانده:</span>
              <div className="flex items-center gap-1 font-mono font-bold text-white dir-ltr">
                <span className="rounded bg-white/10 px-1.5 py-0.5">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                :
                <span className="rounded bg-white/10 px-1.5 py-0.5">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                :
                <span className="rounded bg-[#3B82F6] px-1.5 py-0.5">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>

            <button className="hidden items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors sm:flex">
              <span>مشاهده همه پیشنهادها</span>
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-3.5 transition-all hover:border-blue-500/40 hover:bg-white/[0.05]"
            >
              {/* Product Visual Container */}
              <div>
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white/[0.04] p-4">
                  {/* Discount Tag */}
                  <span className="absolute right-3 top-3 rounded-lg bg-[#3B82F6] px-2 py-1 text-[10px] font-black text-white shadow-md">
                    {deal.discount} تخفیف
                  </span>

                  {/* China Badge if applicable */}
                  {deal.isChina && (
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-lg border border-white/10 bg-[#09090B]/80 px-2 py-1 text-[10px] font-medium text-white backdrop-blur">
                      <Globe className="h-3 w-3 text-blue-400" />
                      <span>چین</span>
                    </span>
                  )}

                  {/* Dummy Product Icon Holder */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/[0.05] shadow-inner transition-transform group-hover:scale-110">
                    <ShoppingBag className="h-8 w-8 text-white/40 group-hover:text-blue-400 transition-colors" />
                  </div>

                  {/* Wishlist Button */}
                  {!deal.isChina && (
                    <button className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 hover:text-white transition-colors">
                      <Heart className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Details */}
                <div className="p-2 pt-4">
                  <div className="flex items-center justify-between text-[11px] text-white/50">
                    <span className="text-blue-400 font-medium">
                      {deal.source}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-white/80 font-semibold">
                        {deal.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-1 text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                    {deal.title}
                  </h3>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-2 pt-2 border-t border-white/5 mt-2 flex items-end justify-between">
                <div>
                  <div className="text-xs text-white/40 line-through">
                    {deal.oldPrice}
                  </div>
                  <div className="text-base font-black text-white">
                    {deal.price}{" "}
                    <span className="text-[10px] font-normal text-white/60">
                      تومان
                    </span>
                  </div>
                </div>

                <Button
                  size="sm"
                  className="h-9 w-9 rounded-xl bg-white/10 p-0 text-white hover:bg-[#3B82F6] transition-colors"
                  title="افزودن به سبد"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Button
            variant="outline"
            className="w-full rounded-xl border-white/10 text-xs"
          >
            مشاهده همه پیشنهادها
            <ArrowLeft className="mr-2 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
