"use client";

import { useMemo, useState } from "react";

import { BarChart3, LightbulbIcon, SparklesIcon, TrendingDown } from "lucide-react";
import { MOCK_TRANSACTIONS } from "../wallet/components/mock-data";
import { CurrencyCode } from "../wallet/components/types";
import { Period } from "./types";
import { formatAmount, isSuccessful } from "./utils";
import ChartCard from "./components/chart-card";
import { PERIODS } from "./consts";
import TransactionsPageHeader from "./components/transactions-page-header";
import BalanceCard from "./components/balance-card";
import StatsCardsView from "./components/stats-cards-view";
import BalanceChart from "./components/balanc-chart";
import { Insight } from "./components/insight";

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
        <section className="mb-6 rounded-2xl border border-border bg-card">
          <BalanceChart />
        </section>

        {/* Income / Expense */}
        <section className="mb-6 grid gap-4">
          <ChartCard
            title="ورودی و خروجی"
            description="مقایسه جریان مالی"
            type="flow"
          />

          <ChartCard
            title="دسته‌بندی تراکنش‌ها"
            description="توزیع فعالیت‌های مالی"
            type="category"
          />
        </section>

        {/* AI Insights */}
        {/* AI Insights */}
        <section className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4">
            <h2 className="text-base font-bold">بینش‌های هوشمند</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              چیزهایی که از فعالیت‌های شما متوجه شدیم
            </p>
          </div>

          <div className="space-y-3">
            <Insight icon={<LightbulbIcon className="h-4 w-4" />}>
              بیشترین هزینه این ماه شما مربوط به <strong>حمل‌ونقل</strong> بوده
              و حدود ۳۸٪ از کل هزینه‌ها را تشکیل می‌دهد.
            </Insight>

            <Insight icon={<TrendingDown className="h-4 w-4" />}>
              هزینه‌های شما نسبت به ماه گذشته <strong>۱۲٪ کمتر</strong> شده است.
            </Insight>

            <Insight icon={<SparklesIcon className="h-4 w-4" />}>
              در خریدهای کوچک، این ماه <strong>۱۸٪ کمتر</strong> از ماه گذشته
              هزینه کرده‌اید.
            </Insight>
          </div>
        </section>
      </div>
    </main>
  );
}
