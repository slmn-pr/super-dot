"use client";

import { motion } from "framer-motion";
import { MapPin, Box, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "۰۱",
    icon: MapPin,
    title: "تعیین مبدأ و مقصد",
    desc: "آدرس مبدأ و مقصد را روی نقشه مشخص کنید.",
  },
  {
    number: "۰۲",
    icon: Box,
    title: "مشخصات مرسوله",
    desc: "نوع، وزن و ابعاد بسته یا بار خود را وارد کنید.",
  },
  {
    number: "۰۳",
    icon: Truck,
    title: "انتخاب سرویس ارسال",
    desc: "بین پیک فوری، باربری یا پست بین‌شهری انتخاب کنید.",
  },
  {
    number: "۰۴",
    icon: CheckCircle2,
    title: "تحویل و رهگیری زنده",
    desc: "حرکت سفیر را زنده روی نقشه دنبال و تحویل بگیرید.",
  },
];

export function PostExJourney() {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-28 dir-rtl text-[#09090B]">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
            فرآیند ساده
          </span>
          <h2 className="mt-3 text-2xl font-black text-[#09090B] sm:text-4xl">
            ارسال بسته در ۴ گام راحت
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col rounded-3xl border border-[#F4F4F5] bg-[#F4F4F5]/30 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-black text-[#09090B]/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-sm font-bold text-[#09090B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#09090B]/60">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
