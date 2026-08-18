"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <motion.div
        className="bg-[#09090B] text-[#FFFFFF] p-10 md:p-16 rounded-3xl space-y-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-extrabold">
          همین حالا سفر بعدی خود را برنامه‌ریزی کنید
        </h2>
        <p className="text-sm md:text-base text-[#FFFFFF]/70 max-w-xl mx-auto leading-relaxed">
          امکانات متمایز Doto Trip را امتحان کنید و کیفیتی متفاوت از جابه‌جایی
          روزانه را تجربه کنید.
        </p>
        <div className="pt-2">
          <Button
            size="lg"
            className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-medium px-10 py-6 rounded-xl shadow-md"
          >
            شروع سفر با Doto Trip
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
