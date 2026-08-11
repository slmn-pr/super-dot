"use client";

import { CreditCard } from "lucide-react";

export default function SecurityNote() {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-zinc-50 p-3.5">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
        <CreditCard size={16} className="text-zinc-500" />
      </div>

      <p className="text-xs leading-5 text-zinc-500">
        اطلاعات کارت شما فقط برای اتصال کارت بانکی به کیف پول استفاده می‌شود.
      </p>
    </div>
  );
}
