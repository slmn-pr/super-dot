"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Check, Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isFormValid: boolean;
  isSubmitting: boolean;
  submitSuccess: boolean;
}

export default function SubmitButton({
  isFormValid,
  isSubmitting,
  submitSuccess,
}: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting || submitSuccess}
      whileTap={{ scale: 0.98 }}
      className={[
        "relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl text-sm font-medium transition",
        isFormValid
          ? "bg-zinc-950 text-white hover:bg-zinc-800"
          : "cursor-not-allowed bg-zinc-100 text-zinc-400",
      ].join(" ")}
    >
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <Check size={17} />
            کارت با موفقیت اضافه شد
          </motion.span>
        ) : isSubmitting ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Loader2 size={17} className="animate-spin" />
            در حال ثبت...
          </motion.span>
        ) : (
          <motion.span
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            افزودن کارت
            <ArrowLeft size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
