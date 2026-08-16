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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50">
            <BadgePercent className="h-4 w-4 text-red-500" aria-hidden="true" />
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900">
              پیشنهادهای داغ شاپکس
            </h2>

            <p className="mt-0.5 text-[11px] text-gray-400">
              تخفیف‌های ویژه امروز
            </p>
          </div>
        </div>

        <Link
          href="https://shopex.ir/"
          className="flex items-center gap-0.5 rounded-lg px-2 py-1 text-xs font-medium text-blue-500 transition-colors active:bg-blue-50"
        >
          مشاهده همه
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Products */}
      <div
        className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2 hide-scrollbar snap-x snap-mandatory"
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
      className="block w-[240px] shrink-0 snap-start"
      role="listitem"
    >
      <Card className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-200 active:scale-[0.985] pt-0">
        {/* Product Image */}
        <div className="relative aspect-[1.05/1] overflow-hidden bg-gray-50">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="240px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />

          {/* Discount */}
          {product.discountPercent && product.discountPercent > 0 && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-xl bg-red-500 px-2.5 py-1.5 text-[11px] font-bold text-white shadow-sm">
              <BadgePercent className="h-3.5 w-3.5" aria-hidden="true" />
              {product.discountPercent}٪
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4">
          {/* Product name */}
          <h3 className="min-h-[48px] text-right text-[14px] font-semibold leading-6 text-gray-900">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating !== undefined && (
            <div className="mt-2.5 flex items-center gap-1.5">
              <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-1.5 py-1">
                <Star
                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />

                <span className="text-[11px] font-semibold text-amber-700">
                  {product.rating.toLocaleString("fa-IR")}
                </span>
              </div>

              {product.reviewCount !== undefined && (
                <span className="text-[10px] text-gray-400">
                  {formatPrice(product.reviewCount)} نظر
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="mt-4">
            {hasDiscount && (
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400 line-through">
                  {formatPrice(product.originalPrice!)}
                </span>

                {product.discountPercent && product.discountPercent > 0 && (
                  <span className="rounded-md bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold text-red-500">
                    {product.discountPercent}٪
                  </span>
                )}
              </div>
            )}

            <div className="mt-1 flex items-end justify-between gap-2">
              <div className="min-w-0">
                <div className="truncate text-[19px] font-bold tracking-tight text-gray-950">
                  {formatPrice(product.price)}
                </div>
              </div>

              <span className="shrink-0 pb-0.5 text-[11px] text-gray-400">
                تومان
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
            <span className="text-[11px] font-medium text-gray-400">
              خرید از شاپکس
            </span>

            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-50 transition-colors group-active:bg-blue-50">
              <ChevronLeft
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
              />
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
      className="w-[240px] shrink-0 animate-pulse overflow-hidden rounded-3xl border border-gray-200 bg-white"
      aria-hidden="true"
    >
      <div className="aspect-[1.05/1] bg-gray-200" />

      <div className="p-4">
        <div className="h-4 w-full rounded-lg bg-gray-200" />
        <div className="mt-2 h-4 w-4/5 rounded-lg bg-gray-200" />

        <div className="mt-3 h-7 w-14 rounded-lg bg-gray-200" />

        <div className="mt-4 h-3 w-24 rounded-lg bg-gray-200" />
        <div className="mt-2 h-6 w-32 rounded-lg bg-gray-200" />

        <div className="mt-4 border-t border-gray-100 pt-3">
          <div className="h-8 w-full rounded-xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
