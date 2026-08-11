"use client";

import { AnimatePresence, motion } from "motion/react";
import { CreditCard, Wifi, Eye, EyeOff } from "lucide-react";

interface CardPreviewProps {
  cardNumber: string;
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  isFlipped?: boolean;
  isValid?: boolean;
}

const formatCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 16);

  return digits.replace(/(.{4})/g, "$1 ").trim();
};

const maskedCvv = (value: string) => {
  return value
    .split("")
    .map(() => "•")
    .join("");
};

export default function CardPreview({
  cardNumber,
  cardHolder,
  expiryMonth,
  expiryYear,
  cvv,
  isFlipped = false,
  isValid = false,
}: CardPreviewProps) {
  const formattedNumber = formatCardNumber(cardNumber);

  const displayNumber = formattedNumber || "•••• •••• •••• ••••";

  const displayHolder = cardHolder.trim() || "نام صاحب کارت";

  const displayMonth = expiryMonth || "MM";

  const displayYear = expiryYear || "YY";

  return (
    <div
      className="mx-auto w-full max-w-[390px]"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        className="relative aspect-[1.586/1] w-full"
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[22px] p-5 text-white shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(135deg, #18181b 0%, #27272a 45%, #09090b 100%)",
          }}
        >
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex h-full flex-col justify-between">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                  <CreditCard size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-medium tracking-wide text-white/50">
                    MY DOT
                  </p>

                  <p className="text-xs font-medium text-white/80">
                    کارت بانکی
                  </p>
                </div>
              </div>

              <Wifi size={22} className="rotate-90 text-white/70" />
            </div>

            {/* Card Number */}
            <div className="mt-5">
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={displayNumber}
                  initial={{
                    opacity: 0.35,
                    y: 3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                  className={`font-mono text-[clamp(17px,5vw,24px)] tracking-[0.08em] ${
                    isValid ? "text-white" : "text-white/90"
                  }`}
                  dir="ltr"
                >
                  {displayNumber}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom */}
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="mb-1 text-[8px] uppercase tracking-[0.15em] text-white/40">
                  Card Holder
                </p>

                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={displayHolder}
                    initial={{
                      opacity: 0.4,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    className="truncate text-sm font-medium text-white/90"
                  >
                    {displayHolder}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="shrink-0">
                <p className="mb-1 text-[8px] uppercase tracking-[0.15em] text-white/40">
                  Expires
                </p>

                <p
                  className="font-mono text-sm font-medium tracking-wider text-white/90"
                  dir="ltr"
                >
                  {displayMonth}/{displayYear}
                </p>
              </div>
            </div>
          </div>

          {/* Valid indicator */}
          <AnimatePresence>
            {isValid && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                className="absolute right-5 top-5"
              >
                <div className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[22px] text-white shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(135deg, #18181b 0%, #27272a 45%, #09090b 100%)",
          }}
        >
          <div className="flex h-full flex-col justify-between py-6">
            {/* Magnetic stripe */}
            <div className="h-12 w-full bg-black/80" />

            <div className="px-6">
              <p className="mb-2 text-[9px] text-white/40">CVV2</p>

              <div className="flex h-10 items-center justify-end rounded-lg bg-white px-4">
                <span
                  className="font-mono text-sm tracking-[0.3em] text-zinc-900"
                  dir="ltr"
                >
                  {cvv ? maskedCvv(cvv) : "•••"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between px-6 pb-1">
              <p className="text-[9px] text-white/35">
                این کارت متعلق به صاحب حساب است
              </p>

              {cvv ? (
                <EyeOff size={16} className="text-white/30" />
              ) : (
                <Eye size={16} className="text-white/30" />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
