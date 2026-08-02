'use client'

import { Bell, ScanLine } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface TopBarProps {
  userName?: string
  notificationCount?: number
}

export function TopBar({ userName = 'علی', notificationCount = 3 }: TopBarProps) {
  return (
    <header
      className="flex items-center justify-between px-4 py-3 bg-background"
      aria-label="نوار بالای اپلیکیشن"
    >
      {/* Right: Avatar + Greeting */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="size-9 ring-2 ring-blue-500/40 ring-offset-1 ring-offset-background">
            <AvatarImage src="/avatars/user.jpg" alt={`پروفایل ${userName}`} />
            <AvatarFallback className="bg-blue-500/20 text-blue-400 text-sm font-bold">
              {userName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          {/* Online dot */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 size-2.5 bg-gray-950 rounded-full border-2 border-background"
          />
        </div>
        <div className="flex flex-col -gap-0.5">
          <span className="text-[11px] text-muted-foreground leading-tight">سلام،</span>
          <span className="text-[15px] font-bold text-foreground leading-tight">{userName} عزیز</span>
        </div>
      </div>

      {/* Left: actions */}
      <div className="flex items-center gap-2">
        {/* QR Scanner */}
        <button
          aria-label="اسکن کد QR"
          className="size-9 flex items-center justify-center rounded-xl bg-zinc-800 text-zinc-300 hover:bg-zinc-700 active:scale-95 transition-all"
        >
          <ScanLine size={18} strokeWidth={1.75} />
        </button>

        {/* Notifications */}
        <button
          aria-label={`اعلان‌ها — ${notificationCount} اعلان جدید`}
          className="relative size-9 flex items-center justify-center rounded-xl bg-zinc-800 text-zinc-300 hover:bg-zinc-700 active:scale-95 transition-all"
        >
          <Bell size={18} strokeWidth={1.75} />
          {notificationCount > 0 && (
            <Badge
              aria-hidden="true"
              className="absolute -top-1 -left-1 size-4 flex items-center justify-center p-0 text-[10px] font-bold bg-blue-500 text-white border-0 rounded-full pointer-events-none"
            >
              {notificationCount}
            </Badge>
          )}
        </button>
      </div>
    </header>
  )
}
