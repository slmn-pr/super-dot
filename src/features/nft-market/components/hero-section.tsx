import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NftMarketHeroSection() {
  return (
    <div>
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

        <Link href="/wallet/live-market">
          <Button className="mt-4 w-full">
            شروع کنید
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
