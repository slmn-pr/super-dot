import Link from 'next/link'
import { Sparkles, ArrowLeft, Download } from 'lucide-react'
import { PhoneMockup } from './PhoneMockup'

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

          {/* Text Content — right side in RTL */}
          <div className="flex-1 max-w-xl text-right lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-xs text-zinc-600 font-medium mb-8 shadow-sm">
              <Sparkles size={12} className="text-blue-500 shrink-0" aria-hidden="true" />
              <span>اکوسیستم یکپارچه خدمات دات وان</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance mb-6"
            >
              <span className="block text-foreground">همه خدمات دیجیتال</span>
              <span className="block text-foreground">
                در{' '}
                <span className="text-blue-500">یک</span>
              </span>
              <span className="block text-foreground">سوپر اپلیکیشن</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-10 max-w-md">
              دات وان اکوسیستمی هوشمند است که تمام خدمات روزمره شما را در یک تجربه سریع، امن و یکپارچه گرد هم آورده است.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors duration-150 group"
              >
                مشاهده قابلیت‌ها
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-150 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#download"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground text-sm font-medium rounded-xl border border-zinc-300 hover:bg-zinc-50 transition-colors duration-150"
              >
                <Download size={14} aria-hidden="true" />
                دانلود اپلیکیشن
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6 text-right">
              <div>
                <p className="text-2xl font-bold text-foreground">+۲M</p>
                <p className="text-xs text-zinc-500 mt-0.5">کاربر فعال</p>
              </div>
              <div className="w-px h-8 bg-zinc-200" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-foreground">۷</p>
                <p className="text-xs text-zinc-500 mt-0.5">سرویس یکپارچه</p>
              </div>
              <div className="w-px h-8 bg-zinc-200" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-foreground">۱</p>
                <p className="text-xs text-zinc-500 mt-0.5">اکوسیستم</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup — left side in RTL */}
          <div className="flex-shrink-0 flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-16 bg-blue-50 rounded-full blur-3xl opacity-60"
              />
              <div className="relative animate-[fadeIn_0.8s_ease-out]">
                <PhoneMockup />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
