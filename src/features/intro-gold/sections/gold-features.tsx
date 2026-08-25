"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Globe,
  Truck,
  RotateCcw,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "نرخ‌گذاری بر اساس اونس جهانی",
    description:
      "حذف کامل حباب قیمت بازار داخلی و ارائه قیمت واقعی و شفاف بر پایه شاخص‌های بین‌المللی.",
  },
  {
    icon: Sparkles,
    title: "خلوص فوق‌العاده ۹۹.۹۹۹۹",
    description:
      "شمش ۲۴ عیار با درجه خلوص ۶ نه (99.9999)، فراتر از استانداردهای معمول بازار (99.999).",
  },
  {
    icon: Clock,
    title: "بازار معامله ۲۴ ساعته",
    description:
      "امکان دسترسی، بررسی قیمت لحظه‌ای و ثبت سفارش در تمامی ساعات شبانه‌روز.",
  },
  {
    icon: RotateCcw,
    title: "پاداش ویژه بازخرید",
    description:
      "بازپرداخت بخشی از کارمزد (تا ۴.۵٪) در صورت فروش مجدد شمش سالم با پلمپ اولیه به دات‌وان.",
  },
  {
    icon: Truck,
    title: "تحویل فیزیکی و ارسال رایگان",
    description:
      "ارسال ایمن از طریق پستکس به همراه بیمه کامل رایگان (فرصت محدود) یا تحویل حضوری مرکز مبادله.",
  },
  {
    icon: ShieldCheck,
    title: "پلمپ امنیتی و اصالت‌سنجی",
    description:
      "قابلیت استعلام و اصالت‌سنجی آنی پلمپ شمش‌ها از طریق درگاه اختصاصی dotone.gold.",
  },
];

export function GoldFeatures() {
  return (
    <section className="relative overflow-hidden border-t bg-muted/20 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            چرا دات‌وان گلد؟
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            مزایای متمایز خرید شمش طلا
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            ترکیب امنیت استانداردهای جهانی و سهولت زیرساخت سوپردات برای حفظ و
            رشد سرمایه شما.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl border border-border/60 bg-background p-7 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                  <Icon className="h-6 w-6 text-amber-500 group-hover:text-black" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>

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