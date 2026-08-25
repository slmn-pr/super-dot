"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Building2,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoldCTA() {
  return (
    <section className="relative overflow-hidden border-t bg-muted/20 py-20 sm:py-28">
      <div className="container relative mx-auto max-w-7xl px-5">
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Delivery Option 1 (No Border) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-amber-500/5"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Truck className="h-6 w-6" />
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                ارسال رایگان + بیمه (فرصت محدود)
              </div>
              <h3 className="text-xl font-bold text-card-foreground">
                ارسال پستی سراسری (Postex)
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                شمش‌های خریداری‌شده در بسته‌بندی‌های امنیتی امن با بیمه کامل
                محموله از طریق پستکس به سراسر کشور ارسال می‌شوند.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-border/40 pt-4 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              پوشش کامل بیمه تا لحظه تحویل به شما
            </div>
          </motion.div>

          {/* Delivery Option 2 (No Border) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-amber-500/5"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                تحویل حضوری فوری
              </div>
              <h3 className="text-xl font-bold text-card-foreground">
                تحویل از مرکز مبادله طلا
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                امکان مراجعه حضوری و تحویل مستقیم شمش حتی در مقادیر پایین (از ۱
                گرم به بالا) در مرکز مبادله دات‌وان گلد.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-border/40 pt-4 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              احراز هویت و دریافت آنی حضوری
            </div>
          </motion.div>
        </div>

        {/* Main CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] bg-slate-950 p-8 text-white shadow-2xl shadow-amber-500/10 sm:p-14"
        >
          {/* Background Glow Effects */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              همین حالا سرمایه‌گذاری را شروع کنید
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              خرید آسان طلا با خلوص جهانی ۹۹.۹۹۹۹
            </h2>

            <p className="mt-4 text-sm font-medium leading-7 opacity-90 sm:text-base text-zinc-300">
              بدون حباب، با قیمت واقعی اونس جهانی و پاداش بازخرید اختصاصی
              سوپردات.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-13 rounded-2xl bg-amber-500 px-8 font-bold text-black shadow-lg shadow-amber-500/20 hover:bg-amber-400"
              >
                ثبت سفارش شمش طلا
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-2xl border-white/20 bg-transparent px-8 font-bold text-white hover:bg-white/10 hover:text-white"
                onClick={() => window.open("https://dotone.gold", "_blank")}
              >
                سایت رسمی دات‌وان گلد
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
