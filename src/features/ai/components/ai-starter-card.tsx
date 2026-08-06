import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function AIStarterCard({ title, description, icon: Icon }: Props) {
  return (
    <div
      className="
flex
items-center
gap-4
rounded-3xl
border
bg-card
p-4
transition
hover:border-primary
active:scale-[.98]
"
    >
      <div
        className="
flex
size-12
items-center
justify-center
rounded-2xl
bg-primary/10
text-primary
"
      >
        <Icon size={24} />
      </div>

      <div>
        <h3 className="font-medium">{title}</h3>

        <p
          className="
mt-1
text-xs
text-muted-foreground
"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
