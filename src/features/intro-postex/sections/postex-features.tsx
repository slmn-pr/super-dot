"use client";

import { motion } from "framer-motion";
import { Navigation, ShieldCheck, DollarSign, Clock, Smartphone, Headphones } from "lucide-react";

const features = [
  {
    icon: Navigation,
    title: "رهگیری زنده روی نقشه",
    desc: "مشاهده لحظه‌به‌لحظه موقعیت مکانی سفیر و مسیر حرکت مرسوله تا زمان تحویل.",
  },
  {
    icon: ShieldCheck,
    title: "بیمه کامل ۱۰۰٪ مرسولات",
    desc: "ضمانت و بیمه تمامی مرسولات ثبت‌شده در برابر خسارت، آسیب یا مفقودی.",
  },
  {
    icon: DollarSign,
    title: "قیمت‌گذاری شفاف و هوشمند",
    desc: "محاسبه دقیق هزینه براساس مسافت و وزن بدون هیچ هزینه پنهان یا متغیر.",
  },
  {
    icon: Clock,
    title: "تحویل زمان‌بندی‌شده",
    desc: "امکان انتخاب دقیق ساعت و بازه زمانی تحویل مرسوله به گیرنده.",
  },
  {
    icon: Smartphone,
    title: "اعلام وضعیت پیامکی و push",
    desc: "اطلاع‌رسانی خودکار به فرستنده و گیرنده در تمامی مراحل ارسال.",
  },
  {
    icon: Headphones,
    title: "پشتیبانی اختصاصی ۲۴/۷",
    desc: "مرکز پاسخگویی ۲۴ ساعته برای پیگیری فوری سفارشات شما.",
  },
];

export function PostExFeatures() {
  return (
    <section className="bg-[#F4F4F5]/50 py-20 lg:py-28 dir-rtl text-[#09090B]">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
            چرا پستکس؟
          </span>
          <h2 className="mt-3 text-2xl font-black text-[#09090B] sm:text-4xl">
            استاندارد جدید در خدمات لجستیک و ارسال
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="rounded-3xl border border-[#F4F4F5] bg-[#FFFFFF] p-7 transition-all hover:shadow-lg hover:shadow-[#09090B]/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-[#09090B]">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#09090B]/60">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}