"use client";

import { DragEvent, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
  FileIcon,
  FileImageIcon,
  FileTextIcon,
  PresentationIcon,
  Trash2Icon,
  UploadCloudIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { CreateIdeaFormValues } from "../schema";

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const ACCEPTED_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".ppt",
  ".pptx",
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
];

function formatFileSize(size: number) {
  if (size < 1024 * 1024) {
    return `${Math.round(size / 1024)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(file: File) {
  if (file.type.startsWith("image/")) {
    return <FileImageIcon className="h-5 w-5 text-blue-500" />;
  }

  if (file.type === "application/pdf") {
    return <FileTextIcon className="h-5 w-5 text-red-500" />;
  }

  if (file.type.includes("presentation") || /\.(ppt|pptx)$/i.test(file.name)) {
    return <PresentationIcon className="h-5 w-5 text-orange-500" />;
  }

  if (file.type.includes("word") || /\.(doc|docx)$/i.test(file.name)) {
    return <FileTextIcon className="h-5 w-5 text-blue-500" />;
  }

  return <FileIcon className="h-5 w-5 text-muted-foreground" />;
}

function isDuplicate(file: File, documents: File[]) {
  return documents.some(
    (document) =>
      document.name === file.name &&
      document.size === file.size &&
      document.lastModified === file.lastModified,
  );
}

export default function IdeaDocumentsUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setValue } = useFormContext<CreateIdeaFormValues>();

  const documents =
    useWatch<CreateIdeaFormValues>({
      name: "documents",
    }) ?? [];

  const addFiles = (files: File[]) => {
    setError(null);

    if (!files.length) return;

    if (documents.length >= MAX_FILES) {
      setError(`حداکثر ${MAX_FILES} فایل می‌توانید اضافه کنید.`);
      return;
    }

    const availableSlots = MAX_FILES - documents.length;

    const filesToAdd = files.slice(0, availableSlots);

    const invalidFile = filesToAdd.find(
      (file) =>
        !ACCEPTED_TYPES.includes(file.type) ||
        !ACCEPTED_EXTENSIONS.some((extension) =>
          file.name.toLowerCase().endsWith(extension),
        ),
    );

    if (invalidFile) {
      setError(`فرمت فایل «${invalidFile.name}» پشتیبانی نمی‌شود.`);
      return;
    }

    const oversizedFile = filesToAdd.find((file) => file.size > MAX_FILE_SIZE);

    if (oversizedFile) {
      setError(`حجم فایل «${oversizedFile.name}» بیشتر از ۱۰ مگابایت است.`);
      return;
    }

    const duplicateFile = filesToAdd.find((file) =>
      isDuplicate(file, documents),
    );

    if (duplicateFile) {
      setError(`فایل «${duplicateFile.name}» قبلاً اضافه شده است.`);
      return;
    }

    setValue("documents", [...documents, ...filesToAdd], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(Array.from(event.target.files ?? []));

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsDragging(false);

    addFiles(Array.from(event.dataTransfer.files));
  };

  const removeDocument = (index: number) => {
    setValue(
      "documents",
      documents.filter((_, documentIndex) => documentIndex !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  };

  return (
    <section>
      <div className="mb-3">
        <h2 className="flex text-sm font-semibold">
          <span>مستندات</span>

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
        {/* Dropzone */}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragEnter={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            setIsDragging(false);
          }}
          onDrop={handleDrop}
          className={cn(
            "group relative flex min-h-40 w-full",
            "flex-col items-center justify-center",
            "overflow-hidden rounded-xl",
            "border border-dashed border-border",
            "bg-muted/40 px-4 py-6",
            "transition-all",
            "hover:border-blue-500/40",
            "hover:bg-blue-500/[0.02]",
            isDragging &&
              "border-blue-500 bg-blue-500/[0.04] ring-2 ring-blue-500/10",
          )}
        >
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center",
              "rounded-2xl bg-background shadow-sm",
              "transition-transform",
              isDragging && "scale-110",
            )}
          >
            <UploadCloudIcon className="h-5 w-5 text-blue-500" />
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm font-medium">
              {isDragging
                ? "فایل‌ها را اینجا رها کنید"
                : "مستندات ایده را آپلود کنید"}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              فایل‌ها را بکشید و اینجا رها کنید یا برای انتخاب کلیک کنید
            </p>
          </div>

          <p className="mt-3 text-[10px] text-muted-foreground">
            PDF · DOC · DOCX · PPT · PPTX · JPG · PNG · WEBP
            <span className="mx-1">•</span>
            حداکثر ۱۰MB برای هر فایل
          </p>

          <input
            ref={inputRef}
            type="file"
            multiple
            accept={ACCEPTED_EXTENSIONS.join(",")}
            className="hidden"
            onChange={handleChange}
          />
        </button>

        {/* Error */}
        {error && (
          <div className="mt-3 rounded-xl bg-red-500/5 px-3 py-2.5 text-xs text-red-500">
            {error}
          </div>
        )}

        {/* Files */}
        {documents.length > 0 && (
          <div className="mt-4 space-y-2">
            {documents.map((document, index) => (
              <DocumentItem
                key={`${document.name}-${document.lastModified}-${index}`}
                file={document}
                onRemove={() => removeDocument(index)}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {documents.length > 0 && (
          <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>{documents.length} فایل انتخاب شده</span>

            <span>
              {documents.length} / {MAX_FILES}
            </span>
          </div>
        )}
      </Card>
    </section>
  );
}

function DocumentItem({
  file,
  onRemove,
}: {
  file: File;
  onRemove: () => void;
}) {
  const isImage = file.type.startsWith("image/");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useState(() => {
    if (!isImage) return;

    const url = URL.createObjectURL(file);

    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  });

  return (
    <div className="flex items-center gap-3 rounded-xl border bg-muted/20 p-3">
      {/* Preview / Icon */}
      {previewUrl ? (
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl}
            alt={file.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background">
          {getFileIcon(file)}
        </div>
      )}

      {/* File info */}
      <div className="min-w-0 flex-1 text-right">
        <p className="truncate text-xs font-medium">{file.name}</p>

        <p className="mt-0.5 text-[10px] text-muted-foreground">
          {formatFileSize(file.size)}
        </p>
      </div>

      {/* Remove */}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`حذف ${file.name}`}
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center",
          "rounded-lg text-muted-foreground",
          "transition-colors",
          "hover:bg-red-500/10 hover:text-red-500",
        )}
      >
        <Trash2Icon className="h-4 w-4" />
      </button>
    </div>
  );
}
  