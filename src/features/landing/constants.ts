import {
  Wallet,
  ShoppingBag,
  Truck,
  Store,
  Plane,
  Gem,
  MapPin,
  Users,
  ShieldCheck,
  Zap,
  Layers,
  Fingerprint,
} from "lucide-react";

export const SERVICES = [
  {
    key: "wallet",
    name: "Wallet",
    fa: "کیف‌پول",
    desc: "پول رو نگه دار، جابه‌جا کن و پرداخت‌های سوپردات رو از یک‌جا مدیریت کن.",
    Icon: Wallet,
    featured: true,
  },
  {
    key: "shopex",
    name: "ShopEx",
    fa: "فروشگاه",
    desc: "از فروشگاه‌های متنوع خرید کن، بدون خروج از اپلیکیشن.",
    Icon: ShoppingBag,
  },
  {
    key: "postex",
    name: "PostEx",
    fa: "ارسال و لجستیک",
    desc: "مرسوله‌هاتو بفرست و مسیرشون رو لحظه‌به‌لحظه دنبال کن.",
    Icon: Truck,
  },
  {
    key: "sell",
    name: "Doto Sell",
    fa: "فروش و درآمد",
    desc: "محصولاتتو بفروش و از همون کیف‌پول درآمدتو بردار.",
    Icon: Store,
  },
  {
    key: "airlines",
    name: "Doto Airlines",
    fa: "بلیط پرواز",
    desc: "بلیط پرواز داخلی و خارجی رو در چند ثانیه رزرو کن.",
    Icon: Plane,
  },
  {
    key: "gold",
    name: "Doto Gold",
    fa: "خرید طلا",
    desc: "طلا بخر، نگه دار یا نقد کن؛ همیشه با قیمت لحظه‌ای.",
    Icon: Gem,
  },
  {
    key: "trip",
    name: "Doto Trip",
    fa: "سفر و گردشگری",
    desc: "هتل و تور سفرتو انتخاب کن و پرداخت رو یکجا انجام بده.",
    Icon: MapPin,
  },
  {
    key: "mydot",
    name: "MyDot",
    fa: "کریتورها و محتوا",
    desc: "محتوا بساز، دنبال کن و از اکوسیستم کریتورها درآمد کسب کن.",
    Icon: Users,
  },
];

export const VALUE_PROPS = [
  {
    title: "یک حساب، همه‌جا",
    desc: "یک‌بار وارد شو و به همه‌ی سرویس‌ها دسترسی داشته باش، بدون ثبت‌نام تکراری.",
    Icon: Fingerprint,
  },
  {
    title: "امنیت در هر تراکنش",
    desc: "پرداخت‌ها و اطلاعاتت با رمزنگاری استاندارد بانکی محافظت می‌شن.",
    Icon: ShieldCheck,
  },
  {
    title: "سرعت واقعی",
    desc: "بین سرویس‌ها جابه‌جا شو، بدون بارگذاری اضافه یا خروج از اپ.",
    Icon: Zap,
  },
  {
    title: "یک تجربه، همه‌ی سرویس‌ها",
    desc: "طراحی یکدست یعنی هر سرویس جدید رو از همون روز اول بلدی.",
    Icon: Layers,
  },
];

export const STEPS = [
  {
    n: "۱",
    title: "حساب بساز",
    desc: "با شماره موبایلت در کمتر از یک دقیقه ثبت‌نام کن.",
  },
  {
    n: "۲",
    title: "سرویس‌ها رو فعال کن",
    desc: "هر سرویسی که لازم داری رو به پروفایلت اضافه کن.",
  },
  {
    n: "۳",
    title: "یکپارچه استفاده کن",
    desc: "بین کیف‌پول، خرید، سفر و بقیه‌ی سرویس‌ها بدون خروج جابه‌جا شو.",
  },
];
