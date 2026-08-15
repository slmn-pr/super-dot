import { Controller, useFormContext } from "react-hook-form";

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
    control,
    register,
    formState: { errors },
  } = useFormContext<CreateIdeaFormValues>();

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

            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className="
          h-14 w-[165px]
          rounded-xl
          border-border/60
          bg-background
          px-3
          shadow-none
          hover:bg-muted/40
        "
                  >
                    <div className="flex items-center gap-3">
                      {field.value === "DOTO" ? (
                        <>
                          <div
                            className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                bg-blue-500/10
                text-sm font-bold
                text-blue-500
              "
                          >
                            D
                          </div>

                          <div className="flex flex-col items-start">
                            <span className="text-sm font-semibold">DOTO</span>

                            <span className="text-[10px] text-muted-foreground">
                              توکن دوتو
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                bg-muted
                text-sm font-bold
              "
                          >
                            ﷼
                          </div>

                          <div className="flex flex-col items-start">
                            <span className="text-sm font-semibold">ریال</span>

                            <span className="text-[10px] text-muted-foreground">
                              ریال ایران
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </SelectTrigger>

                  <SelectContent className="w-[165px] rounded-xl p-1.5">
                    {/* options */}
                  </SelectContent>
                </Select>
              )}
            />
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
