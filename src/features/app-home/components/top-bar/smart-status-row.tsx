import { motion } from "motion/react";
import { QuickStatus } from "./types";
import { cn } from "@/lib/utils";

export default function SmartStatusRow({ items }: { items: QuickStatus[] }) {
  if (!items.length) return null;
  return (
    <div
      className="flex items-center gap-2 overflow-x-auto px-0.5 -mx-0.5 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      role="list"
      aria-label="وضعیت‌های سریع"
    >
      {items.map((item, i) => (
        <motion.button
          key={item.id}
          type="button"
          role="listitem"
          onClick={item.onClick}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, delay: i * 0.03 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 min-h-9",
            "text-[12px] font-medium whitespace-nowrap",
            item.tone === "positive" &&
              "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
            item.tone === "warning" &&
              "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
            (!item.tone || item.tone === "default") &&
              "bg-muted text-foreground/80",
          )}
        >
          <span aria-hidden="true" className="text-[13px] leading-none">
            {item.icon}
          </span>
          {item.label}
        </motion.button>
      ))}
    </div>
  );
}
