import { CreditCard, Wallet, Coins } from "lucide-react";

export const BANK_CARDS = [
  {
    id: "1",
    bankName: "بانک ملت",
    cardNumber: "6037",
    lastFour: "4582",
    isDefault: true,
  },
];

export const WALLET_SETTINGS = [
  {
    title: "کیف پول ریالی",
    description: "مدیریت موجودی و پرداخت‌های ریالی",
    icon: Wallet,
  },
  {
    title: "کیف پول DOTO",
    description: "مدیریت تنظیمات و دارایی DOTO",
    icon: Coins,
  },
];
