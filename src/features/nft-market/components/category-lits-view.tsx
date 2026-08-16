"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles, Tag, Flame, Compass, UserCheck } from "lucide-react";

// ساختار متغیری با قابلیت افزودن آیکون‌های اختیاری برای UX بهتر
const categories = [
  { id: "همه", label: "همه", icon: Compass },
  { id: "Username", label: "Username", icon: UserCheck },
  { id: "Idea", label: "Idea", icon: Tag },
  { id: "جدید", label: "جدید", icon: Sparkles },
  { id: "محبوب", label: "محبوب", icon: Flame },
];

export default function NftCategoryListView() {
  const [activeCategory, setActiveCategory] = useState("همه");

  return (
    <div
      className="flex gap-2 overflow-x-auto py-1 px-0.5 no-scrollbar snap-x snap-mandatory overscroll-x-contain scroll-smooth"
      role="tablist"
      aria-label="دسته‌بندی بازار"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        const Icon = cat.icon;

        return (
          <Button
            key={cat.id}
            type="button"
            size="sm"
            variant="ghost"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "h-9 shrink-0 snap-start rounded-2xl px-3.5 text-xs font-medium transition-all duration-200 select-none active:scale-95",
              isActive
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                : "border border-border/60 bg-card/60 text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border",
            )}
          >
            <Icon
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                isActive
                  ? "scale-110 text-primary-foreground"
                  : "text-muted-foreground/70",
              )}
            />
            <span>{cat.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
