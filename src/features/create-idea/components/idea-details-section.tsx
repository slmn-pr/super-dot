import { useFormContext } from "react-hook-form";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { CreateIdeaFormValues } from "../schema";

export default function IdeaDetailsSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CreateIdeaFormValues>();

  const description = watch("description");

  return (
    <section>
      <div className="mb-3">
        <h2 className="text-sm font-semibold">اطلاعات ایده</h2>

        <p className="mt-1 text-xs text-muted-foreground">
          عنوان و توضیحی که خریدار قبل از تصمیم‌گیری می‌بیند.
        </p>
      </div>

      <Card className="rounded-2xl p-4">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="idea-title">عنوان ایده</Label>

            <Input
              id="idea-title"
              placeholder="مثلاً AI Resume Builder"
              className="h-11 rounded-xl"
              {...register("title")}
            />

            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="idea-description">توضیحات ایده</Label>

              <span className="text-[11px] text-muted-foreground">
                {description?.length ?? 0} کاراکتر
              </span>
            </div>

            <Textarea
              id="idea-description"
              rows={6}
              placeholder="مشکل چیه؟ راه‌حل تو چیه؟ مخاطب هدف کیه و چرا این ایده ارزشمند است؟"
              className="resize-none rounded-xl"
              {...register("description")}
            />

            {errors.description && (
              <p className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
}
