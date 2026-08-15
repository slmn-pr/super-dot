import { Button } from "@/components/ui/button";

export default function NftCategoryListView() {
  return (
    <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      {["همه", "Username", "Idea", "جدید", "محبوب"].map((item) => (
        <Button
          key={item}
          variant="secondary"
          size="sm"
          className="shrink-0 rounded-full"
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
