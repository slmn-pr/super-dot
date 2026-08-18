"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import Image from "next/image";
import { ANIMATE_FADE_IN_UP, STAGER_CONTAINER } from "../constant";

export default function TripHeroSection() {
  return (
    <section className="py-16 md:py-24  max-w-6xl mx-auto overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={STAGER_CONTAINER}
      >
        <motion.div className="space-y-6" variants={ANIMATE_FADE_IN_UP}>
          <Badge
            variant="secondary"
            className="bg-[#F4F4F5] text-[#3B82F6] hover:bg-[#F4F4F5] px-3.5 py-1.5 text-xs font-semibold rounded-full border-none"
          >
            سفر روزانه با کیفیت متمایز
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#09090B] leading-tight tracking-tight">
            تجربه‌ای آسوده از سفرهای روزانه شهری
          </h1>
          <p className="text-base md:text-lg text-[#09090B]/80 leading-relaxed">
            با خودروهای استاندارد، کارشناسی‌شده و رانندگان حرفه‌ای،
            جابه‌جایی‌های روزانه‌ات رو با آرامش انجام بده. مسیر سفرت رو
            لحظه‌به‌لحظه روی نقشه رصد کن و از پرداختی یکپارچه لذت ببر.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-8 py-6 rounded-xl shadow-sm text-base flex items-center gap-2"
            >
              <Car className="w-5 h-5" />
              درخواست آنلاین سفر
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-[#F4F4F5] hover:bg-[#F4F4F5]/80 text-[#09090B] px-6 py-6 rounded-xl text-base"
            >
              بررسی امکانات
            </Button>
          </div>
        </motion.div>

        {/* Hero Visual Block */}
        <motion.div variants={ANIMATE_FADE_IN_UP}>
          <Card className="bg-[#F4F4F5] border-[#F4F4F5] rounded-3xl relative overflow-hidden flex flex-col items-center justify-center h-[360px] shadow-none">
            <Image
              src="/images/intro-trip.jpg"
              width={550}
              height={360}
              alt="Dotone trp"
              className="object-cover w-full"
            />
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
