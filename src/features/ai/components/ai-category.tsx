import { LucideIcon } from "lucide-react";

export function AICategory({
  title,
  icon: Icon,
  color,
  iconColor,
}: {
  title: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}) {
  return (
    <button
      type="button"
      className="
        group
        flex
        min-w-24
        flex-col
        items-center
        gap-2
        rounded-3xl
        border
        bg-background
        p-3
        transition-all
        hover:-translate-y-0.5
        hover:bg-muted/30
      "
    >
      <div
        className={`
          flex
          size-10
          items-center
          justify-center
          rounded-full
          ${color}
          transition-transform
          group-hover:scale-105
        `}
      >
        <Icon size={18} strokeWidth={1.8} className={iconColor} />
      </div>

      <span className="text-xs font-medium">{title}</span>
    </button>
  );
}
