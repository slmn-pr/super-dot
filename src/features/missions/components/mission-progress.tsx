export function MissionProgress() {
  return (
    <section
      className="
mt-5
rounded-3xl
border
bg-card
p-4
"
    >
      <div
        className="
flex
items-center
justify-between
"
      >
        <div>
          <p className="text-sm text-muted-foreground">سطح فعلی</p>

          <h3 className="font-bold">Explorer Level 5</h3>
        </div>

        <span
          className="
rounded-full
bg-primary/10
px-3
py-1
text-xs
text-primary
"
        >
          +550 تا سطح بعد
        </span>
      </div>

      <div
        className="
mt-4
h-2
overflow-hidden
rounded-full
bg-muted
"
      >
        <div
          className="
h-full
w-[70%]
rounded-full
bg-primary
"
        />
      </div>
    </section>
  );
}
