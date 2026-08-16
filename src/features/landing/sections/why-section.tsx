import { Dot } from "../components/logo";
import Reveal from "../components/reveal";
import { VALUE_PROPS } from "../constants";

export default function WhySection() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-zinc-50 py-20 md:py-32"
    >
      {/* پس‌زمینه نوری شیک و ملایم در گوشه سکشن */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-lg px-5 md:max-w-6xl md:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-3 md:max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-xs font-semibold text-blue-600">
              <Dot />
              <span>مزیت اکوسیستم سوپردات</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">
              چرا سوپردات؟
              <br />
              <span className="text-zinc-400 font-bold">
                یک زیرساخت، بی‌نهایت امکان.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-2 text-base text-zinc-600 md:text-lg leading-relaxed">
              ما تمام پیچیدگی‌های استفاده از چندین برنامه را حذف کرده‌ایم تا با
              یک هویت دیجیتال، به همه خدمات زندگی روزمره‌تان دسترسی داشته باشید.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Layout - ترکیب کارت‌های عریض و استاندارد */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((v, i) => {
            // ایجاد تنوع بصری: کارت اول عریض‌تر و ویژه‌تر
            const isFeatured = i === 0;

            return (
              <Reveal
                key={v.title}
                delay={i * 80}
                className={
                  isFeatured ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
                }
              >
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 ${
                    isFeatured
                      ? "bg-gradient-to-br from-white via-white to-blue-50/30"
                      : ""
                  }`}
                >
                  {/* نور ملایم شناور موقع hover روی کارت */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/0 transition-all duration-500 group-hover:bg-blue-500/5 group-hover:blur-2xl" />

                  <div>
                    {/* Icon Container */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white text-zinc-800">
                      <v.Icon
                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-6 text-lg font-extrabold text-black tracking-tight group-hover:text-blue-600 transition-colors">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-7 text-zinc-600 md:text-base">
                      {v.desc}
                    </p>
                  </div>

                  {/* تگ یا عدد شماره‌گذاری شیک در پایین کارت */}
                  <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs font-semibold text-zinc-400">
                    <span>ویژگی ۰{i + 1}</span>
                    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-blue-600">
                      اطلاعات بیشتر ←
                    </span>
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
