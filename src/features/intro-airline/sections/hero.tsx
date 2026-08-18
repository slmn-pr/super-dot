"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, MapPin, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AirHero() {
  return (
    <section className="relative min-h-[780px] overflow-hidden border-b bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main blue glow */}
        <div className="absolute left-[42%] top-[22%] h-[480px] w-[480px] rounded-full bg-sky-400/[0.08] blur-[140px]" />

        <div className="absolute bottom-[-120px] right-[5%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="container relative mx-auto flex min-h-[780px] max-w-7xl items-center px-5 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-30"
          >
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-medium backdrop-blur">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                <Plane className="h-3 w-3 text-blue-500" />
              </span>

              <span>DOT ONE AIR</span>

              <span className="text-muted-foreground">
                سفر هوایی در سوپردات
              </span>
            </div>

            <h1 className="text-balance text-5xl font-black leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              پروازت را
              <br />
              <span className="text-blue-500">از اینجا</span>
              <br />
              شروع کن.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              مقصدت را انتخاب کن، پروازت را پیدا کن و سفر بعدی‌ات را ساده‌تر
              برنامه‌ریزی کن.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-blue-500 px-7 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600"
              >
                جستجوی پرواز
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl px-7"
              >
                مقصدهای محبوب
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span>✈ پروازهای متنوع</span>

              <span>•</span>

              <span>مقایسه آسان</span>

              <span>•</span>

              <span>رزرو ساده</span>
            </div>
          </motion.div>

          {/* Flight Visual */}
          <FlightVisual />
        </div>
      </div>
    </section>
  );
}

function FlightVisual() {
  return (
    <div className="relative mx-auto h-[530px] w-full max-w-[650px]">
      {/* Route map */}
      <RouteMap />

      {/* Floating destination */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -7, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          scale: { duration: 0.6, delay: 0.35 },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute right-[2%] top-[8%] z-20"
      >
        <DestinationBadge city="استانبول" code="IST" country="ترکیه" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.55 },
          scale: { duration: 0.6, delay: 0.55 },
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-[10%] left-[2%] z-20"
      >
        <DestinationBadge city="تهران" code="THR" country="ایران" />
      </motion.div>

      {/* Main Search Card */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="absolute left-1/2 top-1/2 z-30 w-[94%] max-w-[550px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="rounded-[30px] border border-border/80 bg-background/95 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
          <Image
            src="/images/intro-airlines.jpg"
            width={700}
            height={400}
            alt="Dotone airlines"
            className="size-full object-fill rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Small Flight Card */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-[2%] right-[20%] z-20 hidden sm:block"
      >
        <div className="flex items-center gap-3 rounded-2xl border bg-background/90 px-4 py-3 shadow-xl backdrop-blur">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
            <Plane className="h-4 w-4 text-blue-500" />
          </div>

          <div>
            <div className="text-[10px] text-muted-foreground">
              پرواز مستقیم
            </div>
            <div className="text-xs font-bold">THR → IST · 2h 50m</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AirportField({
  label,
  city,
  code,
}: {
  label: string;
  city: string;
  code: string;
}) {
  return (
    <div className="rounded-2xl border bg-muted/40 p-4">
      <div className="text-[10px] text-muted-foreground">{label}</div>

      <div className="mt-1 flex items-end justify-between">
        <div className="text-lg font-black">{city}</div>

        <div className="text-xs font-bold text-muted-foreground">{code}</div>
      </div>
    </div>
  );
}

function InfoField({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-muted/30 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-background">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>

      <div>
        <div className="text-[9px] text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-xs font-bold">{value}</div>
      </div>
    </div>
  );
}

function DestinationBadge({
  city,
  code,
  country,
}: {
  city: string;
  code: string;
  country: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-background/90 px-3 py-2.5 shadow-lg backdrop-blur">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
        <MapPin className="h-4 w-4 text-blue-500" />
      </div>

      <div>
        <div className="text-xs font-bold">
          {city}{" "}
          <span className="mr-1 text-[10px] text-muted-foreground">{code}</span>
        </div>

        <div className="text-[9px] text-muted-foreground">{country}</div>
      </div>
    </div>
  );
}

function RouteMap() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 650 530"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="air-route"
          x1="100"
          y1="420"
          x2="550"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.45" />
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main route */}
      <path
        d="M95 420 C180 260 350 350 550 105"
        stroke="url(#air-route)"
        strokeWidth="2"
        strokeDasharray="7 10"
      />

      {/* Secondary route */}
      <path
        d="M60 180 C180 70 390 90 590 230"
        stroke="#3B82F6"
        strokeOpacity="0.06"
        strokeWidth="1"
        strokeDasharray="4 8"
      />

      {/* Dots */}
      <circle cx="95" cy="420" r="5" fill="#3B82F6" fillOpacity="0.45" />

      <circle cx="550" cy="105" r="5" fill="#38BDF8" fillOpacity="0.5" />

      <circle cx="95" cy="420" r="12" stroke="#3B82F6" strokeOpacity="0.12" />

      <circle cx="550" cy="105" r="12" stroke="#38BDF8" strokeOpacity="0.12" />
    </svg>
  );
}
