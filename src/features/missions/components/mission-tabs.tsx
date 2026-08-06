"use client";

import { cn } from "@/lib/utils";

const tabs = ["همه", "روزانه", "سفر", "خرید", "مالی"];

export function MissionTabs() {
  return (
    <div
      className="
flex
gap-2
overflow-x-auto
"
    >
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={cn(
            "rounded-full px-4 py-2 text-sm whitespace-nowrap transition",
            index === 0
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground",
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
