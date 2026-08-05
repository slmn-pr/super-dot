"use client";

import { useMemo, useState } from "react";
import { BalanceCard } from "./components/balance-card";
import { CurrencyTabs } from "./components/currency-tabs";
import { QuickActions } from "./components/quick-actions";
import { TransactionList } from "./components/transaction-list";
import { TransactionToolbar } from "./components/transaction-toolbar";
import { CURRENCY_BALANCES, MOCK_TRANSACTIONS } from "./components/mock-data";
import type {
  CurrencyCode,
  QuickActionId,
  StarPackage,
  Transaction,
  TransactionCategory,
} from "./components/types";

const INITIAL_STAR_BALANCE =
  CURRENCY_BALANCES.find((c) => c.code === "STAR")?.amount ?? 0;
const INITIAL_DOTO_BALANCE =
  CURRENCY_BALANCES.find((c) => c.code === "DOTO")?.amount ?? 0;

// طبق سند: 100 STAR = 1 DOTO — این فقط نرخ تبدیل است، نه رابطه‌ی مشتق‌شده‌ی دائمی بین دو موجودی.
export const STAR_TO_DOTO_RATE = 100;

export function WalletPage() {
  const [activeCurrency, setActiveCurrency] = useState<CurrencyCode>("Toman");
  const [activeFilter, setActiveFilter] = useState<TransactionCategory>("all");
  const [sort, setSort] = useState("newest");

  // دو موجودی حالا کاملاً مستقل هستند — DOTO دیگر از STAR مشتق نمی‌شود.
  const [starBalance, setStarBalance] = useState(INITIAL_STAR_BALANCE);
  const [dotoBalance, setDotoBalance] = useState(INITIAL_DOTO_BALANCE);
  const [transactions, setTransactions] =
    useState<Transaction[]>(MOCK_TRANSACTIONS);

  const primaryBalance = {
    code: "DOTO" as CurrencyCode,
    label: "DOTO",
    amount: dotoBalance,
  };
  const secondaryBalance = {
    code: "Toman" as CurrencyCode,
    label: "Toman",
    amount: dotoBalance,
  };

  function handlePurchase(pkg: StarPackage) {
    const earned = pkg.stars + (pkg.bonus ?? 0);
    setStarBalance((prev) => prev + earned);

    const newTx: Transaction = {
      id: `tx_buy_${Date.now()}`,
      title: `خرید ${earned.toLocaleString()} ستاره`,
      category: "deposit",
      date: new Date(),
      amount: earned,
      currency: "STAR",
      direction: "in",
      status: "success",
    };
    setTransactions((prev) => [newTx, ...prev]);
  }

  /**
   * تبدیل STAR به DOTO — اقدام آگاهانه‌ی کاربر طبق سند (Stars -> Convert -> DOTO).
   * starAmount باید مضربی از STAR_TO_DOTO_RATE نباشد الزاماً، اما باید <= starBalance باشد.
   */
  function handleConvert(starAmount: number) {
    if (starAmount <= 0 || starAmount > starBalance) return;

    const dotoAmount = starAmount / STAR_TO_DOTO_RATE;
    const groupId = `conv_${Date.now()}`;

    setStarBalance((prev) => prev - starAmount);
    setDotoBalance((prev) => prev + dotoAmount);

    const outTx: Transaction = {
      id: `${groupId}_out`,
      title: "تبدیل STAR به DOTO",
      category: "convert",
      date: new Date(),
      amount: starAmount,
      currency: "STAR",
      direction: "out",
      status: "success",
      groupId,
    };
    const inTx: Transaction = {
      id: `${groupId}_in`,
      title: "تبدیل STAR به DOTO",
      category: "convert",
      date: new Date(),
      amount: dotoAmount,
      currency: "DOTO",
      direction: "in",
      status: "success",
      groupId,
    };
    setTransactions((prev) => [outTx, inTx, ...prev]);
  }

  function handleQuickAction(id: QuickActionId) {
    // send / receive / scan / nft / withdraw از طریق کامپوننت‌های اختصاصی خودشان مدیریت می‌شوند.
    // convert از طریق ConvertSheet در BalanceCard انجام می‌شود؛ این هندلر برای اکشن‌های دیگر رزرو شده.
  }

  const filteredTransactions = useMemo(() => {
    let items = transactions.filter((tx) => tx.currency === activeCurrency);

    if (activeFilter !== "all") {
      items = items.filter((tx) => tx.category === activeFilter);
    }

    return [...items].sort((a, b) => {
      if (sort === "oldest") return a.date.getTime() - b.date.getTime();
      if (sort === "amount") return b.amount - a.amount;
      return b.date.getTime() - a.date.getTime();
    });
  }, [transactions, activeCurrency, activeFilter, sort]);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-4 py-6 sm:max-w-lg sm:py-8 lg:max-w-xl">
      {/* <h1 className="text-2xl font-bold text-foreground">کیف پول</h1> */}

      <BalanceCard
        primary={primaryBalance}
        secondary={secondaryBalance}
        onPurchase={handlePurchase}
        onConvert={handleConvert}
      />

      <QuickActions onAction={handleQuickAction} />

      <div className="flex flex-col gap-4 animate-in fade-in duration-300">
        <CurrencyTabs
          value={activeCurrency}
          onValueChange={setActiveCurrency}
        />

        <TransactionToolbar
          sort={sort}
          onSortChange={setSort}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <TransactionList transactions={filteredTransactions} />
      </div>
    </div>
  );
}
