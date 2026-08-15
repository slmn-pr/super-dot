import { useFormContext } from "react-hook-form";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CreateIdeaFormValues } from "../schema";

export default function IdeaPricingSection() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<CreateIdeaFormValues>();

  const currency = watch("currency");

  return (
    <section>
      <div className="mb-3">
        <h2 className="text-sm font-semibold">قیمت‌گذاری</h2>

        <p className="mt-1 text-xs text-muted-foreground">
          قیمت نهایی که خریدار برای مالکیت ایده پرداخت می‌کند.
        </p>
      </div>

      <Card className="rounded-2xl p-4">
        <div className="rounded-xl border bg-muted/20 p-3">
          <div className="grid grid-cols-[1fr_auto] items-center gap-3">
            <div>
              <Label
                htmlFor="idea-price"
                className="text-xs text-muted-foreground"
              >
                قیمت فروش
              </Label>

              <Input
                id="idea-price"
                type="number"
                step="0.01"
                placeholder="0"
                className="
                  mt-1 h-11 border-0 bg-transparent
                  px-0 text-xl font-bold shadow-none
                  focus-visible:ring-0
                "
                {...register("price")}
              />
            </div>

            <Select
              value={currency}
              onValueChange={(value) =>
                setValue(
                  "currency",
                  value as CreateIdeaFormValues["currency"],
                  {
                    shouldDirty: true,
                    shouldValidate: true,
                  },
                )
              }
            >
              <SelectTrigger className="w-[100px] rounded-xl">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="DOTO">DOTO</SelectItem>

                <SelectItem value="IRR">ریال</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {errors.price && (
          <p className="mt-2 text-xs text-red-500">{errors.price.message}</p>
        )}

        <div className="mt-3 flex items-start gap-2 text-[11px] leading-5 text-muted-foreground">
          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

          <p>بعد از انتشار، ایده با همین قیمت در بازار قابل خرید خواهد بود.</p>
        </div>
      </Card>
    </section>
  );
}
