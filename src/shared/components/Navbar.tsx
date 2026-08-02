'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/shared/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-zinc-200' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="ناوبری اصلی"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Right side: Logo */}
        <Link href="/" aria-label="صفحه اصلی دات وان" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">D1</span>
          </div>
          <span className="font-bold text-base tracking-tight text-foreground">دات وان</span>
        </Link>

        {/* Center: Nav Links (desktop) */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-1.5 text-sm text-zinc-600 hover:text-foreground rounded-lg transition-colors duration-150 hover:bg-zinc-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Left side: CTA Buttons (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#login"
            className="px-4 py-1.5 text-sm font-medium text-foreground border border-zinc-300 rounded-xl hover:bg-zinc-50 transition-colors duration-150"
          >
            ورود
          </Link>
          <Link
            href="#start"
            className="px-4 py-1.5 text-sm font-medium text-white bg-black rounded-xl hover:bg-zinc-800 transition-colors duration-150"
          >
            شروع کنید
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          aria-label={mobileOpen ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-foreground hover:bg-zinc-50 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="منوی موبایل"
          className="md:hidden bg-white border-b border-zinc-200 px-4 pb-4"
        >
          <ul className="flex flex-col gap-1 mb-4" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm text-zinc-600 hover:text-foreground rounded-lg hover:bg-zinc-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <Link
              href="#login"
              className="w-full text-center px-4 py-2 text-sm font-medium text-foreground border border-zinc-300 rounded-xl hover:bg-zinc-50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              ورود
            </Link>
            <Link
              href="#start"
              className="w-full text-center px-4 py-2 text-sm font-medium text-white bg-black rounded-xl hover:bg-zinc-800 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              شروع کنید
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
