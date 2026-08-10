"use client";

import { cn } from "@/lib/utils";
import { ArrowUpIcon, MicIcon, SparklesIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AIInputProps = {
  placeholders: string[];
  onSubmit?: (query: string) => void;
  onVoiceSearch?: () => void;
  disabled?: boolean;
};

export default function AIInput({
  placeholders,
  onSubmit,
  onVoiceSearch,
  disabled = false,
}: AIInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const reduceMotion = useReducedMotion();

  /**
   * Rotate AI prompts only when the user
   * is not interacting with the composer.
   */
  useEffect(() => {
    if (focused || value || !placeholders.length) return;

    const id = setInterval(() => {
      setPlaceholderIndex((index) => (index + 1) % placeholders.length);
    }, 3200);

    return () => clearInterval(id);
  }, [focused, value, placeholders.length]);

  /**
   * Automatically resize textarea based on content.
   */
  const resizeTextarea = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";

    const maxHeight = 180;

    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  };

  useEffect(() => {
    resizeTextarea();
  }, [value]);

  const handleSubmit = () => {
    const query = value.trim();

    if (!query || disabled) return;

    onSubmit?.(query);

    setValue("");

    requestAnimationFrame(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    /**
     * Enter → Submit
     * Shift + Enter → New line
     */
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const hasValue = value.trim().length > 0;

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
      className="w-full"
    >
      <motion.div
        animate={
          focused
            ? {
                boxShadow: "0 0 0 3px hsl(var(--primary) / 0.16)",
              }
            : {
                boxShadow: "0 2px 8px hsl(var(--foreground) / 0.04)",
              }
        }
        transition={{ duration: 0.18 }}
        className={cn(
          "relative flex flex-col overflow-hidden rounded-2xl border bg-background",
          "min-h-32",
          "px-3.5 py-3",
          "transition-colors",
          focused ? "border-primary/40" : "border-border",
          disabled && "pointer-events-none opacity-60",
        )}
      >
        {/* Main composer */}
        <div className="flex min-h-20 flex-1 items-start gap-2">
          {/* AI Icon */}
          <SparklesIcon
            aria-hidden="true"
            size={17}
            className={cn(
              "mt-1 shrink-0 transition-colors",
              focused ? "text-primary" : "text-muted-foreground",
            )}
          />

          {/* Textarea */}
          <div className="relative min-w-0 flex-1">
            <textarea
              ref={textareaRef}
              value={value}
              rows={1}
              disabled={disabled}
              onChange={(event) => {
                setValue(event.target.value);
                resizeTextarea();
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              aria-label="گفت‌وگو با هوش مصنوعی"
              placeholder=""
              className={cn(
                "peer w-full resize-none bg-transparent",
                "text-[13px] leading-6 text-foreground",
                "outline-none",
                "placeholder:text-transparent",
                "overflow-y-auto",
                "max-h-[180px]",
              )}
            />

            {/* Animated placeholder */}
            {!hasValue && (
              <div className="pointer-events-none absolute inset-x-0 top-0">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={placeholderIndex}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 6,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -6,
                          }
                    }
                    transition={{
                      duration: 0.2,
                    }}
                    className="block whitespace-nowrap text-[13px] leading-6 text-muted-foreground"
                  >
                    {placeholders[placeholderIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-2 flex items-center justify-between">
          {/* Optional future actions */}
          <div className="flex items-center gap-1">
            {/* 
              Future:
              - Attachment
              - Image
              - Context
              - AI mode
            */}
          </div>

          <div className="flex items-center gap-1">
            {/* Voice */}
            <button
              type="button"
              onClick={onVoiceSearch}
              disabled={disabled}
              aria-label="گفت‌وگوی صوتی"
              className={cn(
                "flex size-9 shrink-0 items-center justify-center",
                "rounded-full",
                "text-muted-foreground",
                "transition-all",
                "hover:bg-muted hover:text-foreground",
                "active:scale-90",
              )}
            >
              <MicIcon aria-hidden="true" size={17} />
            </button>

            {/* Send */}
            <button
              type="submit"
              disabled={!hasValue || disabled}
              aria-label="ارسال پیام"
              className={cn(
                "flex size-9 shrink-0 items-center justify-center",
                "rounded-full",
                "transition-all",
                hasValue
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-muted-foreground",
                "disabled:cursor-not-allowed",
                "active:scale-90",
              )}
            >
              <ArrowUpIcon aria-hidden="true" size={17} />
            </button>
          </div>
        </div>
      </motion.div>
    </form>
  );
}
