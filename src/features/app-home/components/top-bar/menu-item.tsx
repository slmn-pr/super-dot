"use client";

import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MenuItem({
  title,
  icon,
  onClick,
  className,
}: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between",
        "rounded-2xl px-4 py-3",
        "transition-colors",
        "hover:bg-muted",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-muted-foreground">{icon}</span>}

        <span className="text-sm font-medium">{title}</span>
      </div>

      <ChevronLeft size={16} className="text-muted-foreground" />
    </button>
  );
}
