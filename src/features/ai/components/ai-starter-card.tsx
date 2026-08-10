import { ChevronLeft, LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  iconColor?: string;
}

export function AIStarterCard({
  title,
  description,
  icon: Icon,
  color = "bg-primary/10",
  iconColor = "text-primary",
}: Props) {
  return (
    <button
      type="button"
      className="
        group
        flex
        w-full
        items-center
        gap-3
        rounded-2xl
        border
        bg-card
        p-3
        text-right
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-sm
        active:scale-[.98]
      "
    >
      <div
        className={`
          flex
          size-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${color}
          ${iconColor}
          transition-transform
          duration-200
          group-hover:scale-105
        `}
      >
        <Icon size={21} strokeWidth={1.8} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium">{title}</h3>

        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          {description}
        </p>
      </div>

      <ChevronLeft
        size={17}
        className="
          shrink-0
          text-muted-foreground/50
          transition-transform
          group-hover:-translate-x-0.5
          group-hover:text-foreground
        "
      />
    </button>
  );
}
