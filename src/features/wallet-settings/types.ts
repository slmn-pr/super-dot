export interface BankCardFormValues {
  cardNumber: string;
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

export type BankCardTouchedFields = Partial<
  Record<"cardNumber" | "cardHolder" | "expiry" | "cvv", boolean>
>;
