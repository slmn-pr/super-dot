import {
  Camera,
  LucideIcon,
  Mic,
  Plane,
  ShoppingBag,
  TrendingUp,
  PenLine,
  FileText,
  ImageIcon,
  Code2,
  GraduationCap,
  BarChart3,
  Music2,
} from "lucide-react";

export interface Suggestion {
  icon: LucideIcon;
  label: string;
  prompt: string;
}

export const PLACEHOLDERS = [
  "از من هر چیزی بپرس...",
  "امروز چه کاری انجام دهم؟",
  "برایم یک سفر برنامه‌ریزی کن.",
  "برای من یک برنامه ورزشی بنویس.",
];

export const MODELS = [
  { id: "auto", label: "Auto", icon: "✨" },
  { id: "gpt-5.5", label: "GPT-5.5", icon: "🌀" },
  { id: "claude", label: "Claude", icon: "◈" },
  { id: "gemini", label: "Gemini", icon: "✦" },
];

export const SUGGESTIONS: Suggestion[] = [
  {
    icon: Plane,
    label: "برنامه سفر",
    prompt: "برایم یک برنامه سفر سه‌روزه پیشنهاد بده.",
  },
  {
    icon: ShoppingBag,
    label: "پیشنهاد خرید",
    prompt: "برای هدیه تولد دوستم چی بخرم؟",
  },
  {
    icon: TrendingUp,
    label: "تحلیل بازار",
    prompt: "وضعیت بازار امروز رو خلاصه کن.",
  },
  {
    icon: PenLine,
    label: "نوشتن متن",
    prompt: "یک متن تبلیغاتی کوتاه برایم بنویس.",
  },
  {
    icon: FileText,
    label: "خلاصه کردن فایل",
    prompt: "این فایل رو برایم خلاصه کن.",
  },
  {
    icon: ImageIcon,
    label: "تولید تصویر",
    prompt: "یک تصویر مینیمال از یک شهر آینده‌نگر بساز.",
  },
  {
    icon: Code2,
    label: "کمک برنامه‌نویسی",
    prompt: "در این باگ کد به من کمک کن.",
  },
  {
    icon: GraduationCap,
    label: "یادگیری",
    prompt: "مفهوم یادگیری ماشین رو ساده توضیح بده.",
  },
  {
    icon: BarChart3,
    label: "تحلیل داده",
    prompt: "این دیتاست رو برایم تحلیل کن.",
  },
  {
    icon: Music2,
    label: "پیشنهاد موسیقی",
    prompt: "چند تا آهنگ آروم برای کار پیشنهاد بده.",
  },
];
export const ATTACHMENT_ACTIONS = [
  { id: "image", label: "بارگذاری تصویر", icon: ImageIcon },
  { id: "file", label: "بارگذاری فایل", icon: FileText },
  { id: "camera", label: "دوربین", icon: Camera },
  { id: "voice", label: "ورودی صوتی", icon: Mic },
];
