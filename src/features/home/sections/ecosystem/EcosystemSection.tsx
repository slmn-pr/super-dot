import { EcosystemVisualization } from './EcosystemVisualization'

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="py-24 sm:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-right mb-16">
          <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-3">
            اکوسیستم
          </p>
          <h2
            id="ecosystem-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4"
          >
            اکوسیستم دات وان
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-lg leading-relaxed">
            همه چیز، با یک حساب کاربری
          </p>
        </div>

        {/* Visualization + Description */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Visualization */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <EcosystemVisualization />
          </div>

          {/* Descriptive text */}
          <div className="flex-1 max-w-lg text-right lg:text-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-snug">
              مای دات، <br />
              <span className="text-blue-500">هسته اصلی اکوسیستم</span>
            </h3>
            <p className="text-zinc-500 leading-relaxed mb-8">
              در اکوسیستم دات وان، تمام سرویس‌ها حول مای دات شکل گرفته‌اند. با یک بار ورود به مای دات، به تمام سرویس‌های تریپ، شاپکس، پستکس، کیف پول، طلا، ایرلاینز و دات وان سل دسترسی دارید، بدون نیاز به لاگین مجدد.
            </p>

            {/* Connections list */}
            <ul className="flex flex-col gap-3" role="list">
              {[
                'یک حساب، دسترسی به تمام سرویس‌ها',
                'کیف پول مشترک برای همه پرداخت‌ها',
                'پروفایل یکپارچه در سراسر اکوسیستم',
                'تاریخچه کامل فعالیت‌ها در یک جا',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                  />
                  <span className="text-sm text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
