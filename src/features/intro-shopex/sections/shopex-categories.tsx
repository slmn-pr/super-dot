"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Baby,
  Gamepad2,
  Globe,
  Home,
  Laptop,
  Shirt,
  Smartphone,
  Sparkles,
  Zap,
  ArrowUpLeft,
} from "lucide-react";

const categories = [
  {
    title: "موبایل و کالای دیجیتال",
    icon: Smartphone,
    itemsCount: "+۵۰ هزار کالا",
    hasChinaImport: true,
  },
  {
    title: "لپ‌تاپ و تجهیزات",
    icon: Laptop,
    itemsCount: "+۱۲ هزار کالا",
    hasChinaImport: true,
  },
  {
    title: "پوشاک و مد",
    icon: Shirt,
    itemsCount: "+۱۰۰ هزار کالا",
    hasChinaImport: true,
  },
  {
    title: "لوازم خانه و آشپزخانه",
    icon: Home,
    itemsCount: "+۳۰ هزار کالا",
    hasChinaImport: false,
  },
  {
    title: "گیمینگ و کنسول",
    icon: Gamepad2,
    itemsCount: "+۸ هزار کالا",
    hasChinaImport: true,
  },
  {
    title: "آرایشی و بهداشتی",
    icon: Sparkles,
    itemsCount: "+۲۵ هزار کالا",
    hasChinaImport: false,
  },
  {
    title: "مادر و کودک",
    icon: Baby,
    itemsCount: "+۱۵ هزار کالا",
    hasChinaImport: false,
  },
  {
    title: "لوازم برقی و صنعتی",
    icon: Zap,
    itemsCount: "+۴۰ هزار کالا",
    hasChinaImport: true,
  },
];

export function ShopExCategories() {
  const [filter, setFilter] = useState<"all" | "china">("all");

  const filteredCategories = categories.filter((cat) => {
    if (filter === "china") return cat.hasChinaImport;
    return true;
  });

  return (
    <section className="py-20 bg-[#FFFFFF] border-b border-[#F4F4F5] dir-rtl">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>دسته‌بندی‌های هوشمند</span>
            </div>

            <h2 className="mt-2 text-2xl font-black text-[#09090B] sm:text-3xl lg:text-4xl">
              دنبال چه دسته‌ای می‌گردی؟
            </h2>
          </div>

          {/* Filter Pills / Source Switcher */}
          <div className="flex items-center gap-2 rounded-xl bg-[#F4F4F5] p-1.5 text-xs font-semibold">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-lg px-4 py-2 transition-all ${
                filter === "all"
                  ? "bg-[#FFFFFF] text-[#09090B] shadow-sm"
                  : "text-[#09090B]/60 hover:text-[#09090B]"
              }`}
            >
              همه بازارها
            </button>
            <button
              onClick={() => setFilter("china")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-all ${
                filter === "china"
                  ? "bg-[#3B82F6] text-[#FFFFFF] shadow-sm"
                  : "text-[#09090B]/60 hover:text-[#09090B]"
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>مستقیم از علی‌بابا چین</span>
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#F4F4F5] bg-[#FFFFFF] p-4 text-center shadow-sm transition-all hover:border-[#3B82F6]/40 hover:shadow-md"
              >
                {/* China Tag */}
                {category.hasChinaImport && (
                  <div
                    className="absolute left-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
                    title="امکان سفارش از چین"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#3B82F6]">
                      <Globe className="h-3 w-3" />
                    </span>
                  </div>
                )}

                {/* Icon Wrapper */}
                <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-[#F4F4F5] transition-colors group-hover:bg-[#3B82F6]/10">
                  <Icon className="h-6 w-6 text-[#09090B]/80 transition-colors group-hover:text-[#3B82F6]" />
                </div>

                {/* Title */}
                <div className="mt-3 text-xs font-bold text-[#09090B] group-hover:text-[#3B82F6] transition-colors">
                  {category.title}
                </div>

                {/* Subtitle / Count */}
                <div className="mt-1 text-[10px] text-[#09090B]/40 font-medium">
                  {category.itemsCount}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-8 flex items-center justify-between rounded-xl bg-[#F4F4F5]/60 px-5 py-3.5 border border-[#F4F4F5]">
          <div className="flex items-center gap-2 text-xs text-[#09090B]/70">
            <Globe className="h-4 w-4 text-[#3B82F6]" />
            <span>
              کالای مورد نظرتان را پیدا نکردید؟ می‌توانید لینک محصول را مستقیم
              از <strong>Alibaba.com</strong> وارد کنید.
            </span>
          </div>

          <button className="flex items-center gap-1 text-xs font-bold text-[#3B82F6] hover:underline">
            <span>ثبت سفارش اختصاصی</span>
            <ArrowUpLeft className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
