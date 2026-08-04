import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface QuickActionButtonProps {
    icon: LucideIcon;
    label: string;
    comingSoon?: boolean;
    onClick?: () => void;
}

/**
 * Circular icon + label action used in the wallet's quick actions row
 * (ارسال / دریافت / اسکن / تبدیل / NFT). Disabled + badged when
 * `comingSoon` is set.
 */
export function QuickActionButton({
    icon: Icon,
    label,
    comingSoon,
    onClick,
}: QuickActionButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={comingSoon}
            className="group relative flex flex-1 flex-col items-center gap-2 outline-none disabled:cursor-not-allowed"
        >
            <span
                className={cn(
                    "flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors",
                    "group-hover:bg-secondary/80 group-focus-visible:ring-2 group-focus-visible:ring-ring",
                    comingSoon && "opacity-50"
                )}
            >
                <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <span className="text-xs font-medium text-foreground">{label}</span>
            {comingSoon ? (
                <Badge
                    variant="secondary"
                    className="absolute -top-1 end-2 px-1.5 py-0 text-[10px] leading-4"
                >
                    به زودی
                </Badge>
            ) : null}
        </button>
    );
}