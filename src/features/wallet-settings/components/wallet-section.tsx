import { ChevronLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type WalletSectionProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
};

export default function WalletSection({
  title,
  description,
  icon: Icon,
  onClick,
}: WalletSectionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 border-b px-5 py-4 text-right transition last:border-none hover:bg-zinc-50"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
        <Icon size={20} strokeWidth={1.8} className="text-zinc-600" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-zinc-800">{title}</div>

        <div className="mt-1 text-xs leading-5 text-zinc-500">
          {description}
        </div>
      </div>

      <ChevronLeft size={18} className="shrink-0 text-zinc-400" />
    </button>
  );
}
