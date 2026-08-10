"use client";

import { Sparkles } from "lucide-react";
import { AICategory } from "./components/ai-category";
import { AIStarterCard } from "./components/ai-starter-card";
import { RecentChats } from "./components/recent-chats";
import { categories, starters } from "./consts";
import AIInput from "./components/ai-input";
import AISearchBar from "../app-home/components/top-bar/ai-search-bar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AIPage() {
  return (
    <main className="min-h-screen px-4 pb-10 pt-6">
      {/* Header */}
      <section className="mb-8 flex flex-col items-center gap-2 text-center">
        {/* <div className="flex items-center gap-2 text-primary">
          <Sparkles size={22} />

          <span className="text-sm font-medium">Dot AI</span>
        </div> */}

        <DotLottieReact
          // src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
          src="/animations/ai-flow.lottie"
          loop
          autoplay
        />

        <h1 className="mt-4 text-2xl font-bold leading-9">
          امروز چه کاری برات انجام بدم؟
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          دستیار هوشمند دات‌وان برای خرید، سفر و مدیریت زندگی دیجیتال
        </p>
      </section>

      {/* Input */}
      <AIInput
        placeholders={["سلام", "چه خبر؟", "کمک کن"]}
        onSubmit={() => {}}
        onVoiceSearch={() => {}}
      />
      {/* <AISearchBar  placeholders={['سلام']}/> */}

      {/* Categories */}
      <section className="mt-8">
        <h2 className="mb-4 font-semibold">شروع سریع</h2>

        <div className="grid grid-cols-4 gap-3">
          {categories.map((item) => (
            <AICategory key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Starter Cards */}
      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold">پیشنهادهای امروز</h2>

          <span className="text-xs text-primary">مشاهده همه</span>
        </div>

        <div className="grid gap-3">
          {starters.map((item) => (
            <AIStarterCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Recent */}
      <RecentChats />
    </main>
  );
}
