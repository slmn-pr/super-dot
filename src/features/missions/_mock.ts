import {
  Plane,
  ShoppingBag,
  Wallet,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export type MissionCategoryId =
  | "all"
  | "daily"
  | "travel"
  | "shopping"
  | "finance";

export interface MissionTab {
  id: MissionCategoryId;
  label: string;
}

export const MISSION_TABS: MissionTab[] = [
  { id: "all", label: "همه" },
  { id: "daily", label: "روزانه" },
  { id: "travel", label: "سفر" },
  { id: "shopping", label: "خرید" },
  { id: "finance", label: "مالی" },
];

export interface Mission {
  id: string;
  title: string;
  description: string;
  reward: string;
  progress: number;
  category: Exclude<MissionCategoryId, "all">;
  categoryLabel: string;
  icon: LucideIcon;
}

export const MISSIONS: Mission[] = [
  {
    id: "daily-checkin",
    title: "چک‌این روزانه",
    description: "هر روز وارد اپلیکیشن شو و امتیاز بگیر",
    reward: "۵۰ امتیاز",
    progress: 40,
    category: "daily",
    categoryLabel: "روزانه",
    icon: Repeat,
  },
  {
    id: "book-trip",
    title: "رزرو یک سفر",
    description: "اولین رزرو سفرت رو از اپ انجام بده",
    reward: "۳۰۰ امتیاز",
    progress: 20,
    category: "travel",
    categoryLabel: "سفر",
    icon: Plane,
  },
  {
    id: "first-purchase",
    title: "اولین خرید",
    description: "یک خرید با استفاده از کیف‌پول انجام بده",
    reward: "۱۵۰ امتیاز",
    progress: 70,
    category: "shopping",
    categoryLabel: "خرید",
    icon: ShoppingBag,
  },
  {
    id: "add-balance",
    title: "افزایش موجودی",
    description: "کیف‌پولت رو برای اولین بار شارژ کن",
    reward: "۱۰۰ امتیاز",
    progress: 90,
    category: "finance",
    categoryLabel: "مالی",
    icon: Wallet,
  },
];
