import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FilterChipProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

/**
 * The app doesn't have a dedicated Chip component yet, only Badge (which is
 * non-interactive). This wraps Badge in a button so filter pills stay
 * visually consistent with the rest of the app instead of introducing a
 * new shape/color language.
 */
export function FilterChip({ label, active, onClick }: FilterChipProps) {
    return (
        <button type="button" onClick={onClick} className="outline-none">
            <Badge
                variant={active ? "default" : "secondary"}
                className={cn(
                    "cursor-pointer whitespace-nowrap px-3 py-1 text-xs font-medium transition-colors",
                    !active && "text-muted-foreground hover:bg-secondary/80"
                )}
            >
                {label}
            </Badge>
        </button>
    );
}