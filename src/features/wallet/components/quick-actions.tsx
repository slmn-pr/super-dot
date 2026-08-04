import {
    QrCode,
    Repeat2,
    Send,
    Sparkles,
    ArrowDownToLine,
    Banknote,
} from "lucide-react";
import { QuickActionButton } from "./quick-action-button";
import { QUICK_ACTIONS } from "./mock-data";
import type { QuickActionId } from "./types";

const ACTION_ICONS: Record<QuickActionId, typeof Send> = {
    send: Send,
    receive: ArrowDownToLine,
    scan: QrCode,
    convert: Repeat2,
    nft: Sparkles,
    withdraw: Banknote,
};

interface QuickActionsProps {
    onAction?: (id: QuickActionId) => void;
}

export function QuickActions({ onAction }: QuickActionsProps) {
    return (
        <div className="flex items-start justify-between gap-1">
            {QUICK_ACTIONS.map((action) => (
                <QuickActionButton
                    key={action.id}
                    icon={ACTION_ICONS[action.id]}
                    label={action.label}
                    comingSoon={action.comingSoon}
                    onClick={() => onAction?.(action.id)}
                />
            ))}
        </div>
    );
}