'use client'

import { useState, useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PROMO_CARDS } from '../data'

export function PromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    // RTL: scrollLeft is negative in some browsers, normalize
    const scrolled = Math.abs(scrollLeft)
    const cardWidth = (scrollWidth - clientWidth) / (PROMO_CARDS.length - 1)
    const idx = Math.round(scrolled / cardWidth)
    setActiveIndex(Math.min(idx, PROMO_CARDS.length - 1))
  }

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
        style={{ direction: 'rtl' }}
      >
        {PROMO_CARDS.map((promo) => (
          <a
            key={promo.id}
            href="/app/offers"
            role="listitem"
            aria-label={`${promo.title}: ${promo.subtitle}`}
            className={cn(
              'flex-none w-[calc(100%-2rem)] snap-start rounded-2xl border p-4 transition-transform active:scale-[0.98]',
              promo.bgColor,
              promo.borderColor
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <span
                  className={cn('text-[17px] font-extrabold leading-tight', promo.accentColor)}
                >
                  {promo.title}
                </span>
                <p className="text-[12px] text-zinc-400 leading-relaxed line-clamp-2">
                  {promo.subtitle}
                </p>
                <div
                  className={cn(
                    'mt-2 inline-flex items-center gap-1 text-[12px] font-semibold',
                    promo.accentColor
                  )}
                  aria-hidden="true"
                >
                  {promo.cta}
                  <ArrowLeft size={12} strokeWidth={2.5} />
                </div>
              </div>
            </div>
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
              setActiveIndex(i)
              // Scroll to card — RTL scroll
              if (scrollRef.current) {
                const cardW = scrollRef.current.scrollWidth / PROMO_CARDS.length
                scrollRef.current.scrollTo({ left: -(i * cardW), behavior: 'smooth' })
              }
            }}
            className={cn(
              'rounded-full transition-all duration-200',
              i === activeIndex
                ? 'w-5 h-1.5 bg-blue-400'
                : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'
            )}
          />
        ))}
      </div>
    </section>
  )
}
