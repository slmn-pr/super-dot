"use client";

import { useRef } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { FileTextIcon, Trash2Icon, UploadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { CreateIdeaFormValues } from "../schema";

export default function IdeaDocumentsUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setValue } = useFormContext<CreateIdeaFormValues>();

  const documents = useWatch({
    name: "documents",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) return;

    setValue("documents", [...documents, ...files], {
      shouldDirty: true,
      shouldValidate: true,
    });

    event.target.value = "";
  };

  const removeDocument = (index: number) => {
    setValue(
      "documents",
      documents.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  };

  return (
    <section>
      <div className="mb-3">
        <h2 className="text-sm font-semibold">
          مستندات
          <span className="mr-2 text-xs font-normal text-muted-foreground">
            اختیاری
          </span>
        </h2>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Pitch deck، wireframe یا تحقیق بازار می‌تواند ارزش ایده را برای خریدار
          شفاف‌تر کند.
        </p>
      </div>

      <Card className="rounded-2xl p-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="rounded-xl"
          onClick={() => inputRef.current?.click()}
        >
          <UploadIcon className="ml-2 h-4 w-4" />
          افزودن فایل
        </Button>

        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleChange}
        />

        {documents.length > 0 && (
          <div className="mt-4 space-y-2">
            {documents.map((document, index) => (
              <div
                key={`${document.name}-${index}`}
                className="flex items-center justify-between rounded-xl border bg-muted/30 p-3"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                    <FileTextIcon className="h-4 w-4 text-blue-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium">
                      {document.name}
                    </p>

                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {Math.round(document.size / 1024)} KB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeDocument(index)}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-red-500/10 hover:text-red-500"
                >
                  <Trash2Icon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}
