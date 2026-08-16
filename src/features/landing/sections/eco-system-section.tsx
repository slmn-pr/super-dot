import { Sparkles, Plus } from "lucide-react";
import { Dot } from "../components/logo";
import Reveal from "../components/reveal";
import ServiceCard from "../components/service-card";
import { SERVICES } from "../constants";

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* پس‌زمینه نوری ملایم */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-lg px-5 md:max-w-6xl md:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-3 md:max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-xs font-semibold text-blue-600">
              <Dot />
              <span>اکوسیستم خدمات سوپردات</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">
              مجموعه‌ای از سرویس‌های کاربردی،
              <br />
              <span className="text-zinc-400 font-bold">در یک پلتفرم یکپارچه.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-2 text-base leading-relaxed text-zinc-600 md:text-lg">
              هر سرویس به صورت کاملاً مستقل اما با یک هویت دیجیتال، یک کیف‌پول و یک تجربه کاربری همگن در دسترس شماست.
            </p>
          </Reveal>
        </div>

        {/* Grid سرویس‌ها */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.key} s={s} delay={i * 60} />
          ))}

          {/* کارت "در حال توسعه" جهت نشان دادن رشد مداوم اکوسیستم */}
          <Reveal delay={SERVICES.length * 60}>
            <div className="flex h-full min-h-[180px] flex-col justify-between rounded-3xl border border-dashed border-zinc-300 bg-zinc-50/50 p-6 transition-colors hover:border-blue-400 hover:bg-blue-50/20">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-200/60 text-zinc-600">
                <Plus className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>توسعه مداوم</span>
                </div>
                <h3 className="mt-1 text-base font-extrabold text-zinc-800">
                  سرویس‌های بعدی در راهند...
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  اکوسیستم سوپردات پیوسته با سرویس‌های جدید به‌روزرسانی می‌شود.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}