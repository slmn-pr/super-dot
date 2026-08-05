"use client";

import { Bell, ScanLine, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface TopBarProps {
  userName?: string;
  notificationCount?: number;
}

export function TopBar({
  userName = "سلمان",
  notificationCount = 3,
}: TopBarProps) {
  return (
    <header
      className="sticky top-0 w-full max-w-md mx-auto h-10 z-50"
      aria-label="نوار بالای اپلیکیشن"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 bg-background">
        {" "}
        {/* Right: Avatar + Greeting */}
        <div className="flex items-center gap-3 flex-1">
          <InputGroup className="px-2">
            <InputGroupInput placeholder="جست و جو در سرویس های دات وان" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>


          
        </div>
        {/* Left: actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          {/* <button
          aria-label={`اعلان‌ها — ${notificationCount} اعلان جدید`}
          className="relative size-9 flex items-center justify-center rounded-xl bg-zinc-200 text-zinc-800 hover:bg-zinc-700 active:scale-95 transition-all"
        >
          <Bell size={18} strokeWidth={1.75} />
          {notificationCount > 0 && (
            <Badge
              aria-hidden="true"
              className="absolute -top-1 -right-1 size-4 flex items-center justify-center p-0 text-[10px] font-bold bg-black text-white border-0 rounded-full pointer-events-none"
            >
              {notificationCount}
            </Badge>
          )}
        </button> */}

          <div className="relative">
            {/* Avatar image */}
            <Avatar className="size-7 ring-2 ring-black ring-offset-1 ring-offset-background">
              <AvatarImage src="/user_avatar.png" alt={`پروفایل ${userName}`} />
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
