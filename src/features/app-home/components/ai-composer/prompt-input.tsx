"use client";

import { useEffect, useRef, useState } from "react";
import { PLACEHOLDERS } from "./consts";
import AttachmentButton from "./attachment-button";
import SendButton from "./send-button";
import SuggestionChips from "./sugesstion-chips";
import PromptTextarea from "./prompt-textarea";

interface PromptInputProps {
  disabled: boolean;
}

export default function PromptInput({ disabled }: PromptInputProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const textareaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (value || focused) return;
    const id = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length);
    }, 3200);
    return () => clearInterval(id);
  }, [value, focused]);

  const canSend = value.trim().length > 0;

  const handleSend = () => {
    if (!canSend || loading) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setValue("");
    }, 1400);
  };

  const handlePickSuggestion = (prompt: string) => {
    if (disabled) return;
    setValue(prompt);
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isLocked = disabled || loading;

  return (
    <div className="w-full" dir="rtl">
      {/* Prompt container */}
      <div
        onKeyDown={handleKeyDown}
        className="rounded-3xl px-4 pt-4 pb-3 transition-all duration-200 bg-background border"
        style={{
          opacity: disabled ? 0.55 : 1,
        }}
      >
        <PromptTextarea
          ref={textareaRef}
          value={value}
          onChange={setValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={isLocked}
          placeholder={PLACEHOLDERS[placeholderIdx]}
        />

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AttachmentButton disabled={isLocked} />
          </div>
          <SendButton
            canSend={canSend}
            loading={loading}
            disabled={disabled}
            onClick={handleSend}
          />
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="mt-3">
        <SuggestionChips disabled={isLocked} onPick={handlePickSuggestion} />
      </div>
    </div>
  );
}
