import { WHY_CARDS } from '@/shared/constants'

export function WhyDotOneSection() {
  return (
    <section
      id="features"
      aria-labelledby="why-heading"
      className="py-24 sm:py-32 bg-white border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-right mb-16">
          <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-3">
            چرا دات وان
          </p>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4"
          >
            یک تجربه، همه چیز
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-lg leading-relaxed">
            دات وان تمام آنچه به آن نیاز دارید را در یک بستر یکپارچه فراهم می‌کند.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="دلایل انتخاب دات وان"
        >
          {WHY_CARDS.map((card, index) => {
            const Icon = card.icon
            return (
              <article
                key={card.id}
                role="listitem"
                className="flex flex-col gap-5 p-6 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 text-right"
                aria-label={card.title}
              >
                {/* Index + Icon row */}
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-bold text-zinc-100 select-none tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-zinc-700" aria-hidden="true" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{card.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
