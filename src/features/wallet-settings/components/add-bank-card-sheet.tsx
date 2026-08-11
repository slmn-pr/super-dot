"use client";

import { AnimatePresence, motion } from "motion/react";
import { FormEvent } from "react";

import CardPreview from "./card-preview";
import CardHolderField from "./card-holder-field";
import CardNumberField from "./card-number-field";
import CvvField from "./cvv-field";
import ExpiryField from "./expiry-field";
import SecurityNote from "./security-note";
import SheetHeader from "./sheet-header";
import SubmitButton from "./submit-button";

import { useBankCardForm } from "../hooks/use-bank-card-form";
import type { BankCardFormValues } from "../types";

const AUTO_CLOSE_DELAY_MS = 900;

interface AddBankCardSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: BankCardFormValues) => Promise<void> | void;
}

export default function AddBankCardSheet({
  open,
  onOpenChange,
  onSubmit,
}: AddBankCardSheetProps) {
  const form = useBankCardForm({
    onSubmit,
    onSuccess: () => {
      window.setTimeout(() => onOpenChange(false), AUTO_CLOSE_DELAY_MS);
    },
  });

  const handleClose = () => {
    if (form.isSubmitting) return;
    onOpenChange(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await form.submit();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50" dir="rtl">
        {/* Backdrop */}
        <motion.button
          type="button"
          aria-label="بستن"
          className="absolute inset-0 cursor-default bg-black/35 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />

        {/* Sheet */}
        <motion.div
          initial={{ y: "100%", opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 380, damping: 36 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-bank-card-title"
          className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-lg overflow-hidden rounded-t-[28px] bg-white shadow-2xl"
        >
          {/* Mobile handle */}
          <div className="flex justify-center pt-3 sm:hidden">
            <div className="h-1 w-10 rounded-full bg-zinc-200" />
          </div>

          <SheetHeader onClose={handleClose} disabled={form.isSubmitting} />

          {/* Content */}
          <div className="max-h-[calc(100dvh-100px)] overflow-y-auto px-5 pb-6 sm:px-6">
            <motion.div layout className="mb-7">
              <CardPreview
                cardNumber={form.values.cardNumber}
                cardHolder={form.values.cardHolder}
                expiryMonth={form.values.expiryMonth}
                expiryYear={form.values.expiryYear}
                cvv={form.values.cvv}
                isFlipped={form.isFlipped}
                isValid={form.validity.cardNumberValid}
              />
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <CardNumberField
                value={form.values.cardNumber}
                isValid={form.validity.cardNumberValid}
                hasError={Boolean(form.errors.cardNumber)}
                onChange={form.handleCardNumberChange}
                onBlur={() => form.markTouched("cardNumber")}
              />

              <CardHolderField
                value={form.values.cardHolder}
                hasError={Boolean(form.errors.cardHolder)}
                onChange={form.setCardHolder}
                onBlur={() => form.markTouched("cardHolder")}
              />

              <div className="grid grid-cols-2 gap-3">
                <ExpiryField
                  month={form.values.expiryMonth}
                  year={form.values.expiryYear}
                  hasError={Boolean(form.errors.expiry)}
                  isExpired={Boolean(form.errors.expiryExpired)}
                  onMonthChange={form.handleMonthChange}
                  onYearChange={form.handleYearChange}
                  onFocus={() => form.setIsFlipped(false)}
                  onBlur={() => form.markTouched("expiry")}
                />

                <CvvField
                  value={form.values.cvv}
                  hasError={Boolean(form.errors.cvv)}
                  onChange={form.handleCvvChange}
                  onFocus={() => form.setIsFlipped(true)}
                  onBlur={() => form.markTouched("cvv")}
                />
              </div>

              <SecurityNote />

              {form.submitError && (
                <p role="alert" className="text-xs text-red-500">
                  {form.submitError}
                </p>
              )}

              <SubmitButton
                isFormValid={form.validity.isFormValid}
                isSubmitting={form.isSubmitting}
                submitSuccess={form.submitSuccess}
              />
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
