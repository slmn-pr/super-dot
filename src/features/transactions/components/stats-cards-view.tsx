import {
  ArrowDownLeft,
  ArrowUpRight,
  BadgePercent,
  BarChart3,
  CircleDollarSign,
  Wallet,
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
    <section className="mb-6 grid grid-cols-2 gap-3">
      <StatCard
        title="دارایی من"
        value={12580000}
        currency="تومان"
        icon={<Wallet className="h-4 w-4" />}
      />

      <StatCard
        title="اعتبار قابل استفاده"
        value={2450000}
        currency="تومان"
        icon={<BadgePercent className="h-4 w-4" />}
      />
    </section>
  );
}
