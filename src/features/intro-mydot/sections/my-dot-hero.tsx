"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpLeft,
  Lightbulb,
  Play,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const nodes = [
  {
    label: "ایده",
    icon: Lightbulb,
    position: "right-[4%] top-[20%]",
    delay: 0,
  },
  {
    label: "ویدیو",
    icon: Play,
    position: "left-[5%] top-[24%]",
    delay: 0.8,
  },
  {
    label: "پست",
    icon: Sparkles,
    position: "right-[12%] bottom-[16%]",
    delay: 1.4,
  },
  {
    label: "جامعه",
    icon: Users,
    position: "left-[12%] bottom-[18%]",
    delay: 2,
  },
];

export function MyDotHero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden border-b bg-background">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="container relative mx-auto flex min-h-[760px] max-w-7xl flex-col items-center justify-center px-5 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium backdrop-blur"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
            <Sparkles className="h-3 w-3" />
          </span>

          <span>MYDOT</span>

          <span className="text-muted-foreground">اقتصاد محتوای سوپردات</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative z-20 max-w-3xl text-center"
        >
          <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            ایده‌ات{" "}
            <span className="relative whitespace-nowrap">
              ارزش دارد
              <span className="absolute -bottom-2 right-0 h-2 w-full rounded-full bg-blue-500/15" />
            </span>
            .
            <br />
            <span className="text-muted-foreground">
              MyDot آن را به ارزش تبدیل می‌کند.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            ایده‌ها و محتواهای ارزشمندت را منتشر کن، جامعه خودت را بساز و از
            ارزشی که خلق می‌کنی سهم داشته باش.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-blue-500 px-7 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600"
            >
              شروع فعالیت در MyDot
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>

            <Button variant="ghost" size="lg" className="h-12 rounded-xl px-7">
              MyDot چطور کار می‌کند؟
              <ArrowUpLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Ecosystem */}
        <div className="relative mt-16 h-[360px] w-full max-w-5xl sm:h-[420px]">
          {/* Connection lines */}
          <EcosystemLines />

          {/* Floating nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: node.delay },
                  scale: { duration: 0.5, delay: node.delay },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: node.delay,
                  },
                }}
                className={`absolute ${node.position} z-20`}
              >
                <div className="flex items-center gap-2 rounded-2xl border border-border/70 bg-background/90 px-3 py-2 shadow-xl shadow-black/5 backdrop-blur-md">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-muted">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="text-sm font-semibold">{node.label}</span>
                </div>
              </motion.div>
            );
          })}

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="absolute left-1/2 top-1/2 z-30 w-[230px] -translate-x-1/2 -translate-y-1/2 sm:w-[280px]"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-background p-5 shadow-2xl shadow-blue-500/10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />

                    <div>
                      <div className="text-xs font-bold">Creator</div>
                      <div className="text-[10px] text-muted-foreground">
                        MyDot
                      </div>
                    </div>
                  </div>

                  <Sparkles className="h-4 w-4 text-blue-500" />
                </div>

                <div className="rounded-2xl bg-muted/60 p-4">
                  <p className="text-sm font-semibold leading-7">
                    هر ایده می‌تواند شروع یک مسیر تازه باشد.
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>♡ 1.2K</span>
                  <span>💬 84</span>

                  <span className="inline-flex items-center gap-1 font-semibold text-blue-500">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    +240
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-[4%] left-1/2 z-40 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-background/95 px-5 py-3 shadow-xl shadow-blue-500/10 backdrop-blur">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
                <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
              </div>

              <div className="text-right">
                <div className="text-xs text-muted-foreground">
                  ارزش ایجاد شده
                </div>
                <div className="text-sm font-bold">+240 Stars</div>
              </div>

              <div className="mx-1 h-7 w-px bg-border" />

              <div className="text-sm font-black text-blue-500">DOTO</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EcosystemLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      viewBox="0 0 1000 420"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="mydot-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M80 90 C280 110 320 190 500 210"
        stroke="url(#mydot-line)"
        strokeWidth="1.5"
        strokeDasharray="5 8"
      />

      <path
        d="M920 80 C720 110 680 180 500 210"
        stroke="url(#mydot-line)"
        strokeWidth="1.5"
        strokeDasharray="5 8"
      />

      <path
        d="M130 330 C300 310 360 250 500 210"
        stroke="url(#mydot-line)"
        strokeWidth="1.5"
        strokeDasharray="5 8"
      />

      <path
        d="M870 330 C700 310 640 250 500 210"
        stroke="url(#mydot-line)"
        strokeWidth="1.5"
        strokeDasharray="5 8"
      />

      <circle cx="500" cy="210" r="5" fill="#3B82F6" fillOpacity="0.35" />
    </svg>
  );
}
