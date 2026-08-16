import { Card } from "@/components/ui/card";

export default function RecentActivitySection() {
  return (
    <section className="mt-8">
      <h3 className="mb-4 font-semibold">معاملات اخیر</h3>

      <div className="space-y-3">
        {[
          {
            name: "@alex",
            price: "0.42 DOTO",
            time: "۲ دقیقه پیش",
          },
          {
            name: "AI Resume Builder",
            price: "0.63 DOTO",
            time: "۱۰ دقیقه پیش",
          },
        ].map((item) => (
          <Card
            key={item.name}
            className="flex items-center justify-between rounded-xl p-4"
          >
            <div>
              <div className="font-medium" dir="ltr">{item.name}</div>

              <div className="text-xs text-muted-foreground text-center">{item.time}</div>
            </div>

            <div className="font-semibold">{item.price}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
