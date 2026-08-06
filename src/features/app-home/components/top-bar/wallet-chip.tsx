"use client";

import { toPersianDigits } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Wallet, Coins } from "lucide-react";
import Image from "next/image";

export default function WalletChip({
  balance,
  currency = "TOMAN",
  onClick,
}: {
  balance: string;
  currency?: "TOMAN" | "DOTO";
  onClick?: () => void;
}) {
  const isDoto = currency === "DOTO";

  const label = isDoto ? "دوتو" : "تومان";

  const formattedBalance = Number(balance).toLocaleString("fa-IR");

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
      className={cn(
        `
        flex
        items-center
        gap-2
        rounded-2xl
        border
        px-3.5
        py-2
        min-h-[46px]
        shrink-0
        transition
        `,
        isDoto
          ? `
            bg-background
            text-gray-950
            font-semibold
          `
          : `
            bg-white
            border-zinc-200
          `,
      )}
    >
      <div
        className={cn(
          `
          flex
          size-8
          items-center
          justify-center
          rounded-xl
          
          `,
          "",
        )}
      >
        {isDoto ? (
          <>
            {/* <Coins size={16} className="text-blue-500" /> */}
            <Image src="/my_dot_logo.svg" width={32} height={32} alt="Doto" />
          </>
        ) : (
          <Wallet size={16} className="text-zinc-600" />
        )}
      </div>

      <div
        className="
        flex
        flex-col
        items-start
        leading-none
        "
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={balance}
            initial={{
              opacity: 0,
              y: 4,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -4,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              text-sm
              font-bold
              tracking-tight
              tabular-nums
            "
          >
            {formattedBalance}
          </motion.span>
        </AnimatePresence>

        <span
          className="
          mt-1
          text-[10px]
          text-muted-foreground
          "
        >
          {label}
        </span>
      </div>
    </motion.button>
  );
}
