"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MyDotCTA() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] py-28 text-white sm:py-40">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

      <div className="container relative mx-auto max-w-4xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <Sparkles className="h-5 w-5" />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-6xl">
            ایده‌ات را منتشر کن.
            <br />
            <span className="text-white/40">ارزشش را بساز.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/45 sm:text-base">
            به اقتصاد جدید محتوا بپیوند و مسیر ایده‌ات را از خلق تا ارزش‌آفرینی
            دنبال کن.
          </p>

          <Button
            size="lg"
            className="mt-9 h-13 rounded-xl bg-blue-500 px-8 text-white hover:bg-blue-600"
          >
            شروع فعالیت در MyDot
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}