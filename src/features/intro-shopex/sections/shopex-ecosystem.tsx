"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Grid2X2,
  ShoppingBag,
  Sparkles,
  Truck,
  MapPin,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const ecosystemItems = [
  {
    title: "Wallet",
    subtitle: "کیف پول یکپارچه",
    desc: "پرداخت سریع و بدون درگاه در تمام سرویس‌ها",
    icon: CreditCard,
    active: false,
  },
  {
    title: "ShopEx",
    subtitle: "فروشگاه هوشمند",
    desc: "خرید از فروشگاه‌های داخلی و تأمین‌کنندگان برتر",
    icon: ShoppingBag,
    active: true, // Current Service Focus
  },
  {
    title: "PostEx",
    subtitle: "ارسال و لجستیک",
    desc: "تحویل سریع و پیگیری زنده مرسوله‌ها",
    icon: Truck,
    active: false,
  },
  {
    title: "MyDot",
    subtitle: "شبکه و محتوا",
    desc: "ارزیابی کالاها، نظرات و کسب درآمد برای کریتورها",
    icon: Sparkles,
    active: false,
  },
];

export function ShopExEcosystem() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-24 sm:py-32 border-b border-[#F4F4F5] dir-rtl">
      {/* Background Micro Accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#09090B_1px,transparent_1px),linear-gradient(to_bottom,#09090B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#F4F4F5] bg-[#F4F4F5]/80 px-4 py-1.5 text-xs font-bold text-[#3B82F6]">
            <Grid2X2 className="h-3.5 w-3.5" />
            <span>اکوسیستم یکپارچه سوپردات</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold text-[#09090B] sm:text-4xl lg:text-5xl">
            خرید، فقط یکی از بخش‌های سوپردات است
          </h2>

          <p className="mt-4 text-sm leading-8 text-[#09090B]/70 sm:text-base">
            با یک حساب کاربری متصل، از پرداخت تا خرید، ارسال لجستیک و ارتباط با
            کریتورها را به‌صورت کاملاً یکپارچه و هوشمند تجربه کنید.
          </p>
        </div>

        {/* Ecosystem Grid Container */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Connecting Line for Desktop */}
          <div className="absolute left-[10%] right-[10%] top-1/2 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent lg:block" />

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`group relative flex flex-col justify-between rounded-3xl border p-6 transition-all ${
                    item.active
                      ? "border-[#3B82F6] bg-[#FFFFFF] shadow-xl shadow-[#3B82F6]/10 ring-1 ring-[#3B82F6]"
                      : "border-[#F4F4F5] bg-[#FFFFFF] shadow-sm hover:border-[#09090B]/20"
                  }`}
                >
                  {/* Current Active Indicator Tag */}
                  {item.active && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#3B82F6] px-3 py-0.5 text-[10px] font-black text-[#FFFFFF] shadow-sm">
                      شما اینجا هستید
                    </div>
                  )}

                  <div>
                    {/* Icon Box */}
                    <div
                      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
                        item.active
                          ? "bg-[#3B82F6] text-[#FFFFFF] shadow-lg shadow-[#3B82F6]/30"
                          : "bg-[#F4F4F5] text-[#09090B] group-hover:bg-[#09090B] group-hover:text-[#FFFFFF]"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="mt-5 text-center text-base font-bold text-[#09090B]">
                      {item.title}
                    </h3>

                    <div className="mt-1 text-center text-xs font-semibold text-[#3B82F6]">
                      {item.subtitle}
                    </div>

                    {/* Short Description */}
                    <p className="mt-3 text-center text-xs leading-5 text-[#09090B]/60 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Feature Status */}
                  <div className="mt-5 border-t border-[#F4F4F5] pt-3 text-center">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#09090B]/50">
                      <CheckCircle2 className="h-3 w-3 text-[#3B82F6]" />
                      <span>اتصال با یک کلیک</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer Ecosystem Callout */}
        <div className="mx-auto mt-12 flex max-w-lg items-center justify-center gap-2.5 rounded-2xl bg-[#F4F4F5]/60 py-3.5 px-5 text-xs font-bold text-[#09090B]/80 border border-[#F4F4F5]">
          <ArrowRightLeft className="h-4 w-4 text-[#3B82F6]" />
          <span>یک حساب کاربری سوپردات = دسترسی به تمام خدمات متصل</span>
        </div>
      </div>
    </section>
  );
}
