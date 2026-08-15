import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronLeftIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function NftMarketHeroSection() {
  return (
    <section className="mt-5">
      {/* Visual */}
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/30">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex h-48 items-center justify-center">
          <DotLottieReact
            src="/animations/nft.lottie"
            loop
            autoplay
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 px-1">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          <SparklesIcon className="size-3.5" />
          بازار دارایی دیجیتال
        </div>

        <h1 className="text-xl font-bold leading-8 tracking-tight">
          هویت دیجیتال خود را
          <br />
          <span className="text-primary">مالک شوید.</span>
        </h1>

        <p className="mt-2.5 max-w-md text-sm leading-6 text-muted-foreground">
          نام‌های کاربری و ایده‌های منحصربه‌فرد را کشف کنید، بخرید، بفروشید یا
          به دیگران منتقل کنید.
        </p>

        <Link href="/wallet/live-market" className="block">
          <Button className="mt-5 h-11 w-full rounded-xl font-medium" size="lg">
            مشاهده بازار
            <ChevronLeftIcon className="mr-1.5 size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
