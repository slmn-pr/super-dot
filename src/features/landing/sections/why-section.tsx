import { Dot } from "../components/logo";
import Reveal from "../components/reveal";
import { VALUE_PROPS } from "../constants";

export default function WhySection() {
  return (
    <section id="why" className="bg-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-lg px-5 md:max-w-6xl md:px-8">
        <Reveal>
          <div className="mb-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
            <Dot />
            چرا سوپردات
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-lg text-3xl font-black leading-tight text-black md:text-4xl">
            یک زیرساخت، تجربه‌ی یکدست
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {VALUE_PROPS.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
                  <v.Icon className="h-5 w-5 text-blue-500" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-base font-bold text-black">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
