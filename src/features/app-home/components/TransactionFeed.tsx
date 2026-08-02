'use client'

import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TRANSACTIONS } from '../data'

export function TransactionFeed() {
  return (
    <section aria-labelledby="transactions-heading" className="px-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2
          id="transactions-heading"
          className="text-foreground text-lg font-bold"
        >
          آخرین تراکنش‌ها
        </h2>
        <a
          href="/app/history"
          className="flex items-center gap-0.5 text-[12px] text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="مشاهده همه تراکنش‌ها"
        >
          مشاهده همه
          <ArrowLeft size={12} strokeWidth={2} aria-hidden="true" className="mt-px" />
        </a>
      </div>

      <div
        className="rounded-2xl overflow-hidden flex flex-col gap-0.5 "
        role="list"
        aria-label="لیست تراکنش‌های اخیر"
      >
        {TRANSACTIONS.map((tx, idx) => {
          const Icon = tx.icon
          const isCredit = tx.type === 'credit'
          const isLast = idx === TRANSACTIONS.length - 1

          return (
            <a
              key={tx.id}
              href="/app/history"
              role="listitem"
              aria-label={`${tx.title} — ${tx.subtitle} — مبلغ ${tx.amount} تومان — ${tx.date}`}
              className={cn(
                'flex items-center gap-3 px-4 py-3.5 hover:bg-zinc-800/40 active:bg-zinc-800/60 transition-colors bg-muted')}
            >
              {/* Service icon */}
              <div
                aria-hidden="true"
                className={cn(
                  'size-10 flex-none flex items-center justify-center rounded-xl',
                  tx.iconBg
                )}
              >
                <Icon size={18} strokeWidth={1.75} className="text-foreground/80" />
              </div>

              {/* Description */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-foreground leading-tight truncate">
                  {tx.title}
                </p>
                <p className="text-[11px] text-zinc-500 leading-tight truncate mt-0.5">
                  {tx.subtitle}
                </p>
              </div>

              {/* Amount + Date */}
              <div className="flex flex-col items-end gap-0.5 flex-none">
                <span
                  className={cn(
                    'text-[13px] font-bold tabular-nums',
                    isCredit ? 'text-emerald-400' : 'text-foreground'
                  )}
                >
                  {tx.amount}
                  <span className="text-[10px] font-normal text-zinc-500 mr-1">ت</span>
                </span>
                <span className="text-[10px] text-zinc-600">{tx.date}</span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
