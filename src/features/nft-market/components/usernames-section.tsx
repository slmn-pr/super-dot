import { Button } from "@/components/ui/button";
import { FlameIcon } from "lucide-react";
import Link from "next/link";
import { USERNAMES } from "../mock/market-data";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function NftUsernamesSection() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FlameIcon className="h-4 w-4 text-orange-500" />
          <h3 className="font-semibold">Usernameهای ترند</h3>
        </div>

        <Link href="/wallet/live-market">
          <Button variant="ghost" size="sm">
            همه
          </Button>
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto snap-x pb-2 pt-1 px-1 no-scrollbar">
        {USERNAMES.map((item) => (
          <Card
            key={item.name}
            className="w-52 shrink-0 snap-start rounded-2xl p-4"
          >
            <div className="text-lg font-bold text-left" dir="ltr">
              {item.name}
            </div>

            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="mt-2 text-xs text-muted-foreground">قیمت فعلی</p>

              <div className="flex items-center gap-1">
                <div className="mt-1 font-semibold">{item.price}</div>
                <Image
                  src="/my_dot_logo.svg"
                  alt="Dot One Logo"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <Link href="/wallet/live-market">
              <Button size="sm" variant="outline" className="mt-4 w-full">
                خرید
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
