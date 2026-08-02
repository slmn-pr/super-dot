'use client'

import { Signal, Wifi, BatteryMedium } from 'lucide-react'

export function StatusBar() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-between px-6 pt-3 pb-1 bg-background"
    >
      {/* Time — left in RTL is right side visually */}
      <span className="text-[13px] font-semibold text-foreground tabular-nums">۹:۴۱</span>

      {/* Dynamic Island pill */}
      <div className="w-[88px] h-[26px] bg-black rounded-full" />

      {/* Signal indicators */}
      <div className="flex items-center gap-1.5">
        <Signal size={14} className="text-foreground" strokeWidth={2} />
        <Wifi size={14} className="text-foreground" strokeWidth={2} />
        <BatteryMedium size={16} className="text-foreground" strokeWidth={2} />
      </div>
    </div>
  )
}
