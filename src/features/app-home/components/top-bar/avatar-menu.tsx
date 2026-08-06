"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

export default function AvatarMenu({
  userName,
  avatarUrl,
  onClick,
}: {
  userName: string;
  avatarUrl?: string;
  onClick?: () => void;
}) {
  const initial = userName?.trim()?.charAt(0) ?? "؟";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
      aria-label="پروفایل، تنظیمات و باشگاه مشتریان"
      className="relative shrink-0 rounded-full"
    >
      <Avatar className="size-11 ring-2 ring-foreground/10">
        <AvatarImage src={avatarUrl} alt="" />
        <AvatarFallback className="text-sm font-semibold">
          {initial}
        </AvatarFallback>
      </Avatar>
    </motion.button>
  );
}
