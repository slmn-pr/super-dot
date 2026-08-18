"use client";

import { motion } from "framer-motion";
import { Wallet, ShoppingBag, ArrowLeft, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PostExEcosystem() {
  return (
    <section className="bg-[#F4F4F5]/30 py-20 lg:py-28 dir-rtl text-[#09090B]">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Box 1: Wallet Integration */}
            <div className="flex items-center gap-4 rounded-2xl border border-[#F4F4F5] bg-[#FFFFFF] p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                <Wallet className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#09090B]">
                  پرداخت آنی از کیف پول SuperDot Wallet
                </h4>
                <p className="mt-1 text-[11px] text-[#09090B]/60">
                  پرداخت بدون نیاز به درگاه و با دریافت پاداش بازگشت وجه
                  (Cashback).
                </p>
              </div>
            </div>

            {/* Box 2: ShopEx Integration */}
            <div className="flex items-center gap-4 rounded-2xl border border-[#F4F4F5] bg-[#FFFFFF] p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#09090B]/5 text-[#09090B]">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#09090B]">
                  تحویل مستقیم خریدهای ShopEx
                </h4>
                <p className="mt-1 text-[11px] text-[#09090B]/60">
                  کالاهای خریداری‌شده از فروشگاه ShopEx مستقیماً توسط PostEx
                  تحویل می‌شوند.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-3.5 py-1 text-xs font-bold text-[#3B82F6]">
              <Layers className="h-3.5 w-3.5" />
              <span>یکپارچگی کامل</span>
            </div>

            <h2 className="mt-4 text-2xl font-black text-[#09090B] sm:text-4xl leading-tight">
              متصل به تمام اکوسیستم سوپردات
            </h2>

            <p className="mt-4 text-xs leading-7 text-[#09090B]/70 sm:text-sm sm:leading-8">
              پستکس تنها یک سرویس ارسال مجزا نیست؛ بلکه بازوی اصلی لجستیک
              اکوسیستم سوپردات است. شما می‌توانید با استفاده از اعتبار کیف پول
              خود هزینه‌های ارسال را بپردازید و مرسولات خرید از ShopEx را
              لحظه‌ای پیگیری کنید.
            </p>

            <div className="mt-8">
              <Button className="h-11 rounded-xl bg-[#3B82F6] px-6 text-xs font-bold text-white hover:bg-[#3B82F6]/90">
                <span>ورود به اکوسیستم سوپردات</span>
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
