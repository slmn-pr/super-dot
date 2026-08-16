import { Dot } from "../components/logo";
import Reveal from "../components/reveal";
import ServiceCard from "../components/service-card";
import { SERVICES } from "../constants";

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-lg px-5 md:max-w-6xl md:px-8">
        <Reveal>
          <div className="mb-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
            <Dot />
            اکوسیستم سوپردات
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-lg text-3xl font-black leading-tight text-black md:text-4xl">
            هشت سرویس، یک اپلیکیشن
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-lg text-base leading-8 text-zinc-600">
            هر سرویس مستقل کار می‌کنه، اما همه از یک حساب و یک کیف‌پول استفاده
            می‌کنن؛ همین یعنی سوپردات.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.key} s={s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
