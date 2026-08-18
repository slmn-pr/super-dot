export default function FloatingTile({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex size-[88px] items-center justify-center rounded-[20px] border border-zinc-200 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      {children}
    </div>
  );
}
