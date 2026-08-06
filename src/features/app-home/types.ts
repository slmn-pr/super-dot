import type { LucideIcon } from "lucide-react";

export interface QuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
}

export interface Service {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
  badge?: string;
  isNew?: boolean;
  href?: string;
}

export interface PromoCard {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
}

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  type: "debit" | "credit";
  icon: LucideIcon;
  iconBg: string;
  date: string;
}

export interface BottomNavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  defaultActive?: boolean;
}
