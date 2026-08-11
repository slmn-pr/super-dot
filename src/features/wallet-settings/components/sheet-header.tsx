"use client";

import { X } from "lucide-react";

interface SheetHeaderProps {
  onClose: () => void;
  disabled?: boolean;
}

export default function SheetHeader({ onClose, disabled }: SheetHeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 pb-4 pt-4 sm:px-6">
      <div>
        <h2
          id="add-bank-card-title"
          className="text-lg font-semibold text-zinc-950"
        >
          افزودن کارت بانکی
        </h2>

        <p className="mt-1 text-xs text-zinc-500">
          اطلاعات کارت خود را وارد کنید
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        disabled={disabled}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition hover:bg-zinc-200 disabled:opacity-50"
        aria-label="بستن"
      >
        <X size={18} />
      </button>
    </header>
  );
}
