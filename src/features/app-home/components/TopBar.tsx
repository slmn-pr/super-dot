"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  Mic,
  Search,
  Sparkles,
  ChevronLeft,
  Wallet as WalletIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface QuickStatus {
  id: string;
  icon: React.ReactNode;
  label: string;
  tone?: "default" | "positive" | "warning";
  onClick?: () => void;
}

export interface SmartRecommendation {
  id: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export interface TopBarProps {
  userName: string;
  /** e.g. "1,250,000" — pre-formatted integer string, no currency label */
  walletBalance: string;
  walletCurrency?: "TOMAN" | "DOTO";
  notificationCount?: number;
  avatarUrl?: string;
  quickStatuses?: QuickStatus[];
  recommendations?: SmartRecommendation[];
  searchPlaceholders?: string[];
  onSearchSubmit?: (query: string) => void;
  onVoiceSearch?: () => void;
  onNotificationsClick?: () => void;
  onAvatarClick?: () => void;
  onWalletClick?: () => void;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function toPersianDigits(value: string | number): string {
  return String(value).replace(/[0-9]/g, (d) => faDigits[Number(d)]);
}

function getGreeting(date = new Date()): string {
  const h = date.getHours();
  if (h < 5) return "شب بخیر";
  if (h < 12) return "صبح بخیر";
  if (h < 17) return "ظهر بخیر";
  if (h < 20) return "عصر بخیر";
  return "شب بخیر";
}

/* ------------------------------------------------------------------ */
/*  Greeting                                                           */
/* ------------------------------------------------------------------ */

function Greeting({ userName }: { userName: string }) {
  const [greeting] = React.useState(getGreeting);
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="text-[13px] font-medium text-muted-foreground truncate"
    >
      {greeting}، <span className="text-foreground font-semibold">{userName}</span> 👋
    </motion.p>
  );
}

/* ------------------------------------------------------------------ */
/*  Wallet chip                                                        */
/* ------------------------------------------------------------------ */

function WalletChip({
  balance,
  currency = "TOMAN",
  onClick,
}: {
  balance: string;
  currency?: "TOMAN" | "DOTO";
  onClick?: () => void;
}) {
  const label = currency === "DOTO" ? "دوتو" : "تومان";
  const icon = currency === "DOTO" ? "🪙" : null;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "flex items-center gap-1.5 rounded-2xl bg-muted px-3 py-1.5",
        "min-h-[44px] shrink-0",
        "hover:bg-muted/70 active:scale-[0.98] transition-colors"
      )}
      aria-label={`موجودی کیف پول: ${toPersianDigits(balance)} ${label}`}
    >
      {icon ? (
        <span aria-hidden="true" className="text-sm leading-none">
          {icon}
        </span>
      ) : (
        <WalletIcon aria-hidden="true" size={14} className="text-foreground/70" />
      )}
      <AnimatePresence mode="popLayout">
        <motion.span
          key={balance}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="text-[13px] font-semibold tabular-nums text-foreground"
        >
          {toPersianDigits(balance)}
        </motion.span>
      </AnimatePresence>
      <span className="text-[11px] text-muted-foreground">{label}</span>
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  Notification button                                                */
/* ------------------------------------------------------------------ */

function NotificationButton({
  count = 0,
  onClick,
}: {
  count?: number;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        count > 0 ? `اعلان‌ها، ${toPersianDigits(count)} مورد خوانده‌نشده` : "اعلان‌ها"
      }
      className={cn(
        "relative flex size-11 items-center justify-center rounded-2xl",
        "bg-muted hover:bg-muted/70 active:scale-95 transition-all shrink-0"
      )}
    >
      <Bell aria-hidden="true" size={18} strokeWidth={1.75} className="text-foreground/80" />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.18, type: "spring", stiffness: 400, damping: 20 }}
          >
            <Badge
              aria-hidden="true"
              className="absolute -top-1 -left-1 h-4 min-w-4 px-1 flex items-center justify-center text-[10px] font-bold bg-red-500 text-white border-0 rounded-full pointer-events-none"
            >
              {count > 9 ? "۹+" : toPersianDigits(count)}
            </Badge>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Avatar menu trigger                                                */
/* ------------------------------------------------------------------ */

function AvatarMenu({
  userName,
  avatarUrl,
  onClick,
}: {
  userName: string;
  avatarUrl?: string;
  onClick?: () => void;
}) {
  const initial = userName?.trim()?.charAt(0) ?? "؟";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
      aria-label="پروفایل، تنظیمات و باشگاه مشتریان"
      className="relative shrink-0 rounded-full"
    >
      <Avatar className="size-11 ring-2 ring-foreground/10">
        <AvatarImage src={avatarUrl} alt="" />
        <AvatarFallback className="text-sm font-semibold">{initial}</AvatarFallback>
      </Avatar>
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  AI Search bar                                                      */
/* ------------------------------------------------------------------ */

function AISearchBar({
  placeholders,
  onSubmit,
  onVoiceSearch,
}: {
  placeholders: string[];
  onSubmit?: (query: string) => void;
  onVoiceSearch?: () => void;
}) {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [placeholderIndex, setPlaceholderIndex] = React.useState(0);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (focused || value) return;
    const id = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % placeholders.length);
    }, 3200);
    return () => clearInterval(id);
  }, [focused, value, placeholders.length]);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) onSubmit?.(value.trim());
      }}
      className="w-full"
    >
      <motion.div
        animate={
          focused
            ? { boxShadow: "0 0 0 3px hsl(var(--primary) / 0.18)" }
            : { boxShadow: "0 1px 2px hsl(var(--foreground) / 0.04)" }
        }
        transition={{ duration: 0.18 }}
        className={cn(
          "flex items-center gap-2 rounded-2xl border bg-background px-3.5",
          "min-h-[46px]",
          focused ? "border-primary/40" : "border-border"
        )}
      >
        <Sparkles
          aria-hidden="true"
          size={16}
          className={cn("shrink-0 transition-colors", focused ? "text-primary" : "text-muted-foreground")}
        />

        <div className="relative flex-1 min-w-0">
          <input
            type="text"
            inputMode="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-label="جست‌وجوی هوشمند در دات وان"
            className="peer w-full bg-transparent text-[13px] text-foreground outline-none placeholder:text-transparent"
          />
          {!value && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIndex}
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-[13px] text-muted-foreground whitespace-nowrap"
                >
                  {placeholders[placeholderIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onVoiceSearch}
          aria-label="جست‌وجوی صوتی"
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            "hover:bg-muted active:scale-90 transition-all"
          )}
        >
          <Mic aria-hidden="true" size={16} className="text-muted-foreground" />
        </button>

        <button
          type="submit"
          aria-label="جست‌وجو"
          className="flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-muted active:scale-90 transition-all"
        >
          <Search aria-hidden="true" size={16} className="text-muted-foreground" />
        </button>
      </motion.div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Smart status row                                                   */
/* ------------------------------------------------------------------ */

function SmartStatusRow({ items }: { items: QuickStatus[] }) {
  if (!items.length) return null;
  return (
    <div
      className="flex items-center gap-2 overflow-x-auto px-0.5 -mx-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="list"
      aria-label="وضعیت‌های سریع"
    >
      {items.map((item, i) => (
        <motion.button
          key={item.id}
          type="button"
          role="listitem"
          onClick={item.onClick}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, delay: i * 0.03 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 min-h-[36px]",
            "text-[12px] font-medium whitespace-nowrap",
            item.tone === "positive" && "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
            item.tone === "warning" && "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
            (!item.tone || item.tone === "default") && "bg-muted text-foreground/80"
          )}
        >
          <span aria-hidden="true" className="text-[13px] leading-none">
            {item.icon}
          </span>
          {item.label}
        </motion.button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Smart recommendation banner                                        */
/* ------------------------------------------------------------------ */

function SmartRecommendationBanner({ items }: { items: SmartRecommendation[] }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;
  const current = items[index];

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={current.id}
        type="button"
        onClick={current.onClick}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex w-full items-center gap-2 rounded-2xl bg-primary/5 px-3.5 py-2.5",
          "text-[12.5px] text-foreground/90 hover:bg-primary/10 transition-colors min-h-[40px]"
        )}
      >
        <span aria-hidden="true" className="text-sm leading-none shrink-0">
          {current.icon}
        </span>
        <span className="flex-1 truncate text-right">{current.text}</span>
        <ChevronLeft aria-hidden="true" size={14} className="shrink-0 text-muted-foreground" />
      </motion.button>
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  TopBar                                                              */
/* ------------------------------------------------------------------ */

const DEFAULT_PLACEHOLDERS = [
  "از AI هر چیزی بپرس...",
  "در دات وان جست‌وجو کن...",
  "برنامه سفرم را بساز...",
  "امروز چه کاری انجام بدهم؟",
];

export function TopBar({
  userName,
  walletBalance,
  walletCurrency = "TOMAN",
  notificationCount = 0,
  avatarUrl,
  quickStatuses = [],
  recommendations = [],
  searchPlaceholders = DEFAULT_PLACEHOLDERS,
  onSearchSubmit,
  onVoiceSearch,
  onNotificationsClick,
  onAvatarClick,
  onWalletClick,
  className,
}: TopBarProps) {
  return (
    <header
      dir="rtl"
      aria-label="نوار وضعیت و جست‌وجوی هوشمند"
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-[480px]",
        "bg-background",
        className
      )}
    >
      <div className="flex flex-col gap-2.5 px-4 pt-3 pb-2.5">
        {/* Row 1 — greeting + wallet + notifications + avatar */}
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Greeting userName={userName} />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <WalletChip balance={walletBalance} currency={walletCurrency} onClick={onWalletClick} />
            <NotificationButton count={notificationCount} onClick={onNotificationsClick} />
            <AvatarMenu userName={userName} avatarUrl={avatarUrl} onClick={onAvatarClick} />
          </div>
        </div>

        {/* Row 2 — AI search */}
        <AISearchBar
          placeholders={searchPlaceholders}
          onSubmit={onSearchSubmit}
          onVoiceSearch={onVoiceSearch}
        />

        {/* Row 3 — quick status chips */}
        <SmartStatusRow items={quickStatuses} />

        {/* Row 4 — one rotating recommendation */}
        <SmartRecommendationBanner items={recommendations} />
      </div>
    </header>
  );
}

export default TopBar;