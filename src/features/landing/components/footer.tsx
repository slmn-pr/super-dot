import { SERVICES } from "../constants";
import Logo, { Dot } from "./logo";

export default function Footer() {
  const columns = [
    {
      title: "سرویس‌ها",
      links: SERVICES.map((s) => s.name),
    },
    {
      title: "شرکت",
      links: ["درباره ما", "فرصت‌های شغلی", "وبلاگ"],
    },
    {
      title: "پشتیبانی",
      links: ["مرکز راهنمایی", "تماس با ما"],
    },
    {
      title: "قوانین",
      links: ["حریم خصوصی", "قوانین و مقررات"],
    },
  ];

  return (
    <footer className="bg-white py-14">
      <div className="mx-auto max-w-lg px-5 md:max-w-6xl md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
              سوپردات؛ اکوسیستمی از سرویس‌های دیجیتال دوتو، در یک اپلیکیشن
              یکپارچه.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-black">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-black"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-400 md:flex-row">
          <span>
            © {new Date().getFullYear()} سوپردات. تمامی حقوق محفوظ است.
          </span>
        </div>
      </div>
    </footer>
  );
}
