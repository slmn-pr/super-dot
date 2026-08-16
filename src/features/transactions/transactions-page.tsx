"use client";

import { useMemo, useState } from "react";
import { LightbulbIcon, TrendingDown, ShieldAlert, Zap } from "lucide-react";
import { MOCK_TRANSACTIONS } from "../wallet/components/mock-data";
import { CurrencyCode } from "../wallet/components/types";
import { Period } from "./types";
import { isSuccessful } from "./utils";
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

  // فیلتر هوشمند بر اساس ارز و بازه زمانی
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
    <main
      dir="rtl"
      className="min-h-screen bg-background pb-20 pt-3 md:pb-12 md:pt-6"
    >
      <div className="mx-auto w-full">
        {/* ۱. هدر صفحه */}
        <TransactionsPageHeader
          onCurrencyClick={setActiveCurrency}
          activeCurrency={activeCurrency}
        />

        {/* ۲. کارت موجودی اصلی */}
        <div className="mt-2">
          <BalanceCard activeCurrency={activeCurrency} />
        </div>

        {/* ۳. آمار کلیدی ورودی/خروجی */}
        <div className="mt-4">
          <StatsCardsView activeCurrency={activeCurrency} stats={stats} />
        </div>

        {/* ۴. فیلتر بازه زمانی (Sticky & Touch Friendly برای موبایل) */}
        <section className="mt-6 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-foreground md:text-base">
                تحلیل روند فعالیت
              </h2>
              <p className="text-[11px] text-muted-foreground md:text-xs">
                نمودار جریان درآمد و هزینه
              </p>
            </div>

            {/* کنترل‌های لمسی بزرگ‌تر در موبایل */}
            <div className="flex rounded-2xl bg-muted/80 p-1 backdrop-blur-sm">
              {PERIODS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPeriod(item.id)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                    period === item.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ۵. نمودار فعالیت */}
        <section className="mb-6 rounded-3xl border border-border/80 bg-card/60 p-1 shadow-sm backdrop-blur-md">
          <BalanceChart />
        </section>

        {/* ۷. دسته‌بندی و جریان خروجی */}
        <section className="grid gap-4 mb-6">
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

        {/* ۶. بینش‌های هوشمند و راهکارمحور (AI Actionable Insights) */}
        <section className="mb-6 rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-500/5 via-card to-card p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold md:text-base">
                  دستیار مالی و راهکارها
                </h2>
                <p className="text-[11px] text-muted-foreground">
                  پیشنهادهای اختصاصی برای مدیریت بهتر منابع
                </p>
              </div>
            </div>
            <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold text-blue-600">
              هوش مصنوعی
            </span>
          </div>

          <div className="space-y-3">
            {/* راهکار ۱: بهینه‌سازی هزینه جابه‌جایی */}
            <Insight
              icon={<LightbulbIcon className="h-4 w-4 text-amber-500" />}
              actionText="فعال‌سازی اشتراک Doto Trip"
              onAction={() => alert("هدایت به Doto Trip")}
            >
              ۳۸٪ از هزینه‌های این ماه شما در{" "}
              <strong>حمل‌ونقل (Doto Trip)</strong> بوده است. با تهیه اشتراک
              ماهانه، می‌توانید تا{" "}
              <strong>۱۵٪ در هزینه‌ها صرفه‌جویی کنید</strong>.
            </Insight>

            {/* راهکار ۲: پاداش کاهش هزینه */}
            <Insight
              icon={<TrendingDown className="h-4 w-4 text-emerald-500" />}
              actionText="انتقال سود به طلا (Doto Gold)"
              onAction={() => alert("هدایت به Doto Gold")}
            >
              مدیریت عالی! هزینه‌های شما نسبت به ماه گذشته{" "}
              <strong>۱۲٪ کاهش یافته</strong>. می‌توانید مبلغ مابه‌التفاوت را در{" "}
              <strong>Doto Gold</strong> سرمایه‌گذاری کنید.
            </Insight>

            {/* راهکار ۳: هشدار خرید و پیشنهاد کیف‌پول */}
            <Insight
              icon={<ShieldAlert className="h-4 w-4 text-blue-500" />}
              actionText="تنظیم سقف خریدهای خرد"
              onAction={() => alert("تنظیمات کیف‌پول")}
            >
              تعداد خریدهای زیر ۱۰۰ هزار تومان شما بالا بوده است. با فعال‌سازی{" "}
              <strong>پرداخت خودکار کیف‌پول</strong>، از کارمزدهای اضافه جلوگیری
              کنید.
            </Insight>
          </div>
        </section>
      </div>
    </main>
  );
}
