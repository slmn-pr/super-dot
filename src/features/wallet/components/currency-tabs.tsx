import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CURRENCY_BALANCES } from "./mock-data";
import type { CurrencyCode } from "./types";

interface CurrencyTabsProps {
    value: CurrencyCode;
    onValueChange: (value: CurrencyCode) => void;
}

export function CurrencyTabs({ value, onValueChange }: CurrencyTabsProps) {
    return (
        <Tabs
            value={value}
            onValueChange={(next) => onValueChange(next as CurrencyCode)}
        >
            <TabsList className="w-full">
                {CURRENCY_BALANCES.map((currency) => (
                    <TabsTrigger
                        key={currency.code}
                        value={currency.code}
                        disabled={currency.comingSoon}
                        className="flex-1 gap-1.5"
                    >
                        {currency.label}
                        {currency.comingSoon ? (
                            <Badge
                                variant="secondary"
                                className="px-1.5 py-0 text-[10px] leading-4"
                            >
                                به زودی
                            </Badge>
                        ) : null}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}