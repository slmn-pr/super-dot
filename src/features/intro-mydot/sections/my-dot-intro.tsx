import { Lightbulb, Network, Sparkles } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "خلق کن",
    description: "محتوایی تولید کن که ارزش دیده‌شدن و دنبال‌شدن دارد.",
  },
  {
    icon: Network,
    title: "ارتباط بساز",
    description: "با مخاطبانی که به ایده‌هایت علاقه دارند جامعه خودت را بساز.",
  },
  {
    icon: Sparkles,
    title: "ارزش بگیر",
    description: "از مشارکت و ارزشی که ایجاد می‌کنی، پاداش دریافت کن.",
  },
];

export function MyDotIntro() {
  return (
    <section className="border-b py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-blue-500">
            MYDOT چیست؟
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            یک شبکه اجتماعی دیگر نیست.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            MyDot فضایی برای خلق، ارتباط و ارزش‌آفرینی از محتواست؛ جایی که
            ایده‌ها می‌توانند از یک محتوا فراتر بروند و بخشی از یک اقتصاد
            بزرگ‌تر شوند.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border bg-background p-7 transition-colors hover:border-blue-500/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted transition-colors group-hover:bg-blue-500/10">
                  <Icon className="h-5 w-5 group-hover:text-blue-500" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
