"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  Coins,
  Gem,
  Clock,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function GoldHero() {
  return (
    <section className="relative min-h-[780px] overflow-hidden border-b bg-background">
      <div className="container relative mx-auto flex min-h-[780px] max-w-7xl items-center px-5 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-30"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-7">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20">
                <Coins className="h-3 w-3 text-amber-500" />
              </span>
              <span className="font-bold">DOT ONE GOLD</span>
              <span className="text-muted-foreground">
                • سرمایه‌گذاری هوشمند
              </span>
            </div>

            <h1 className="text-balance text-5xl font-black leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              طلای ۲۴ عیار با
              <br />
              <span className="text-amber-600 dark:text-amber-400">
                خلوص ۹۹.۹۹۹۹
              </span>
              <br />
              بدون حباب بازار.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              خرید مستقیم شمش‌های استاندارد جهانی بر اساس قیمت اونس جهانی. تحویل
              فیزیکی آنی یا تحویل حضوری از مرکز مبادله.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-primary px-7 font-bold text-primary-foreground shadow-lg shadow-primary/10 hover:bg-primary/90"
              >
                خرید آنلاین شمش طلا
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-border/80 px-7 hover:bg-amber-500/5 hover:border-amber-500/30"
                onClick={() =>
                  window.open(
                    "https://dotone.gold/bar-authentication",
                    "_blank",
                  )
                }
              >
                اصالت‌سنجی پلمپ
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Gem className="h-3.5 w-3.5 text-amber-500" />
                خلوص بی‌نظیر 99.9999
              </span>

              <span>•</span>

              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-amber-500" />
                بازار ۲۴ ساعته
              </span>

              <span>•</span>

              <span className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-amber-500" />
                پلمپ امنیتی هوشمند
              </span>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <GoldVisual />
        </div>
      </div>
    </section>
  );
}

function GoldVisual() {
  return (
    <div className="relative mx-auto h-[530px] w-full max-w-[650px]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Floating Badge 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          scale: { duration: 0.6, delay: 0.35 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-[2%] top-[8%] z-40"
      >
        <div className="flex items-center gap-3 rounded-2xl bg-card/90 px-3.5 py-2.5 shadow-xl shadow-amber-500/5 backdrop-blur">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-card-foreground">
              نرخ‌گذاری جهانی
            </div>
            <div className="text-[9px] text-muted-foreground">
              شفاف و بدون حباب داخلی
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.55 },
          scale: { duration: 0.6, delay: 0.55 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[10%] left-[2%] z-40"
      >
        <div className="flex items-center gap-3 rounded-2xl bg-card/90 px-3.5 py-2.5 shadow-xl shadow-amber-500/5 backdrop-blur">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-card-foreground">
              پاداش بازخرید
            </div>
            <div className="text-[9px] text-muted-foreground">
              بازگشت تا ۴.۵٪ کارمزد
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Card (No Border) */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="absolute left-1/2 top-1/2 z-30 w-[94%] max-w-[550px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="overflow-hidden rounded-[30px] bg-card p-2 shadow-2xl shadow-amber-500/10 backdrop-blur-xl">
          <Image
            src="/images/1_ounce_QowWu74.webp"
            width={700}
            height={400}
            alt="شمش طلا دات وان"
            className="size-full rounded-[24px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
