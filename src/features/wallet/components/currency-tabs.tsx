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
      <TabsList className="w-full h-20">
        {CURRENCY_BALANCES.map((currency) => (
          <TabsTrigger
            key={currency.code}
            value={currency.code}
            disabled={currency.comingSoon}
            className="flex-1 gap-1.5 h-10"
          >
            {currency.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
