"use client";

import { motion } from "framer-motion";
import {
  RotateCcw,
  CheckCircle2,
  Coins,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const buybackSteps = [
  {
    title: "خرید شمش استاندارد",
    description:
      "شمش طلا با خلوص ۹۹.۹۹۹۹ و پلمپ امنیتی اختصاصی را دریافت کنید.",
  },
  {
    title: "نگهداری پلمپ سالم",
    description: "کاور و پلمپ امنیتی شمش را تا زمان فروش سالم نگه دارید.",
  },
  {
    title: "فروش مجدد به دات‌وان",
    description: "شمش خود را در هر زمان به خود مجموعه دات‌وان گلد بازفروشید.",
  },
  {
    title: "دریافت پاداش کارمزد",
    description: "تا ۴.۵٪ از کارمزد پرداختی اولیه به شما بازگردانده می‌شود.",
  },
];

export function GoldBuyback() {
  return (
    <section className="relative overflow-hidden border-t bg-background py-24 sm:py-32">
      <div className="container relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <RotateCcw className="h-3.5 w-3.5" />
              طرح بازخرید تضمینی
            </div>

            <h2 className="mt-4 text-3xl font-black leading-[1.15] tracking-tight sm:text-5xl">
              با فروش مجدد به ما،
              <br />
              <span className="text-amber-600 dark:text-amber-400">
                بخشی از کارمزد
              </span>{" "}
              را پس بگیرید!
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              دات‌وان گلد اصالت و کیفیت شمش‌های خود را تضمین می‌کند. در صورتی که
              مشتری شمش خریده شده را با شرط{" "}
              <strong className="font-bold text-foreground">
                سالم بودن پلمپ امنیتی
              </strong>{" "}
              به خود ما بفروشد، درصدی از کارمزد اولیه به عنوان پاداش وفاداری به
              مشتری پرداخت می‌شود.
            </p>

            <div className="mt-8 space-y-4">
              {buybackSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-sm font-bold text-amber-600 dark:text-amber-400">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2 (No Border Card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-xl shadow-amber-500/5">
              <div className="flex items-center justify-between border-b border-border/40 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      مثال محاسبه پاداش
                    </div>
                    <div className="text-sm font-bold text-card-foreground">
                      شمش ۱ گرمی دات‌وان
                    </div>
                  </div>
                </div>
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                  ۴.۵٪ بازگشت کارمزد
                </span>
              </div>

              <div className="my-8 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">شرط بهره‌مندی:</span>
                  <span className="flex items-center gap-1.5 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-amber-500" />
                    پلمپ امنیتی دست‌نخورده
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">استعلام اصالت:</span>
                  <span className="font-semibold text-foreground dir-ltr">
                    dotone.gold
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">سرعت واریز:</span>
                  <span className="font-semibold text-foreground">
                    تسویه آنی پس از تحویل
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Sparkles className="h-4 w-4 shrink-0 text-amber-500" />
                  سرمایه‌گذاری بدون ریسک نقدشوندگی
                </div>
                <p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">
                  شمش‌های دات‌وان به دلیل دارا بودن استاندارد جهانی و پلمپ
                  هوشمند، هم در بازار آزاد و هم مستقیماً توسط دات‌وان با
                  بالاترین ارزش نقد می‌شوند.
                </p>
              </div>

              <Button
                className="mt-6 h-11 w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/10 hover:bg-primary/90"
                onClick={() =>
                  window.open(
                    "https://dotone.gold/bar-authentication",
                    "_blank",
                  )
                }
              >
                بررسی قوانین پلمپ و اصالت‌سنجی
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
