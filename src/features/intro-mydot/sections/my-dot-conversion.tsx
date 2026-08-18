"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";

export function MyDotConversion() {
  return (
    <section className="border-y bg-muted/20 py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-5 text-center">
        <span className="text-sm font-semibold text-blue-500">
          MYDOT ECONOMY
        </span>

        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
          مشارکتت دیده می‌شود.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
          Stars مکانیزم پاداش تعامل در MyDot هستند و در مدل اقتصادی محصول
          می‌توانند به DOTO تبدیل شوند.
        </p>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-5 sm:flex-row">
          <motion.div
            whileHover={{ y: -4 }}
            className="w-full rounded-3xl border bg-background p-7 shadow-xl shadow-black/5"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
              <Star className="h-6 w-6 fill-blue-500 text-blue-500" />
            </div>

            <div className="mt-5 text-3xl font-black">100</div>

            <div className="mt-1 text-sm text-muted-foreground">Stars</div>
          </motion.div>

          <ArrowLeft className="hidden h-5 w-5 text-muted-foreground sm:block" />

          <div className="text-muted-foreground sm:hidden">↓</div>

          <motion.div
            whileHover={{ y: -4 }}
            className="w-full rounded-3xl border border-blue-500/20 bg-background p-7 shadow-xl shadow-blue-500/5"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-lg font-black text-blue-500">
              ◆
            </div>

            <div className="mt-5 text-3xl font-black text-blue-500">1</div>

            <div className="mt-1 text-sm text-muted-foreground">DOTO</div>
          </motion.div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          * نسبت تبدیل نمونه است و می‌تواند در مدل اقتصادی نهایی محصول
          configurable باشد.
        </p>
      </div>
    </section>
  );
}
