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
        <div className="flex flex-col gap-3">
            <Select value={sort} onValueChange={onSortChange}>
                <SelectTrigger className="w-36 border-none bg-secondary text-xs">
                    <SelectValue  >

                        <p>
                            {SORT_OPTIONS.filter((x) => x.value === sort)[0].label}
                        </p>


                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {SORT_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="flex flex-wrap gap-2">
                {TRANSACTION_FILTERS.map((filter) => (
                    <FilterChip
                        key={filter.value}
                        label={filter.label}
                        active={activeFilter === filter.value}
                        onClick={() => onFilterChange(filter.value)}
                    />
                ))}
            </div>
        </div>
    );
}