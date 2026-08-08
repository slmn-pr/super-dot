import { ChevronLeft, LogOutIcon } from "lucide-react";

import IdentityCard from "./components/identify-card";
import { PROFILE_MENU_ITEMS } from "./consts";

export default function ProfilePage() {
  return (
    <main className="min-h-screen pt-6 pb-10" dir="rtl">
      <div className="mx-auto w-full max-w-md space-y-6">
        {/* Identity Card */}
        <IdentityCard />

        {/* Settings */}
        <div className="space-y-5">
          {PROFILE_MENU_ITEMS.map((section) => (
            <section key={section.title}>
              <h3 className="mb-2 px-2 text-sm text-zinc-500">
                {section.title}
              </h3>

              <div className="overflow-hidden rounded-2xl border bg-white">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      className="flex w-full items-center justify-between border-b px-5 py-4 transition last:border-none hover:bg-zinc-50"
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className="text-zinc-500"
                        />

                        <span className="text-sm font-medium text-zinc-800">
                          {item.title}
                        </span>
                      </div>

                      <ChevronLeft size={18} className="text-zinc-400" />
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Logout */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[24px] border bg-white py-4 font-medium text-red-500 transition hover:bg-red-50"
        >
          <LogOutIcon size={20} />
          خروج از حساب
        </button>
      </div>
    </main>
  );
}
