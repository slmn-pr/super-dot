import Link from 'next/link'
import { X, Globe, Send, Rss } from 'lucide-react'
import { NAV_ITEMS } from '@/shared/constants'

const SOCIAL_LINKS = [
  { label: 'ایکس (توییتر)', href: '#', icon: X },
  { label: 'وبسایت', href: '#', icon: Globe },
  { label: 'تلگرام', href: '#', icon: Send },
  { label: 'فید', href: '#', icon: Rss },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" aria-label="صفحه اصلی دات وان" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">D1</span>
              </div>
              <span className="font-bold text-base tracking-tight text-foreground">دات وان</span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              اکوسیستم یکپارچه خدمات دیجیتال ایران
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="لینک‌های سریع">
            <h2 className="text-sm font-semibold text-foreground mb-4">لینک‌های سریع</h2>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-foreground transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div>
            <h2 className="text-sm font-semibold text-foreground mb-4">شبکه‌های اجتماعی</h2>
            <ul className="flex items-center gap-3" role="list">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:text-foreground hover:border-zinc-400 transition-all duration-150"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <social.icon size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-400">
            &copy; {currentYear} دات وان. تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors">
              حریم خصوصی
            </Link>
            <Link href="#" className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
