"use client";

import Image from "next/image";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Search, Flame, Sparkles } from "lucide-react";
import Link from "next/link";

const usernames = [
  { name: "@alex", price: "0.42 DOTO" },
  { name: "@crypto", price: "1.02 DOTO" },
  { name: "@design", price: "0.31 DOTO" },
  { name: "@apple", price: "2.10 DOTO" },
];

const ideas = [
  { title: "AI Resume Builder", price: "0.35 DOTO" },
  { title: "Travel GPT", price: "0.65 DOTO" },
  { title: "Pet Social", price: "0.18 DOTO" },
];

export default function MarketplacePage() {
  return (
    <PageWrapper>
      {/* Hero */}

      <div className="mt-6 overflow-hidden rounded-2xl">
        <Image
          src="/banners/username_market.png"
          alt="Marketplace"
          width={600}
          height={300}
          className="h-44 w-full object-cover"
        />
      </div>

      <div className="mt-5">
        <h1 className="text-xl font-bold">هویت دیجیتال خود را مالک شوید</h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Username و Ideaهای منحصربه‌فرد را خرید، فروش یا منتقل کنید.
        </p>

        <Button className="mt-4 w-full">
          شروع کنید
          <ChevronLeft className="mr-2 h-4 w-4" />
        </Button>
      </div>

      {/* Search */}

      <div className="relative mt-6">
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input className="pr-10" placeholder="جستجوی Username یا Idea..." />
      </div>

      {/* Categories */}

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {["همه", "Username", "Idea", "جدید", "محبوب"].map((item) => (
          <Button
            key={item}
            variant="secondary"
            size="sm"
            className="shrink-0 rounded-full"
          >
            {item}
          </Button>
        ))}
      </div>

      {/* Featured */}

      <section className="mt-6">
        <Card className="rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-orange-500">🔥 ویژه</span>

            <span className="text-xs text-muted-foreground">Username</span>
          </div>

          <h2 className="mt-4 text-2xl font-bold">@crypto</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            یکی از کمیاب‌ترین Usernameهای بازار
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="font-semibold">1.25 DOTO</span>

            <Button size="sm">خرید</Button>
          </div>
        </Card>
      </section>

      {/* Username */}

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-orange-500" />
            <h3 className="font-semibold">Usernameهای ترند</h3>
          </div>

          <Button variant="ghost" size="sm">
            همه
          </Button>
        </div>

        <div className="flex gap-3 overflow-x-auto snap-x pb-2 pt-1 px-1 no-scrollbar">
          {usernames.map((item) => (
            <Card
              key={item.name}
              className="w-44 shrink-0 snap-start rounded-2xl p-4"
            >
              <div className="text-lg font-bold">{item.name}</div>

              <p className="mt-2 text-xs text-muted-foreground">قیمت فعلی</p>

              <div className="mt-1 font-semibold">{item.price}</div>

              <Button size="sm" className="mt-4 w-full">
                خرید
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Ideas */}

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <h3 className="font-semibold">ایده‌های NFT</h3>
          </div>

          <Button variant="ghost" size="sm">
            همه
          </Button>
        </div>

        <div className="flex gap-3 overflow-x-auto snap-x pb-2 pt-1 px-1 no-scrollbar">
          {ideas.map((item) => (
            <Card
              key={item.title}
              className="w-52 shrink-0 snap-start rounded-2xl p-4"
            >
              <div className="font-semibold">{item.title}</div>

              <p className="mt-2 text-xs text-muted-foreground">قیمت</p>

              <div className="mt-1 font-semibold">{item.price}</div>

              <Button variant="outline" size="sm" className="mt-4 w-full">
                <Link href="/idea/detail"> مشاهده</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity */}

      <section className="mt-8">
        <h3 className="mb-4 font-semibold">معاملات اخیر</h3>

        <div className="space-y-3">
          {[
            {
              name: "@alex",
              price: "0.42 DOTO",
              time: "۲ دقیقه پیش",
            },
            {
              name: "AI Resume Builder",
              price: "0.63 DOTO",
              time: "۱۰ دقیقه پیش",
            },
          ].map((item) => (
            <Card
              key={item.name}
              className="flex items-center justify-between rounded-xl p-4"
            >
              <div>
                <div className="font-medium">{item.name}</div>

                <div className="text-xs text-muted-foreground">{item.time}</div>
              </div>

              <div className="font-semibold">{item.price}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}

      <Card className="my-8 rounded-2xl p-5 text-center">
        <h3 className="font-semibold">NFT خودت را ثبت کن</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Username یا ایده خود را به یک دارایی قابل معامله تبدیل کن.
        </p>

        <Button className="mt-4 w-full">ایجاد NFT</Button>
      </Card>
    </PageWrapper>
  );
}
