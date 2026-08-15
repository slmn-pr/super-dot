"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useFormContext, useWatch } from "react-hook-form";
import { UploadIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { CreateIdeaFormValues } from "../schema";

export default function IdeaImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setValue } = useFormContext<CreateIdeaFormValues>();

  const image = useWatch({
    name: "image",
  });

  const previewUrl = image ? URL.createObjectURL(image) : null;

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    setValue("image", file, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <section>
      <div className="mb-3">
        <h2 className="text-sm font-semibold">تصویر ایده</h2>

        <p className="mt-1 text-xs text-muted-foreground">
          یک تصویر مناسب باعث می‌شود ایده در بازار بهتر دیده شود.
        </p>
      </div>

      <Card className="rounded-2xl p-4">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
            group relative flex h-48 w-full
            items-center justify-center
            overflow-hidden rounded-xl
            border border-dashed border-border
            bg-muted/40
            transition-colors
            hover:border-blue-500/40
            hover:bg-blue-500/[0.02]
          "
        >
          {previewUrl ? (
            <>
              <Image
                src={previewUrl}
                alt="پیش‌نمایش تصویر ایده"
                fill
                unoptimized
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-xl bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                  تغییر تصویر
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-sm">
                <UploadIcon className="h-5 w-5 text-muted-foreground" />
              </div>

              <div>
                <p className="text-sm font-medium">تصویر ایده را آپلود کنید</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  برای انتخاب تصویر کلیک کنید
                </p>
              </div>
            </div>
          )}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </Card>
    </section>
  );
}
