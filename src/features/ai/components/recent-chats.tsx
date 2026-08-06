"use client";

import { MessageCircle, ChevronLeft } from "lucide-react";

const recentChats = [
  {
    id: 1,
    title: "برنامه سفر تهران",
    preview: "بهترین مسیر و هزینه رفت و آمد",
    time: "امروز، ۱۲:۳۰",
  },
  {
    id: 2,
    title: "تحلیل هزینه‌های ماه",
    preview: "بررسی خرج‌های کیف پول",
    time: "دیروز",
  },
  {
    id: 3,
    title: "پیشنهاد خرید لپ‌تاپ",
    preview: "مقایسه چند مدل مناسب",
    time: "۳ روز پیش",
  },
];

export function RecentChats() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">گفتگوهای اخیر</h2>

        <button className="flex items-center gap-1 text-xs text-primary">
          همه
          <ChevronLeft size={14} />
        </button>
      </div>

      <div className="space-y-3">
        {recentChats.map((chat) => (
          <button
            key={chat.id}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-3xl
              border
              bg-card
              p-4
              text-right
              transition
              hover:border-primary/40
              active:scale-[0.98]
            "
          >
            <div
              className="
                flex
                size-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
              "
            >
              <MessageCircle size={21} />
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <h3 className="truncate text-sm font-medium">{chat.title}</h3>

                <span className="shrink-0 text-[11px] text-muted-foreground">
                  {chat.time}
                </span>
              </div>

              <p
                className="
                mt-1
                truncate
                text-xs
                text-muted-foreground
              "
              >
                {chat.preview}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
