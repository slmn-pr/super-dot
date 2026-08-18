import { ChevronLeft } from "lucide-react";
import Reveal from "./reveal";
import Link from "next/link";

export default function ServiceCard({ s, delay }) {
  const { Icon, name, fa, desc, featured, href } = s;
  return (
    <Reveal
      delay={delay}
      className={featured ? "md:col-span-2 md:row-span-1" : ""}
    >
      <Link href={href ?? "#"} className="h-full">
        <div
          className={`group h-full rounded-3xl border border-zinc-200 p-6 transition-all hover:border-blue-500 hover:shadow-sm ${
            featured ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="flex items-start justify-between">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                featured ? "bg-white/10" : "bg-blue-50"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${featured ? "text-white" : "text-blue-500"}`}
                strokeWidth={1.8}
              />
            </div>
            <ChevronLeft
              className={`h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 ${
                featured ? "text-white" : "text-black"
              }`}
            />
          </div>

          <h3 className="mt-5 text-lg font-bold">{name}</h3>
          <p
            className={`text-xs font-medium ${
              featured ? "text-white/60" : "text-zinc-400"
            }`}
          >
            {fa}
          </p>
          <p
            className={`mt-3 text-sm leading-7 ${
              featured ? "text-white/80" : "text-zinc-600"
            }`}
          >
            {desc}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
