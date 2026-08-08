import Image from "next/image";
import { Sparkles } from "lucide-react";
import { ChatMessage } from "./types";
import { TypingDots } from "./typing-dots";

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  const isEmptyStreaming =
    message.status === "streaming" && message.content.length === 0;

  return (
    <div
      className={`flex w-full gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles size={16} />
        </div>
      )}

      <div
        className={`flex max-w-[80%] flex-col gap-2 ${isUser ? "items-end" : "items-start"}`}
      >
        {message.attachments && message.attachments.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {message.attachments.map((att) => (
              <div
                key={att.id}
                className="relative h-24 w-24 overflow-hidden rounded-2xl border"
              >
                <Image
                  src={att.url}
                  alt={att.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {(message.content.length > 0 || isEmptyStreaming) && (
          <div
            className={`rounded-3xl px-4 py-3 text-sm leading-7 ${
              isUser
                ? "rounded-tl-md bg-primary text-primary-foreground"
                : "rounded-tr-md bg-muted text-foreground"
            }`}
          >
            {isEmptyStreaming ? (
              <TypingDots />
            ) : (
              <span className="whitespace-pre-wrap">
                {message.content}
                {message.status === "streaming" && (
                  <span className="ms-0.5 inline-block h-4 w-[2px] animate-pulse bg-current align-middle" />
                )}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
