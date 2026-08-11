import { useMemo, useState } from "react";

import {
  isExpiryInPast,
  onlyDigits,
  validateIranianCardNumber,
} from "../utils";
import type { BankCardFormValues, BankCardTouchedFields } from "../types";

interface UseBankCardFormOptions {
  onSubmit?: (data: BankCardFormValues) => Promise<void> | void;
  onSuccess?: () => void;
}

export function useBankCardForm({
  onSubmit,
  onSuccess,
}: UseBankCardFormOptions) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const [touched, setTouched] = useState<BankCardTouchedFields>({});
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const cardNumberValid = useMemo(
    () => Boolean(cardNumber) && validateIranianCardNumber(cardNumber),
    [cardNumber],
  );

  const expiryValid = useMemo(() => {
    if (expiryMonth.length !== 2 || expiryYear.length !== 2) return false;

    const monthNum = Number(expiryMonth);
    if (monthNum < 1 || monthNum > 12) return false;

    return !isExpiryInPast(expiryMonth, expiryYear);
  }, [expiryMonth, expiryYear]);

  const cardHolderValid = cardHolder.trim().length >= 3;
  const cvvValid = cvv.length >= 3 && cvv.length <= 4;

  const errors = {
    cardNumber: touched.cardNumber && !cardNumberValid,
    cardHolder: touched.cardHolder && !cardHolderValid,
    expiry: touched.expiry && !expiryValid,
    expiryExpired:
      touched.expiry &&
      expiryMonth.length === 2 &&
      expiryYear.length === 2 &&
      isExpiryInPast(expiryMonth, expiryYear),
    cvv: touched.cvv && !cvvValid,
  };

  const isFormValid =
    cardNumberValid && cardHolderValid && expiryValid && cvvValid;

  const markTouched = (field: keyof BankCardTouchedFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleCardNumberChange = (value: string) => {
    setCardNumber(onlyDigits(value, 16));
  };

  const handleMonthChange = (value: string) => {
    const month = onlyDigits(value, 2);

    if (month.length === 2 && Number(month) > 12) {
      return;
    }

    setExpiryMonth(month);
  };

  const handleYearChange = (value: string) => {
    setExpiryYear(onlyDigits(value, 2));
  };

  const handleCvvChange = (value: string) => {
    setCvv(onlyDigits(value, 4));
  };

  const reset = () => {
    setCardNumber("");
    setCardHolder("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvv("");
    setTouched({});
    setIsFlipped(false);
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  const submit = async () => {
    setTouched({
      cardNumber: true,
      cardHolder: true,
      expiry: true,
      cvv: true,
    });
    setSubmitError(null);

    if (!isFormValid) {
      return false;
    }

    try {
      setIsSubmitting(true);

      await onSubmit?.({
        cardNumber,
        cardHolder: cardHolder.trim(),
        expiryMonth,
        expiryYear,
        cvv,
      });

      setSubmitSuccess(true);
      onSuccess?.();
      return true;
    } catch (error) {
      console.error("Failed to add bank card:", error);
      setSubmitError("ثبت کارت با خطا مواجه شد. دوباره تلاش کنید.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values: { cardNumber, cardHolder, expiryMonth, expiryYear, cvv },
    validity: {
      cardNumberValid,
      cardHolderValid,
      expiryValid,
      cvvValid,
      isFormValid,
    },
    errors,
    touched,
    isFlipped,
    isSubmitting,
    submitSuccess,
    submitError,
    setIsFlipped,
    markTouched,
    setCardHolder,
    handleCardNumberChange,
    handleMonthChange,
    handleYearChange,
    handleCvvChange,
    submit,
    reset,
  };
}

export type UseBankCardFormReturn = ReturnType<typeof useBankCardForm>;
