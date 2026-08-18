"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ANIMATE_FADE_IN_UP, STAGER_CONTAINER } from "../constant";
import { Car, Navigation, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function DeepDiveSection() {
  return (
    <section className="py-20 bg-[#F4F4F5]/50 border-y border-[#F4F4F5] px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#09090B]">
            چرا Doto Trip استانداردهای جابه‌جایی را تغییر داده؟
          </h2>
          <p className="text-sm text-[#09090B]/70">
            ما در Doto Trip کیفیت و امنیت سفر شما را به شانس واگذار نمی‌کنیم
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGER_CONTAINER}
        >
          {/* Feature 1 */}
          <motion.div variants={ANIMATE_FADE_IN_UP}>
            <Card className="bg-[#FFFFFF] border-[#F4F4F5] shadow-sm hover:shadow-md transition-shadow h-full rounded-2xl">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-[#F4F4F5] text-[#3B82F6] rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-[#09090B]">
                  ناوگان کارشناسی‌شده
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-[#09090B]/70 leading-relaxed">
                  تمامی خودروهای فعال در سرویس Doto Trip قبل از شروع کار ارزیابی
                  کیفیت، سلامت فنی و نظافت می‌شوند تا سفر شما بدون کوچک‌ترین
                  دغدغه‌ای انجام شود.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={ANIMATE_FADE_IN_UP}>
            <Card className="bg-[#FFFFFF] border-[#F4F4F5] shadow-sm hover:shadow-md transition-shadow h-full rounded-2xl">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-[#F4F4F5] text-[#3B82F6] rounded-xl flex items-center justify-center">
                  <Navigation className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-[#09090B]">
                  مسیریابی لحظه‌ای روی نقشه
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-[#09090B]/70 leading-relaxed">
                  موقعیت لحظه‌ای خودرو، زمان دقیق رسیدن راننده به شما و مسیر
                  بهینه‌سازی‌شده بر اساس ترافیک زنده را شفاف روی نقشه مشاهده
                  کنید.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={ANIMATE_FADE_IN_UP}>
            <Card className="bg-[#FFFFFF] border-[#F4F4F5] shadow-sm hover:shadow-md transition-shadow h-full rounded-2xl">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-[#F4F4F5] text-[#3B82F6] rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-[#09090B]">
                  امنیت و رصد هوشمند سفر
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-[#09090B]/70 leading-relaxed">
                  احراز هویت کامل رانندگان، پشتیبانی اختصاصی در تمام طول مسیر و
                  امکان اشتراک‌گذاری زنده موقعیت با نزدیکان برای امنیت خاطر کامل
                  شما.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
