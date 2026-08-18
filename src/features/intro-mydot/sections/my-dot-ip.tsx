"use client";

import { motion } from "framer-motion";

const steps = ["Idea", "Content", "Audience", "Community", "IP", "Value"];

export function MyDotIP() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold text-blue-500">
              INTELLECTUAL PROPERTY
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              ایده فقط
              <br />
              یک پست نیست.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-muted-foreground sm:text-base">
              هر محتوای ارزشمند بخشی از هویت و دارایی فکری سازنده آن است. MyDot
              با نگاه به اقتصاد IP، مسیر جدیدی برای خلق، توزیع و ارزش‌آفرینی
              محتوا ایجاد می‌کند.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border bg-muted/20 p-6 sm:p-10">
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-background text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 rounded-xl border bg-background px-4 py-3">
                      <span
                        className={
                          step === "Value"
                            ? "font-bold text-blue-500"
                            : "font-semibold"
                        }
                      >
                        {step}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
