import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Dot } from "../components/logo";
import Reveal from "../components/reveal";
import { STEPS } from "../constants";

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-white py-20 md:py-32"
    >
      <div className="relative mx-auto max-w-lg px-5 md:max-w-6xl md:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-3 md:max-w-xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-xs font-semibold text-blue-600">
              <Dot />
              <span>شروع کار با سوپردات</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">
              در ۳ گام ساده،
              <br />
              <span className="text-zinc-400 font-bold">وارد اکوسیستم شو.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-2 text-base leading-relaxed text-zinc-600 md:text-lg">
              پیوستن به سوپردات کمتر از یک دقیقه زمان می‌برد. بدون فرایندهای
              پیچیده و فرم‌های طولانی.
            </p>
          </Reveal>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* خط اتصال بین گام‌ها در حالت Desktop */}
          <div className="pointer-events-none absolute top-12 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent md:block" />

          {STEPS.map((s, i) => {
            const isLast = i === STEPS.length - 1;

            return (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5">
                  {/* عدد گام بزرگ و مات در پس‌زمینه کارت */}
                  <span className="pointer-events-none absolute -left-2 -top-4 text-8xl font-black text-zinc-100/80 transition-colors duration-300 group-hover:text-blue-500/10">
                    {s.n}
                  </span>

                  <div className="relative z-10">
                    {/* Header کارت شامل آیکون یا شماره دایره‌ای */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 font-black text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        {s.n}
                      </div>

                      {/* فلش بین کارت‌ها (به جز آخرین گام) */}
                      {!isLast ? (
                        <ArrowLeft className="hidden h-5 w-5 text-zinc-300 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-blue-500 md:block" />
                      ) : (
                        <CheckCircle2 className="hidden h-5 w-5 text-emerald-500 md:block" />
                      )}
                    </div>

                    <h3 className="mt-6 text-lg font-extrabold text-black tracking-tight group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-7 text-zinc-600 md:text-base">
                      {s.desc}
                    </p>
                  </div>

                  {/* Indicator پایین کارت */}
                  <div className="relative z-10 mt-8 flex items-center gap-2 border-t border-zinc-100 pt-4 text-xs font-semibold text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>مرحله ۰{s.n}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
