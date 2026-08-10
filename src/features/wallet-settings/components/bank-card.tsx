"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  MoreVertical,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

type BankCardProps = {
  bankName: string;
  lastFour: string;
  cardHolder?: string;
  isDefault?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onSetDefault?: () => void;
};

export default function BankCard({
  bankName,
  lastFour,
  cardHolder = "صاحب کارت",
  isDefault,
  onEdit,
  onDelete,
  onSetDefault,
}: BankCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAction = (action?: () => void) => {
    setIsMenuOpen(false);
    action?.();
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-50 via-white to-zinc-100 p-5 shadow-sm">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-zinc-200/40" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 size-32 rounded-full bg-zinc-200/30" />

      {/* Header */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Bank Logo */}
          <div className="flex size-11 items-center justify-center rounded-2xl border bg-white shadow-sm">
            <div className="size-6 rounded-full bg-zinc-200" />
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900">
              {bankName}
            </div>

            {isDefault && (
              <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                <Check size={13} />
                کارت پیش‌فرض
              </div>
            )}
          </div>
        </div>

        {/* Actions Menu */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="flex size-9 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white hover:text-zinc-700 active:bg-zinc-100"
            aria-label="گزینه‌های کارت"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
          >
            <MoreVertical size={20} />
          </button>

          {isMenuOpen && (
            <div
              role="menu"
              className="absolute left-0 top-11 z-20 w-48 overflow-hidden rounded-2xl border bg-white p-1.5 shadow-lg shadow-zinc-200/60"
            >
              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction(onEdit)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-sm text-zinc-700 transition hover:bg-zinc-50 active:bg-zinc-100"
              >
                <Pencil size={17} className="text-zinc-500" />
                <span>ویرایش کارت</span>
              </button>

              {!isDefault && (
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleAction(onSetDefault)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-sm text-zinc-700 transition hover:bg-zinc-50 active:bg-zinc-100"
                >
                  <Star size={17} className="text-zinc-500" />
                  <span>انتخاب به‌عنوان پیش‌فرض</span>
                </button>
              )}

              <div className="my-1 border-t" />

              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction(onDelete)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-sm text-red-500 transition hover:bg-red-50 active:bg-red-100"
              >
                <Trash2 size={17} />
                <span>حذف کارت</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Card Number */}
      <div
        dir="ltr"
        className="relative mt-8 text-center text-lg font-medium tracking-[0.22em] text-zinc-700"
      >
        •••• •••• •••• {lastFour}
      </div>

      {/* Footer */}
      <div className="relative mt-7 flex items-end justify-between">
        <div>
          <div className="mb-1 text-[10px] text-zinc-400">
            دارنده کارت
          </div>

          <div className="text-xs font-medium text-zinc-700">
            {cardHolder}
          </div>
        </div>

        {isDefault && (
          <span className="rounded-full bg-zinc-900 px-3 py-1.5 text-[10px] font-medium text-white">
            پیش‌فرض
          </span>
        )}
      </div>
    </div>
  );
}
