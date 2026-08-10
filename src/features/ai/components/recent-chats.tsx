"use client";

import {
  ChevronLeft,
  Plane,
  Wallet,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";

interface RecentChat {
  id: number;
  title: string;
  preview: string;
  time: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

const recentChats: RecentChat[] = [
  {
    id: 1,
    title: "برنامه سفر تهران",
    preview: "بهترین مسیر و هزینه رفت‌وآمد",
    time: "امروز، ۱۲:۳۰",
    icon: Plane,
    color: "bg-sky-500/15",
    iconColor: "text-sky-400",
  },
  {
    id: 2,
    title: "تحلیل هزینه‌های ماه",
    preview: "بررسی خرج‌های کیف پول",
    time: "دیروز",
    icon: Wallet,
    color: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  {
    id: 3,
    title: "پیشنهاد خرید لپ‌تاپ",
    preview: "مقایسه چند مدل مناسب",
    time: "۳ روز پیش",
    icon: ShoppingBag,
    color: "bg-violet-500/15",
    iconColor: "text-violet-400",
  },
];

export function RecentChats() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-semibold">گفتگوهای اخیر</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            ادامه گفتگوهای قبلی
          </p>
        </div>

        <button
          type="button"
          className="
            flex
            items-center
            gap-1
            rounded-full
            px-2
            py-1
            text-xs
            text-muted-foreground
            transition
            hover:bg-muted
            hover:text-foreground
          "
        >
          همه
          <ChevronLeft size={14} />
        </button>
      </div>

      <div className="space-y-2">
        {recentChats.map((chat) => {
          const Icon = chat.icon;

          return (
            <button
              key={chat.id}
              type="button"
              className="
                group
                flex
                w-full
                items-center
                gap-3
                rounded-2xl
                border
                bg-card
                p-3
                text-right
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-sm
                active:scale-[0.98]
              "
            >
              <div
                className={`
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${chat.color}
                  ${chat.iconColor}
                  transition-transform
                  duration-200
                  group-hover:scale-105
                `}
              >
                <Icon size={20} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="truncate text-sm font-medium">{chat.title}</h3>

                  <span className="shrink-0 text-[10px] text-muted-foreground">
                    {chat.time}
                  </span>
                </div>

                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {chat.preview}
                </p>
              </div>

              <ChevronLeft
                size={16}
                className="
                  shrink-0
                  text-muted-foreground/40
                  transition-all
                  group-hover:-translate-x-0.5
                  group-hover:text-muted-foreground
                "
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
