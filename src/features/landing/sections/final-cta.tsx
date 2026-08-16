import { Sparkles } from "lucide-react";
import Reveal from "../components/reveal";

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-lg px-5 text-center md:max-w-3xl md:px-8">
        <Reveal>
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Sparkles className="h-6 w-6 text-blue-400" strokeWidth={1.8} />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">
            همین حالا وارد اکوسیستم سوپردات شو
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-md text-base leading-8 text-white/60">
            یک اپلیکیشن نصب کن و به همه‌ی سرویس‌های دوتو دسترسی داشته باش.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 sm:w-auto"
            >
              دانلود از بازار
            </a>
            <a
              href="#"
              className="w-full rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white sm:w-auto"
            >
              دانلود از مایکت
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
