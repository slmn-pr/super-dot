"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock3, Plane, Sparkles } from "lucide-react";

const destinations = [
  {
    city: "استانبول",
    country: "ترکیه",
    code: "IST",
    price: "از ۱۲,۸۰۰,۰۰۰",
    duration: "۲ ساعت و ۵۰ دقیقه",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",
    size: "large",
  },
  {
    city: "دبی",
    country: "امارات",
    code: "DXB",
    price: "از ۱۴,۵۰۰,۰۰۰",
    duration: "۲ ساعت و ۱۵ دقیقه",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
    size: "small",
  },
  {
    city: "آنتالیا",
    country: "ترکیه",
    code: "AYT",
    price: "از ۱۶,۲۰۰,۰۰۰",
    duration: "۳ ساعت و ۲۰ دقیقه",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=85",
    size: "small",
  },
  {
    city: "پاریس",
    country: "فرانسه",
    code: "CDG",
    price: "از ۳۸,۹۰۰,۰۰۰",
    duration: "۶ ساعت و ۴۵ دقیقه",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
    size: "medium",
  },
];

export function AirDestinations() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-500">
              <Sparkles className="h-4 w-4" />
              DESTINATIONS
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              کجا می‌خواهی بروی؟
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              مقصد بعدی‌ات را انتخاب کن و بهترین پروازها را برای آن پیدا کن.
            </p>
          </div>

          <button className="hidden items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:flex">
            مشاهده همه مقصدها
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-12 md:grid-rows-[260px_220px]">
          {/* Large */}
          <DestinationCard
            destination={destinations[0]}
            className="md:col-span-7 md:row-span-2"
            featured
          />

          {/* Top Right */}
          <DestinationCard
            destination={destinations[1]}
            className="md:col-span-5"
          />

          {/* Bottom Right */}
          <DestinationCard
            destination={destinations[2]}
            className="md:col-span-5"
          />
        </div>

        {/* Mobile / Tablet horizontal scroll */}
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-5 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.code}
              destination={destination}
              className="min-w-[82vw] snap-start sm:min-w-[55vw]"
              featured={index === 0}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold sm:hidden">
          مشاهده همه مقصدها
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function DestinationCard({
  destination,
  className = "",
  featured = false,
}: {
  destination: (typeof destinations)[number];
  className?: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-[28px] ${className}`}
    >
      {/* Image */}
      <img
        src={destination.image}
        alt={`${destination.city} - ${destination.country}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

      {/* Top badge */}
      <div className="absolute right-4 top-4">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
          <Plane className="h-3 w-3" />

          {destination.code}
        </div>
      </div>

      {/* Content */}
      <div
        className={`absolute inset-x-0 bottom-0 p-5 text-white ${
          featured ? "sm:p-7" : ""
        }`}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs text-white/65">{destination.country}</div>

            <h3
              className={`mt-1 font-black ${
                featured ? "text-3xl sm:text-4xl" : "text-2xl"
              }`}
            >
              {destination.city}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-white/70">
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-3 w-3" />
                {destination.duration}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/40" />

              <span className="flex items-center gap-1.5">
                <Plane className="h-3 w-3" />
                پرواز مستقیم
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="shrink-0 text-left">
            <div className="text-[9px] text-white/50">بلیت از</div>

            <div className="mt-1 text-sm font-black">{destination.price}</div>

            <div className="mt-0.5 text-[9px] text-white/50">تومان</div>
          </div>
        </div>

        {/* Hover action */}
        <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:opacity-100">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-black">
            مشاهده پروازها
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
