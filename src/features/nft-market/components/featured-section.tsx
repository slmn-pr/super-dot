import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon, ShieldCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function NftFeaturedSection() {
  return (
    <section className="mt-5">
      <Card className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-5 transition-all duration-300 hover:border-border sm:p-6">
        {/* افکت نوری پس‌زمینه (متناسب با توکن تم) */}
        <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-accent/15 blur-3xl transition-opacity group-hover:opacity-100" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

        <div className="relative z-10 flex flex-col justify-between gap-5">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <Badge
              variant="secondary"
              className="gap-1.5 rounded-full border border-border bg-accent/10 px-3 py-1 text-xs font-bold text-foreground"
            >
              <SparklesIcon className="h-3.5 w-3.5 animate-pulse text-accent" />
              پیشنهاد ویژه
            </Badge>

            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <ShieldCheckIcon className="h-4 w-4 text-emerald-500" />
              <span>Username تاییدشده</span>
            </div>
          </div>

          {/* Username Content */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 dir-ltr text-right">
              <h3
                className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
                dir="ltr"
              >
                @crypto
              </h3>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              یک Username ممتاز و بسیار کمیاب برای ساخت برند و هویت دیجیتال در
              اکوسیستم دات وان.
            </p>
          </div>

          {/* Footer Section */}
          <div className="flex items-center justify-between border-t border-border/60 pt-4 mt-1">
            <div>
              <span className="text-[11px] font-medium text-muted-foreground block">
                قیمت پیشنهادی
              </span>
              <div className="mt-0.5 flex items-baseline gap-1 dir-ltr">
                <span className="text-xl font-black text-foreground">1.25</span>
                <span className="text-xs font-bold text-muted-foreground">
                  <Image src="/my_dot_logo.svg" alt="Dot One Logo" width={20} height={20} />
                </span>
              </div>
            </div>

            <Link href="/wallet/live-market">
              <Button
                size="default"
                className="group/btn inline-flex items-center gap-2 rounded-2xl bg-primary px-5 font-semibold text-primary-foreground shadow-md shadow-primary/10 transition-all duration-200 active:scale-95 hover:bg-primary/90"
              >
                <span>مشاهده و خرید</span>
                <ArrowLeftIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:-translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}
