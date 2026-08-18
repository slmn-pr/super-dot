"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  Navigation,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PostExHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-20 lg:py-28 text-[#09090B] dir-rtl">
      {/* Subtle Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#09090B_1px,transparent_1px),linear-gradient(to_bottom,#09090B_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-right"
          >
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-bold text-[#3B82F6]">
              <Truck className="h-4 w-4" />
              <span>پستکس (PostEx) • ارسال و لجستیک هوشمند</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-3xl font-black tracking-tight text-[#09090B] sm:text-5xl leading-[1.25]">
              مرسوله‌ات را با
              <br />
              <span className="text-[#3B82F6]">
                سریع‌ترین زمان و رهگیری زنده
              </span>
              <br />
              به مقصد برسان.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-sm leading-8 text-[#09090B]/70 sm:text-base">
              از پیک فوری شهری تا ارسال بین‌شهری و باربری سنگین؛ با پستکس همه
              مرسولات خود را روی نقشه به‌صورت زنده دنبال کنید و با ایمنی کامل
              تحویل دهید.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="h-13 w-full sm:w-auto rounded-xl bg-[#3B82F6] px-8 text-sm font-bold text-[#FFFFFF] shadow-lg shadow-[#3B82F6]/20 hover:bg-[#3B82F6]/90 transition-all"
              >
                <span>ثبت درخواست ارسال</span>
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-13 w-full sm:w-auto rounded-xl border-[#F4F4F5] bg-[#F4F4F5]/50 px-7 text-sm font-bold text-[#09090B] hover:bg-[#F4F4F5]"
              >
                <Navigation className="ml-2 h-4 w-4 text-[#3B82F6]" />
                <span>رهگیری مرسوله</span>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex items-center gap-8 border-t border-[#F4F4F5] pt-6 text-xs text-[#09090B]/60">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#3B82F6]" />
                <span>تحویل در کمتر از ۴۵ دقیقه</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#3B82F6]" />
                <span>بیمه ۱۰۰٪ ارزش کالا</span>
              </div>
            </div>
          </motion.div>

          {/* Left Visual Interactive Card / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Main Interactive Map Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#F4F4F5] bg-[#FFFFFF] shadow-2xl shadow-[#09090B]/5">
              <Image
                src="/images/intro-postex.jpg"
                alt="Postex"
                width={700}
                height={400}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
