"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function MenuButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{
        scale: 0.92,
      }}
      className="
        flex size-10 items-center justify-center
        rounded-2xl bg-muted
        text-foreground
        transition-colors
        hover:bg-muted/70
      "
      aria-label="باز کردن منو"
    >
      <Menu size={20} />
    </motion.button>
  );
}