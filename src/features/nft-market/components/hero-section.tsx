import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronLeftIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function NftMarketHeroSection() {
  return (
    <section className="mt-5">
      {/* Visual */}
      <div
        className="
          relative overflow-hidden rounded-3xl
          border border-primary/10
          bg-gradient-to-br
          from-primary/[0.08]
          via-background
          to-violet-500/[0.06]
        "
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 size-40 rounded-full bg-violet-500/10 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

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
        <div
          className="
            mb-3 inline-flex items-center gap-1.5
            rounded-full
            border border-primary/10
            bg-primary/10
            px-2.5 py-1
            text-xs font-medium text-primary
          "
        >
          <SparklesIcon className="size-3.5" />
          بازار دارایی دیجیتال
        </div>

        <h1 className="text-xl font-bold leading-8 tracking-tight">
          هویت دیجیتال خود را
          <br />
          <span
            className="
              bg-gradient-to-l
              from-primary
              to-violet-500
              bg-clip-text
              text-transparent
            "
          >
            مالک شوید.
          </span>
        </h1>

        <p className="mt-2.5 max-w-md text-sm leading-6 text-muted-foreground">
          نام‌های کاربری و ایده‌های منحصربه‌فرد را کشف کنید، بخرید، بفروشید یا
          به دیگران منتقل کنید.
        </p>

        <Link href="/wallet/live-market" className="block">
          <Button
            className="
              mt-5 h-11 w-full rounded-xl
              bg-primary
              font-medium
              shadow-lg shadow-primary/10
              transition-all
              hover:shadow-xl hover:shadow-primary/15
            "
            size="lg"
          >
            مشاهده بازار
            <ChevronLeftIcon className="mr-1.5 size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}