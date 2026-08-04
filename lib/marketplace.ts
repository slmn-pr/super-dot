export type Category = {
  id: string
  label: string
}

export type Seller = {
  id: string
  name: string
  handle: string
  avatar?: string
  verified?: boolean
  rating: number
  productsSold: number
  followers: number
}

export type Product = {
  id: string
  title: string
  description: string
  price: number
  oldPrice?: number
  images: string[]
  category: string
  city: string
  condition: 'new' | 'used'
  stock: number
  rating: number
  reviewsCount: number
  soldCount: number
  seller: Seller
  pinned?: boolean
  featured?: boolean
  createdAt: number
}

export const categories: Category[] = [
  { id: 'fashion', label: 'مد و پوشاک' },
  { id: 'tech', label: 'دیجیتال و فناوری' },
  { id: 'home', label: 'خانه و آشپزخانه' },
  { id: 'beauty', label: 'زیبایی و سلامت' },
  { id: 'handmade', label: 'صنایع دستی' },
  { id: 'sport', label: 'ورزش و سفر' },
]

export const categoryLabels: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.id, c.label]),
)

const sellers: Record<string, Seller> = {
  mahsa: {
    id: 'mahsa',
    name: 'مهسا کریمی',
    handle: '@mahsak',
    verified: false,
    rating: 4.6,
    productsSold: 38,
    followers: 1240,
  },
  aramstudio: {
    id: 'sa',
    name: 'استودیو آرام',
    handle: '@aramstudio',
    verified: false,
    rating: 4.8,
    productsSold: 212,
    followers: 5600,
  },
  techtoday: {
    id: 'tech',
    name: 'فناوری امروز',
    handle: '@TechToday',
    verified: true,
    rating: 4.9,
    productsSold: 940,
    followers: 38500,
  },
  persiangulf: {
    id: 'pg',
    name: 'Persian Gulf',
    handle: '@persiangulf',
    verified: true,
    rating: 4.7,
    productsSold: 156,
    followers: 12100,
  },
}

export const products: Product[] = [
  {
    id: 'pr1',
    title: 'کیف چرم دست‌دوز طبیعی',
    description:
      'کیف دستی از چرم طبیعی گاوی، دوخت کاملاً دست‌ساز با پارچه آستر داخلی مرغوب. مناسب استفاده روزمره.',
    price: 1850000,
    oldPrice: 2300000,
    images: ['/placeholder.svg'],
    category: 'fashion',
    city: 'تهران',
    condition: 'new',
    stock: 6,
    rating: 4.8,
    reviewsCount: 24,
    soldCount: 61,
    seller: sellers.aramstudio,
    featured: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 5,
  },
  {
    id: 'pr2',
    title: 'هدفون بی‌سیم نویزکنسلینگ',
    description: 'هدفون بی‌سیم با حذف نویز فعال، ۳۰ ساعت پخش پیوسته و شارژ سریع.',
    price: 3200000,
    images: ['/placeholder.svg'],
    category: 'tech',
    city: 'تهران',
    condition: 'new',
    stock: 14,
    rating: 4.6,
    reviewsCount: 88,
    soldCount: 340,
    seller: sellers.techtoday,
    featured: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 9,
  },
  {
    id: 'pr3',
    title: 'گلیم دست‌بافت سنتی',
    description: 'گلیم دست‌بافت با نقوش سنتی، بافت ۱۰۰٪ پشم، ابعاد ۲ در ۳ متر.',
    price: 4600000,
    oldPrice: 5200000,
    images: ['/placeholder.svg'],
    category: 'handmade',
    city: 'اصفهان',
    condition: 'new',
    stock: 2,
    rating: 4.9,
    reviewsCount: 11,
    soldCount: 19,
    seller: sellers.mahsa,
    pinned: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
  },
  {
    id: 'pr4',
    title: 'ساعت مچی هوشمند نسل ۵',
    description: 'ردیابی سلامت، ضربان قلب، اکسیژن خون و مقاومت در برابر آب تا ۵۰ متر.',
    price: 5400000,
    images: ['/placeholder.svg'],
    category: 'tech',
    city: 'مشهد',
    condition: 'new',
    stock: 9,
    rating: 4.5,
    reviewsCount: 53,
    soldCount: 210,
    seller: sellers.techtoday,
    createdAt: Date.now() - 1000 * 60 * 60 * 30,
  },
  {
    id: 'pr5',
    title: 'سرویس آشپزخانه سرامیکی ۱۲ پارچه',
    description: 'سرویس کامل سرامیکی ضد حرارت، مناسب فر و مایکروویو.',
    price: 2750000,
    oldPrice: 3100000,
    images: ['/placeholder.svg'],
    category: 'home',
    city: 'شیراز',
    condition: 'new',
    stock: 5,
    rating: 4.4,
    reviewsCount: 17,
    soldCount: 44,
    seller: sellers.persiangulf,
    createdAt: Date.now() - 1000 * 60 * 60 * 48,
  },
  {
    id: 'pr6',
    title: 'کرم مرطوب‌کننده گیاهی',
    description: 'فرمول طبیعی با عصاره آلوئه‌ورا، مناسب پوست‌های حساس.',
    price: 480000,
    images: ['/placeholder.svg'],
    category: 'beauty',
    city: 'تهران',
    condition: 'new',
    stock: 40,
    rating: 4.3,
    reviewsCount: 132,
    soldCount: 890,
    seller: sellers.mahsa,
    createdAt: Date.now() - 1000 * 60 * 60 * 60,
  },
  {
    id: 'pr7',
    title: 'کوله‌پشتی کوهنوردی ۴۵ لیتری',
    description: 'ضدآب، با قاب پشتی تهویه‌دار و چندین جیب جانبی، مناسب سفرهای چندروزه.',
    price: 2150000,
    images: ['/placeholder.svg'],
    category: 'sport',
    city: 'تبریز',
    condition: 'new',
    stock: 11,
    rating: 4.7,
    reviewsCount: 29,
    soldCount: 76,
    seller: sellers.persiangulf,
    createdAt: Date.now() - 1000 * 60 * 60 * 72,
  },
  {
    id: 'pr8',
    title: 'دوربین دیجیتال دست دوم',
    description: 'دوربین در حد نو، همراه با لنز استاندارد و کیف حمل اورجینال.',
    price: 6800000,
    oldPrice: 8200000,
    images: ['/placeholder.svg'],
    category: 'tech',
    city: 'کیش',
    condition: 'used',
    stock: 1,
    rating: 4.2,
    reviewsCount: 6,
    soldCount: 6,
    seller: sellers.mahsa,
    createdAt: Date.now() - 1000 * 60 * 60 * 96,
  },
]

export function getProduct(id: string): Product | undefined {
  return [...getMyProducts(), ...products].find((p) => p.id === id)
}

export function getProductsByCategory(categoryId: string | null): Product[] {
  const all = [...getMyProducts(), ...products]
  if (!categoryId) return all
  return all.filter((p) => p.category === categoryId)
}

export function getProductsBySeller(sellerId: string): Product[] {
  return [...getMyProducts(), ...products].filter((p) => p.seller.id === sellerId)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getTrendingProducts(): Product[] {
  return [...products].sort((a, b) => b.soldCount - a.soldCount).slice(0, 6)
}

const MY_PRODUCTS_KEY = 'mydot.myProducts'

export function getMyProducts(): Product[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(MY_PRODUCTS_KEY) ?? '[]')
  } catch {
    return []
  }
}

export function saveMyProduct(product: Product) {
  if (typeof window === 'undefined') return
  const all = getMyProducts()
  localStorage.setItem(MY_PRODUCTS_KEY, JSON.stringify([product, ...all]))
}

export type StoredOrder = {
  id: string
  productId: string
  productTitle: string
  productImage: string
  sellerName: string
  price: number
  qty: number
  total: number
  buyerName: string
  pay: 'wallet' | 'card'
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: number
}

const ORDERS_KEY = 'mydot.orders'

export function getOrders(): StoredOrder[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) ?? '[]')
  } catch {
    return []
  }
}

export function saveOrder(order: StoredOrder) {
  if (typeof window === 'undefined') return
  const all = getOrders()
  localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...all]))
}

export function getOrder(id: string): StoredOrder | undefined {
  return getOrders().find((o) => o.id === id)
}
