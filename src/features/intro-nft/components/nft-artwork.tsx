import { Sparkles } from "lucide-react";

export default function NftArtwork() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,#8b5cf6_0%,transparent_28%),radial-gradient(circle_at_75%_25%,#3b82f6_0%,transparent_32%),radial-gradient(circle_at_65%_85%,#1d4ed8_0%,transparent_40%)]" />

      <div className="absolute -left-[20%] top-[12%] h-[55%] w-[140%] rotate-[22deg] rounded-[45%] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-300 opacity-90 blur-[1px]" />
      <div className="absolute -left-[15%] top-[30%] h-[48%] w-[125%] rotate-[-20deg] rounded-[45%] bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-400 opacity-80" />
      <div className="absolute -left-[20%] top-[47%] h-[42%] w-[130%] rotate-[16deg] rounded-[45%] bg-gradient-to-r from-indigo-700 via-blue-500 to-purple-400 opacity-80" />

      <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-[1px]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-[22px] border border-white/30 bg-white/[0.08] backdrop-blur-md">
        <div className="-rotate-45">
          <Sparkles className="size-9 text-white/90" strokeWidth={1.2} />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="text-[8px] font-semibold tracking-[0.3em] text-white/50">
          SUPERDOT
        </span>
        <span className="text-[8px] font-medium tracking-wider text-white/40">
          GENESIS
        </span>
      </div>
    </div>
  );
}
