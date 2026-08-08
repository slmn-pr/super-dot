import Image from "next/image";
import { X } from "lucide-react";
import { ChatAttachment } from "./types";

export function AttachmentPreview({
  attachments,
  onRemove,
}: {
  attachments: ChatAttachment[];
  onRemove: (id: string) => void;
}) {
  if (attachments.length === 0) return null;

  return (
    <div className="flex gap-2 overflow-x-auto px-1 pb-2">
      {attachments.map((att) => (
        <div
          key={att.id}
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border"
        >
          <Image src={att.url} alt={att.name} fill className="object-cover" />
          <button
            type="button"
            onClick={() => onRemove(att.id)}
            className="absolute end-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-background/90 text-foreground shadow"
            aria-label="حذف تصویر"
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
}
