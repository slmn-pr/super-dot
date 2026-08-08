import type {
  BoostPlan,
  CurrencyBalance,
  DotoPackage,
  QuickAction,
  StarPackage,
  Transaction,
  TransactionCategory,
} from "./types";

// بیت‌کوین فعلاً فقط placeholder است — طبق تصمیم فعلی روش کار نمی‌کنیم.
export const CURRENCY_BALANCES: CurrencyBalance[] = [
  { code: "Toman", label: "ریالی", amount: 138113 },
  { code: "DOTO", label: "DOTO", amount: 1381.13 },
  // { code: "BITCOIN", label: "BITCOIN", amount: 0, comingSoon: true },
];

export const QUICK_ACTIONS: QuickAction[] = [
  // { id: "send", label: "ارسال" },
  // { id: "receive", label: "دریافت" },
  { id: "convert", label: "تبدیل", url: "/wallet/convert" },
  { id: "scan", label: "اسکن", url: "/wallet/scan" },
  { id: "nft", label: "بازار NFT", url: "/wallet/nft-market" },
  // { id: "withdraw", label: "برداشت", comingSoon: true },
];

export const STAR_PACKAGES: StarPackage[] = [
  { id: "pkg_100", stars: 100, price: 5000 },
  { id: "pkg_500", stars: 500, price: 22000, bonus: 50 },
  { id: "pkg_1000", stars: 1000, price: 40000, popular: true, bonus: 150 },
  { id: "pkg_5000", stars: 5000, price: 180000, bonus: 1000 },
];

// طبق سند: هر پلن با 3 بعد تعریف می‌شود -> تعداد View تضمینی، سقف نمایش روزانه، تعداد Location.
// هزینه STAR فعلاً placeholder است (سند عددی برای آن تعیین نکرده).
export const BOOST_PLANS: BoostPlan[] = [
  {
    id: "basic",
    label: "پایه",
    guaranteedViews: 1000,
    maxDailyImpressions: 1,
    maxLocations: 1,
    starCost: 200,
  },
  {
    id: "pro",
    label: "حرفه‌ای",
    guaranteedViews: 2000,
    maxDailyImpressions: 2,
    maxLocations: 3,
    starCost: 500,
    popular: true,
  },
  {
    id: "premium",
    label: "پریمیوم",
    guaranteedViews: 3000,
    maxDailyImpressions: 10,
    maxLocations: "unlimited",
    starCost: 1200,
  },
];

export const TRANSACTION_FILTERS: {
  value: TransactionCategory;
  label: string;
}[] = [
  { value: "all", label: "همه" },
  { value: "gift", label: "هدیه" },
  { value: "deposit", label: "واریز" },
  { value: "support", label: "حمایت" },
  { value: "reward", label: "پاداش" },
  { value: "convert", label: "تبدیل" },
  { value: "boost", label: "بوست" },
  { value: "withdraw", label: "برداشت" },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "tx_1",
    title: "هدیه از دوستان",
    category: "gift",
    date: new Date(2026, 5, 28),
    amount: 5000,
    currency: "STAR",
    direction: "in",
    status: "success",
  },
  {
    id: "tx_2",
    title: "واریز کیف پول",
    category: "deposit",
    date: new Date(2026, 5, 24),
    amount: 25000,
    currency: "DOTO",
    direction: "in",
    status: "success",
  },
  {
    id: "tx_3",
    title: "حمایت از استریمر",
    category: "support",
    date: new Date(2026, 5, 20),
    amount: 3200,
    currency: "STAR",
    direction: "out",
    status: "success",
  },
  {
    id: "tx_4",
    title: "پاداش فعالیت روزانه",
    category: "reward",
    date: new Date(2026, 5, 18),
    amount: 1000,
    currency: "STAR",
    direction: "in",
    status: "pending",
  },
  {
    id: "tx_5",
    title: "بوست پست «سفر به شمال»",
    category: "boost",
    date: new Date(2026, 5, 15),
    amount: 500,
    currency: "STAR",
    direction: "out",
    status: "success",
  },
  {
    id: "tx_6",
    title: "تبدیل STAR به DOTO",
    category: "convert",
    date: new Date(2026, 5, 13),
    amount: 10000,
    currency: "STAR",
    direction: "out",
    status: "success",
    groupId: "conv_1",
  },
  {
    id: "tx_7",
    title: "تبدیل STAR به DOTO",
    category: "convert",
    date: new Date(2026, 5, 13),
    amount: 100,
    currency: "DOTO",
    direction: "in",
    status: "success",
    groupId: "conv_1",
  },
  {
    id: "tx_8",
    title: "برداشت به کیف پول خارجی",
    category: "withdraw",
    date: new Date(2026, 5, 12),
    amount: 12000,
    currency: "DOTO",
    direction: "out",
    status: "failed",
  },
];

export const DOTO_PACKAGES: DotoPackage[] = [
  {
    id: "doto_100",
    doto: 100,
    price: 100_000,
  },
  {
    id: "doto_500",
    doto: 500,
    price: 450_000,
    bonus: 25,
    popular: true,
  },
  {
    id: "doto_1000",
    doto: 1000,
    price: 850_000,
    bonus: 75,
  },
  {
    id: "doto_2500",
    doto: 2500,
    price: 2_000_000,
    bonus: 250,
  },
];
