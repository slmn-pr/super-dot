"use client";

import { motion } from "framer-motion";
import { Scale, Target, Sparkles, Check } from "lucide-react";
import Image from "next/image";

const weights = [
  {
    label: "۱ گرمی",
    weight: "1.00 Gram",
    purity: "999.999",
    image: "/images/1_ounce_QowWu74.webp",
    description:
      "کوچک‌ترین و نقدشونده‌ترین وزن شمش طلا. ایده‌آل برای تبدیل پس‌اندازهای خرد ماهانه به طلای خالص بدون درگیر کردن مبالغ بالا.",
    advantage: "امکان خرید با حداقل سرمایه و کارمزد مناسب برای خریدهای متوالی.",
    targetAudience:
      "پس‌اندازکنندگان خرد، خریداران هدیه ارزشمند و شروع‌کنندگان مسیر سرمایه‌گذاری.",
  },
  {
    label: "۲.۵ گرمی",
    weight: "2.50 Grams",
    purity: "999.999",
    image: "/images/1_ounce_QowWu74.webp",
    description:
      "وزنی بینابینی و بسار محبوب برای ایجاد نظم در پس‌انداز. گزینه اقتصادی که ارزش ذاتی بالا را با نقدشوندگی سریع ترکیب می‌کند.",
    advantage:
      "کاهش نسبی کارمزد نسبت به وزن ۱ گرمی و ایجاد تنوع در سبد پس‌انداز.",
    targetAudience:
      "افرادی که به دنبال پس‌انداز منظم و دوره‌ای (پایان هر ماه) هستند.",
  },
  {
    label: "۵ گرمی",
    weight: "5.00 Grams",
    purity: "999.999",
    image: "/images/1_ounce_QowWu74.webp",
    description:
      "نقطه تعادل طلایی میان کارمزد ساخت و وزن شمش. وزنی استاندارد که جایگزینی هوشمندانه برای سکه‌های رایج بازار محسوب می‌شود.",
    advantage: "خرید طلای خالص با حباب صفر در مقایسه با سکه‌های طلا.",
    targetAudience:
      "سرمایه‌گذاران میان‌مدت و افرادی که مایل به حفظ ارزش دارایی در برابر تورم هستند.",
  },
  {
    label: "ربع اونس",
    weight: "7.77 Grams",
    purity: "999.999",
    image: "/images/1_ounce_QowWu74.webp",
    description:
      "منطبق بر واحدهای سنجش بین‌المللی طلا. این شمش بر اساس شاخص جهانی اونس قیمت‌گذاری شده و معامله می‌شود.",
    advantage:
      "معامله مستمر بر اساس قیمت اونس جهانی بدون وابستگی به حباب داخلی.",
    targetAudience:
      "معامله‌گران حرفه‌ای طلا و افرادی که هدفشان معامله بر پایه شاخص‌های جهانی است.",
  },
  {
    label: "نیم اونس",
    weight: "15.55 Grams",
    purity: "999.999",
    image: "/images/1_ounce_QowWu74.webp",
    description:
      "وزنی سنگین و ایده‌آل برای بنچ‌مارک‌های سرمایه‌گذاری بزرگ‌تر. حجم بالای طلا در قالب یک پلمپ امنیتی واحد.",
    advantage:
      "کاهش چشمگیر کارمزد به ازای هر گرم طلا در مقایسه با وزن‌های خرد.",
    targetAudience:
      "سرمایه‌گذاران جدی که به دنبال نقدشوندگی یکجا و حجم بالا هستند.",
  },
  {
    label: "۱ اونس کامل",
    weight: "31.10 Grams",
    purity: "999.999",
    image: "/images/1_ounce_QowWu74.webp",
    description:
      "استاندارد طلایی و پرچمدار معاملات طلا در جهان. بیشترین میزان خلوص و اصالت با کمترین درصد کارمزد پرداختی.",
    advantage:
      "پایین‌ترین نرخ کارمزد ساخت، بیشترین ارزش افزوده در بازخرید و قابلیت معامله بین‌المللی.",
    targetAudience:
      "سرمایه‌گذاران کلان، مدیران سبد دارایی و خریداران عمده طلا.",
  },
];

export function GoldWeights() {
  return (
    <section className="relative overflow-hidden border-t bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <Scale className="h-3.5 w-3.5" />
              تنوع وزن‌ها و راهنمای انتخاب
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              وزن‌های استاندارد شمش دات‌وان
            </h2>

            <p className="text-sm leading-6 text-muted-foreground">
              توضیحات و مزایای هر وزن را بررسی کنید تا مناسب‌ترین شمش را بر اساس
              استراتژی مالی خود انتخاب کنید.
            </p>
          </div>
        </div>

        {/* Vertical Cards Showcase (No Borders) */}
        <div className="space-y-8">
          {weights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative rounded-3xl bg-card p-6 sm:p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="flex-col items-center justify-around md:flex md:justify-around md:items-center gap-5">
                {/* Content Container */}
                <div className="flex flex-col justify-between space-y-5 max-w-md">
                  {/* Title & Weight Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-black text-card-foreground sm:text-3xl">
                        شمش {item.label}
                      </h3>
                      <span className="text-sm font-semibold text-muted-foreground dir-ltr">
                        ({item.weight})
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                      <Sparkles className="h-3.5 w-3.5" />
                      خلوص {item.purity}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.description}
                  </p>

                  {/* Advantage & Target Audience Grid */}
                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    {/* Advantage */}
                    <div className="rounded-2xl bg-muted/40 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-foreground mb-1.5">
                        <Check className="h-4 w-4 text-amber-500" />
                        مزیت کلیدی
                      </div>
                      <p className="text-xs leading-6 text-muted-foreground">
                        {item.advantage}
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div className="rounded-2xl bg-muted/40 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-foreground mb-1.5">
                        <Target className="h-4 w-4 text-amber-500" />
                        مناسب برای
                      </div>
                      <p className="text-xs leading-6 text-muted-foreground">
                        {item.targetAudience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Container (No Border, Clean Background) */}
                <div className="relative flex aspect-square max-w-lg w-full items-center justify-center overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={`شمش طلا ${item.label}`}
                    fill
                    className="object-contain p-4 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
