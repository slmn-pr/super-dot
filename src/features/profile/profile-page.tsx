"use client";

import {
  Bell,
  ChevronLeft,
  CreditCard,
  HelpCircle,
  Languages,
  Lock,
  LogOut,
  Mail,
  Moon,
  Settings,
  User,
  Wallet,
} from "lucide-react";
import IdentityCard from "./components/identify-card";

const sections = [
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

export default function ProfilePage() {
  return (
    <main dir="rtl" className=" bg-background text-zinc-900 pb-24">
      <div className="max-w-lg mx-auto space-y-5">
        {/* Identity Card */}
        <IdentityCard />

        {/* Settings */}
        {sections.map((section) => (
          <section key={section.title}>
            <h3 className="text-sm text-zinc-500 mb-2 px-2">{section.title}</h3>

            <div
              className="bg-white border rounded-2xl overflow-hidden"
            >
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    className="
w-full
flex
items-center
justify-between
px-5
py-4
border-b
last:border-none
hover:bg-zinc-50
transition
"
                  >
                    <div
                      className="
flex
items-center
gap-3
"
                    >
                      <div
                        className="
size-9
rounded-xl
bg-zinc-100
flex
items-center
justify-center
"
                      >
                        <Icon size={18} />
                      </div>

                      <span>{item.title}</span>
                    </div>

                    <ChevronLeft size={18} className="text-zinc-400" />
                  </button>
                );
              })}
            </div>
          </section>
        ))}

        {/* Logout */}

        <button
          className="
w-full
bg-white
border
rounded-[24px]
py-4
flex
items-center
justify-center
gap-2
text-red-500
font-medium
"
        >
          <LogOut size={18} />
          خروج از حساب
        </button>
      </div>
    </main>
  );
}
