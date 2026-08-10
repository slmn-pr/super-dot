import { MoreVertical, CreditCard } from "lucide-react";

type BankCardProps = {
  bankName: string;
  lastFour: string;
  cardHolder?: string;
  isDefault?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function BankCard({
  bankName,
  lastFour,
  cardHolder = "صاحب کارت",
  isDefault,
  onEdit,
  onDelete,
}: BankCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-50 via-white to-zinc-100 p-5 shadow-sm transition hover:shadow-md">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-zinc-200/40" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 size-32 rounded-full bg-zinc-200/30" />

      {/* Header */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl border bg-white shadow-sm">
            <CreditCard size={22} strokeWidth={1.7} className="text-zinc-600" />
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900">
              {bankName}
            </div>

            {isDefault && (
              <div className="mt-1 text-xs text-zinc-500">کارت پیش‌فرض</div>
            )}
          </div>
        </div>

        {/* Menu */}
        <button
          type="button"
          className="rounded-full p-2 text-zinc-400 transition hover:bg-white hover:text-zinc-700"
          aria-label="گزینه‌های کارت"
        >
          <MoreVertical size={20} />
        </button>
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
          <div className="mb-1 text-[10px] text-zinc-400">دارنده کارت</div>

          <div className="text-xs font-medium text-zinc-700">{cardHolder}</div>
        </div>

        {isDefault && (
          <span className="rounded-full bg-zinc-900 px-3 py-1.5 text-[10px] font-medium text-white">
            پیش‌فرض
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="relative mt-4 flex gap-2 border-t pt-3 opacity-0 transition group-hover:opacity-100">
        <button
          type="button"
          onClick={onEdit}
          className="flex-1 rounded-xl py-2 text-xs font-medium text-zinc-600 transition hover:bg-white hover:text-zinc-900"
        >
          ویرایش
        </button>

        <button
          type="button"
          onClick={onDelete}
          className="flex-1 rounded-xl py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
        >
          حذف کارت
        </button>
      </div>
    </div>
  );
}
