"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Calculator,
  CreditCard,
  Truck,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

const steps = [
  {
    number: "۰۱",
    icon: SearchOrGlobeIcon,
    title: "جستجو یا درج لینک",
    description:
      "کالای موردنظرتان را در شاپکس سرچ کنید یا لینک مستقیم آن را از علی‌بابا (Alibaba) قرار دهید.",
    badge: "داخلی و بین‌المللی",
  },
  {
    number: "۰۲",
    icon: Calculator,
    title: "محاسبه خودکار و شفاف",
    description:
      "قیمت نهایی کالا، هزینه‌های گمرک و حمل‌ونقل هوایی/دریایی به‌صورت هوشمند و ریالی محاسبه می‌شود.",
    badge: "بدون هزینه پنهان",
  },
  {
    number: "۰۳",
    icon: CreditCard,
    title: "پرداخت یکپارچه ریالی",
    description:
      "بدون نیاز به صرافی یا کارت‌های ارزی بین‌المللی، هزینه را مستقیماً با کارت‌های شتاب پرداخت کنید.",
    badge: "۱۰۰٪ امن و ریالی",
  },
  {
    number: "۰۴",
    icon: Truck,
    title: "ترخیص و تحویل در ایران",
    description:
      "تمام مراحل تشریفات گمرکی توسط شاپکس انجام شده و مرسوله درب منزل به شما تحویل داده می‌شود.",
    badge: "کد رهگیری زنده",
  },
];

function SearchOrGlobeIcon({ className }: { className?: string }) {
  return (
    <div className="relative">
      <Globe className={className} />
    </div>
  );
}

export function ShopExShoppingJourney() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-24 sm:py-32 border-b border-[#F4F4F5] dir-rtl">
      {/* Background Subtle Gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#09090B_1px,transparent_1px),linear-gradient(to_bottom,#09090B_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="container relative mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#F4F4F5] bg-[#F4F4F5]/60 px-4 py-1.5 text-xs font-bold text-[#3B82F6]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>فرآیند شفاف و بدون دغدغه</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold text-[#09090B] sm:text-4xl lg:text-5xl">
            از چین یا ایران؛ خرید فقط در ۴ گام ساده
          </h2>

          <p className="mt-4 text-sm leading-8 text-[#09090B]/70 sm:text-base">
            پیچیدگی‌های خریدهای خارجی، گمرک و انتقال ارز را به ShopEx بسپارید.
            مسیر سفارش تا تحویل کاملاً هموار و شفاف است.
          </p>
        </div>

        {/* Journey Steps Grid */}
        <div className="relative mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line for Desktop */}
          <div className="absolute right-[12%] left-[12%] top-16 hidden h-[2px] bg-gradient-to-l from-transparent via-[#3B82F6]/30 to-transparent lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group relative z-10 flex flex-col items-center rounded-3xl border border-[#F4F4F5] bg-[#FFFFFF] p-6 text-center shadow-sm transition-all hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/5"
              >
                {/* Step Number Tag */}
                <div className="absolute left-5 top-5 text-xs font-black text-[#09090B]/20 group-hover:text-[#3B82F6] transition-colors">
                  {step.number}
                </div>

                {/* Icon Wrapper */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#F4F4F5] bg-[#F4F4F5]/60 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3B82F6]/10">
                  <Icon className="h-8 w-8 text-[#09090B] transition-colors group-hover:text-[#3B82F6]" />
                </div>

                {/* Badge */}
                <span className="mt-5 rounded-md bg-[#F4F4F5] px-2.5 py-1 text-[10px] font-bold text-[#3B82F6]">
                  {step.badge}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-base font-bold text-[#09090B]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-6 text-[#09090B]/60 font-medium">
                  {step.description}
                </p>

                {/* Arrow Connector for Mobile */}
                {index < steps.length - 1 && (
                  <div className="mt-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#F4F4F5] text-[#3B82F6] lg:hidden">
                    <ArrowLeft className="h-3.5 w-3.5 -rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Note */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-xs font-semibold text-[#09090B]/70 bg-[#F4F4F5]/40 py-3.5 px-6 rounded-2xl border border-[#F4F4F5] max-w-2xl mx-auto">
          <span className="flex h-2 w-2 rounded-full bg-[#3B82F6]" />
          <span>
            تضمین اصالت کالا و بازگشت وجه در صورت عدم تطابق سفارش با کالای
            تحویلی
          </span>
        </div>
      </div>
    </section>
  );
}
