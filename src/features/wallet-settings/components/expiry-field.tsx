"use client";

interface ExpiryFieldProps {
  month: string;
  year: string;
  hasError: boolean;
  isExpired: boolean;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export default function ExpiryField({
  month,
  year,
  hasError,
  isExpired,
  onMonthChange,
  onYearChange,
  onFocus,
  onBlur,
}: ExpiryFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-800">
        تاریخ انقضا
      </label>

      <div
        className={[
          "flex h-12 items-center overflow-hidden rounded-xl border bg-white transition focus-within:ring-2 focus-within:ring-zinc-900/10",
          hasError ? "border-red-400" : "border-zinc-200",
        ].join(" ")}
        dir="ltr"
      >
        <input
          inputMode="numeric"
          maxLength={2}
          placeholder="MM"
          value={month}
          onChange={(event) => onMonthChange(event.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={hasError ? "expiry-error" : undefined}
          aria-label="ماه انقضا"
          className="w-full bg-transparent text-center font-mono text-sm outline-none placeholder:text-zinc-300"
        />

        <span className="text-zinc-300">/</span>

        <input
          inputMode="numeric"
          maxLength={2}
          placeholder="YY"
          value={year}
          onChange={(event) => onYearChange(event.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={hasError ? "expiry-error" : undefined}
          aria-label="سال انقضا"
          className="w-full bg-transparent text-center font-mono text-sm outline-none placeholder:text-zinc-300"
        />
      </div>

      {hasError && (
        <p
          id="expiry-error"
          role="alert"
          className="mt-1.5 text-xs text-red-500"
        >
          {isExpired
            ? "تاریخ انقضای کارت گذشته است."
            : "تاریخ انقضا را کامل و صحیح وارد کنید."}
        </p>
      )}
    </div>
  );
}
