import Link from "next/link";
import { SERVICES } from "../../../features/landing/constants";
import Logo from "../../../features/landing/components/logo";
import { Send, Globe, ArrowUpLeft } from "lucide-react";

export default function Footer() {
  const serviceLinks = SERVICES.map((s) => ({
    label: s.fa ? `${s.name} (${s.fa})` : s.name,
    href: s.href || "#",
  }));

  const columns = [
    {
      title: "سرویس‌های سوپردات",
      links: serviceLinks,
    },
    {
      title: "شرکت",
      links: [
        { label: "درباره سوپردات", href: "/about" },
        { label: "فرصت‌های شغلی", href: "/careers" },
        { label: "وبلاگ و اخبار", href: "/blog" },
      ],
    },
    {
      title: "پشتیبانی",
      links: [
        { label: "مرکز راهنمایی", href: "/help" },
        { label: "تماس با ما", href: "/contact" },
        { label: "سوالات متداول", href: "/faq" },
      ],
    },
    {
      title: "قوانین و شفافیت",
      links: [
        { label: "حریم خصوصی", href: "/privacy" },
        { label: "قوانین و مقررات", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    // { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Telegram" },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Twitter, href: "#", label: "X / Twitter" },
  ];

  return (
    <footer className="border-t border-[#F4F4F5] bg-[#FFFFFF] py-16 dir-rtl text-[#09090B]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Top Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand Info Column */}
          <div className="space-y-4">
            <Logo />

            <p className="max-w-xs text-xs leading-7 text-[#09090B]/60 font-medium">
              سوپردات؛ اکوسیستمی جامع از سرویس‌های هوشمند دیجیتال (خرید، پرداخت،
              محتوا، سفر و لجستیک) در یک تجربه یکپارچه.
            </p>

            {/* Social Icons */}
            {/* <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#F4F4F5] bg-[#F4F4F5]/50 text-[#09090B]/60 transition-all hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* Links Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-[#09090B] uppercase tracking-wider">
                {col.title}
              </h4>

              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-xs text-[#09090B]/60 font-medium transition-colors hover:text-[#3B82F6]"
                    >
                      <span>{link.label}</span>
                      <ArrowUpLeft className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-[-2px]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright & Status Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#F4F4F5] pt-8 text-xs font-medium text-[#09090B]/50 sm:flex-row">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[#3B82F6]" />
            <span>
              © {new Date().getFullYear()} SuperDot. تمامی حقوق محفوظ است.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#09090B] transition-colors"
            >
              حریم خصوصی
            </Link>
            <span className="h-3 w-[1px] bg-[#F4F4F5]" />
            <Link
              href="/terms"
              className="hover:text-[#09090B] transition-colors"
            >
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
