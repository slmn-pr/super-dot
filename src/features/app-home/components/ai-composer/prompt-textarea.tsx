"use client";

import { useCallback, useEffect } from "react";

const LINE_HEIGHT = 24;
const MAX_LINES = 4;
const MAX_HEIGHT = LINE_HEIGHT * MAX_LINES;

export default function PromptTextarea({
  value,
  onChange,
  onFocus,
  onBlur,
  disabled,
  placeholder,
  ref,
}) {
  const resize = useCallback((el) => {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, MAX_HEIGHT) + "px";
    el.style.overflowY = el.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
  }, []);

  useEffect(() => {
    if (ref && ref.current) resize(ref.current);
  }, [value, ref, resize]);

  return (
    <textarea
      ref={ref}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
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
