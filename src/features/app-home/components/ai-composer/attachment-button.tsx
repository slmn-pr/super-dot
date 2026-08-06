import { PaperclipIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ATTACHMENT_ACTIONS } from "./consts";

interface AttachmentButtonProps {
  disabled: boolean;
}

export default function AttachmentButton({ disabled }: AttachmentButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        disabled={disabled}
        aria-label="پیوست فایل"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-150 active:scale-90 disabled:cursor-not-allowed disabled:opacity-40",
          open
            ? "border-primary/30 bg-primary/10 text-primary"
            : "border-border bg-transparent text-muted-foreground hover:border-foreground/20",
        )}
      >
        <PaperclipIcon size={18} strokeWidth={2} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-12 right-0 z-20 min-w-[176px] overflow-hidden rounded-2xl border border-border bg-popover shadow-lg transition-all duration-150"
        >
          {ATTACHMENT_ACTIONS.map((a) => (
            <button
              key={a.id}
              role="menuitem"
              type="button"
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-3 px-4 py-2.5 text-right text-[13.5px] text-popover-foreground transition-colors duration-150 hover:bg-accent hover:text-accent-foreground"
            >
              <a.icon size={16} className="text-muted-foreground" />
              <span>{a.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}