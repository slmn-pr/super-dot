import {
  Car,
  ShoppingBag,
  Package,
  Wallet,
  Coins,
  Plane,
  Store,
  Lock,
  CreditCard,
  ArrowLeftRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import type { NavItem, Product, WhyCard, EcosystemNode } from "@/shared/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "قابلیت‌ها", href: "/landing#features" },
  { label: "محصولات", href: "/landing#products" },
  { label: "اکوسیستم", href: "/landing#ecosystem" },
  { label: "درباره دات وان", href: "/landing#about" },
];

export const PRODUCTS: Product[] = [
  {
    id: "trip",
    title: "دات وان تریپ",
    description: "سفرهای هوشمند شهری",
    icon: Car,
  },
  {
    id: "shopex",
    title: "شاپکس",
    description: "فروشگاه آنلاین",
    icon: ShoppingBag,
  },
  {
    id: "postex",
    title: "پستکس",
    description: "ارسال و دریافت مرسولات",
    icon: Package,
  },
  {
    id: "wallet",
    title: "کیف پول",
    description: "مدیریت پرداخت‌ها",
    icon: Wallet,
  },
  {
    id: "gold",
    title: "دات وان گلد",
    description: "سرمایه‌گذاری روی طلا",
    icon: Coins,
  },
  {
    id: "airlines",
    title: "دات وان ایرلاینز",
    description: "رزرو پرواز",
    icon: Plane,
  },
  {
    id: "sell",
    title: "دات وان سل",
    description: "فروش محصولات",
    icon: Store,
  },
];

export const WHY_CARDS: WhyCard[] = [
  {
    id: "account",
    icon: Lock,
    title: "یک حساب کاربری",
    description: "یک بار وارد شوید و به تمام سرویس‌ها دسترسی داشته باشید.",
  },
  {
    id: "wallet",
    icon: CreditCard,
    title: "یک کیف پول",
    description: "تمام پرداخت‌ها با یک کیف پول مشترک.",
  },
  {
    id: "experience",
    icon: ArrowLeftRight,
    title: "تجربه یکپارچه",
    description: "جابجایی بین سرویس‌ها بدون خروج از اپلیکیشن.",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "امن و مطمئن",
    description: "زیرساخت یکپارچه و امنیت بالا.",
  },
];

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: "trip", label: "دات وان تریپ", icon: Car, angle: 0 },
  { id: "shopex", label: "شاپکس", icon: ShoppingBag, angle: 51 },
  { id: "wallet", label: "کیف پول", icon: Wallet, angle: 102 },
  { id: "postex", label: "پستکس", icon: Package, angle: 154 },
  { id: "sell", label: "دات وان سل", icon: Store, angle: 205 },
  { id: "gold", label: "دات وان گلد", icon: Coins, angle: 257 },
  { id: "airlines", label: "دات وان ایرلاینز", icon: Plane, angle: 308 },
];

export const CORE_NODE = {
  id: "mydot",
  label: "مای دات",
  description: "هسته اصلی اکوسیستم دات وان",
  icon: Cpu,
};
