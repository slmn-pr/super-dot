export type Author = {
  id: string;
  name: string;
  handle: string;
  avatar?: string;
  verified?: boolean;
  bot?: boolean;
};

export type ReplyPolicy = "everyone" | "following" | "mentioned";

export type ProductAttachment = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export type Post = {
  id: string;
  author: Author;
  timeAgo: string;
  text: string;
  hashtags: string[];
  images?: string[];
  product?: ProductAttachment;
  replyPolicy: ReplyPolicy;
  stats: {
    comments: number;
    shares: number;
    likes: number;
    views: number;
    donatedStars: number;
  };
  audience: "everyone" | "following";
  boosted?: boolean;
  comments?: any[];
  redotChain?: any;
};

export type TrendingTopic = {
  id: string;
  tag: string;
  postsCount: number;
  category: string;
};

export type SuggestedUser = {
  id: string;
  name: string;
  handle: string;
  avatar?: string;
  verified?: boolean;
  bio: string;
};

export type LiveEvent = {
  id: string;
  title: string;
  host: string;
  avatar?: string;
  live: boolean;
};

export const currentUser: Author = {
  id: "me",
  name: "سلیمان‌پور",
  handle: "@slmnpr",
  verified: false,
};

export const replyPolicyLabels: Record<ReplyPolicy, string> = {
  everyone: "همه می‌توانند پاسخ دهند",
  following: "فقط دنبال‌شوندگان می‌توانند پاسخ دهند",
  mentioned: "فقط کاربران ذکرشده می‌توانند پاسخ دهند",
};

export const posts: Post[] = [
  {
    id: "p1",
    author: {
      id: "jang",
      name: "خبر جنگ | اخبار فوری",
      handle: "@Jang",
      verified: true,
      bot: true,
    },
    timeAgo: "۲ ساعت پیش",
    text: "چه کسی توانایی مقابله با چنین طوفانی دارد؟ 🔥",
    hashtags: ["#اخبار", "#خبر", "#جنگ", "#ایران", "#آمریکا"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    replyPolicy: "everyone",
    stats: {
      comments: 482,
      shares: 219,
      likes: 5240,
      views: 84300,
      donatedStars: 1240,
    },
    audience: "everyone",
  },
  {
    id: "p2",
    author: {
      id: "tech",
      name: "فناوری امروز",
      handle: "@TechToday",
      verified: true,
    },
    timeAgo: "۴ ساعت پیش",
    text: "نسل جدید پردازنده‌های موبایل با مصرف انرژی پایین‌تر و عملکرد ۴۰٪ بهتر معرفی شد. به نظرتون این تغییر چقدر روی قیمت گوشی‌های آینده تاثیر می‌گذاره؟",
    hashtags: ["#تکنولوژی", "#موبایل"],
    replyPolicy: "everyone",
    stats: {
      comments: 96,
      shares: 41,
      likes: 1180,
      views: 22100,
      donatedStars: 345,
    },
    audience: "everyone",
  },
  {
    id: "p3",
    author: {
      id: "mahsa",
      name: "مهسا کریمی",
      handle: "@mahsak",
      verified: false,
    },
    timeAgo: "۶ ساعت پیش",
    text: "امروز بعد از مدت‌ها دوباره سفر رفتم، یه چیزی که همیشه فراموش می‌کنم چقدر آدم رو سرحال می‌کنه 🌿",
    hashtags: ["#سفر", "#طبیعت"],
    images: ["/hotels/dariush-kish.png"],
    replyPolicy: "following",
    stats: {
      comments: 18,
      shares: 3,
      likes: 264,
      views: 3400,
      donatedStars: 80,
    },
    audience: "following",
  },
  {
    id: "p4",
    author: {
      id: "football",
      name: "فوتبال برتر",
      handle: "@TopFootball",
      verified: true,
    },
    timeAgo: "۸ ساعت پیش",
    text: "ترکیب احتمالی تیم ملی برای بازی هفته آینده مشخص شد. نظر شما درباره این چیدمان چیه؟",
    hashtags: ["#فوتبال", "#تیم_ملی"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    replyPolicy: "everyone",
    stats: {
      comments: 312,
      shares: 88,
      likes: 3920,
      views: 51200,
      donatedStars: 720,
    },
    audience: "everyone",
  },
  {
    id: "p5",
    author: {
      id: "sa",
      name: "استودیو آرام",
      handle: "@aramstudio",
      verified: false,
    },
    timeAgo: "۱۰ ساعت پیش",
    text: "کیف چرم دست‌دوز جدیدمون رو رونمایی کردیم 🤎 محدود و فقط چند تا تو انبار داریم!",
    hashtags: ["#صنایع_دستی", "#کیف_چرم"],
    product: {
      id: "pr1",
      title: "کیف چرم دست‌دوز طبیعی",
      price: 1850000,
      image: "/placeholder.svg",
    },
    replyPolicy: "everyone",
    stats: {
      comments: 27,
      shares: 9,
      likes: 410,
      views: 6200,
      donatedStars: 150,
    },
    audience: "everyone",
  },
  {
    id: "p6",
    author: {
      id: "tech",
      name: "فناوری امروز",
      handle: "@TechToday",
      verified: true,
    },
    timeAgo: "۱۲ ساعت پیش",
    text: "هدفون جدیدمون با حذف نویز فعال موجود شد، برای پیش‌خرید عجله کنید چون موجودی محدوده 🎧",
    hashtags: ["#تکنولوژی", "#هدفون"],
    product: {
      id: "pr2",
      title: "هدفون بی‌سیم نویزکنسلینگ",
      price: 3200000,
      image: "/placeholder.svg",
    },
    replyPolicy: "everyone",
    stats: {
      comments: 64,
      shares: 22,
      likes: 980,
      views: 15400,
      donatedStars: 245,
    },
    audience: "everyone",
  },
];

export const trendingTopics: TrendingTopic[] = [
  { id: "t1", tag: "#خبر", postsCount: 128000, category: "اخبار · پرطرفدار" },
  { id: "t2", tag: "#ایران", postsCount: 96400, category: "اخبار · پرطرفدار" },
  { id: "t3", tag: "#اخبار", postsCount: 74200, category: "اخبار" },
  { id: "t4", tag: "#جنگ", postsCount: 51800, category: "سیاست · داغ" },
  { id: "t5", tag: "#فوتبال", postsCount: 38500, category: "ورزش" },
  { id: "t6", tag: "#تکنولوژی", postsCount: 21300, category: "تکنولوژی" },
];

export const suggestedUsers: SuggestedUser[] = [
  {
    id: "pg",
    name: "Persian Gulf",
    handle: "@persiangulf",
    verified: true,
    bio: "اخبار و تحلیل خلیج فارس",
  },
  {
    id: "sa",
    name: "استودیو آرام",
    handle: "@aramstudio",
    verified: false,
    bio: "طراحی و تجربه کاربری",
  },
  {
    id: "mb",
    name: "مای‌بات",
    handle: "@mybot",
    verified: true,
    bio: "دستیار هوشمند مای‌دات",
  },
];

export const liveEvents: LiveEvent[] = [
  { id: "e1", title: "گفتگوی زنده اقتصاد", host: "مای‌دات تاک", live: true },
  { id: "e2", title: "بررسی هفتگی فوتبال", host: "فوتبال برتر", live: true },
  { id: "e3", title: "پرسش و پاسخ فناوری", host: "فناوری امروز", live: false },
  { id: "e4", title: "دورهمی سفر", host: "مهسا کریمی", live: false },
];

export function formatCount(value: number) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toLocaleString("fa-IR", { maximumFractionDigits: 1 })} میلیون`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toLocaleString("fa-IR", { maximumFractionDigits: 1 })} هزار`;
  }
  return value.toLocaleString("fa-IR");
}
