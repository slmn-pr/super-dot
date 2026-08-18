"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/shared/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // تشخیص وضعیت اسکرول صفحه
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // قفل کردن اسکرول صفحه هنگام باز بودن منوی موبایل
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="ناوبری اصلی"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* راست: لوگو و برند */}
        <Link
          href="/landing"
          aria-label="صفحه اصلی دات وان"
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <span className="text-white text-xs font-black tracking-wider">
              D1
            </span>
          </div>
          <span className="font-bold text-base tracking-tight text-foreground group-hover:text-zinc-700 transition-colors">
            دات وان
          </span>
        </Link>

        {/* وسط: لینک‌های ناوبری (دسکتاپ) */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-black font-semibold bg-zinc-100"
                      : "text-zinc-600 hover:text-black hover:bg-zinc-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* چپ: دکمه‌های ورود / ثبت‌نام (دسکتاپ) */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="#login"
            className="px-4 py-2 text-sm font-medium text-foreground border border-zinc-200/80 rounded-xl hover:bg-zinc-100/80 active:scale-95 transition-all duration-150"
          >
            ورود
          </Link>
          <Link
            href="#start"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-xl hover:bg-zinc-800 active:scale-95 shadow-sm transition-all duration-150"
          >
            شروع کنید
          </Link>
        </div>

        {/* دکمه منوی همبرگری (موبایل) */}
        <button
          aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded-xl text-zinc-600 hover:text-foreground hover:bg-zinc-100 active:scale-95 transition-all"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* منوی موبایل به همراه انیمیشن نرم */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="منوی موبایل"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-4 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-1 mb-5" role="list">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3.5 py-2.5 text-base font-medium rounded-xl transition-colors ${
                        isActive
                          ? "text-black bg-zinc-100 font-semibold"
                          : "text-zinc-600 hover:text-black hover:bg-zinc-50"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-zinc-100">
              <Link
                href="#login"
                className="w-full text-center px-4 py-2.5 text-sm font-medium text-foreground border border-zinc-200 rounded-xl hover:bg-zinc-50 active:scale-[0.98] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                ورود
              </Link>
              <Link
                href="#start"
                className="w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-black rounded-xl hover:bg-zinc-800 active:scale-[0.98] shadow-sm transition-all"
                onClick={() => setMobileOpen(false)}
              >
                شروع کنید
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
