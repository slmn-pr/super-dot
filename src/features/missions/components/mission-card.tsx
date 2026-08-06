import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  reward: string;
  progress: number;
  icon: LucideIcon;
  category: string;
}

export function MissionCard({
  title,
  description,
  reward,
  progress,
  icon: Icon,
  category,
}: Props) {
  return (
    <div
      className="
rounded-3xl
border
bg-card
p-4
"
    >
      <div
        className="
flex
gap-3
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

        <div className="flex-1">
          <div
            className="
flex
items-start
justify-between
gap-2
"
          >
            <h3 className="font-semibold">{title}</h3>

            <span
              className="
rounded-full
bg-primary/10
px-2
py-1
text-[11px]
text-primary
"
            >
              {category}
            </span>
          </div>

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

      <div className="mt-4">
        <div
          className="
mb-2
flex
justify-between
text-xs
"
        >
          <span className="text-muted-foreground">پیشرفت</span>

          <span className="font-medium">{reward}</span>
        </div>

        <div
          className="
h-2
rounded-full
bg-muted
overflow-hidden
"
        >
          <div
            className="
h-full
rounded-full
bg-primary
"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
