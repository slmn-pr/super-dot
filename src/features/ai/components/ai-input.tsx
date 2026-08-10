"use client";

import { cn } from "@/lib/utils";
import {
  ArrowUpIcon,
  Loader2Icon,
  MicIcon,
  PaperclipIcon,
  SparklesIcon,
  SquareIcon,
  XIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AIInputProps = {
  placeholders: string[];
  onSubmit?: (query: string) => void;
  onVoiceSearch?: () => void;
  disabled?: boolean;
};

type InputMode = "idle" | "typing" | "listening" | "thinking";

export default function AIInput({
  placeholders,
  onSubmit,
  onVoiceSearch,
  disabled = false,
}: AIInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [mode, setMode] = useState<InputMode>("idle");
  const [attachment, setAttachment] = useState<File | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reduceMotion = useReducedMotion();

  const hasValue = value.trim().length > 0;
  const isBusy = mode === "thinking";
  const isListening = mode === "listening";

  /**
   * Rotate prompts while idle.
   */
  useEffect(() => {
    if (focused || value || isBusy || !placeholders.length) return;

    const id = setInterval(() => {
      setPlaceholderIndex((index) => (index + 1) % placeholders.length);
    }, 3200);

    return () => clearInterval(id);
  }, [focused, value, isBusy, placeholders.length]);

  /**
   * Resize textarea.
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

  /**
   * Submit.
   */
  const handleSubmit = () => {
    const query = value.trim();

    if (!query || disabled || isBusy) return;

    onSubmit?.(query);

    setValue("");
    setAttachment(null);

    setMode("thinking");

    requestAnimationFrame(() => {
      textareaRef.current?.focus();

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    });

    /**
     * Mock AI response.
     * Remove this when connecting the real API.
     */
    setTimeout(() => {
      setMode("idle");
    }, 1600);
  };

  /**
   * Keyboard shortcuts.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  /**
   * Voice interaction.
   */
  const handleVoice = () => {
    if (disabled || isBusy) return;

    if (isListening) {
      setMode(hasValue ? "typing" : "idle");
      return;
    }

    setMode("listening");
    onVoiceSearch?.();

    /**
     * Mock voice recognition.
     * Replace with SpeechRecognition later.
     */
    setTimeout(() => {
      setValue("برای من یک سفر مناسب پیشنهاد بده");
      setMode("typing");

      requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });
    }, 1800);
  };

  /**
   * Attachment.
   */
  const handleAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setAttachment(file);
    setMode("typing");

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  /**
   * Remove attachment.
   */
  const removeAttachment = () => {
    setAttachment(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
        layout
        animate={
          isListening
            ? {
                boxShadow:
                  "0 0 0 3px hsl(var(--primary) / 0.14), 0 0 28px hsl(var(--primary) / 0.10)",
              }
            : focused
              ? {
                  boxShadow: "0 0 0 3px hsl(var(--primary) / 0.12)",
                }
              : {
                  boxShadow: "0 2px 8px hsl(var(--foreground) / 0.04)",
                }
        }
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "relative overflow-hidden rounded-3xl border bg-background",
          "px-3.5 py-3",
          "transition-colors",
          focused || isListening ? "border-primary/40" : "border-border",
          disabled && "pointer-events-none opacity-60",
        )}
      >
        {/* Thinking indicator */}
        <AnimatePresence>
          {isBusy && (
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -4,
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
                      y: -4,
                    }
              }
              className="
                mb-2
                flex
                items-center
                gap-2
                text-xs
                text-muted-foreground
              "
            >
              <Loader2Icon size={14} className="animate-spin text-primary" />

              <span>در حال فکر کردن...</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Listening indicator */}
        <AnimatePresence>
          {isListening && (
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.98,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      scale: 0.98,
                    }
              }
              className="
                mb-2
                flex
                items-center
                gap-2
                text-xs
                text-primary
              "
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>

              <span>در حال شنیدن...</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Attachment */}
        <AnimatePresence>
          {attachment && (
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 4,
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
                      y: 4,
                    }
              }
              className="
                mb-2
                flex
                w-fit
                max-w-full
                items-center
                gap-2
                rounded-xl
                bg-muted
                px-2.5
                py-1.5
                text-xs
              "
            >
              <PaperclipIcon size={13} className="text-muted-foreground" />

              <span className="max-w-40 truncate">{attachment.name}</span>

              <button
                type="button"
                onClick={removeAttachment}
                className="
                  flex
                  size-5
                  items-center
                  justify-center
                  rounded-full
                  text-muted-foreground
                  hover:bg-background
                  hover:text-foreground
                "
                aria-label="حذف فایل"
              >
                <XIcon size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main composer */}
        <div className="flex items-start gap-2">
          <SparklesIcon
            aria-hidden="true"
            size={17}
            className={cn(
              "mt-1 shrink-0 transition-colors",
              focused || hasValue ? "text-primary" : "text-muted-foreground",
              isListening && "animate-pulse text-primary",
            )}
          />

          <div className="relative min-w-0 flex-1">
            <textarea
              ref={textareaRef}
              value={value}
              rows={1}
              disabled={disabled || isBusy}
              onChange={(event) => {
                const nextValue = event.target.value;

                setValue(nextValue);

                if (nextValue.trim()) {
                  setMode("typing");
                } else {
                  setMode("idle");
                }

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
            {!hasValue && !isListening && !isBusy && (
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
                    className="
                        block
                        whitespace-nowrap
                        text-[13px]
                        leading-6
                        text-muted-foreground
                      "
                  >
                    {placeholders[placeholderIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-3 flex items-center justify-between">
          {/* Left actions */}
          <div className="flex items-center gap-1">
            {/* Attachment */}
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleAttachment}
            />

            <button
              type="button"
              disabled={disabled || isBusy}
              onClick={() => fileInputRef.current?.click()}
              aria-label="افزودن فایل"
              className="
                flex
                size-8
                items-center
                justify-center
                rounded-full
                text-muted-foreground
                transition
                hover:bg-muted
                hover:text-foreground
                active:scale-90
              "
            >
              <PaperclipIcon size={16} />
            </button>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Voice */}
            <button
              type="button"
              onClick={handleVoice}
              disabled={disabled || isBusy}
              aria-label={isListening ? "توقف ضبط صدا" : "گفت‌وگوی صوتی"}
              className={cn(
                "flex size-9 shrink-0 items-center justify-center",
                "rounded-full",
                "transition-all",
                "active:scale-90",
                isListening
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {isListening ? <SquareIcon size={14} /> : <MicIcon size={17} />}
            </button>

            {/* Send */}
            <motion.button
              type="submit"
              disabled={!hasValue || disabled || isBusy}
              whileTap={!reduceMotion && hasValue ? { scale: 0.9 } : undefined}
              aria-label={isBusy ? "در حال پردازش" : "ارسال پیام"}
              className={cn(
                "flex size-9 shrink-0 items-center justify-center",
                "rounded-full",
                "transition-all",
                hasValue && !isBusy
                  ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                  : "bg-muted text-muted-foreground",
                "disabled:cursor-not-allowed",
              )}
            >
              {isBusy ? (
                <Loader2Icon size={17} className="animate-spin" />
              ) : (
                <ArrowUpIcon size={17} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </form>
  );
}
