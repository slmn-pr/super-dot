"use client";

import Image from "next/image";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  ChevronLeft,
  Heart,
  Share2,
  User,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function IdeaPage() {
  return (
    <PageWrapper>
      {/* Cover */}

      <div className="relative mt-4 overflow-hidden rounded-2xl">
        <Image
          src="/images/idea-cover.jpg"
          width={600}
          height={340}
          alt="Idea"
          className="h-52 w-full object-cover"
        />
      </div>

      {/* Header */}

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
            NFT Idea
          </span>

          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Heart className="h-5 w-5" />
            </Button>

            <Button size="icon" variant="ghost">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <h1 className="mt-4 text-2xl font-bold">AI Resume Builder</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          یک پلتفرم مبتنی بر هوش مصنوعی که رزومه حرفه‌ای را در کمتر از ۲ دقیقه
          تولید می‌کند.
        </p>
      </div>

      {/* Price */}

      <Card className="mt-6 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">قیمت فعلی</p>

            <h2 className="mt-1 text-2xl font-bold">0.75 ETH</h2>
          </div>

          <Button>
            خرید NFT
            <ChevronLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Creator */}

      <Card className="mt-4 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <User className="h-5 w-5" />
          </div>

          <div>
            <div className="flex items-center gap-1 font-medium">
              Sython
              <BadgeCheck className="h-4 w-4 text-sky-500" />
            </div>

            <p className="text-xs text-muted-foreground">Creator</p>
          </div>
        </div>
      </Card>

      {/* Description */}

      <Card className="mt-4 rounded-2xl p-5">
        <div className="mb-3 flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          <h3 className="font-semibold">درباره ایده</h3>
        </div>

        <p className="text-sm leading-7 text-muted-foreground">
          این پروژه با استفاده از AI رزومه، کاور لتر و پیشنهادهای شغلی شخصی‌سازی
          شده تولید می‌کند و بازار هدف آن کارجویان و شرکت‌های استخدامی است.
        </p>
      </Card>

      {/* Ownership */}

      <Card className="mt-4 rounded-2xl p-5">
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-500" />

          <h3 className="font-semibold">مالکیت NFT</h3>
        </div>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>✓ مالک فعلی: Sython</li>

          <li>✓ قابل انتقال</li>

          <li>✓ قابل فروش مجدد</li>

          <li>✓ ثبت شده روی بلاکچین</li>
        </ul>
      </Card>

      {/* Related */}

      <section className="mt-6 mb-8">
        <h3 className="mb-3 font-semibold">ایده‌های مشابه</h3>

        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto no-scrollbar px-1 py-1">
          {["Travel GPT", "AI Tutor", "Startup CRM"].map((item) => (
            <Card key={item} className="w-44 shrink-0 rounded-xl p-4">
              <div className="font-medium">{item}</div>

              <p className="mt-2 text-xs text-muted-foreground">از 0.32 ETH</p>
            </Card>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
