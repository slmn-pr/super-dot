"use client";

import { Badge } from "@/components/ui/badge";
import { toPersianDigits } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import { BellIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function NotificationButton({
  count = 0,
  onClick,
}: {
  count?: number;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        count > 0
          ? `اعلان‌ها، ${toPersianDigits(count)} مورد خوانده‌نشده`
          : "اعلان‌ها"
      }
      className={cn(
        "relative flex size-11 items-center justify-center rounded-2xl",
        "bg-muted hover:bg-muted/70 active:scale-95 transition-all shrink-0",
      )}
    >
      <BellIcon
        aria-hidden="true"
        size={18}
        strokeWidth={1.75}
        className="text-foreground/80"
      />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.18,
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            <Badge
              aria-hidden="true"
              className="absolute -top-1 -left-1 h-4 min-w-4 px-1 flex items-center justify-center text-[10px] font-bold bg-red-500 text-white border-0 rounded-full pointer-events-none"
            >
              {count > 9 ? "۹+" : toPersianDigits(count)}
            </Badge>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
