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
        description: "مدیریت اطلاعات و مشخصات حساب کاربری",
        icon: User,
      },
      {
        title: "امنیت و حریم خصوصی",
        description: "مدیریت تنظیمات امنیتی و حریم خصوصی حساب",
        icon: Lock,
      },
      {
        title: "شماره موبایل و ایمیل",
        description: "مدیریت شماره موبایل و ایمیل متصل به حساب",
        icon: Mail,
      },
    ],
  },
  {
    title: "کیف پول و پرداخت",
    items: [
      {
        title: "کیف پول",
        description: "مدیریت حساب‌های بانکی و تنظیمات کیف پول سوپراپلیکیشن",
        icon: Wallet,
        href: "/profile/wallet-settings",
      },
      {
        title: "تراکنش‌ها",
        description: "مشاهده و بررسی تراکنش‌ها در بازه‌های زمانی مختلف",
        icon: CreditCard,
        href: "/profile/transactions",
      },
    ],
  },
  {
    title: "تنظیمات برنامه",
    items: [
      {
        title: "اعلان‌ها",
        description: "مدیریت اعلان‌ها و نحوه دریافت اطلاع‌رسانی‌ها",
        icon: Bell,
      },
      {
        title: "زبان",
        description: "انتخاب زبان مورد استفاده در برنامه",
        icon: Languages,
      },
      {
        title: "ظاهر برنامه",
        description: "تنظیم حالت نمایش و ظاهر برنامه",
        icon: Moon,
      },
    ],
  },
  {
    title: "پشتیبانی",
    items: [
      {
        title: "مرکز راهنما",
        description: "پاسخ به پرسش‌ها و راهنمای استفاده از برنامه",
        icon: HelpCircle,
      },
      {
        title: "درباره Dot One",
        description: "اطلاعات بیشتر درباره Dot One و خدمات آن",
        icon: Settings,
      },
    ],
  },
];
