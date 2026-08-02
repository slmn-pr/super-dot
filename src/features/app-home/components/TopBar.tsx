'use client'

import { Bell, ScanLine } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface TopBarProps {
  userName?: string
  notificationCount?: number
}

export function TopBar({ userName = 'سلمان', notificationCount = 3 }: TopBarProps) {
  return (
    <header
      className="flex items-center justify-between px-4 py-3 bg-background"
      aria-label="نوار بالای اپلیکیشن"
    >
      {/* Right: Avatar + Greeting */}
      <div className="flex items-center gap-3">
        <div className="relative">

          {/* Avatar image */}
          <Avatar className="size-9 ring-2 ring-black ring-offset-1 ring-offset-background">
            <AvatarImage src="/user_avatar.png" alt={`پروفایل ${userName}`} />
          </Avatar>

        </div>

        {/* Welcome name */}
        <div className="flex flex-col -gap-0.5">
          <span className="text-xs text-muted-foreground leading-tight">سلام،</span>
          <span className="text-sm font-bold text-foreground leading-tight">{userName} عزیز</span>
        </div>
      </div>

      {/* Left: actions */}
      <div className="flex items-center gap-2">


        {/* Notifications */}
        <button
          aria-label={`اعلان‌ها — ${notificationCount} اعلان جدید`}
          className="relative size-9 flex items-center justify-center rounded-xl bg-zinc-200 text-zinc-800 hover:bg-zinc-700 active:scale-95 transition-all"
        >
          <Bell size={18} strokeWidth={1.75} />
          {notificationCount > 0 && (
            <Badge
              aria-hidden="true"
              className="absolute -top-1 -left-1 size-4 flex items-center justify-center p-0 text-[10px] font-bold bg-black text-white border-0 rounded-full pointer-events-none"
            >
              {notificationCount}
            </Badge>
          )}
        </button>
      </div>
    </header>
  )
}
