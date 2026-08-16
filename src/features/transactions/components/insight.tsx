import React from "react";
import { ArrowLeft } from "lucide-react";

interface InsightProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
}

export function Insight({
  icon,
  children,
  actionText,
  onAction,
}: InsightProps) {
  return (
    <div className="group relative flex flex-col justify-between gap-3 rounded-2xl border border-border/60 bg-background/90 p-3.5 transition-all active:scale-[0.99] hover:border-blue-500/30 hover:shadow-sm sm:p-4">
      {/* بخش آیکون و متن اصلی */}
      <div className="flex items-start gap-3">
        {/* آیکون جمع‌وجورتر و متمایز در موبایل */}
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted/80 text-foreground sm:h-8 sm:w-8 sm:rounded-xl">
          {icon}
        </div>

        {/* متن بینش */}
        <div className="text-xs leading-6 text-foreground/90 sm:text-sm sm:leading-6">
          {children}
        </div>
      </div>

      {/* دکمه اکشن - در موبایل جداشده و کامل، در دسکتاپ خطی */}
      {actionText && (
        <div className="flex items-center justify-end border-t border-border/40 pt-2.5 md:border-t-0 md:pt-0">
          <button
            type="button"
            onClick={onAction}
            className="inline-flex w-full items-center justify-between rounded-xl bg-blue-50/60 px-3 py-2 text-xs font-bold text-blue-600 transition-all hover:bg-blue-100/70 active:scale-95 dark:bg-blue-950/30 dark:hover:bg-blue-900/40 md:w-auto md:justify-end md:bg-transparent md:p-0 md:hover:bg-transparent dark:md:bg-transparent"
          >
            <span>{actionText}</span>
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          </button>
        </div>
      )}
    </div>
  );
}
