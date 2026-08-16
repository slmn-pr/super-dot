import React from "react";
import { SERVICES } from "../constants";
import { Dot } from "./logo";

export default function Ticker() {
  const items = SERVICES.map((s) => s.name);
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-zinc-200 bg-zinc-50 py-4">
      <div className="animate-marquee flex w-max items-center gap-3 whitespace-nowrap text-sm font-semibold text-zinc-500">
        {loop.map((name, i) => (
          <React.Fragment key={i}>
            <span>{name}</span>
            <Dot />
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes marquee-rtl {
          from { transform: translateX(0); }
          to { transform: translateX(50%); }
        }
        .animate-marquee { animation: marquee-rtl 28s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
