"use client"

import { HotDotPost } from "../components/HotDotCarousel";

/**
 * Sample data covering the realistic variations the carousel needs to
 * handle visually. Field names match the HotDotPost contract already
 * agreed with engineering (see HotDotCarousel.tsx) — kept consistent
 * rather than renamed, so this drops in without touching the component.
 *
 * Variations covered on purpose:
 * 1. Verified author + image + high engagement (viral case)
 * 2. Unverified author, text-only, medium engagement
 * 3. Long content that needs 2-line truncation
 * 4. Very short, punchy content
 * 5. Verified author, image, but lower engagement (tests visual balance
 *    when engagement number is short vs. long author name)
 */
export const MOCK_HOT_DOT_POSTS: HotDotPost[] = [
  {
    id: 'post-1',
    authorName: 'سارا احمدی',
    authorAvatarUrl: 'https://i.pravatar.cc/64?img=47',
    authorVerified: true,
    contentSnippet: 'امروز یه تجربه‌ی متفاوت از کار با تیم دیزاین داشتم، واقعا انرژی‌بخش بود ⚡️',
    mediaThumbnailUrl: 'https://picsum.photos/seed/dot1/300/200',
    engagementLabel: '۱۲.۴ هزار تعامل',
    postUrl: 'mydot://post/post-1',
  },
  {
    id: 'post-2',
    authorName: 'رضا کریمی',
    authorAvatarUrl: 'https://i.pravatar.cc/64?img=12',
    authorVerified: false,
    contentSnippet: 'کسی تجربه استفاده از قابلیت جدید مای‌دات رو داشته؟ نظرتون چیه؟',
    engagementLabel: '۳.۲ هزار تعامل',
    postUrl: 'mydot://post/post-2',
  },
  {
    id: 'post-3',
    authorName: 'نیلوفر رستمی',
    authorAvatarUrl: 'https://i.pravatar.cc/64?img=32',
    authorVerified: false,
    contentSnippet:
      'یه نکته‌ی جالب درباره طراحی محصول: خیلی وقتا بهترین راه‌حل، ساده‌ترین راه‌حلیه که همه از کنارش رد می‌شن چون به نظر بدیهی میاد. تجربه چند سال اخیر من دقیقا همینو نشون داده.',
    engagementLabel: '۸۵۰ تعامل',
    postUrl: 'mydot://post/post-3',
  },
  {
    id: 'post-4',
    authorName: 'امیر توکلی',
    authorAvatarUrl: 'https://i.pravatar.cc/64?img=8',
    authorVerified: true,
    contentSnippet: 'صبح بخیر ☀️',
    engagementLabel: '۶.۱ هزار تعامل',
    postUrl: 'mydot://post/post-4',
  },
  {
    id: 'post-5',
    authorName: 'مریم حسینی‌فرد',
    authorAvatarUrl: 'https://i.pravatar.cc/64?img=25',
    authorVerified: true,
    contentSnippet: 'عکس‌های سفر آخر هفته‌مون به کویر 🐫',
    mediaThumbnailUrl: 'https://picsum.photos/seed/dot5/300/200',
    engagementLabel: '۴۴۰ تعامل',
    postUrl: 'mydot://post/post-5',
  },
]   