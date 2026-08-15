"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = ["همه", "Username", "Idea", "جدید", "محبوب"];

export default function NftCategoryListView() {
  const [activeCategory, setActiveCategory] = useState("همه");

  return (
    <div
      className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar"
      role="tablist"
      aria-label="دسته‌بندی بازار"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <Button
            key={category}
            type="button"
            size="sm"
            variant="ghost"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "h-9 shrink-0 rounded-full px-4 text-xs font-medium transition-all",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-white"
                : "border  border-border/60 bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
}
