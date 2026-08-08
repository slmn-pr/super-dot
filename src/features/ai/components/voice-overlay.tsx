"use client";

import { useEffect, useState } from "react";
import { Mic, Square, X } from "lucide-react";

interface VoiceOverlayProps {
  open: boolean;
  onClose: () => void;
  onFinish: (transcript: string) => void;
}

// Placeholder transcripts standing in for real speech-to-text output.
const FAKE_TRANSCRIPTS = [
  "بلیط هواپیما تهران به استانبول برای آخر هفته پیدا کن",
  "یه گوشی زیر ده میلیون تومن با دوربین خوب پیشنهاد بده",
  "قبض برق این ماه رو یادم بنداز کی باید پرداخت کنم",
];

const BAR_COUNT = 5;

export function VoiceOverlay({ open, onClose, onFinish }: VoiceOverlayProps) {
  const [phase, setPhase] = useState<"listening" | "processing">("listening");

  useEffect(() => {
    if (open) setPhase("listening");
  }, [open]);

  if (!open) return null;

  const handleStop = () => {
    setPhase("processing");
    window.setTimeout(() => {
      const transcript =
        FAKE_TRANSCRIPTS[Math.floor(Math.random() * FAKE_TRANSCRIPTS.length)];
      onFinish(transcript);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-background/98 px-6 py-10 backdrop-blur">
      <button
        type="button"
        onClick={onClose}
        className="self-start rounded-full border p-2 text-muted-foreground"
        aria-label="بستن حالت صوتی"
      >
        <X size={18} />
      </button>

      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <div className="flex h-24 items-end gap-2">
          {Array.from({ length: BAR_COUNT }).map((_, i) => (
            <span
              key={i}
              className="w-2 rounded-full bg-primary"
              style={{
                animation:
                  phase === "listening"
                    ? `voice-bar 1s ease-in-out ${i * 0.12}s infinite`
                    : "none",
                height: phase === "listening" ? undefined : "8px",
              }}
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          {phase === "listening" ? "در حال شنیدن..." : "در حال پردازش گفتار..."}
        </p>
      </div>

      <button
        type="button"
        onClick={handleStop}
        disabled={phase === "processing"}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg disabled:opacity-60"
        aria-label="پایان ضبط"
      >
        {phase === "listening" ? (
          <Square size={22} />
        ) : (
          <Mic size={22} className="animate-pulse" />
        )}
      </button>

      <style jsx>{`
        @keyframes voice-bar {
          0%,
          100% {
            height: 10px;
          }
          50% {
            height: 56px;
          }
        }
      `}</style>
    </div>
  );
}
