import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import NftMarketHeroSection from "./components/hero-section";
import NftSearchInput from "./components/search-input";
import NftCategoryListView from "./components/category-lits-view";
import NftFeaturedSection from "./components/featured-section";
import NftUsernamesSection from "./components/usernames-section";
import NftIdeasSection from "./components/ideas-section";
import RecentActivitySection from "./components/recent-activity-section";

export default function NftMarketPage() {
  return (
    <div>
      {/* Hero */}
      <NftMarketHeroSection />

      {/* Search */}
      <NftSearchInput />

      {/* Categories */}
      <NftCategoryListView />

      {/* Featured */}
      <NftFeaturedSection />

      {/* Username */}
      <NftUsernamesSection />

      {/* Ideas */}
      <NftIdeasSection />

      {/* Recent Activity */}
      <RecentActivitySection />

      {/* Bottom CTA */}
      <Card className="my-8 rounded-2xl p-5 text-center">
        <h3 className="font-semibold">NFT خودت را ثبت کن</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Username یا ایده خود را به یک دارایی قابل معامله تبدیل کن.
        </p>

        <Link href="/wallet/idea/create">
          <Button className="mt-4 w-full">ایجاد NFT</Button>
        </Link>
      </Card>
    </div>
  );
}
