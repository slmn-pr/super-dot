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

const INITIAL_TOMAN_BALANCE =
  CURRENCY_BALANCES.find((c) => c.code === "Toman")?.amount ?? 0;

// 100 STAR = 1 DOTO
export const STAR_TO_DOTO_RATE = 100;

export function WalletPage() {
  const [activeCurrency, setActiveCurrency] = useState<CurrencyCode>("DOTO");

  const [activeFilter, setActiveFilter] = useState<TransactionCategory>("all");

  const [sort, setSort] = useState("newest");

  const [starBalance, setStarBalance] = useState(INITIAL_STAR_BALANCE);

  const [dotoBalance, setDotoBalance] = useState(INITIAL_DOTO_BALANCE);

  const [tomanBalance] = useState(INITIAL_TOMAN_BALANCE);

  const [transactions, setTransactions] =
    useState<Transaction[]>(MOCK_TRANSACTIONS);

  const primaryBalance = {
    code: "DOTO" as CurrencyCode,
    label: "DOTO",
    amount: dotoBalance,
  };

  const secondaryBalance = {
    code: "Toman" as CurrencyCode,
    label: "تومان",
    amount: tomanBalance,
  };

  function handlePurchase(pkg: StarPackage) {
    const earned = pkg.stars + (pkg.bonus ?? 0);

    const purchased = pkg.doto + (pkg.bonus ?? 0);

    setDotoBalance((prev) => prev + purchased);
    
    const newTx: Transaction = {
      id: `tx_buy_${Date.now()}`,
      title: `خرید ${earned.toLocaleString("fa-IR")} ستاره`,
      category: "deposit",
      date: new Date(),
      amount: earned,
      currency: "STAR",
      direction: "in",
      status: "success",
    };

    setTransactions((prev) => [newTx, ...prev]);
  }

  function handleConvert(starAmount: number) {
    if (starAmount <= 0 || starAmount > starBalance) {
      return;
    }

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

    setTransactions((prev) => [inTx, outTx, ...prev]);
  }

  function handleQuickAction(id: QuickActionId) {
    // Actionهای اختصاصی از طریق کامپوننت مربوطه مدیریت می‌شوند.
    console.log("Quick action:", id);
  }

  const filteredTransactions = useMemo(() => {
    let items = transactions.filter((tx) => tx.currency === activeCurrency);

    if (activeFilter !== "all") {
      items = items.filter((tx) => tx.category === activeFilter);
    }

    return [...items].sort((a, b) => {
      if (sort === "oldest") {
        return a.date.getTime() - b.date.getTime();
      }

      if (sort === "amount") {
        return b.amount - a.amount;
      }

      return b.date.getTime() - a.date.getTime();
    });
  }, [transactions, activeCurrency, activeFilter, sort]);

  return (
    <main dir="rtl" className="min-h-screen ">
      <div className="mx-auto w-full max-w-md pb-10 pt-5 sm:max-w-lg">
        {/* Header */}
        <header className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
              کیف پول
            </h2>
            <p className="text-xs font-medium text-zinc-400">موجودی من</p>
          </div>
          {/* 
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm">
            <span className="text-sm font-bold text-zinc-800">D</span>
          </div> */}
        </header>

        {/* Balance */}
        <section className="mb-5">
          <BalanceCard
            primary={primaryBalance}
            secondary={secondaryBalance}
            onPurchase={handlePurchase}
            onConvert={handleConvert}
          />
        </section>

        {/* Quick Actions */}
        <section className="mb-7">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-zinc-900">دسترسی سریع</h2>

            <span className="text-xs text-zinc-400">عملیات کیف پول</span>
          </div>

          <QuickActions onAction={handleQuickAction} />
        </section>

        {/* Transactions */}
        <section>
          <div className="mb-3">
            <h2 className="text-lg font-bold text-zinc-900">تراکنش‌ها</h2>

            <p className="mt-1 text-xs text-zinc-400">
              آخرین فعالیت‌های کیف پول شما
            </p>
          </div>

          <div className="space-y-3">
            {/* Currency Tabs */}
            <CurrencyTabs
              value={activeCurrency}
              onValueChange={setActiveCurrency}
            />

            {/* Toolbar */}
            <TransactionToolbar
              sort={sort}
              onSortChange={setSort}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {/* List */}
            <TransactionList transactions={filteredTransactions} />
          </div>
        </section>
      </div>
    </main>
  );
}
