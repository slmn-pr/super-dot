import { LucideIcon } from "lucide-react";

export function AICategory({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div
      className="
flex
flex-col
items-center
gap-2
rounded-3xl
border
p-3
"
    >
      <div
        className="
flex
size-10
items-center
justify-center
rounded-full
bg-muted
"
      >
        <Icon size={18} />
      </div>

      <span className="text-xs">{title}</span>
    </div>
  );
}
