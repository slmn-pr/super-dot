"use client";

interface CardHolderFieldProps {
  value: string;
  hasError: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export default function CardHolderField({
  value,
  hasError,
  onChange,
  onBlur,
}: CardHolderFieldProps) {
  return (
    <div>
      <label
        htmlFor="card-holder"
        className="mb-2 block text-sm font-medium text-zinc-800"
      >
        نام صاحب کارت
      </label>

      <input
        id="card-holder"
        name="cardHolder"
        autoComplete="cc-name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        placeholder="مثلاً علی محمدی"
        aria-invalid={hasError}
        aria-describedby={hasError ? "card-holder-error" : undefined}
        className={[
          "h-12 w-full rounded-xl border bg-white px-4 text-sm text-zinc-900 outline-none transition",
          "focus:ring-2 focus:ring-zinc-900/10",
          hasError ? "border-red-400" : "border-zinc-200",
        ].join(" ")}
      />

      {hasError && (
        <p
          id="card-holder-error"
          role="alert"
          className="mt-1.5 text-xs text-red-500"
        >
          نام صاحب کارت را وارد کنید.
        </p>
      )}
    </div>
  );
}
