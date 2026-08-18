"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AirCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 p-8 sm:p-16 text-white shadow-2xl shadow-blue-500/20">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
              <Plane className="h-7 w-7 text-white" />
            </div>

            <h2 className="text-3xl font-black sm:text-5xl">
              آماده شروع پرواز بعدی هستید؟
            </h2>

            <p className="mt-4 text-base text-white/80 sm:text-lg">
              همین حالا مقصد خود را جستجو کنید و از پیشنهادهای اختصاصی سوپردات
              بهره‌مند شوید.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="h-14 rounded-2xl bg-white px-9 text-base font-bold text-blue-600 hover:bg-white/90 shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                جستجوی بلیط پرواز
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
