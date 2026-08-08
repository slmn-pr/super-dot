"use client";

import { useRef, useState } from "react";
import { ArrowUp, ImagePlus, Mic } from "lucide-react";
import { ChatAttachment } from "./types";
import { AttachmentPreview } from "./attachment-preview";

interface ChatComposerProps {
  disabled?: boolean;
  onSend: (text: string, attachments: ChatAttachment[]) => void;
  onOpenVoice: () => void;
}

export function ChatComposer({
  disabled,
  onSend,
  onOpenVoice,
}: ChatComposerProps) {
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState<ChatAttachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSend =
    !disabled && (text.trim().length > 0 || attachments.length > 0);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const next: ChatAttachment[] = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => ({
        id: crypto.randomUUID(),
        url: URL.createObjectURL(f),
        name: f.name,
      }));
    setAttachments((prev) => [...prev, ...next]);
  };

  const handleSend = () => {
    if (!canSend) return;
    onSend(text.trim(), attachments);
    setText("");
    setAttachments([]);
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const autoGrow = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <div className="rounded-3xl border bg-background px-3 py-3 shadow-sm">
      <AttachmentPreview
        attachments={attachments}
        onRemove={(id) =>
          setAttachments((prev) => prev.filter((a) => a.id !== id))
        }
      />

      <div className="flex items-end gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground"
          aria-label="پیوست تصویر"
        >
          <ImagePlus size={20} />
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            autoGrow();
          }}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="هر چیزی بپرس..."
          className="max-h-[120px] flex-1 resize-none bg-transparent text-sm leading-6 outline-none placeholder:text-muted-foreground"
        />

        {canSend ? (
          <button
            type="button"
            onClick={handleSend}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label="ارسال پیام"
          >
            <ArrowUp size={18} />
          </button>
        ) : (
          <button
            type="button"
            onClick={onOpenVoice}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
            aria-label="حالت صوتی"
          >
            <Mic size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
