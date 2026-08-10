export default function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-muted/50 px-4 py-3 text-sm leading-6">
      {children}
    </div>
  );
}
