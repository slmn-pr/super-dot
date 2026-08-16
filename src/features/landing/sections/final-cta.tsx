import { Sparkles, Download, Globe, ArrowLeft } from "lucide-react";
import Reveal from "../components/reveal";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-black py-24 md:py-36 text-white"
    >
      {/* پس‌زمینه نوری شیک در مرکز سکشن */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

      {/* گرید نقطه چین بسیار لایت در پس‌زمینه */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-lg px-5 text-center md:max-w-4xl md:px-8">
        {/* Badge آیکون دار */}
        <Reveal>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
            <Sparkles className="h-7 w-7 text-blue-400" strokeWidth={1.8} />
          </div>
        </Reveal>

        {/* تیتر اصلی با هایلایت آبی */}
        <Reveal delay={80}>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            همین حالا وارد اکوسیستم
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              سوپردات شو
            </span>
          </h2>
        </Reveal>

        {/* زیرتیتر */}
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-zinc-400 md:text-lg">
            یک حساب کاربری، یک کیف‌پول و دسترسی آنی به تمام سرویس‌های دیجیتال.
            تجربه‌ای که زندگی روزمره‌تان را ساده‌تر می‌کند.
          </p>
        </Reveal>

        {/* دکمه‌های CTA (دانلود + نسخه وب) */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* دکمه اصلی دانلود / نصب */}
            <a
              href="/download"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/35 sm:w-auto"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>دانلود اپلیکیشن سوپردات</span>
            </a>

            {/* دکمه نسخه وب (Web App / PWA) */}
            <a
              href="https://app.superdot.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              <Globe className="h-4 w-4 text-zinc-400" />
              <span>استفاده مستقیم از نسخه وب</span>
              <ArrowLeft className="h-4 w-4 text-zinc-400" />
            </a>
          </div>
        </Reveal>

        {/* استورهای پشتیبانی شده و ویژگی‌ها */}
        <Reveal delay={260}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 border-t border-white/10 pt-8 text-xs font-medium text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>بازار، مایکت و سیب‌اپ</span>
            </div>
            <span className="hidden text-zinc-700 sm:inline">•</span>
            <div>نصب آسان نسخه PWA برای iOS</div>
            <span className="hidden text-zinc-700 sm:inline">•</span>
            <div>ثبت‌نام زیر ۳۰ ثانیه</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
