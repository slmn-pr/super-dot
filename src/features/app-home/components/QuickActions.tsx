'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { QUICK_ACTIONS } from '../data'

export function QuickActions() {
  const [expanded, setExpanded] = useState(false)

  const visibleActions = expanded
    ? QUICK_ACTIONS
    : QUICK_ACTIONS.slice(0, 7)

  return (
    <section
      aria-labelledby="quick-actions-heading"
      className="mt-6 px-4"
    >

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2
            id="quick-actions-heading"
            className="text-base font-semibold tracking-tight"
          >
            دسترسی سریع
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            سرویس‌های پرکاربرد دات‌وان
          </p>
        </div>


        {QUICK_ACTIONS.length > 7 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="
              flex
              items-center
              gap-1
              text-xs
              font-medium
              text-primary
            "
          >
            {expanded ? 'بستن' : 'بیشتر'}

            {expanded ? (
              <ChevronUp size={15} />
            ) : (
              <ChevronLeft size={15} />
            )}

          </button>
        )}

      </div>


      {/* Compact Mode */}

      {!expanded && (

        <div
          className="
            flex
            gap-4
            overflow-x-auto
            pb-2
            scrollbar-none
            snap-x
          "
        >

          {visibleActions.map((action) => (
            <QuickActionItem
              key={action.id}
              action={action}
            />
          ))}

        </div>

      )}



      {/* Expanded Mode */}

      {expanded && (

        <div
          className="
            grid
            grid-cols-4
            gap-y-6
            animate-in
            fade-in
            duration-200
          "
        >

          {QUICK_ACTIONS.map((action) => (
            <QuickActionItem
              key={action.id}
              action={action}
            />
          ))}

        </div>

      )}

    </section>
  )
}



function QuickActionItem({
  action,
}: {
  action: (typeof QUICK_ACTIONS)[number]
}) {

  const Icon = action.icon

  return (

    <a
      href={action.href}
      aria-label={action.label}
      className="
        group
        flex
        min-w-[68px]
        snap-start
        flex-col
        items-center
        transition-transform
        active:scale-95
      "
    >

      {/* Icon */}

      <div
        className={cn(
          `
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-border
          bg-card
          transition-colors
          `,
          `
          group-hover:border-primary/30
          group-hover:bg-primary/5
          `
        )}
      >

        <Icon
          size={22}
          strokeWidth={1.8}
          className="
            text-muted-foreground
            transition-colors
            group-hover:text-primary
          "
        />


        {action.isNew && (
          <span
            className="
              absolute
              right-1
              top-1
              h-2
              w-2
              rounded-full
              bg-primary
            "
          />
        )}

      </div>


      {/* Label */}

      <span
        className="
          mt-2
          max-w-[68px]
          text-center
          text-[11px]
          font-medium
          leading-4
          text-muted-foreground
          transition-colors
          group-hover:text-foreground
        "
      >
        {action.label}
      </span>

    </a>

  )
}