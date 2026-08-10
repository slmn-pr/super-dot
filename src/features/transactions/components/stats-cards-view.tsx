import {
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
} from "lucide-react";
import StatCard from "./stat-card";

interface Stats {
  income: number;
  expense: number;
  net: number;
  count: number;
}

interface StatsCardsViewProps {
  activeCurrency: string;
  stats: Stats;
}

export default function StatsCardsView({
  activeCurrency,
  stats,
}: StatsCardsViewProps) {
  return (
    <section className="mb-6 grid grid-cols-3 gap-3">
      <StatCard
        title="ورودی"
        value={stats.income}
        currency={activeCurrency}
        icon={<ArrowDownLeft className="h-4 w-4" />}
      />

      <StatCard
        title="خروجی"
        value={stats.expense}
        currency={activeCurrency}
        icon={<ArrowUpRight className="h-4 w-4" />}
      />

      <StatCard
        title="خالص تغییرات"
        value={stats.net}
        currency={activeCurrency}
        icon={<CircleDollarSign className="h-4 w-4" />}
      />

      <StatCard
        title="تعداد تراکنش"
        value={stats.count}
        icon={<BarChart3 className="h-4 w-4" />}
        isCount
      />
    </section>
  );
}
