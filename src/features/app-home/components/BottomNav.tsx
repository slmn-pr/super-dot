"use client";

import { cn } from "@/lib/utils";
import { BOTTOM_NAV, LEFT_BOTTOM_NAV, RIGHT_BOTTOM_NAV } from "../data";
import { usePathname } from "next/navigation";
import { HomeIcon, Icon } from "lucide-react";
import Image from "next/image";

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
            <a
              key={item.id}
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

              {/* <span className={cn("text-[11px]", isActive && "font-semibold")}>
                {item.label}
              </span> */}
            </a>
          );
        })}


        {/* Home Icon placeholder */}
        <div className="w-16"></div>

        {/* Center item */}
        <a
          key="home-nav"
          href="/app"
          aria-label="/app"
          className={cn(
            "flex size-16 rounded-full flex-col items-center justify-center gap-1 px-3 py-2 transition-all active:scale-95 bg-black absolute left-1/2 top-1/2 -translate-1/2",
          )}
        >


          <Image src="/dot_one_logo.png" width={50} height={50} alt="Dot one" /> 
          {/* <HomeIcon size={35} strokeWidth={1.5} className="text-white" /> */}
        </a>

        {LEFT_BOTTOM_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === pathname;

          return (
            <a
              key={item.id}
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

              {/* <span className={cn("text-[11px]", isActive && "font-semibold")}>
                {item.label}
              </span> */}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
