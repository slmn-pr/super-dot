import { ArrowLeft, Building2, UserRound, Users } from "lucide-react";

const audiences = [
  {
    icon: UserRound,
    title: "برای Creatorها",
    description: "ایده‌هایت را منتشر کن و جامعه خودت را بساز.",
  },
  {
    icon: Users,
    title: "برای مخاطب‌ها",
    description: "فقط مصرف‌کننده محتوا نباش؛ در ارزش آن مشارکت کن.",
  },
  {
    icon: Building2,
    title: "برای برندها",
    description: "با جامعه‌ای از Creatorها و مخاطبان واقعی ارتباط برقرار کن.",
  },
];

export function MyDotAudience() {
  return (
    <section className="border-y bg-muted/20 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-blue-500">
            FOR EVERYONE
          </span>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            برای کسانی که
            <br />
            ارزش خلق می‌کنند.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border bg-background p-7 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted group-hover:bg-blue-500/10">
                  <Icon className="h-5 w-5 group-hover:text-blue-500" />
                </div>

                <h3 className="mt-7 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                  بیشتر بدانید
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}