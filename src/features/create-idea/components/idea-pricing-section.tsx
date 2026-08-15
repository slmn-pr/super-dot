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
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="idea-price"
                  className="text-xs text-muted-foreground"
                >
                  قیمت فروش
                </Label>

                <Controller
                  name="currency"
                  control={control}
                  render={({ field }) => (
                    <div className="mt-3 rounded-xl border bg-background p-1 w-52">
                      <div className="grid grid-cols-2 gap-1">
                        <button
                          type="button"
                          onClick={() => field.onChange("DOTO")}
                          className={`
            flex h-11 flex-col items-center justify-center
            rounded-lg transition-all
            ${
              field.value === "DOTO"
                ? "bg-blue-500/10 text-blue-500 shadow-sm"
                : "text-muted-foreground hover:bg-muted/60"
            }
          `}
                        >
                          <span className="text-xs font-bold">DOTO</span>
                          <span className="mt-0.5 text-[10px] opacity-70">
                            دوتو
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => field.onChange("IRR")}
                          className={`
            flex h-11 flex-col items-center justify-center
            rounded-lg transition-all
            ${
              field.value === "IRR"
                ? "bg-emerald-500/10 text-emerald-600 shadow-sm"
                : "text-muted-foreground hover:bg-muted/60"
            }
          `}
                        >
                          <span className="text-xs font-bold">ریال</span>
                          <span className="mt-0.5 text-[10px] opacity-70">
                            IRR
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                />
              </div>

              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    id="idea-price"
                    type="text"
                    inputMode="decimal"
                    placeholder="0"
                    value={
                      field.value
                        ? Number(field.value).toLocaleString("en-US")
                        : ""
                    }
                    onChange={(event) => {
                      const rawValue = event.target.value.replace(/,/g, "");

                      if (!/^\d*\.?\d*$/.test(rawValue)) {
                        return;
                      }

                      field.onChange(rawValue);
                    }}
                    className="
        mt-1 h-12 border-0 bg-transparent
        px-0 text-2xl font-bold shadow-none
        focus-visible:ring-0
      "
                  />
                )}
              />
            </div>
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
