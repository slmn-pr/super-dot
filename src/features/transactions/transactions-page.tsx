"use client";

import { useMemo, useState } from "react";

import { BarChart3 } from "lucide-react";
import { MOCK_TRANSACTIONS } from "../wallet/components/mock-data";
import { CurrencyCode } from "../wallet/components/types";
import { Period } from "./types";
import { formatAmount, isSuccessful } from "./utils";
import ChartCard from "./components/chart-card";
import Insight from "./components/insight";
import { PERIODS } from "./consts";
import TransactionsPageHeader from "./components/transactions-page-header";
import BalanceCard from "./components/balance-card";
import StatsCardsView from "./components/stats-cards-view";

export default function TransactionsPage() {
  const [activeCurrency, setActiveCurrency] = useState<CurrencyCode>("DOTO");

  const [period, setPeriod] = useState<Period>("30d");

  const transactions = useMemo(() => {
    return MOCK_TRANSACTIONS.filter(
      (tx) => tx.currency === activeCurrency && isSuccessful(tx),
    );
  }, [activeCurrency]);

  const stats = useMemo(() => {
    const income = transactions
      .filter((tx) => tx.direction === "in")
      .reduce((sum, tx) => sum + tx.amount, 0);

    const expense = transactions
      .filter((tx) => tx.direction === "out")
      .reduce((sum, tx) => sum + tx.amount, 0);

    return {
      income,
      expense,
      net: income - expense,
      count: transactions.length,
    };
  }, [transactions]);

  return (
    <main dir="rtl" className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl pb-12 pt-5">
        {/* Header */}
        <TransactionsPageHeader
          onCurrencyClick={setActiveCurrency}
          activeCurrency={activeCurrency}
        />

        {/* Balance */}
        <BalanceCard activeCurrency={activeCurrency} />

        {/* Stats */}
        <StatsCardsView activeCurrency={activeCurrency} stats={stats} />

        {/* Period */}
        <section className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">روند فعالیت</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              تغییرات مالی در طول زمان
            </p>
          </div>

          <div className="flex rounded-xl bg-muted p-1">
            {PERIODS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPeriod(item.id)}
                className={[
                  "rounded-lg px-2.5 py-1.5 text-xs transition",
                  period === item.id
                    ? "bg-background font-medium shadow-sm"
                    : "text-muted-foreground",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        {/* Chart placeholder */}
        <section className="mb-6 rounded-2xl border border-border bg-card p-5">
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border">
            <div className="text-center">
              <BarChart3 className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />

              <p className="text-sm font-medium">نمودار موجودی</p>

              <p className="mt-1 text-xs text-muted-foreground">
                نمودار را در مرحله بعد اضافه می‌کنیم
              </p>
            </div>
          </div>
        </section>

        {/* Income / Expense */}
        <section className="mb-6 grid gap-4 md:grid-cols-2">
          <ChartCard title="ورودی و خروجی" description="مقایسه جریان مالی" />

          <ChartCard
            title="دسته‌بندی تراکنش‌ها"
            description="توزیع فعالیت‌های مالی"
          />
        </section>

        {/* Insights */}
        <section className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4">
            <h2 className="text-base font-bold">تحلیل فعالیت</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              چند نکته از تراکنش‌های شما
            </p>
          </div>

          <div className="space-y-3">
            <Insight>
              مجموع ورودی شما{" "}
              <strong>
                {formatAmount(stats.income)} {activeCurrency}
              </strong>{" "}
              بوده است.
            </Insight>

            <Insight>
              در مجموع <strong>{formatAmount(stats.count)}</strong> تراکنش موفق
              ثبت شده است.
            </Insight>

            <Insight>
              خالص تغییرات موجودی شما{" "}
              <strong>
                {stats.net >= 0 ? "+" : ""}
                {formatAmount(stats.net)} {activeCurrency}
              </strong>{" "}
              است.
            </Insight>
          </div>
        </section>
      </div>
    </main>
  );
}
