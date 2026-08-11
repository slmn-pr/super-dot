"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MOCK_BALANCE_DATA = [
  { name: "۱ مرداد", balance: 820 },
  { name: "۵ مرداد", balance: 960 },
  { name: "۱۰ مرداد", balance: 880 },
  { name: "۱۵ مرداد", balance: 1240 },
  { name: "۲۰ مرداد", balance: 1180 },
  { name: "۲۵ مرداد", balance: 1420 },
  { name: "۳۰ مرداد", balance: 1680 },
];

export default function BalanceChart() {
  return (
    <section className="mb-6 rounded-2xl  bg-card">
      <div className="mb-5 px-4 py-3">
        <h2 className="text-sm font-bold">روند موجودی</h2>

        <p className="mt-1 text-xs text-muted-foreground">
          تغییرات موجودی در طول زمان
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={MOCK_BALANCE_DATA}
            margin={{
              top: 5,
              right: 0,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--foreground)"
                  stopOpacity={0.18}
                />

                <stop
                  offset="100%"
                  stopColor="var(--foreground)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--border)"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 10,
                fill: "var(--muted-foreground)",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 10,
                fill: "var(--muted-foreground)",
              }}
            />

            <Tooltip
              cursor={{
                stroke: "var(--muted-foreground)",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card)",
                fontSize: 12,
              }}
              formatter={(value) =>
                `${Number(value).toLocaleString("fa-IR")} DOTO`
              }
            />

            <Area
              type="monotone"
              dataKey="balance"
              name="موجودی"
              stroke="var(--foreground)"
              strokeWidth={2}
              fill="url(#balanceGradient)"
              dot={false}
              activeDot={{
                r: 5,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
