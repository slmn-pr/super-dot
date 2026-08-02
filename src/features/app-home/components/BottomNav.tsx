'use client'

import { cn } from '@/lib/utils'
import { BOTTOM_NAV } from '../data'

export function BottomNav() {
  return (
    <nav
      aria-label="ناوبری اصلی"
      className="flex items-center justify-around border-t border-border/60 bg-background pt-2 pb-5"
    >
      {BOTTOM_NAV.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            aria-current={item.isActive ? 'page' : undefined}
            className={cn(
              'flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-colors active:scale-95',
              item.isActive
                ? 'text-blue-400'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <div className="relative">
              <Icon
                size={22}
                strokeWidth={item.isActive ? 2.25 : 1.75}
                aria-hidden="true"
              />
              {item.isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                />
              )}
            </div>
            <span
              className={cn(
                'text-[10px] font-medium leading-none',
                item.isActive && 'font-semibold'
              )}
            >
              {item.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
