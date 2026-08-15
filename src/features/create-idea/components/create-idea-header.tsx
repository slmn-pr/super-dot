import Link from "next/link";
import { ArrowRightIcon, LightbulbIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CreateIdeaHeader() {
  return (
    <header className="mb-8">
      <div className="mb-5 flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-xl">
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
            <LightbulbIcon className="h-4 w-4 text-blue-500" />
          </div>

          <h1 className="text-lg font-bold">ثبت ایده جدید</h1>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] p-4">
        <p className="text-sm leading-6 text-muted-foreground">
          ایده‌ات رو به یک دارایی قابل معامله تبدیل کن. اطلاعات کامل‌تر، شانس
          بیشتری برای دیده‌شدن و خرید ایده ایجاد می‌کنه.
        </p>
      </div>
    </header>
  );
}
