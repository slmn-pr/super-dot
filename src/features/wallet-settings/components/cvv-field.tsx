"use client";

interface CvvFieldProps {
  value: string;
  hasError: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export default function CvvField({
  value,
  hasError,
  onChange,
  onFocus,
  onBlur,
}: CvvFieldProps) {
  return (
    <div>
      <label
        htmlFor="cvv"
        className="mb-2 block text-sm font-medium text-zinc-800"
      >
        CVV2
      </label>

      <input
        id="cvv"
        name="cvv"
        inputMode="numeric"
        autoComplete="cc-csc"
        maxLength={4}
        dir="ltr"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="123"
        aria-invalid={hasError}
        aria-describedby={hasError ? "cvv-error" : undefined}
        className={[
          "h-12 w-full rounded-xl border bg-white px-4 text-center font-mono text-sm tracking-[0.2em] text-zinc-900 outline-none transition focus:ring-2 focus:ring-zinc-900/10",
          hasError ? "border-red-400" : "border-zinc-200",
        ].join(" ")}
      />

      {hasError && (
        <p id="cvv-error" role="alert" className="mt-1.5 text-xs text-red-500">
          CVV2 را وارد کنید.
        </p>
      )}
    </div>
  );
}
