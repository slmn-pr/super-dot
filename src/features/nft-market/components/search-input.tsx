"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function NftSearchInput() {
  return (
    <div className="relative flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="جستجوی نام‌کاربری، ایده یا مجموعه..."
          className="w-full rounded-2xl border border-input bg-card/90 py-3 pr-10 pl-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-all "
        />
      </div>
      <button
        aria-label="فیلترها"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-input bg-card text-muted-foreground transition-all active:scale-95 hover:text-foreground"
      >
        <SlidersHorizontal className="h-4 w-4" />
      </button>
    </div>
  );
}
