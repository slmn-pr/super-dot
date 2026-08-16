import Link from "next/link";
import { Sparkles, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import NftMarketHeroSection from "./components/hero-section";
import NftSearchInput from "./components/search-input";
import NftCategoryListView from "./components/category-lits-view";
import NftFeaturedSection from "./components/featured-section";
import NftUsernamesSection from "./components/usernames-section";
import NftIdeasSection from "./components/ideas-section";
import RecentActivitySection from "./components/recent-activity-section";

export default function NftMarketPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen pb-10 bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground"
    >
      <div className="mx-auto w-full max-w-md space-y-6 px-1.5 sm:px-0">
        {/* ۱. Hero Section */}
        <NftMarketHeroSection />

        {/* ۲. Search Input (استیکی همراه با Blur هماهنگ با PWA) */}
        <div className="sticky top-2 z-30 pt-1 pb-2 backdrop-blur-xl bg-background/80 transition-all">
          <NftSearchInput />
        </div>

        {/* ۳. Categories */}
        <section className="space-y-2">
          <NftCategoryListView />
        </section>

        {/* ۴. Featured NFTs */}
        <NftFeaturedSection />

        {/* ۵. Username NFTs */}
        <NftUsernamesSection />

        {/* ۶. Ideas Section */}
        <NftIdeasSection />

        {/* ۷. Recent Activity */}
        <RecentActivitySection />

        {/* ۸. Bottom CTA (کارت مینیمال ساخت و ضرب NFT با توکن‌های یکپارچه تم) */}
        <Card className="relative overflow-hidden border border-border/80 bg-card p-6 text-centersm:p-8 rounded-3xl">
          {/* نور پس‌زمینه مینیمال */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />

          {/* آیکون مرکزی */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-accent border border-border/50 shadow-inner">
            <Sparkles className="h-7 w-7" />
          </div>

          <h3 className="text-base font-bold text-foreground md:text-lg tracking-tight">
            دارایی دیجیتال خودت را ضرب (Mint) کن!
          </h3>

          <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground sm:max-w-sm sm:text-sm">
            نام‌کاربری منحصربه‌فرد، ایده‌ها یا آثار خود را به یک دارایی ارزشمند
            و قابل معامله تبدیل کنید.
          </p>

          <div className="mt-6">
            <Link href="/idea/create" className="block w-full">
              <Button
                size="lg"
                className="group w-full items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/10 transition-all active:scale-[0.97] hover:opacity-90"
              >
                <PlusCircle className="h-5 w-5 transition-transform group-hover:rotate-90" />
                <span>ایجاد و ضرب NFT جدید</span>
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
