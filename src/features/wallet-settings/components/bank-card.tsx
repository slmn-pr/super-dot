import { MoreVertical } from "lucide-react";

type BankCardProps = {
  bankName: string;
  cardNumber: string;
  lastFour: string;
  isDefault?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function BankCard({
  bankName,
  cardNumber,
  lastFour,
  isDefault,
  onEdit,
  onDelete,
}: BankCardProps) {
  return (
    <div className="relative rounded-2xl border bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-zinc-800">{bankName}</div>

          <div className="mt-2 text-sm tracking-widest text-zinc-500" dir="ltr">
            •••• •••• •••• {lastFour}
          </div>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
        >
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        {isDefault ? (
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
            کارت پیش‌فرض
          </span>
        ) : (
          <button
            type="button"
            className="text-xs text-zinc-500 hover:text-zinc-800"
          >
            انتخاب به‌عنوان کارت پیش‌فرض
          </button>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onEdit}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-900"
          >
            ویرایش
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="text-xs font-medium text-red-500 hover:text-red-600"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}
