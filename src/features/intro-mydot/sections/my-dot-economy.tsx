"use client";

import { motion } from "framer-motion";
import { ArrowDown, Coins, Star, Wallet } from "lucide-react";

export function MyDotEconomy() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] py-28 text-white sm:py-36">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="container relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold text-blue-400">ECONOMY</span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              هر محتوا می‌تواند
              <br />
              شروع یک اقتصاد باشد.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-white/55 sm:text-base">
              در MyDot، محتوا فقط برای دیده‌شدن منتشر نمی‌شود. تعامل و مشارکت
              می‌تواند بخشی از یک چرخه ارزش باشد.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8">
              <EconomyNode
                icon={<Wallet className="h-5 w-5" />}
                title="محتوای تو"
                subtitle="Idea / Video / Post"
              />

              <ArrowDown className="mx-auto my-5 h-5 w-5 text-white/20" />

              <EconomyNode
                icon={<Star className="h-5 w-5 fill-blue-500 text-blue-500" />}
                title="Stars"
                subtitle="پاداش تعامل و مشارکت"
                active
              />

              <ArrowDown className="mx-auto my-5 h-5 w-5 text-white/20" />

              <EconomyNode
                icon={<Coins className="h-5 w-5 text-blue-400" />}
                title="DOTO"
                subtitle="ارزش اقتصادی"
                active
              />

              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-1/2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_#3B82F6]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EconomyNode({
  icon,
  title,
  subtitle,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border p-4 ${
        active
          ? "border-blue-500/25 bg-blue-500/[0.06]"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          active ? "bg-blue-500/10" : "bg-white/5"
        }`}
      >
        {icon}
      </div>

      <div>
        <div className="font-bold">{title}</div>
        <div className="mt-1 text-xs text-white/40">{subtitle}</div>
      </div>
    </div>
  );
}
