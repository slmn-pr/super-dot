"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, MoreHorizontal, Star } from "lucide-react";

export function MyDotShowcase() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold text-blue-500">
              CREATOR SHOWCASE
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              جایی که محتوا
              <br />
              زنده می‌شود.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              MyDot فقط درباره محتوا صحبت نمی‌کند؛ خود محصول، محتوا و تعامل میان
              Creatorها و مخاطبان را به تجربه اصلی تبدیل می‌کند.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-[30px] border bg-background p-5 shadow-2xl shadow-black/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />

                  <div>
                    <div className="text-sm font-bold">Alex Morgan</div>
                    <div className="text-xs text-muted-foreground">Creator</div>
                  </div>
                </div>

                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="mt-5 rounded-2xl bg-muted/60 p-7">
                <p className="text-lg font-bold leading-9">
                  بعضی ایده‌ها فقط برای خوانده‌شدن نیستند؛ برای تغییر دادن ساخته
                  شده‌اند.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4" />
                  1.2K
                </span>

                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  84
                </span>

                <span className="mr-auto flex items-center gap-1.5 font-semibold text-blue-500">
                  <Star className="h-4 w-4 fill-current" />
                  +240
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 hidden rounded-2xl border bg-background p-4 shadow-xl sm:block"
            >
              <div className="text-[10px] text-muted-foreground">Community</div>
              <div className="mt-1 text-sm font-bold">+12.8K Members</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
