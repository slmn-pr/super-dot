'use client'

import { useState } from 'react'
import { Eye, EyeOff, Plus, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WalletCardProps {
  balance?: number
  goldGrams?: number
  pointsBalance?: number
}

function formatPersianNumber(n: number): string {
  return n.toLocaleString('fa-IR')
}

export function WalletCard({
  balance = 12500000,
  goldGrams = 3.2,
  pointsBalance = 4750,
}: WalletCardProps) {
  const [hidden, setHidden] = useState(false)

  return (
    <section
      aria-labelledby="wallet-heading"
      className="mx-4 rounded-2xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-zinc-900 to-zinc-800"
    >
      {/* Card Header */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between mb-5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-zinc-400 leading-none">موجودی کیف پول</span>
            <div className="flex items-baseline gap-2 mt-1">
              {hidden ? (
                <span className="text-2xl font-bold text-foreground tracking-widest">
                  ••••••••
                </span>
              ) : (
                <>
                  <span
                    id="wallet-heading"
                    className="text-[26px] font-extrabold text-foreground tabular-nums leading-none"
                  >
                    {formatPersianNumber(balance)}
                  </span>
                  <span className="text-[12px] text-zinc-400 font-medium">تومان</span>
                </>
              )}
            </div>
          </div>

          <button
            onClick={() => setHidden((p) => !p)}
            aria-label={hidden ? 'نمایش موجودی' : 'پنهان کردن موجودی'}
            className="size-8 flex items-center justify-center rounded-lg bg-white/8 text-zinc-400 hover:text-zinc-200 hover:bg-white/12 transition-colors active:scale-95"
          >
            {hidden ? <Eye size={15} strokeWidth={1.75} /> : <EyeOff size={15} strokeWidth={1.75} />}
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2.5">
          <button
            aria-label="شارژ کیف پول"
            className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl bg-blue-500 hover:bg-blue-400 active:scale-[0.97] text-white text-[13px] font-semibold transition-all"
          >
            <Plus size={15} strokeWidth={2.5} aria-hidden="true" />
            شارژ کیف پول
          </button>
          <button
            aria-label="انتقال وجه"
            className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.97] text-foreground text-[13px] font-semibold transition-all"
          >
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
            انتقال وجه
          </button>
        </div>
      </div>

      {/* Card Footer — secondary balances */}
      <div
        className="grid grid-cols-2 divide-x divide-x-reverse divide-white/[0.07] border-t border-white/[0.07]"
        role="list"
        aria-label="دارایی‌های دیگر"
      >
        <div
          role="listitem"
          className="flex flex-col items-center justify-center gap-0.5 py-3"
        >
          <span className="text-[10px] text-zinc-500">دات گلد</span>
          <span className="text-[14px] font-bold text-yellow-400">
            {hidden ? '••' : `${goldGrams.toLocaleString('fa-IR')} گرم`}
          </span>
        </div>
        <div
          role="listitem"
          className="flex flex-col items-center justify-center gap-0.5 py-3"
        >
          <span className="text-[10px] text-zinc-500">امتیاز دات</span>
          <span className="text-[14px] font-bold text-violet-400">
            {hidden ? '••••' : formatPersianNumber(pointsBalance)}
          </span>
        </div>
      </div>
    </section>
  )
}
