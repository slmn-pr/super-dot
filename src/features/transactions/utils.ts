import { Transaction } from "@/lib/wallet";

export function formatAmount(amount: number) {
  return amount.toLocaleString("fa-IR");
}

export function isSuccessful(tx: Transaction) {
  return tx.status === "success";
}
