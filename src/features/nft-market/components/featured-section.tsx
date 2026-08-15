import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function NftFeaturedSection() {
  return (
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

          <Link href="/wallet/live-market">
            <Button size="sm">خرید</Button>
          </Link>
        </div>
      </Card>
    </section>
  );
}
