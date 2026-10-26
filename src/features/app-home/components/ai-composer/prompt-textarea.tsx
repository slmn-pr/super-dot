"use client";

import { useCallback, useEffect } from "react";
import type { FocusEventHandler, RefObject } from "react";

const LINE_HEIGHT = 24;
const MAX_LINES = 4;
const MAX_HEIGHT = LINE_HEIGHT * MAX_LINES;

interface PromptTextareaProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: FocusEventHandler<HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
  disabled: boolean;
  placeholder: string;
  ref: RefObject<HTMLTextAreaElement | null>;
}

export default function PromptTextarea({
  value,
  onChange,
  onFocus,
  onBlur,
  disabled,
  placeholder,
  ref,
}: PromptTextareaProps) {
  const resize = useCallback((el: HTMLTextAreaElement | null) => {
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT)}px`;
    el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  }, []);

  useEffect(() => {
    if (ref.current) {
      resize(ref.current);
    }
  }, [value, ref, resize]);

  return (
    <textarea
      ref={ref}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.currentTarget.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      rows={1}
      dir="rtl"
      aria-label="پیام به هوش مصنوعی"
      className="w-full resize-none bg-transparent text-[15px] leading-6 outline-none transition-[height] duration-150 disabled:cursor-not-allowed"
      style={{
        minHeight: LINE_HEIGHT,
        maxHeight: MAX_HEIGHT,
      }}
      onInput={(e) => resize(e.currentTarget)}
    />
  );
}
