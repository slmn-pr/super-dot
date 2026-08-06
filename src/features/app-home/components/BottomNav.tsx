"use client";

import { cn } from "@/lib/utils";
import { LEFT_BOTTOM_NAV, RIGHT_BOTTOM_NAV } from "../data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="ناوبری اصلی"
      className="fixed bottom-5 left-4 right-4 z-50 flex justify-center"
    >
      <div className="w-full max-w-md flex items-center justify-around rounded-3xl border border-border/70 bg-background/95 px-3 py-2 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80x relative">
        {RIGHT_BOTTOM_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === pathname;

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-w-16 flex-col items-center gap-1 rounded-2xl px-3 py-2 transition-all active:scale-95",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.25 : 1.75} />
                </a>
              </TooltipTrigger>

              <TooltipContent side="top">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}

        {/* Home Icon placeholder */}
        <div className="w-16"></div>

        {/* Center item */}

        <div className=" absolute left-1/2 top-1/2 -translate-1/2">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="/app"
                aria-label="خانه"
                className="flex size-16 rounded-full items-center justify-center bg-black transition-all active:scale-95"
              >
                <Image
                  src="/dot_one_logo.png"
                  width={40}
                  height={40}
                  alt="Dot One"
                />
              </a>
            </TooltipTrigger>

            <TooltipContent side="top">خانه</TooltipContent>
          </Tooltip>
        </div>

        {LEFT_BOTTOM_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === pathname;

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-w-16 flex-col items-center gap-1 rounded-2xl px-3 py-2 transition-all active:scale-95",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.25 : 1.75} />
                </a>
              </TooltipTrigger>

              <TooltipContent side="top">{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </nav>
  );
}
