"use client";

import { ChevronRight, Plus } from "lucide-react";

import BankCard from "./components/bank-card";
import WalletSection from "./components/wallet-section";
import { BANK_CARDS, WALLET_SETTINGS } from "./consts";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WalletSettingsPage() {
  const location = useRouter();

  const handleAddCard = () => {
    // TODO: Open add card sheet
  };

  const handleEditCard = (cardId: string) => {
    // TODO: Open edit card sheet
    console.log("Edit card:", cardId);
  };

  const handleDeleteCard = (cardId: string) => {
    // TODO: Open delete confirmation
    console.log("Delete card:", cardId);
  };

  const backLocation = () => {
    location.back();
  };

  return (
    <main className="min-h-screen pt-6 pb-10" dir="rtl">
      <div className="mx-auto w-full max-w-md space-y-7">
        {/* Header */}
        <header className="px-2">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={backLocation}>
              <ChevronRight size={18} />
            </Button>
            <h1 className="text-xl font-semibold text-zinc-900">
              تنظیمات کیف پول
            </h1>
          </div>

          <p className="mt-1 text-sm text-zinc-500">
            مدیریت کارت‌های بانکی و تنظیمات کیف پول
          </p>
        </header>

        {/* Bank Cards */}
        <section>
          <h2 className="mb-2 px-2 text-sm text-zinc-500">کارت‌های بانکی</h2>

          <div className="space-y-3">
            {BANK_CARDS.map((card) => (
              <BankCard
                key={card.id}
                {...card}
                onEdit={() => handleEditCard(card.id)}
                onDelete={() => handleDeleteCard(card.id)}
              />
            ))}

            <button
              type="button"
              onClick={handleAddCard}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed bg-white py-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            >
              <Plus size={18} />
              افزودن کارت بانکی
            </button>
          </div>
        </section>

        {/* Rial Wallet */}
        <section>
          <h2 className="mb-2 px-2 text-sm text-zinc-500">کیف پول ریالی</h2>

          <div className="overflow-hidden rounded-2xl border bg-white">
            <WalletSection
              title={WALLET_SETTINGS[0].title}
              description={WALLET_SETTINGS[0].description}
              icon={WALLET_SETTINGS[0].icon}
            />
          </div>
        </section>

        {/* DOTO Wallet */}
        <section>
          <h2 className="mb-2 px-2 text-sm text-zinc-500">کیف پول DOTO</h2>

          <div className="overflow-hidden rounded-2xl border bg-white">
            <WalletSection
              title={WALLET_SETTINGS[1].title}
              description={WALLET_SETTINGS[1].description}
              icon={WALLET_SETTINGS[1].icon}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
