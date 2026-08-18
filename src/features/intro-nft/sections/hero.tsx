"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, CirclePlay, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import NftVisual from "../components/nft-visual";
import { FEATURES, STATS } from "../constants";

export default function NftHeroSection() {
  return (
    <section dir="rtl" className="relative isolate overflow-hidden bg-white">
      {/* Background */}
      {/* ================= MODERN SUBTLE MESH DOTS BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* 1. هالوهای نوری ملایم پشت محتوا (Soft Gradient Glow) */}
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-cyan-400/10 blur-[120px]" />
        <div className="absolute -right-20 top-10 h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-[100px]" />

        {/* 2. الگوی نقاط ریز و مدرن (Subtle Mesh Dots Pattern) */}
        <div
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black_40%,transparent_100%)]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.35) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* 3. لایه محوکننده پایینی برای اتصال نرم به بخش‌های بعدی */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[680px] items-center gap-12  lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* ================= CONTENT ================= */}
          <div className="order-2 max-w-xl lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="mb-7 h-10 rounded-full border border-blue-100 bg-blue-50/70 px-4 text-sm font-medium text-blue-600 shadow-none"
              >
                <Sparkles className="ml-2 size-4" />
                NFT در سوپردات
              </Badge>

              <h1 className="text-[42px] font-black leading-[1.3] tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-[58px]">
                مالک واقعی دارایی‌های
                <br />
                <span className="text-blue-500">دیجیتال</span> خود باشید
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-zinc-500 sm:text-lg">
                با سوپردات، NFT بسازید، نگهداری کنید، معامله کنید و مالک
                دارایی‌های دیجیتال منحصربه‌فرد خود باشید.
              </p>

              {/* Actions */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-13 rounded-xl bg-blue-500 px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(59,130,246,0.25)] transition-all hover:bg-blue-600 hover:shadow-[0_16px_36px_rgba(59,130,246,0.35)]"
                >
                  <Link href="/nft" className="flex items-center gap-1">
                    شروع کنید
                    <ChevronLeft className="mr-1 size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-13 rounded-xl px-5 text-sm font-semibold text-zinc-700 hover:bg-zinc-100/80"
                >
                  <Link href="#nft-video" className="flex items-center gap-1">
                    <CirclePlay className="ml-2 size-5 stroke-[1.7]" />
                    تماشای ویدیو
                  </Link>
                </Button>
              </div>

              {/* Features */}
              <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex flex-col items-center gap-2.5 text-center sm:items-start sm:text-right"
                    >
                      <div className="flex size-12 items-center justify-center rounded-xl border border-zinc-100 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                        <Icon
                          className="size-5 text-blue-500"
                          strokeWidth={1.7}
                        />
                      </div>
                      <span className="text-xs font-medium text-zinc-600">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ================= NFT VISUAL ================= */}
          <div className="order-1 flex min-h-[500px] items-center justify-center lg:order-2">
            <NftVisual />
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="pb-10 lg:pb-14">
          <Card className="overflow-hidden rounded-[28px] border-zinc-100 bg-white/90 p-0 shadow-[0_15px_50px_rgba(0,0,0,0.035)] backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={[
                    "relative flex flex-col items-center justify-center px-5 py-7 text-center",
                    index !== STATS.length - 1
                      ? "after:absolute after:left-0 after:top-1/2 after:hidden after:h-12 after:w-px after:-translate-y-1/2 after:bg-zinc-100 lg:after:block"
                      : "",
                    index === 0 ? "border-b border-zinc-100 lg:border-b-0" : "",
                    index === 1 ? "border-b border-zinc-100 lg:border-b-0" : "",
                  ].join(" ")}
                >
                  <span className="text-2xl font-black tracking-tight text-blue-500 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs font-medium text-zinc-400 sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
