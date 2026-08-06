import { Target, Sparkles } from "lucide-react";

export function MissionHeader() {
  return (
    <section
      className="
relative
overflow-hidden
rounded-3xl
border
bg-gradient-to-br
from-primary/20
via-primary/5
to-transparent
p-5
"
    >
      <div
        className="
absolute
left-0
top-0
size-32
rounded-full
bg-primary/10
blur-3xl
"
      />

      <div
        className="
relative
flex
items-center
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
bg-primary
text-primary-foreground
"
        >
          <Target size={26} />
        </div>

        <div>
          <p className="text-sm text-muted-foreground">ماموریت‌های امروز</p>

          <h1
            className="
text-xl
font-bold
"
          >
            ۳ ماموریت جدید داری 🎯
          </h1>
        </div>
      </div>

      <div
        className="
mt-5
flex
items-center
justify-between
rounded-2xl
bg-background/60
p-3
"
      >
        <span className="text-sm">امتیاز شما</span>

        <strong className="text-primary">2450 ⭐</strong>
      </div>
    </section>
  );
}
