"use client";

import { motion } from "framer-motion";
import { CreditCard, MapPin, Smartphone, UserCheck } from "lucide-react";
import { ANIMATE_FADE_IN_UP, STAGER_CONTAINER } from "../constant";
import { Card } from "@/components/ui/card";

export default function HowItWorksSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-[#09090B]">
          چگونه با Doto Trip سفر کنیم؟
        </h2>
        <p className="text-sm text-[#09090B]/70">
          شروع یک سفر باکیفیت تنها چند لمس با شما فاصله دارد
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={STAGER_CONTAINER}
      >
        {[
          {
            step: "۰۱",
            title: "ثبت مبدا و مقصد",
            desc: "مبدا و مقصد خود را روی نقشه مشخص کنید تا بهترین رانندگان نزدیک به شما پیشنهاد شوند.",
            icon: MapPin,
          },
          {
            step: "۰۲",
            title: "مشاهده مشخصات",
            desc: "اطلاعات کامل خودرو، امتیاز راننده و قیمت شفاف سفر را قبل از تایید بررسی کنید.",
            icon: UserCheck,
          },
          {
            step: "۰۳",
            title: "پیگیری آنلاین",
            desc: "حرکت راننده به سمت خود و مسیر سفر را زنده و با جزئیات کامل روی نقشه دنبال کنید.",
            icon: Smartphone,
          },
          {
            step: "۰۴",
            title: "پرداخت یکپارچه",
            desc: "هزینه سفر را مستقیم و بدون دردسر از طریق کیف‌پول اکوسیستم سوپردات پرداخت کنید.",
            icon: CreditCard,
          },
        ].map((item, idx) => (
          <motion.div key={idx} variants={ANIMATE_FADE_IN_UP}>
            <Card className="bg-[#F4F4F5]/60 border-none shadow-none rounded-2xl p-6 relative h-full">
              <span className="text-3xl font-extrabold text-[#3B82F6]/20 block mb-4">
                {item.step}
              </span>
              <item.icon className="w-7 h-7 text-[#3B82F6] mb-3" />
              <h4 className="font-bold text-[#09090B] mb-2">{item.title}</h4>
              <p className="text-xs text-[#09090B]/70 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
