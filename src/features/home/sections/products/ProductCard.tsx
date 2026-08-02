import { ArrowLeft } from 'lucide-react'
import type { Product } from '@/shared/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon

  return (
    <article
      className="group relative flex flex-col gap-4 p-6 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 cursor-pointer hover:scale-[1.02]"
      aria-label={product.title}
    >
      {/* Icon */}
      <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center group-hover:bg-black transition-colors duration-200">
        <Icon
          size={18}
          className="text-zinc-700 group-hover:text-white transition-colors duration-200"
          aria-hidden="true"
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-right">
        <h3 className="text-sm font-semibold text-foreground mb-1">{product.title}</h3>
        <p className="text-xs text-zinc-500 leading-relaxed">{product.description}</p>
      </div>

      {/* Arrow */}
      <div className="flex justify-start">
        <ArrowLeft
          size={14}
          className="text-zinc-300 group-hover:text-blue-500 group-hover:-translate-x-0.5 transition-all duration-200"
          aria-hidden="true"
        />
      </div>
    </article>
  )
}
