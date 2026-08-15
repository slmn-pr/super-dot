import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function NftFeaturedSection() {
  return (
    <section className="mt-6">
      <Card className="relative overflow-hidden rounded-3xl border-border/60 bg-muted/20 p-4 shadow-none">
        {/* Subtle glow */}
        <div className="pointer-events-none absolute -left-16 -top-16 size-32 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Badge
              variant="secondary"
              className="gap-1.5 rounded-full bg-primary/10 px-2.5 text-xs font-medium text-primary"
            >
              <SparklesIcon className="size-3.5" />
              پیشنهاد ویژه
            </Badge>

            <span className="text-xs text-muted-foreground">Username</span>
          </div>

          {/* Username */}
          <div className="mt-6">
            <p className="text-3xl font-bold tracking-tight">@crypto</p>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              یک Username کمیاب برای هویت دیجیتال شما
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground">قیمت</p>
              <p className="mt-1 text-lg font-bold">
                1.25{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  DOTO
                </span>
              </p>
            </div>

            <Link href="/wallet/live-market">
              <Button className="h-10 rounded-xl px-5">
                مشاهده
                <ArrowLeftIcon className="mr-1.5 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}
