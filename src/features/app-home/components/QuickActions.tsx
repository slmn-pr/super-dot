'use client'

import { QUICK_ACTIONS } from '../data'

export function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading" className="px-4 mt-5">
      <h2 id="quick-actions-heading" className="sr-only">
        اقدامات سریع
      </h2>
      <div
        role="list"
        className="grid grid-cols-6 gap-1"
      >
        {QUICK_ACTIONS.map((action) => {
          const Icon = action.icon
          return (
            <a
              key={action.id}
              href={action.href}
              role="listitem"
              aria-label={action.label}
              className="flex flex-col items-center gap-2 py-2 px-1 rounded-xl hover:bg-zinc-800/60 active:scale-95 transition-all"
            >
              <div
                aria-hidden="true"
                className="size-11 flex items-center justify-center rounded-2xl bg-zinc-800 border border-white/[0.07]"
              >
                <Icon size={20} strokeWidth={1.75} className="text-zinc-200" />
              </div>
              <span className="text-[10px] text-zinc-400 font-medium text-center leading-tight">
                {action.label}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
