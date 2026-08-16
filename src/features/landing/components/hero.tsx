import { ChevronLeft } from "lucide-react";
import { Dot } from "./logo";
import HubGraphic from "./hub-graphic";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-lg gap-10 px-5 pb-16 pt-10 md:max-w-6xl md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pb-24 md:pt-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600">
            <Dot />
            اکوسیستم دیجیتال دوتو
          </div>

          <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-black md:text-6xl md:leading-[1.1]">
            زندگی دیجیتالت،
            <br />
            یکپارچه.
          </h1>

          <p className="mt-5 max-w-md text-base leading-8 text-zinc-600 md:text-lg">
            سوپردات کیف‌پول، خرید، ارسال، سفر، طلا و پرواز رو توی یک اپلیکیشن
            جمع کرده؛ با یک حساب کاربری و یک تجربه‌ی واحد.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/app"
              className="rounded-full bg-blue-500 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              شروع رایگان
            </a>
            <a
              href="#ecosystem"
              className="flex items-center justify-center gap-1.5 rounded-full border border-zinc-300 px-6 py-3.5 text-center text-sm font-semibold text-black transition-colors hover:border-black"
            >
              کاوش سرویس‌ها
              <ChevronLeft className="h-4 w-4" />
            </a>
          </div>
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
