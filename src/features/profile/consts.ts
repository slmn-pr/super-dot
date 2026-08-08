import {
  Bell,
  CreditCard,
  HelpCircle,
  Languages,
  Lock,
  Mail,
  Moon,
  Settings,
  User,
  Wallet,
} from "lucide-react";

export const PROFILE_MENU_ITEMS = [
  {
    title: "حساب کاربری",
    items: [
      {
        title: "ویرایش پروفایل",
        icon: User,
      },
      {
        title: "امنیت و حریم خصوصی",
        icon: Lock,
      },
      {
        title: "شماره موبایل و ایمیل",
        icon: Mail,
      },
    ],
  },
  {
    title: "کیف پول و پرداخت",
    items: [
      {
        title: "کیف پول",
        icon: Wallet,
      },
      {
        title: "تراکنش‌ها",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "تنظیمات برنامه",
    items: [
      {
        title: "اعلان‌ها",
        icon: Bell,
      },
      {
        title: "زبان",
        icon: Languages,
      },
      {
        title: "ظاهر برنامه",
        icon: Moon,
      },
    ],
  },
  {
    title: "پشتیبانی",
    items: [
      {
        title: "مرکز راهنما",
        icon: HelpCircle,
      },
      {
        title: "درباره Dot One",
        icon: Settings,
      },
    ],
  },
];
