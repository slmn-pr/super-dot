import { useState } from "react";
import Logo from "./logo";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "اکوسیستم", href: "#ecosystem" },
    { label: "ویژگی‌ها", href: "#why" },
    { label: "چگونه کار می‌کند", href: "#how" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-lg items-center justify-between px-5 py-4 md:max-w-6xl md:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            دانلود اپلیکیشن
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="باز و بسته کردن منو"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-black px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              دانلود اپلیکیشن
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
