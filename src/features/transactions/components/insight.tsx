import { ReactNode } from "react";

interface InsightProps {
  icon: ReactNode;
  children: ReactNode;
}

export function Insight({ icon, children }: InsightProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-muted/40 p-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
        {icon}
      </div>

      <p className="text-sm leading-6 text-muted-foreground">{children}</p>
    </div>
  );
}
