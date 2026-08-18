"use client";

import { motion } from "framer-motion";
import { Bike, Truck, Box, Zap, ArrowLeft, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Bike,
    title: "پیک موتوری فوری (Express)",
    description:
      "تحویل درون‌شهری زیر ۴۵ دقیقه با قابلیت رهگیری لحظه‌ای زنده رو نقشه.",
    tag: "پرطرفدار",
    accent: "bg-[#3B82F6]/10 text-[#3B82F6]",
  },
  {
    icon: Truck,
    title: "باربری و وانت آنلاین",
    description:
      "جابه‌جایی بارهای سنگین و حجیم شهری با سبک‌ترین قیمت و بیمه کامل.",
    tag: "بارهای سنگین",
    accent: "bg-[#09090B]/5 text-[#09090B]",
  },
  {
    icon: Box,
    title: "ارسال بین‌شهری و پستی",
    description:
      "تحویل درب‌به‌درب مرسولات به تمام نقاط کشور با همکاری برترین شرکت‌های پستی.",
    tag: "پوشش سراسری",
    accent: "bg-[#3B82F6]/10 text-[#3B82F6]",
  },
  {
    icon: Zap,
    title: "لجستیک اختصاصی فروشگاه‌ها",
    description:
      "اتصال مستقیم API پستکس به فروشگاه‌های آنلاین برای پردازش و ارسال خودکار.",
    tag: "ویژه کسب‌وکارها",
    accent: "bg-[#09090B]/5 text-[#09090B]",
  },
];

export function PostExServices() {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-28 dir-rtl text-[#09090B]">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
            روش‌های تنوع‌یافته ارسال
          </span>
          <h2 className="mt-3 text-2xl font-black text-[#09090B] sm:text-4xl">
            برای هر نوع مرسوله، یک راهکار هوشمند
          </h2>
          <p className="mt-4 text-xs leading-7 text-[#09090B]/60 sm:text-sm">
            از یک پاکت نامه فوری درون‌شهری تا بارهای عمده سنگین بین‌شهری، پستکس
            بهترین گزینه را پیشنهاد می‌دهد.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#F4F4F5] bg-[#FFFFFF] p-6 transition-all hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accent}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#F4F4F5] px-3 py-1 text-[11px] font-bold text-[#09090B]/70">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-bold text-[#09090B]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#09090B]/60">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#3B82F6] opacity-0 transition-opacity group-hover:opacity-100">
                  <span>ثبت درخواست</span>
                  <ArrowLeft className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
