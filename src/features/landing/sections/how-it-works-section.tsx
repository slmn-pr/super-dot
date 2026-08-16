import { Dot } from "../components/logo";
import Reveal from "../components/reveal";
import { STEPS } from "../constants";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-lg px-5 md:max-w-6xl md:px-8">
        <Reveal>
          <div className="mb-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
            <Dot />
            شروع کار
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-lg text-3xl font-black leading-tight text-black md:text-4xl">
            در سه قدم وارد اکوسیستم شو
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative rounded-3xl border border-zinc-200 p-6">
                <span className="text-3xl font-black text-blue-500">{s.n}</span>
                <h3 className="mt-4 text-base font-bold text-black">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
