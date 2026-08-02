"use client";

import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROMO_CARDS } from "../data";
import Image from "next/image";

export function PromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    // RTL: scrollLeft is negative in some browsers, normalize
    const scrolled = Math.abs(scrollLeft);
    const cardWidth = (scrollWidth - clientWidth) / (PROMO_CARDS.length - 1);
    const idx = Math.round(scrolled / cardWidth);
    setActiveIndex(Math.min(idx, PROMO_CARDS.length - 1));
  };

  return (
    <section aria-labelledby="promos-heading" className="mt-6">
      <div className="flex items-center justify-between px-4 mb-3">
        <h2
          id="promos-heading"
          className="text-[13px] font-semibold text-foreground"
        >
          پیشنهادهای ویژه
        </h2>
        <a
          href="/app/offers"
          className="text-[12px] text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="مشاهده همه پیشنهادها"
        >
          همه پیشنهادها
        </a>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        role="list"
        aria-label="پیشنهادهای ویژه"
        className="flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-1 snap-x snap-mandatory scroll-smooth"
        style={{ direction: "rtl" }}
      >
        {PROMO_CARDS.map((promo) => (
          <a
            key={promo.id}
            href="/app/offers"
            role="listitem"
            className={cn(
              "relative overflow-hidden flex-none w-[calc(100%-2rem)] h-[150px]",
              "rounded-3xl ",
            )}
          >
            {/* Content */}
            {/* <div className="relative z-10 flex flex-col justify-center h-full p-5 max-w-[65%]">
              <h3 className="text-white text-[20px] font-extrabold leading-tight">
                {promo.title}
              </h3>

              <p className="mt-2 text-white/80 text-[12px] leading-relaxed">
                {promo.subtitle}
              </p>

              <span
                className="
        mt-3 inline-flex items-center gap-1
        text-[12px] font-bold text-white
      "
              >
                {promo.cta}
                <ArrowLeft size={13} />
              </span>
            </div> */}

            {/* Banner image */}
            <Image
              width={360}
              height={360}
              src={promo.image}
              alt=""
              className="z-[11] content-center-safe object-cover w-full h-full"
            />

            {/* Glow overlay */}
            {/* <div
              className="
      absolute inset-0
              bg-gray-500/10 z-10
    
    "
            /> */}
          </a>
        ))}
      </div>

      {/* Dot indicators */}
      <div
        role="tablist"
        aria-label="اسلایدها"
        className="flex items-center justify-center gap-1.5 mt-3"
      >
        {PROMO_CARDS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`اسلاید ${i + 1}`}
            onClick={() => {
              setActiveIndex(i);
              // Scroll to card — RTL scroll
              if (scrollRef.current) {
                const cardW =
                  scrollRef.current.scrollWidth / PROMO_CARDS.length;
                scrollRef.current.scrollTo({
                  left: -(i * cardW),
                  behavior: "smooth",
                });
              }
            }}
            className={cn(
              "rounded-full transition-all duration-200",
              i === activeIndex
                ? "w-5 h-1.5 bg-gray-950"
                : "w-1.5 h-1.5 bg-gray-500 hover:bg-gray-400",
            )}
          />
        ))}
      </div>
    </section>
  );
}
