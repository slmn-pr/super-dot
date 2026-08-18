"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Ticket, Compass, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    step: "۰۱",
    icon: Compass,
    title: "مقصد و تاریخ را مشخص کن",
    description:
      "با موتور جستجوی هوشمند، مسیرهای مستقیم و پروازهای پیشنهادی را بررسی کنید.",
  },
  {
    step: "۰۲",
    icon: Ticket,
    title: "پرواز دلخواه را انتخاب کن",
    description:
      "قیمت‌ها، ساعت پرواز و کلاس‌های پروازی مختلف را مقایسه کرده و تصمیم بگیرید.",
  },
  {
    step: "۰۳",
    icon: PlaneTakeoff,
    title: "آماده پرواز شو!",
    description:
      "پرداخت را سریع انجام دهید، کارت پرواز را دریافت کنید و به مسیر ادامه دهید.",
  },
];

export function AirJourney() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            سفر شما در ۳ گام ساده
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            بدون پیچیدگی‌های رایج رزروهای سنتی، تنها با چند کلیک.
          </p>
        </div>

        <div className="relative mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative rounded-3xl border bg-muted/10 p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-blue-500/30">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-blue-500">
                  <CheckCircle2 className="h-4 w-4" />
                  بررسی شده و سریع
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
