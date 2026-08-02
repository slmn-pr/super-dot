import Link from 'next/link'
import { Download, ArrowLeft } from 'lucide-react'

export function CTASection() {
  return (
    <section
      id="about"
      aria-labelledby="cta-heading"
      className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-black rounded-3xl overflow-hidden px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-right">
          {/* Subtle dot pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Blue accent line */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-16 left-16 h-px bg-blue-500 opacity-30"
          />

          <div className="relative max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
              شروع رایگان
            </div>

            {/* Headline */}
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance mb-6 leading-tight"
            >
              آماده ورود به اکوسیستم دات وان هستید؟
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10">
              تمام خدمات موردنیاز شما، در یک اپلیکیشن.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="#download"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-zinc-100 transition-colors duration-150"
              >
                <Download size={14} aria-hidden="true" />
                دانلود اپلیکیشن
              </Link>
              <Link
                href="#start"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/15 transition-colors duration-150 group border border-white/10"
              >
                شروع کنید
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-150 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Decorative stats */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-8 sm:left-12 lg:left-16 hidden lg:flex items-center gap-8"
          >
            {[
              { value: '+۲M', label: 'کاربر' },
              { value: '۷', label: 'سرویس' },
              { value: '۱', label: 'اپلیکیشن' },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
