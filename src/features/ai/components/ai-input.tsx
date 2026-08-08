import { ChevronLeft, Search, Sparkles } from "lucide-react";

export function AIInput() {
  return (
    <div className=" mt-6 flex items-center gap-3 rounded-3xl border bg-background px-4 py-4 shadow-sm">
      <Sparkles className="text-primary" size={20} />

      <div className="flex-1 text-sm text-muted-foreground">
        هر چیزی بپرس...
      </div>

      <ChevronLeft size={20} />
    </div>
  );
}
