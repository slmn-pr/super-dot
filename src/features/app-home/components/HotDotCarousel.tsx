"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Flame, ChevronLeft, BadgeCheck, EyeIcon } from "lucide-react";
import Link from "next/link";

/**
 * Data contract for a single trending MyDot post.
 * `engagementLabel` is pre-formatted by the API/BFF (e.g. "12.4K تعامل")
 * so the client never has to own number-formatting logic.
 */
export interface HotDotPost {
  id: string;
  authorName: string;
  authorAvatarUrl: string;
  authorVerified?: boolean;
  contentSnippet: string;
  mediaThumbnailUrl?: string;
  engagementLabel: string;
  postUrl: string;
}

interface HotDotCarouselProps {
  posts: HotDotPost[];
  loading?: boolean;
}

export function HotDotCarousel({
  posts,
  loading = false,
}: HotDotCarouselProps) {
  // Secondary content: if there's nothing to show and we're not loading,
  // the section collapses entirely rather than rendering an empty state.
  if (!loading && posts.length === 0) return null;

  return (
    <section className="mt-5" role="region" aria-label="داغ‌ترین‌های مای‌دات">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Flame className="h-4 w-4 text-orange-500" aria-hidden="true" />
          <h2 className="text-lg font-bold text-gray-900">
            داغ‌ترین‌های مای‌دات
          </h2>
        </div>
        <Link
          href="https://mydot.one/"
          className="flex items-center gap-0.5 rounded-lg  py-1 text-xs font-medium text-blue-500 transition-colors active:bg-blue-50"
        >
          مشاهده همه
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div
        className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1 hide-scrollbar snap-x snap-mandatory"
        role="list"
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <HotDotCardSkeleton key={i} />
            ))
          : posts.map((post) => <HotDotCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}

function HotDotCard({ post }: { post: HotDotPost }) {
  return (
    <Card className="w-xs shrink-0 snap-start rounded-2xl border border-gray-200 bg-white text-right">
      <CardHeader className="flex items-center gap-2">
        <img
          src={post.authorAvatarUrl}
          alt=""
          className="h-7 w-7 shrink-0 rounded-full object-cover"
        />
        <div className="flex min-w-0 items-center gap-1">
          <span className="truncate text-[13px] font-medium text-gray-900">
            {post.authorName}
          </span>
          {post.authorVerified && (
            <BadgeCheck
              className="h-3.5 w-3.5 shrink-0 text-white fill-blue-500"
              aria-hidden="true"
            />
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="min-h-20">
          <p className="mt-2 line-clamp-5 text-sm leading-4 text-gray-700">
            {post.contentSnippet}
          </p>

          {post.mediaThumbnailUrl && (
            <img
              src={post.mediaThumbnailUrl}
              alt=""
              className="mt-2 h-24 w-full rounded object-cover"
            />
          )}
        </div>
      </CardContent>

      <CardFooter className="bg-background border-t-0">
        <div className="flex justify-between items-center w-full ">
          <div className="mt-2 flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <EyeIcon className="h-3 w-3" aria-hidden="true" />
            {post.engagementLabel}
          </div>

          <Link href="/" className="text-xs text-blue-500">
            رفتن به مای دات
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

function HotDotCardSkeleton() {
  return (
    <div
      className="w-[220px] shrink-0 animate-pulse rounded-2xl border border-gray-200 bg-white p-3"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-gray-200" />
        <div className="h-3 w-20 rounded bg-gray-200" />
      </div>
      <div className="mt-2 h-24 w-full rounded-lg bg-gray-200" />
      <div className="mt-2 h-3 w-full rounded bg-gray-200" />
      <div className="mt-1 h-3 w-2/3 rounded bg-gray-200" />
    </div>
  );
}
