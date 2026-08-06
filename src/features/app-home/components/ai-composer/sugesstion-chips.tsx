import { cn } from "@/lib/utils";
import { SUGGESTIONS } from "./consts";

interface SuggestionChipsProps {
  disabled: boolean;
  onPick: (prompt: string) => void;
}

export default function SuggestionChips({ disabled, onPick }: SuggestionChipsProps) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
      {SUGGESTIONS.map((s) => (
        <button
          key={s.label}
          type="button"
          disabled={disabled}
          title={s.prompt}
          onClick={() => onPick(s.prompt)}
          className={cn(
            "flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-secondary px-3.5 py-2 text-[13px] font-medium text-secondary-foreground transition-all duration-150",
            "hover:border-primary/40 hover:text-primary",
            "active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-secondary-foreground",
          )}
        >
          <s.icon size={14} strokeWidth={2} aria-hidden="true" />
          <span>{s.label}</span>
        </button>
      ))}
    </div>
  );
}