"use client";

import { cn } from "@/lib/utils";
import { MicIcon, SearchIcon, SparklesIcon } from "lucide-react";
import { AnimatePresence, useReducedMotion, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AISearchBar({
  placeholders,
  onSubmit,
  onVoiceSearch,
}: {
  placeholders: string[];
  onSubmit?: (query: string) => void;
  onVoiceSearch?: () => void;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (focused || value) return;
    const id = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % placeholders.length);
    }, 3200);
    return () => clearInterval(id);
  }, [focused, value, placeholders.length]);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) onSubmit?.(value.trim());
      }}
      className="w-full"
    >
      <motion.div
        animate={
          focused
            ? { boxShadow: "0 0 0 3px hsl(var(--primary) / 0.18)" }
            : { boxShadow: "0 1px 2px hsl(var(--foreground) / 0.04)" }
        }
        transition={{ duration: 0.18 }}
        className={cn(
          "flex items-center gap-2 rounded-xl border bg-background px-3.5",
          "min-h-11.5",
          focused ? "border-primary/40" : "border-border",
        )}
      >
        <SparklesIcon
          aria-hidden="true"
          size={16}
          className={cn(
            "shrink-0 transition-colors",
            focused ? "text-primary" : "text-muted-foreground",
          )}
        />

        <div className="relative flex-1 min-w-0">
          <input
            type="text"
            inputMode="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-label="جست‌وجوی هوشمند در دات وان"
            className="peer w-full bg-transparent text-[13px] text-foreground outline-none placeholder:text-transparent"
          />
          {!value && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIndex}
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-[13px] text-muted-foreground whitespace-nowrap"
                >
                  {placeholders[placeholderIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onVoiceSearch}
          aria-label="جست‌وجوی صوتی"
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            "hover:bg-muted active:scale-90 transition-all",
          )}
        >
          <MicIcon
            aria-hidden="true"
            size={16}
            className="text-muted-foreground"
          />
        </button>

        <button
          type="submit"
          aria-label="جست‌وجو"
          className="flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-muted active:scale-90 transition-all"
        >
          <SearchIcon
            aria-hidden="true"
            size={16}
            className="text-muted-foreground"
          />
        </button>
      </motion.div>
    </form>
  );
}


