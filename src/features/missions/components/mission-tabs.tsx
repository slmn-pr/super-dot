"use client";

import { cn } from "@/lib/utils";
import { MISSION_TABS, MissionCategoryId } from "../_mock";

interface MissionTabsProps {
  value: MissionCategoryId;
  onValueChange: (id: MissionCategoryId) => void;
}

export function MissionTabs({ value, onValueChange }: MissionTabsProps) {
  return (
    <div role="tablist" className="flex gap-2 overflow-x-auto">
      {MISSION_TABS.map((tab) => {
        const isActive = tab.id === value;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onValueChange(tab.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm whitespace-nowrap transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
