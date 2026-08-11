"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { formatCardNumber } from "../utils";


interface CardNumberFieldProps {
  value: string;
  isValid: boolean;
  hasError: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export default function CardNumberField({
  value,
  isValid,
  hasError,
  onChange,
  onBlur,
}: CardNumberFieldProps) {
  return (
    <div>
      <label
        htmlFor="card-number"
        className="mb-2 block text-sm font-medium text-zinc-800"
      >
        شماره کارت
      </label>

      <div
        className={[
          "relative rounded-xl border bg-white transition-all",
          "focus-within:ring-2 focus-within:ring-zinc-900/10",
          hasError
            ? "border-red-400 focus-within:ring-red-500/10"
            : isValid
              ? "border-emerald-400"
              : "border-zinc-200",
        ].join(" ")}
      >
        <input
          id="card-number"
          name="cardNumber"
          inputMode="numeric"
          autoComplete="cc-number"
          dir="ltr"
          value={formatCardNumber(value)}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder="6037 9918 1234 5678"
          aria-invalid={hasError}
          aria-describedby={hasError ? "card-number-error" : undefined}
          className="h-12 w-full rounded-xl bg-transparent px-4 font-mono text-sm tracking-wider text-zinc-900 outline-none placeholder:text-zinc-300"
        />

        <AnimatePresence>
          {isValid && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute left-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500 text-white"
            >
              <Check size={14} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hasError && (
        <motion.p
          id="card-number-error"
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-500"
        >
          شماره کارت وارد شده معتبر نیست.
        </motion.p>
      )}
    </div>
  );
}
