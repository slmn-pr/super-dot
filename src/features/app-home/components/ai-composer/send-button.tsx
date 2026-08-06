import { cn } from "@/lib/utils";
import { ArrowUp, Loader2Icon } from "lucide-react";

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
        "flex shrink-0 items-center justify-center rounded-full transition-all duration-150 active:scale-90 disabled:cursor-not-allowed ",
        active ? "bg-primary" : "bg-secondary",
        active ? "text-accent-foreground" : "text-gray-500",
      )}
      style={{
        width: 46,
        height: 46,
        // backgroundColor: active ? t.accent : t.chipBg,
        // color: active ? t.accentText : t.textFaint,
        boxShadow: active ? "0 4px 14px rgba(47,93,255,0.28)" : "none",
      }}
    >
      {loading ? (
        <Loader2Icon size={19} className="animate-spin" />
      ) : (
        <ArrowUp size={20} strokeWidth={2.5} />
      )}
    </button>
  );
}
