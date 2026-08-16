import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import { IDEAS } from "../mock/market-data";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function NftIdeasSection() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SparklesIcon className="h-4 w-4" />
          <h3 className="font-semibold">ایده‌های NFT</h3>
        </div>

        <Link href="/market">
          <Button variant="ghost" size="sm">
            همه
          </Button>
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto snap-x pb-2 pt-1 px-1 no-scrollbar">
        {IDEAS.map((item) => (
          <Card
            key={item.title}
            className="w-52 shrink-0 snap-start rounded-2xl p-4"
          >
            <div className="font-semibold">{item.title}</div>

            <div className="mt-1 font-semibold flex items-center justify-between gap-1">
              <p className="mt-2 text-xs text-muted-foreground">قیمت</p>
              <div className="mt-1 font-semibold flex items-center gap-1">
                <span>{item.price}</span>

                <Image
                  src="/my_dot_logo.svg"
                  alt="Dot One Logo"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link href="/idea/detail"> مشاهده</Link>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
