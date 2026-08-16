import { ChevronLeft, ArrowUpRight, Sparkles, ArrowUpLeft } from "lucide-react";
import { Dot } from "./logo";
import HubGraphic from "./hub-graphic";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white pt-10">
      <div className="mx-auto grid max-w-lg gap-10 px-5 pb-16 pt-10 md:max-w-6xl md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pb-24 md:pt-16">
        <div>
          {/* Badge: ارتقای متن به تمایز اصلی برند */}
          {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3.5 py-1.5 text-xs font-medium text-blue-700">
            <Dot />
            <span>اکوسیستم یکپارچه دیجیتال سوپردات</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          </div> */}

          {/* Headline: قوی‌تر، هماهنگ‌تر با کانسپت همگرایی و اکوسیستم */}
          <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-black md:text-6xl md:leading-[1.1]">
            تمام دنیای دیجیتال تو،
            {/* <br /> */}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              در یک نقطه.
            </span>
          </h1>

          {/* Subtitle: بیان شفاف خدمات، یکپارچگی و حذف پیچیدگی‌ها */}
          <p className="mt-5 max-w-md text-base leading-8 text-zinc-600 md:text-lg">
            از مدیریت مالی و خریدهای روزمره تا طلا، سفر و خدمات لجستیک. با{" "}
            <strong>سوپردات</strong>، دیگر نیازی به ده‌ها برنامه مختلف نداری؛
            همه چیز با یک حساب کاربری، در یک تجربه سریع و هوشمند.
          </p>

          {/* CTA Buttons: اقدام به عمل شفاف‌تر و مستقیم‌تر */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/app"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-primary/70 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <span>ورود به سوپردات</span>
              <ArrowUpLeft className="h-4 w-4" />
            </a>

            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-zinc-300 px-6 py-3.5 text-center text-sm font-semibold text-zinc-800 transition-colors hover:border-black hover:bg-zinc-50"
            >
              <span>آشنایی با سرویس‌ها</span>
              <ChevronLeft className="h-4 w-4" />
            </a>
          </div>

          {/* Trust / Social Proof Badge (اختیاری جهت افزایش اعتماد): */}
          {/* <div className="mt-8 flex items-center gap-4 text-xs font-medium text-zinc-500 border-t border-zinc-100 pt-6">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>یکپارچه و امن</span>
            </div>
            <span className="text-zinc-300">•</span>
            <div>پشتیبانی ۲۴/۷</div>
            <span className="text-zinc-300">•</span>
            <div>ورود یکپارچه (SSO)</div>
          </div> */}
        </div>

        <HubGraphic />
      </div>

      <style>{`
        @keyframes hub-pop {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="hub-pop"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
