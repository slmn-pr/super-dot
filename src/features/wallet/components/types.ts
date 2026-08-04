// -----------------------------
// Currency
// -----------------------------
export type CurrencyCode = "STAR" | "DOTO" | "BITCOIN";

export interface CurrencyBalance {
  code: CurrencyCode;
  label: string;
  amount: number;
  comingSoon?: boolean;
}

// -----------------------------
// Transactions
// -----------------------------
export type TransactionCategory =
  | "all"
  | "gift" // Donation دریافتی
  | "deposit" // خرید / واریز
  | "support" // Donate ارسالی
  | "reward" // پاداش سیستم (View/ReDot/Engagement/AI Score)
  | "withdraw" // برداشت DOTO
  | "convert" // تبدیل STAR -> DOTO
  | "boost"; // هزینه‌کرد Boost Post

export type TransactionDirection = "in" | "out";
export type TransactionStatus = "success" | "pending" | "failed";

export interface Transaction {
  id: string;
  title: string;
  category: Exclude<TransactionCategory, "all">;
  date: Date;
  amount: number;
  currency: CurrencyCode;
  direction: TransactionDirection;
  status: TransactionStatus;
  /**
   * Links two sides of the same operation (e.g. a Convert produces
   * one "out" STAR row and one "in" DOTO row that share a groupId).
   */
  groupId?: string;
}

// -----------------------------
// Buy Stars
// -----------------------------
export interface StarPackage {
  id: string;
  stars: number;
  price: number;
  bonus?: number;
  popular?: boolean;
}

// -----------------------------
// Quick Actions
// -----------------------------
export type QuickActionId =
  | "send"
  | "receive"
  | "scan"
  | "convert"
  | "nft"
  | "withdraw";

export interface QuickAction {
  id: QuickActionId;
  label: string;
  comingSoon?: boolean;
}

// -----------------------------
// Boost Campaign (سند: 3 مرحله‌ای — مخاطب / نمایش روزانه / موقعیت جغرافیایی)
// -----------------------------
export type BoostLocationScope = "single_city" | "multi_city" | "country";

export interface BoostPlan {
  id: string;
  label: string; // پایه / حرفه‌ای / پریمیوم
  guaranteedViews: number; // 1000 / 2000 / 3000
  maxDailyImpressions: number; // 1 / 2 / 10
  maxLocations: number | "unlimited";
  /** هزینه تخمینی به STAR — عدد پیش‌فرض، قابل تنظیم توسط تیم محصول */
  starCost: number;
  popular?: boolean;
}

export interface BoostCampaignConfig {
  audienceReach: number; // اسلایدر 100 -> 1,000,000
  dailyImpressions: number; // اسلایدر 1 -> 10
  locationScope: BoostLocationScope;
  selectedCities: string[]; // برای single_city / multi_city
  planId: string;
}

export type AgeRange = [number, number];

export interface BoostCampaignConfig {
  audienceReach: number;
  dailyImpressions: number;
  locationScope: BoostLocationScope;
  selectedCity: string; // جدید — برای حالت «یک شهر»
  selectedCities: string[];
  selectedProvinces: string[]; // برای حالت «چند شهر»
  ageRange: [number, number];
  planId: string;
}