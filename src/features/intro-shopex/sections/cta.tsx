"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  Headphones,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ShopExCTA() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] py-28 text-[#FFFFFF] sm:py-36 dir-rtl">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="container relative mx-auto max-w-4xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Badge Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] shadow-inner">
            <ShoppingBag className="h-7 w-7" />
          </div>

          {/* Headline */}
          <h2 className="mt-8 text-3xl font-black tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl leading-tight">
            خرید بعدی‌ات را هوشمندتر،
            <br />
            <span className="text-[#3B82F6]">سریع‌تر و ساده‌تر</span> تجربه کن.
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#FFFFFF]/70 sm:text-base">
            هزاران کالا، مقایسه قیمت‌ها و خرید یکپارچه در ShopEx منتظر شماست.
            همین حالا وارد فروشگاه شوید.
          </p>

          {/* CTA Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-13 w-full sm:w-auto rounded-xl bg-[#3B82F6] px-8 text-sm font-bold text-[#FFFFFF] shadow-lg shadow-[#3B82F6]/25 transition-all hover:bg-[#3B82F6]/90 hover:shadow-xl hover:shadow-[#3B82F6]/30 active:scale-95"
            >
              <span>ورود به فروشگاه ShopEx</span>
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-13 w-full sm:w-auto rounded-xl border-[#FFFFFF]/15 bg-transparent px-7 text-sm font-bold text-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF] transition-all"
            >
              <Compass className="ml-2 h-4 w-4 text-[#3B82F6]" />
              <span>جستجو در دسته‌بندی‌ها</span>
            </Button>
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-[#FFFFFF]/10 pt-8 text-xs font-semibold text-[#FFFFFF]/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#3B82F6]" />
              <span>تضمین اصالت و بازگشت وجه</span>
            </div>

            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-[#3B82F6]" />
              <span>ارسال سریع و پیگیری لحظه‌ای</span>
            </div>

            <div className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-[#3B82F6]" />
              <span>پشتیبانی یکپارچه سوپردات</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
