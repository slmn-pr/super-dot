import { cn } from "@/lib/utils";
import { ArrowUp, Loader2Icon, Wand2 } from "lucide-react";

interface SendButtonProps {
  canSend: boolean;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

export default function SendButton({
  canSend,
  loading,
  disabled,
  onClick,
}: SendButtonProps) {
  const active = canSend && !disabled && !loading;

  return (
    <button
      type="button"
      aria-label="ارسال پیام"
      disabled={!active}
      onClick={onClick}
      className={cn(
        "size-10 flex shrink-0 items-center justify-center rounded-full transition-all duration-150 active:scale-90 disabled:cursor-not-allowed",
        active
          ? "bg-primary text-primary-foreground shadow-[0_4px_14px_-2px] shadow-primary/40"
          : "bg-secondary text-muted-foreground",
      )}
    >
      {loading ? (
        <Loader2Icon size={19} className="animate-spin" />
      ) : (
        <Wand2 size={15}  />
      )}
    </button>
  );
}