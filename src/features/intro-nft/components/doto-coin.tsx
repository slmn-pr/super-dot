export default function DotoCoin() {
  return (
    <div className="relative flex size-[78px] items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />
      <div className="relative flex size-[70px] rotate-[-10deg] items-center justify-center rounded-full border border-blue-300 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-700 shadow-[0_15px_30px_rgba(59,130,246,0.25)]">
        <div className="flex size-[56px] items-center justify-center rounded-full border border-white/30 bg-blue-500/70">
          <span className="text-2xl font-black text-white">D</span>
        </div>
      </div>
      <div className="absolute bottom-[2px] left-[8px] right-[8px] h-3 rounded-full border-b-2 border-blue-800/50" />
    </div>
  );
}
