import { Input } from "@/components/ui/input";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";

export default function NftSearchInput() {
  return (
    <div className="mt-6">
      <div className="relative">
        <SearchIcon
          className="absolute right-3.5 top-1/2 z-10 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />

        <Input
          type="search"
          placeholder="جستجوی Username یا Idea"
          className="h-12 rounded-2xl border-border/70 bg-muted/30 pr-10 pl-11 text-sm shadow-none transition-colors placeholder:text-muted-foreground/70 focus-visible:bg-background"
        />

        <button
          type="button"
          aria-label="فیلتر جستجو"
          className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <SlidersHorizontalIcon className="size-4" />
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2 px-1 text-xs text-muted-foreground">
        <span>Username</span>
        <span className="text-border">•</span>
        <span>Idea</span>
        <span className="mr-auto">جستجو در بازار</span>
      </div>
    </div>
  );
}
