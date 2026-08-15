"use client";

import { useEffect, useRef, useState } from "react";

function formatRemaining(ms: number) {
  if (ms <= 0) return "پایان یافت";
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  if (h > 0) return `${h} ساعت و ${m} دقیقه`;
  if (m > 0) return `${m} دقیقه و ${s} ثانیه`;
  return `${s} ثانیه`;
}

export function CountdownTimer({
  endsAt,
  onExpire,
  className,
}: {
  endsAt: string;
  onExpire?: () => void;
  className?: string;
}) {
  const [remaining, setRemaining] = useState(
    () => new Date(endsAt).getTime() - Date.now(),
  );
  const expiredFired = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = new Date(endsAt).getTime() - Date.now();
      setRemaining(next);
      if (next <= 0 && !expiredFired.current) {
        expiredFired.current = true;
        onExpire?.();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endsAt, onExpire]);

  const isEndingSoon = remaining > 0 && remaining < 60 * 60 * 1000;

  return (
    <span
      className={`${className ?? ""} ${isEndingSoon ? "text-red-500" : "text-muted-foreground"}`}
    >
      {remaining > 0
        ? `⏳ ${formatRemaining(remaining)} مانده`
        : "مزایده تمام شد"}
    </span>
  );
}
