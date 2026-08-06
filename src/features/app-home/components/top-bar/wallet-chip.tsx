"use client";

import { toPersianDigits } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { WalletIcon } from "lucide-react";

export default function WalletChip({
  balance,
  currency = "TOMAN",
  onClick,
}: {
  balance: string;
  currency?: "TOMAN" | "DOTO";
  onClick?: () => void;
}) {
  const label = currency === "DOTO" ? "دوتو" : "تومان";
  const icon = currency === "DOTO" ? "🪙" : null;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "flex items-center gap-1.5 rounded-2xl bg-muted px-3 py-1.5",
        "min-h-[44px] shrink-0",
        "hover:bg-muted/70 active:scale-[0.98] transition-colors",
      )}
      aria-label={`موجودی کیف پول: ${toPersianDigits(balance)} ${label}`}
    >
      {icon ? (
        <span aria-hidden="true" className="text-sm leading-none">
          {icon}
        </span>
      ) : (
        <WalletIcon
          aria-hidden="true"
          size={14}
          className="text-foreground/70"
        />
      )}
      <AnimatePresence mode="popLayout">
        <motion.span
          key={balance}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="text-[13px] font-semibold tabular-nums text-foreground"
        >
          {toPersianDigits(balance)}
        </motion.span>
      </AnimatePresence>
      <span className="text-[11px] text-muted-foreground">{label}</span>
    </motion.button>
  );
}
