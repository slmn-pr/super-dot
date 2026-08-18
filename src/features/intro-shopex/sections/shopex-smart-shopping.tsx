"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Star,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Headphones,
  ArrowUpLeft,
  Filter,
} from "lucide-react";

const products = [
  {
    title: "هدفون سونی WH-1000XM5",
    category: "حذف نویز فعال",
    price: "۱۸,۹۰۰,۰۰۰",
    score: "4.9",
    badge: "پرفروش‌ترین",
    inStock: true,
  },
  {
    title: "هدفون جی‌بی‌ال Live 770NC",
    category: "باتری ۵۰ ساعته",
    price: "۹,۸۰۰,۰۰۰",
    score: "4.7",
    badge: "ارزش خرید بالا",
    inStock: true,
  },
  {
    title: "هدفون انکر Soundcore Q45",
    category: "کیفیت صدای Hi-Res",
    price: "۵,۴۰۰,۰۰۰",
    score: "4.8",
    badge: "پیشنهاد ShopEx",
    inStock: true,
  },
];

const smartTags = [
  "هدفون بی‌سیم",
  "مناسب گیمینگ",
  "حذف نویز (ANC)",
  "ارسال سریع",
];

export function ShopExSmartShopping() {
  const [activeTag, setActiveTag] = useState("مناسب گیمینگ");

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-24 sm:py-32 border-b border-[#F4F4F5] dir-rtl">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Text / Info Column */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#F4F4F5] bg-[#F4F4F5]/80 px-3.5 py-1.5 text-xs font-bold text-[#3B82F6]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>موتور جستجو و مقایسه ShopEx</span>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight text-[#09090B] sm:text-4xl lg:text-5xl">
              فقط دنبال محصول نباش؛
              <br />
              <span className="text-[#09090B]/50 font-extrabold">
                دقیقاً دقیق‌ترینش رو پیدا کن.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#09090B]/70 sm:text-base">
              هوشمندی ShopEx به شما کمک می‌کند در میان هزاران کالا، بر اساس نیاز
              دقیق، بودجه و فیلترهای تخصصی، بهترین گزینه را با تضمین قیمت و
              کیفیت انتخاب کنید.
            </p>

            {/* Feature Bullets */}
            <div className="mt-8 space-y-3">
              {[
                "مقایسه لحظه‌ای مشخصات و قیمت فروشندگان",
                "فیلتر هوشمند بر اساس کاربرد واقعی و بودجه",
                "شفافیت کامل در امتیازها و نظرات خریداران",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-xs font-bold text-[#09090B]/80"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#3B82F6]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Mockup Column */}
          <div className="rounded-[32px] border border-[#F4F4F5] bg-[#FFFFFF] p-5 shadow-2xl shadow-[#09090B]/5 sm:p-7">
            {/* Search Input Bar */}
            <div className="relative flex items-center gap-3 rounded-2xl border border-[#F4F4F5] bg-[#F4F4F5]/60 p-2.5 pl-3 transition-all focus-within:border-[#3B82F6] focus-within:bg-[#FFFFFF]">
              <Search className="mr-2 h-5 w-5 text-[#09090B]/40" />

              <div className="flex-1">
                <div className="text-[10px] font-bold text-[#3B82F6]">
                  جستجوی هوشمند
                </div>
                <input
                  type="text"
                  readOnly
                  value="هدفون بی‌سیم گیمینگ با حذف نویز"
                  className="w-full bg-transparent text-xs font-bold text-[#09090B] focus:outline-none"
                />
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/20 transition-transform active:scale-95">
                <ArrowUpLeft className="h-5 w-5" />
              </button>
            </div>

            {/* Filter Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#09090B]/40 ml-1">
                <Filter className="h-3 w-3" />
                <span>فیلترها:</span>
              </div>
              {smartTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-xl px-3 py-1.5 text-[11px] font-semibold transition-all ${
                    activeTag === tag
                      ? "bg-[#09090B] text-[#FFFFFF] shadow-sm"
                      : "bg-[#F4F4F5] text-[#09090B]/70 hover:bg-[#F4F4F5]/80"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Results Top Info Bar */}
            <div className="mt-6 flex items-center justify-between border-t border-[#F4F4F5] pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#09090B]">
                <TrendingUp className="h-4 w-4 text-[#3B82F6]" />
                <span>بهترین تطابق‌ها</span>
                <span className="rounded-md bg-[#3B82F6]/10 px-2 py-0.5 text-[10px] font-extrabold text-[#3B82F6]">
                  ۳ پیشنهاد برتر
                </span>
              </div>

              <button className="flex items-center gap-1 text-xs font-semibold text-[#09090B]/50 hover:text-[#09090B]">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>تنظیمات پیشرفته</span>
              </button>
            </div>

            {/* Product Cards Grid */}
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#F4F4F5] bg-[#FFFFFF] p-3 transition-all hover:border-[#3B82F6]/40 hover:shadow-lg hover:shadow-[#3B82F6]/5"
                >
                  <div>
                    {/* Badge */}
                    <div className="mb-2">
                      <span className="rounded-md bg-[#F4F4F5] px-2 py-0.5 text-[9px] font-bold text-[#3B82F6]">
                        {product.badge}
                      </span>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative flex aspect-square items-center justify-center rounded-xl bg-[#F4F4F5]/70 group-hover:bg-[#3B82F6]/5 transition-colors">
                      <Headphones className="h-10 w-10 text-[#09090B]/30 group-hover:text-[#3B82F6] transition-colors" />
                    </div>

                    {/* Title & Category */}
                    <h3 className="mt-3 text-xs font-bold leading-5 text-[#09090B] group-hover:text-[#3B82F6] transition-colors truncate">
                      {product.title}
                    </h3>

                    <div className="mt-1 text-[10px] text-[#09090B]/50 font-medium">
                      {product.category}
                    </div>
                  </div>

                  {/* Rating & Price */}
                  <div className="mt-3 border-t border-[#F4F4F5] pt-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1 font-bold text-[#09090B]">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{product.score}</span>
                      </div>
                      <span className="text-[9px] text-[#3B82F6] font-semibold">
                        موجود
                      </span>
                    </div>

                    <div className="mt-1.5 text-xs font-black text-[#09090B]">
                      {product.price}{" "}
                      <span className="text-[9px] font-normal text-[#09090B]/50">
                        تومان
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
