"use client";

import Link from "next/link";
import { BadgePercent, ChevronLeft, Star } from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export interface ShopExProduct {
  id: string;
  name: string;
  imageUrl: string;

  price: number;
  originalPrice?: number;

  discountPercent?: number;

  rating?: number;
  reviewCount?: number;

  productUrl: string;
}

interface ShopExDealsCarouselProps {
  products: ShopExProduct[];
  loading?: boolean;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price);
};

export function ShopExDealsCarousel({
  products,
  loading = false,
}: ShopExDealsCarouselProps) {
  if (!loading && products.length === 0) return null;

  return (
    <section className="mt-6" role="region" aria-label="پیشنهادهای داغ شاپکس">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-50">
            <BadgePercent className="h-4 w-4 text-red-500" aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-[15px] font-bold text-gray-900">
              پیشنهادهای داغ شاپکس
            </h2>

            <p className="mt-0.5 text-[10px] text-gray-400">
              تخفیف‌های ویژه امروز
            </p>
          </div>
        </div>

        <Link
          href="https://shopex.ir/"
          className="flex shrink-0 items-center gap-0.5 rounded-lg px-1.5 py-1 text-[11px] font-medium text-blue-500 active:bg-blue-50"
        >
          مشاهده همه
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Products */}
      <div
        className="mt-3 flex gap-2.5 overflow-x-auto px-4 pb-1 hide-scrollbar snap-x snap-mandatory"
        role="list"
      >
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <ShopExProductSkeleton key={index} />
            ))
          : products.map((product) => (
              <ShopExProductCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
}

function ShopExProductCard({ product }: { product: ShopExProduct }) {
  const hasDiscount =
    !!product.originalPrice && product.originalPrice > product.price;

  return (
    <Link
      href={product.productUrl}
      className="block w-[210px] shrink-0 snap-start"
      role="listitem"
    >
      <Card className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white pt-0 transition-transform duration-200 active:scale-[0.985]">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="210px"
            className="object-contain  transition-transform duration-300 group-hover:scale-[1.03]"
          />

          {/* Discount Badge */}
          {product.discountPercent && product.discountPercent > 0 && (
            <div className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-lg bg-red-500 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
              <BadgePercent className="h-3 w-3" aria-hidden="true" />
              {product.discountPercent}٪
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-3">
          {/* Product Name */}
          <h3 className="line-clamp-2 min-h-[42px] text-right text-[13px] font-semibold leading-[21px] text-gray-900">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating !== undefined && (
            <div className="mt-2 flex items-center gap-1.5">
              <div className="flex items-center gap-1 rounded-md bg-amber-50 px-1.5 py-1">
                <Star
                  className="h-3 w-3 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-semibold text-amber-700">
                  {product.rating.toLocaleString("fa-IR")}
                </span>
              </div>

              {product.reviewCount !== undefined && (
                <span className="truncate text-[9px] text-gray-400">
                  {formatPrice(product.reviewCount)} نظر
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="mt-3">
            {/* Original Price */}
            {hasDiscount && (
              <div className="text-right text-[10px] text-gray-400 line-through">
                {formatPrice(product.originalPrice!)}
              </div>
            )}

            {/* Final Price */}
            <div className="mt-0.5 flex items-baseline justify-between gap-1">
              <span className="truncate text-[17px] font-bold tracking-tight text-gray-950">
                {formatPrice(product.price)}
              </span>

              <span className="shrink-0 text-[9px] text-gray-400">تومان</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function ShopExProductSkeleton() {
  return (
    <div
      className="w-[210px] shrink-0 animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white"
      aria-hidden="true"
    >
      <div className="aspect-square bg-gray-200" />

      <div className="p-3">
        <div className="h-4 w-full rounded-md bg-gray-200" />
        <div className="mt-2 h-4 w-3/4 rounded-md bg-gray-200" />

        <div className="mt-2.5 h-6 w-14 rounded-md bg-gray-200" />

        <div className="mt-3 h-3 w-20 rounded-md bg-gray-200" />
        <div className="mt-1.5 h-5 w-28 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
