export type TransactionType = "purchase" | "topup" | "refund" | "payout";

export type Transaction = {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  relatedOrderId?: string;
  status: "pending" | "completed";
  createdAt: number;
};


const STARTING_BALANCE = 12_000_000;
const TRANSACTIONS_KEY = "mydot.walletTransactions";

export function getTransactions(): Transaction[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(TRANSACTIONS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function addTransaction(tx: Transaction) {
  if (typeof window === "undefined") return;
  const all = getTransactions();
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify([tx, ...all]));
}

export function getBalance(): number {
  const completed = getTransactions().filter((t) => t.status === "completed");
  return completed.reduce((sum, t) => sum + t.amount, STARTING_BALANCE);
}

export function chargeWallet({
  amount,
  description,
  relatedOrderId,
}: {
  amount: number;
  description: string;
  relatedOrderId?: string;
}) {
  addTransaction({
    id: `tx-${Date.now()}`,
    type: "purchase",
    amount: -amount,
    description,
    relatedOrderId,
    status: "completed",
    createdAt: Date.now(),
  });
}

// lib/wallet-utils.ts
import { STAR_PER_DOTO, type WalletBalance } from "@/types/shopex";

export function dotoToStar(doto: number): number {
  return doto * STAR_PER_DOTO;
}

export function starToDoto(star: number): number {
  return star / STAR_PER_DOTO;
}

export function formatStar(value: number): string {
  return new Intl.NumberFormat("fa-IR").format(Math.round(value));
}

export function formatDoto(value: number): string {
  // Doto could have fractional units (crypto-like), keep up to 2 decimals
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 2 }).format(
    value,
  );
}

export function canAfford(
  balance: WalletBalance,
  amountDoto: number,
  method: "star" | "doto",
): boolean {
  if (method === "doto") return balance.doto >= amountDoto;
  return balance.star >= dotoToStar(amountDoto);
}

/** آیا کاربر با تبدیل موجودی می‌تواند این مبلغ را با روش انتخابی پرداخت کند */
export function canAffordWithConversion(
  balance: WalletBalance,
  amountDoto: number,
  method: "star" | "doto",
): boolean {
  if (canAfford(balance, amountDoto, method)) return true;
  const totalDoto = balance.doto + starToDoto(balance.star);
  return totalDoto >= amountDoto;
}
