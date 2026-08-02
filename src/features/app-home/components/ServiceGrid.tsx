'use client'

import { cn } from '@/lib/utils'
import { SERVICES } from '../data'

export function ServiceGrid() {
  return (
    <section aria-labelledby="services-heading" className="px-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2
          id="services-heading"
          className="font-semibold text-foreground text-xl font-bold"
        >
          سرویس‌ها
        </h2>
        <a
          href="/app/services"
          className="text-[12px] text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="مشاهده همه سرویس‌ها"
        >
          همه سرویس‌ها
        </a>
      </div>

      <div
        role="list"
        className="grid grid-cols-4 gap-3"
      >
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <a
              key={service.id}
              href={`/app/${service.id}`}
              role="listitem"
              aria-label={
                service.isNew
                  ? `${service.label} — جدید`
                  : service.badge
                  ? `${service.label} — ${service.badge} اعلان`
                  : service.label
              }
              className="flex flex-col items-center gap-2.5 p-1 rounded-2xl  active:scale-95 transition-all group"
            >
              {/* Icon container with badge */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className={cn(
                    'size-14 flex items-center justify-center rounded-[18px] transition-transform group-hover:scale-105',
                    service.color
                  )}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.75}
                    className={service.iconColor}
                    aria-hidden="true"
                  />
                </div>

                {/* Numeric badge */}
                {service.badge && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -left-1 min-w-[18px] h-[18px] flex items-center justify-center px-1 rounded-full bg-red-500 text-white text-[10px] font-bold leading-none border-2 border-background"
                  >
                    {service.badge}
                  </span>
                )}

                {/* "New" pill */}
                {service.isNew && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1.5 -left-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[8px] font-bold leading-none border border-background"
                  >
                    جدید
                  </span>
                )}
              </div>

              <span className="text-[11px] text-muted-foreground font-medium text-center leading-tight">
                {service.label}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
