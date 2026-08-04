'use client'

import { useState } from 'react'
import { Eye, EyeOff, Plus, ArrowUpRight } from 'lucide-react'

function formatPersianNumber(n) {
  return n.toLocaleString('fa-IR')
}

export default function WalletCard({
  balance = 12500000,
  goldGrams = 3.2,
  pointsBalance = 4750,
}) {
  const [hidden, setHidden] = useState(false)

  return (
    <div dir="rtl" className="w-full mx-auto bg-white">
      <section
        aria-labelledby="wallet-heading"
        className="rounded-2xl border border-border bg-card overflow-hidden"
      >
        {/* Card Header */}
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-start justify-between mb-5">
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] text-muted-foreground leading-none">
                موجودی کیف پول
              </span>
              <div className="flex items-baseline gap-2 mt-1.5 h-7">
                {hidden ? (
                  <span className="text-2xl font-bold text-foreground tracking-widest">
                    ••••••••
                  </span>
                ) : (
                  <>
                    <span
                      id="wallet-heading"
                      className="text-[26px] font-extrabold text-foreground tabular-nums leading-none tracking-tight"
                    >
                      {formatPersianNumber(balance)}
                    </span>
                    <span className="text-[12px] text-muted-foreground font-medium">تومان</span>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={() => setHidden((p) => !p)}
              aria-label={hidden ? 'نمایش موجودی' : 'پنهان کردن موجودی'}
              className="size-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors active:scale-95"
            >
              {hidden ? <Eye size={15} strokeWidth={1.75} /> : <EyeOff size={15} strokeWidth={1.75} />}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2.5">
            <button
              aria-label="انتقال وجه"
              className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl border border-border bg-transparent text-foreground text-[13px] font-semibold transition-colors hover:bg-muted active:scale-[0.97]"
            >
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              انتقال وجه
            </button>

            <button
              aria-label="شارژ کیف پول"
              className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl bg-primary text-primary-foreground text-[13px] font-semibold transition-opacity hover:opacity-90 active:scale-[0.97]"
            >
              <Plus size={15} strokeWidth={2.5} aria-hidden="true" />
              شارژ کیف پول
            </button>
          </div>
        </div>

        {/* Card Footer — secondary balances */}
        <div
          className="flex justify-between items-center px-10 py-3 border-t border-border"
          role="list"
          aria-label="دارایی‌های دیگر"
        >
          <div role="listitem" className="flex flex-col items-center justify-center gap-1">
            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="size-1 rounded-full bg-amber-500" aria-hidden="true" />
              دات گلد
            </span>
            <span className="text-[14px] font-bold text-foreground">
              {hidden ? '••' : `${goldGrams.toLocaleString('fa-IR')} گرم`}
            </span>
          </div>

          <div className="h-8 w-px bg-border" aria-hidden="true" />

          <div role="listitem" className="flex flex-col items-center justify-center gap-1">
            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="size-1 rounded-full bg-violet-500" aria-hidden="true" />
              امتیاز دات
            </span>
            <span className="text-[14px] font-bold text-foreground">
              {hidden ? '••••' : formatPersianNumber(pointsBalance)}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}