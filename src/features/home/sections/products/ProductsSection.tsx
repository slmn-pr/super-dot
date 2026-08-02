import { PRODUCTS } from '@/shared/constants'
import { ProductCard } from './ProductCard'

export function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-right mb-16">
          <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-3">
            محصولات
          </p>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-4"
          >
            سرویس‌های دات وان
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-lg leading-relaxed">
            هر سرویس به تنهایی قوی، همه در کنار هم بی‌نظیر.
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          role="list"
          aria-label="فهرست سرویس‌های دات وان"
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard product={product} />
            </div>
          ))}

          {/* MyDot Featured Card */}
          <article
            className="sm:col-span-2 lg:col-span-1 xl:col-span-1 group relative flex flex-col gap-4 p-6 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-600 hover:shadow-sm transition-all duration-200 cursor-pointer hover:scale-[1.02]"
            aria-label="مای دات — هسته اصلی اکوسیستم"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <div className="text-white text-xs font-bold">D1</div>
            </div>
            <div className="flex-1 text-right">
              <h3 className="text-sm font-semibold text-white mb-1">مای دات</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                هسته اصلی اکوسیستم — مدیریت پروفایل، امنیت و دسترسی‌ها
              </p>
            </div>
            <div className="flex justify-start">
              <span className="text-xs text-blue-400 font-medium">هسته اصلی</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
