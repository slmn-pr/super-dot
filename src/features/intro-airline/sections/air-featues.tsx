"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Headphones,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "صدور آنی و بدون معطلی",
    description:
      "تأییدیه رزرو و بلیط شما بلافاصله پس از پرداخت نهایی صادر و آماده دریافت می‌شود.",
  },
  {
    icon: CreditCard,
    title: "یکپارچه با کیف پول سوپردات",
    description:
      "امکان پرداخت آسان و استفاده از اعتبار سوپردات برای خریدهای بعدی.",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت بهترین قیمت",
    description:
      "مقایسه خودکار شفاف‌ترین و مناسب‌ترین قیمت‌های ایرلاین‌های داخلی و خارجی.",
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴/۷ تخصصی",
    description:
      "تیم پشتیبانی سوپردات در تمامی مراحل سفر همراه و پاسخگوی شماست.",
  },
];

export function AirFeatures() {
  return (
    <section className="relative overflow-hidden border-t bg-muted/20 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-500">
            <Sparkles className="h-3.5 w-3.5" />
            چرا دات‌وان ایر؟
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            تجربه‌ای مدرن در خدمات پرواز
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            ما زیرساخت پرواز را با سادگی و سرعت اکوسیستم سوپردات ترکیب کرده‌ایم.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl border border-border/60 bg-background p-7 shadow-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Icon className="h-6 w-6 text-blue-500 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-lg font-bold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
