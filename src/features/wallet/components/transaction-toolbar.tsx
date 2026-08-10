import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterChip } from "./filter-chip";
import { TRANSACTION_FILTERS } from "./mock-data";
import type { TransactionCategory } from "./types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const SORT_OPTIONS = [
  { value: "newest", label: "جدیدترین" },
  { value: "oldest", label: "قدیمی‌ترین" },
  { value: "amount", label: "بیشترین مبلغ" },
];

interface TransactionToolbarProps {
  sort: string;
  onSortChange: (value: string) => void;
  activeFilter: TransactionCategory;
  onFilterChange: (value: TransactionCategory) => void;
}

export function TransactionToolbar({
  sort,
  onSortChange,
  activeFilter,
  onFilterChange,
}: TransactionToolbarProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Filters */}
      <div className="relative flex-1 w-[calc(100%-9rem)]">
        <ScrollArea className="whitespace-nowrap">
          <div className="flex gap-2 pb-1">
            {TRANSACTION_FILTERS.map((filter) => (
              <FilterChip
                key={filter.value}
                label={filter.label}
                active={activeFilter === filter.value}
                onClick={() => onFilterChange(filter.value)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>

        {/* Fade Right (شروع در RTL) */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background/30 to-transparent" />

        {/* Fade Left (پایان در RTL) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-background to-transparent" />
      </div>

      {/* Sort */}
      <Select value={sort} onValueChange={onSortChange}>
        <SelectTrigger className="w-32 shrink-0 border-none bg-secondary text-xs">
          <SelectValue>
            {SORT_OPTIONS.find((x) => x.value === sort)?.label}
          </SelectValue>
        </SelectTrigger>

        <SelectContent>
          {SORT_OPTIONS.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-foreground hover:bg-accent/20! hover:*:text-accent! data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
