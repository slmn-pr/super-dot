"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MOCK_FLOW_DATA = [
  { name: "هفته ۱", income: 420, expense: 180 },
  { name: "هفته ۲", income: 680, expense: 320 },
  { name: "هفته ۳", income: 540, expense: 260 },
  { name: "هفته ۴", income: 820, expense: 390 },
];

const MOCK_CATEGORY_DATA = [
  { name: "پرداخت", value: 420 },
  { name: "انتقال", value: 280 },
  { name: "دریافت", value: 620 },
  { name: "خرید", value: 190 },
];

type ChartCardProps = {
  title: string;
  description: string;
  type?: "flow" | "category";
};

function formatTooltipValue(value: number) {
  return `${value.toLocaleString("fa-IR")} DOTO`;
}

const axisTickStyle = {
  fontSize: 11,
  fill: "var(--foreground)",
};

const mutedAxisTickStyle = {
  fontSize: 10,
  fill: "var(--muted-foreground)",
};

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--border)",
  backgroundColor: "var(--card)",
  color: "var(--card-foreground)",
  fontSize: 12,
  padding: "8px 12px",
};

export default function ChartCard({
  title,
  description,
  type = "flow",
}: ChartCardProps) {
  const isFlow = type === "flow";

  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="mb-5 p-4">
        <h3 className="text-sm font-bold text-card-foreground">{title}</h3>

        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {isFlow ? (
            <BarChart
              data={MOCK_FLOW_DATA}
              margin={{
                top: 5,
                right: 0,
                left: -10,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--border)"
                strokeOpacity={0.6}
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={axisTickStyle}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={mutedAxisTickStyle}
              />

              <Tooltip
                cursor={{
                  fill: "var(--muted)",
                  fillOpacity: 0.5,
                }}
                contentStyle={tooltipStyle}
                labelStyle={{
                  color: "var(--card-foreground)",
                  fontWeight: 600,
                  marginBottom: 4,
                }}
                itemStyle={{
                  color: "var(--card-foreground)",
                }}
                formatter={(value) => formatTooltipValue(Number(value))}
              />

              <Bar
                dataKey="income"
                name="ورودی"
                fill="var(--foreground)"
                radius={[6, 6, 0, 0]}
                barSize={14}
              />

              <Bar
                dataKey="expense"
                name="خروجی"
                fill="var(--muted-foreground)"
                radius={[6, 6, 0, 0]}
                barSize={14}
              />
            </BarChart>
          ) : (
            <BarChart
              data={MOCK_CATEGORY_DATA}
              layout="vertical"
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="var(--border)"
                strokeOpacity={0.6}
              />

              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={mutedAxisTickStyle}
              />

              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={true}
                width={60}
                tick={axisTickStyle}
                
              />

              <Tooltip
                cursor={{
                  fill: "var(--muted)",
                  fillOpacity: 0.5,
                }}
                contentStyle={tooltipStyle}
                labelStyle={{
                  color: "var(--card-foreground)",
                  fontWeight: 600,
                  marginBottom: 4,
                }}
                itemStyle={{
                  color: "var(--card-foreground)",
                }}
                formatter={(value) => formatTooltipValue(Number(value))}
              />

              <Bar
                dataKey="value"
                name="مجموع"
                fill="var(--foreground)"
                radius={[0, 6, 6, 0]}
                barSize={22}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
