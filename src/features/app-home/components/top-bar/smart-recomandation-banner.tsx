"use client";

import { useEffect, useState } from "react";
import { SmartRecommendation } from "./types";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "lucide-react";

export default function SmartRecommendationBanner({
  items,
}: {
  items: SmartRecommendation[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;
  const current = items[index];

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={current.id}
        type="button"
        onClick={current.onClick}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex w-full items-center gap-2 rounded-2xl bg-primary/5 px-3.5 py-2.5",
          "text-[12.5px] text-foreground/90 hover:bg-primary/10 transition-colors min-h-[40px]",
        )}
      >
        <span aria-hidden="true" className="text-sm leading-none shrink-0">
          {current.icon}
        </span>
        <span className="flex-1 truncate text-right">{current.text}</span>
        <ChevronLeftIcon
          aria-hidden="true"
          size={14}
          className="shrink-0 text-muted-foreground"
        />
      </motion.button>
    </AnimatePresence>
  );
}
