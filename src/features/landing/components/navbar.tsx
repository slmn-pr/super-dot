"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import { Menu, X, ArrowLeft } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // افکت برای تغییر استایل هدر هنگام اسکرول صفحه
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "اکوسیستم", href: "#ecosystem" },
    { label: "چرا سوپردات؟", href: "#why" },
    { label: "مراحل ورود", href: "#how" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl shadow-sm shadow-zinc-900/5 py-3"
          : "bg-white/60 backdrop-blur-md py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        {/* لوگوی پلتفرم */}
        <a
          href="#"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Logo />
        </a>

        {/* لینک‌های منو در Desktop */}
        <nav className="hidden items-center gap-1 rounded-full border border-zinc-200/60 bg-zinc-100/60 p-1.5 backdrop-blur-md md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-zinc-600 transition-all hover:bg-white hover:text-black hover:shadow-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* دکمه دانلود / ورود دسکتاپ */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.superdot.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-zinc-600 transition-colors hover:text-black"
          >
            نسخه وب
          </a>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span>دانلود اپلیکیشن</span>
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </div>

        {/* دکمه منوی موبایل */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white/80 text-zinc-800 transition-colors hover:bg-zinc-100 active:scale-95 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="باز و بسته کردن منو"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* منوی مدرن کشویی موبایل */}
      {open && (
        <div className="animate-in slide-in-from-top-3 duration-200 border-b border-zinc-200/80 bg-white/95 px-5 py-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 text-sm font-bold text-zinc-800 transition-colors active:bg-blue-50 active:text-blue-600"
              >
                <span>{l.label}</span>
                <span className="text-xs text-zinc-400">←</span>
              </a>
            ))}

            <div className="mt-2 grid grid-cols-2 gap-2 pt-2">
              <a
                href="https://app.superdot.ir"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white py-3 text-center text-xs font-bold text-zinc-700 active:bg-zinc-50"
              >
                ورود به نسخه وب
              </a>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-2xl bg-blue-600 py-3 text-center text-xs font-bold text-white shadow-md shadow-blue-500/20 active:bg-blue-700"
              >
                دانلود اپلیکیشن
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
