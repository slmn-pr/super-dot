import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function NftSearchInput() {
  return (
    <div className="relative mt-6">
      <SearchIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input className="pr-10" placeholder="جستجوی Username یا Idea..." />
    </div>
  );
}
