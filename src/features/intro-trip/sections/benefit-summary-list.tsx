import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function BenefitSummaryList() {
  return (
    <section className="py-16 w-full max-w-6xl mx-auto">
      <Card className="bg-[#F4F4F5] border-none shadow-none p-8 md:p-12 rounded-3xl">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-xl md:text-2xl font-bold text-[#09090B]">
            ویژگی‌های کلیدی سرویس در یک نگاه
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "خودروهای تمیز، کارشناسی‌شده و مدرن",
              "ردیابی دقیق و زنده موقعیت مکانی راننده",
              "پرداخت آسان و سریع از طریق کیف‌پول سوپردات",
              "پشتیبانی آنلاین و پاسخگو در تمام طول سفر",
              "امکان اشتراک‌گذاری لینک سفر با خانواده",
              "قیمت‌گذاری منصفانه و شفاف بدون هزینه پنهان",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <span className="text-sm text-[#09090B] font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
