"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChatAttachment, ChatMessage } from "./types";
import { MessageBubble } from "./message-bubble";
import { ChatComposer } from "./chat-composer";
import { VoiceOverlay } from "./voice-overlay";

// Placeholder replies standing in for a real model response / API call.
const CANNED_REPLIES = [
  "باشه، دارم بررسی می‌کنم و چند گزینه مناسب برات پیدا می‌کنم.",
  "متوجه شدم. برای این کار به چند تا اطلاعات بیشتر نیاز دارم، می‌تونی دقیق‌تر بگی؟",
  "انجام شد. نتیجه رو همینجا برات نشون میدم.",
];

function createId() {
  return crypto.randomUUID();
}

export default function AIChatView() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const streamAssistantReply = () => {
    const reply =
      CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)];
    const assistantId = createId();

    setMessages((prev) => [
      ...prev,
      {
        id: assistantId,
        role: "assistant",
        content: "",
        status: "streaming",
        createdAt: Date.now(),
      },
    ]);

    let i = 0;
    const interval = window.setInterval(() => {
      i += 2;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content: reply.slice(0, i),
                status: i >= reply.length ? "done" : "streaming",
              }
            : m,
        ),
      );
      if (i >= reply.length) window.clearInterval(interval);
    }, 30);
  };

  const handleSend = (text: string, attachments: ChatAttachment[]) => {
    setMessages((prev) => [
      ...prev,
      {
        id: createId(),
        role: "user",
        content: text,
        attachments,
        status: "done",
        createdAt: Date.now(),
      },
    ]);
    window.setTimeout(streamAssistantReply, 300);
  };

  const handleVoiceFinish = (transcript: string) => {
    setVoiceOpen(false);
    handleSend(transcript, []);
  };

  return (
    <main className="flex h-screen flex-col bg-background">
      <header className="flex items-center gap-3 border-b px-4 py-4">
        <button type="button" onClick={() => router.back()} aria-label="بازگشت">
          <ChevronRight size={22} />
        </button>

        <div className="flex items-center gap-2 text-primary">
          <Sparkles size={18} />
          <span className="text-sm font-medium">Dot AI</span>
        </div>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto px-4 py-6"
      >
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-muted-foreground">
            <Sparkles size={28} className="text-primary" />
            <p className="text-sm">امروز چه کاری برات انجام بدم؟</p>
          </div>
        ) : (
          messages.map((m) => <MessageBubble key={m.id} message={m} />)
        )}
      </div>

      <div className="border-t px-4 py-3">
        <ChatComposer
          onSend={handleSend}
          onOpenVoice={() => setVoiceOpen(true)}
        />
      </div>

      <VoiceOverlay
        open={voiceOpen}
        onClose={() => setVoiceOpen(false)}
        onFinish={handleVoiceFinish}
      />
    </main>
  );
}
