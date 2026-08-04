export type Amenity =
  | 'wifi'
  | 'parking'
  | 'pool'
  | 'restaurant'
  | 'gym'
  | 'spa'
  | 'breakfast'
  | 'ac'

export type RoomType = {
  id: string
  name: string
  capacity: number
  bed: string
  pricePerNight: number
  oldPrice?: number
  refundable: boolean
  breakfast: boolean
  left: number
}

export type Review = {
  id: string
  name: string
  initials: string
  rating: number
  date: string
  text: string
}

export type Hotel = {
  id: string
  name: string
  city: string
  area: string
  stars: number
  rating: number
  reviewsCount: number
  pricePerNight: number
  oldPrice?: number
  discount?: number
  image: string
  gallery: string[]
  amenities: Amenity[]
  availability: 'available' | 'few' | 'soldout'
  freeCancellation: boolean
  description: string
  rooms: RoomType[]
  reviews: Review[]
  policies: { title: string; value: string }[]
}

export const amenityLabels: Record<Amenity, string> = {
  wifi: 'اینترنت رایگان',
  parking: 'پارکینگ',
  pool: 'استخر',
  restaurant: 'رستوران',
  gym: 'باشگاه ورزشی',
  spa: 'اسپا و سونا',
  breakfast: 'صبحانه',
  ac: 'تهویه مطبوع',
}

const gallery = [
  '/hotels/espinas-tehran.png',
  '/hotels/darvishi-mashhad.png',
  '/hotels/chamran-shiraz.png',
  '/hotels/room-suite.png',
  '/hotels/spa-pool.png',
  '/hotels/dariush-kish.png',
]

const baseReviews: Review[] = [
  {
    id: 'r1',
    name: 'سارا محمدی',
    initials: 'سم',
    rating: 5,
    date: '۲ هفته پیش',
    text: 'اقامت فوق‌العاده‌ای داشتیم. برخورد پرسنل عالی بود و صبحانه تنوع خوبی داشت. حتماً دوباره انتخاب می‌کنیم.',
  },
  {
    id: 'r2',
    name: 'امیر رضایی',
    initials: 'ار',
    rating: 4,
    date: '۱ ماه پیش',
    text: 'موقعیت مکانی هتل عالی و دسترسی به مراکز خرید راحت بود. اتاق‌ها تمیز و مرتب بودند.',
  },
  {
    id: 'r3',
    name: 'نگار کریمی',
    initials: 'نک',
    rating: 5,
    date: '۱ ماه پیش',
    text: 'یکی از بهترین تجربه‌های اقامت من در این شهر بود. امکانات رفاهی کامل و قیمت منصفانه.',
  },
]

const policies = [
  { title: 'ساعت ورود', value: 'از ساعت ۱۴:۰۰' },
  { title: 'ساعت خروج', value: 'تا ساعت ۱۲:۰۰' },
  { title: 'کنسلی', value: 'لغو رایگان تا ۴۸ ساعت قبل از ورود' },
  { title: 'کودکان', value: 'اقامت کودکان زیر ۶ سال رایگان است' },
]

function makeRooms(base: number): RoomType[] {
  return [
    {
      id: 'standard',
      name: 'اتاق دو تخته استاندارد',
      capacity: 2,
      bed: 'یک تخت دو نفره',
      pricePerNight: base,
      oldPrice: Math.round(base * 1.18),
      refundable: true,
      breakfast: true,
      left: 3,
    },
    {
      id: 'deluxe',
      name: 'اتاق دلوکس رو به شهر',
      capacity: 2,
      bed: 'یک تخت کینگ',
      pricePerNight: Math.round(base * 1.35),
      refundable: true,
      breakfast: true,
      left: 5,
    },
    {
      id: 'suite',
      name: 'سوئیت رویال',
      capacity: 4,
      bed: 'دو تخت دو نفره',
      pricePerNight: Math.round(base * 1.9),
      oldPrice: Math.round(base * 2.2),
      refundable: false,
      breakfast: true,
      left: 2,
    },
  ]
}

export const hotels: Hotel[] = [
  {
    id: 'espinas-tehran',
    name: 'هتل اسپیناس پالاس',
    city: 'تهران',
    area: 'سعادت‌آباد',
    stars: 5,
    rating: 9.2,
    reviewsCount: 1240,
    pricePerNight: 4800000,
    oldPrice: 5900000,
    discount: 18,
    image: '/hotels/espinas-tehran.png',
    gallery,
    amenities: ['wifi', 'parking', 'pool', 'restaurant', 'gym', 'spa', 'breakfast', 'ac'],
    availability: 'available',
    freeCancellation: true,
    description:
      'هتل پنج ستاره اسپیناس پالاس با معماری مدرن و امکانات لوکس، یکی از بهترین گزینه‌های اقامتی در شمال تهران است. این هتل با دسترسی آسان به مراکز تجاری و تفریحی، تجربه‌ای متفاوت از اقامت را برای شما رقم می‌زند.',
    rooms: makeRooms(4800000),
    reviews: baseReviews,
    policies,
  },
  {
    id: 'abbasi-isfahan',
    name: 'هتل عباسی اصفهان',
    city: 'اصفهان',
    area: 'چهارباغ',
    stars: 5,
    rating: 9.5,
    reviewsCount: 2110,
    pricePerNight: 3600000,
    oldPrice: 4200000,
    discount: 14,
    image: '/hotels/abbasi-isfahan.png',
    gallery,
    amenities: ['wifi', 'parking', 'restaurant', 'breakfast', 'spa', 'ac'],
    availability: 'few',
    freeCancellation: true,
    description:
      'هتل عباسی اصفهان با باغ تاریخی و معماری اصیل ایرانی، قدیمی‌ترین هتل جهان لقب گرفته است. اقامت در این هتل سفری به دل تاریخ و هنر ایران‌زمین است.',
    rooms: makeRooms(3600000),
    reviews: baseReviews,
    policies,
  },
  {
    id: 'darvishi-mashhad',
    name: 'هتل درویشی مشهد',
    city: 'مشهد',
    area: 'حرم مطهر',
    stars: 5,
    rating: 9.0,
    reviewsCount: 1860,
    pricePerNight: 2900000,
    image: '/hotels/darvishi-mashhad.png',
    gallery,
    amenities: ['wifi', 'parking', 'pool', 'restaurant', 'gym', 'breakfast', 'ac'],
    availability: 'available',
    freeCancellation: false,
    description:
      'هتل درویشی با نزدیکی به حرم مطهر امام رضا (ع) و امکانات کامل رفاهی، انتخابی ایده‌آل برای زائران و گردشگران است.',
    rooms: makeRooms(2900000),
    reviews: baseReviews,
    policies,
  },
  {
    id: 'dariush-kish',
    name: 'هتل داریوش کیش',
    city: 'کیش',
    area: 'ساحل مرجان',
    stars: 5,
    rating: 9.3,
    reviewsCount: 980,
    pricePerNight: 5200000,
    oldPrice: 6500000,
    discount: 20,
    image: '/hotels/dariush-kish.png',
    gallery,
    amenities: ['wifi', 'parking', 'pool', 'restaurant', 'gym', 'spa', 'breakfast', 'ac'],
    availability: 'few',
    freeCancellation: true,
    description:
      'هتل داریوش کیش با معماری الهام‌گرفته از تخت جمشید و دسترسی مستقیم به ساحل، تجربه‌ای لوکس و به‌یادماندنی از اقامت در جزیره کیش ارائه می‌دهد.',
    rooms: makeRooms(5200000),
    reviews: baseReviews,
    policies,
  },
  {
    id: 'chamran-shiraz',
    name: 'هتل بزرگ شیراز',
    city: 'شیراز',
    area: 'چمران',
    stars: 4,
    rating: 8.7,
    reviewsCount: 1430,
    pricePerNight: 2400000,
    oldPrice: 2800000,
    discount: 14,
    image: '/hotels/chamran-shiraz.png',
    gallery,
    amenities: ['wifi', 'parking', 'restaurant', 'breakfast', 'ac'],
    availability: 'available',
    freeCancellation: true,
    description:
      'هتل بزرگ شیراز بر فراز تپه‌های چمران، با چشم‌اندازی پانوراما از شهر شیراز، اقامتی آرام و د��پذیر را برای شما فراهم می‌کند.',
    rooms: makeRooms(2400000),
    reviews: baseReviews,
    policies,
  },
  {
    id: 'pars-tabriz',
    name: 'هتل پارس ائل‌گلی تبریز',
    city: 'تبریز',
    area: 'ائل‌گلی',
    stars: 5,
    rating: 8.9,
    reviewsCount: 760,
    pricePerNight: 3100000,
    image: '/hotels/pars-tabriz.png',
    gallery,
    amenities: ['wifi', 'parking', 'pool', 'restaurant', 'gym', 'breakfast', 'ac'],
    availability: 'available',
    freeCancellation: true,
    description:
      'هتل پارس ائل‌گلی با موقعیت مکانی بی‌نظیر در کنار پارک ائل‌گلی تبریز، امکانات رفاهی کامل و چشم‌اندازی زیبا را به مهمانان خود ارائه می‌دهد.',
    rooms: makeRooms(3100000),
    reviews: baseReviews,
    policies,
  },
]

export function getHotel(id: string): Hotel | undefined {
  return hotels.find((h) => h.id === id)
}

export const getHotelById = getHotel

export type StoredBooking = {
  ref: string
  hotelId: string
  hotelName: string
  city: string
  area: string
  image: string
  roomName: string
  guestName: string
  checkIn: string
  checkOut: string
  nights: number
  guests: string
  total: number
  pay: 'wallet' | 'card'
  status: 'upcoming' | 'completed' | 'cancelled'
  createdAt: number
}

const BOOKINGS_KEY = 'mydot.bookings'

export function getBookings(): StoredBooking[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) ?? '[]')
  } catch {
    return []
  }
}

export function saveBooking(booking: StoredBooking) {
  if (typeof window === 'undefined') return
  const all = getBookings()
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify([booking, ...all]))
}

export function getBooking(ref: string): StoredBooking | undefined {
  return getBookings().find((b) => b.ref === ref)
}

export const popularDestinations = [
  { city: 'تهران', count: 320, image: '/hotels/espinas-tehran.png' },
  { city: 'اصفهان', count: 210, image: '/hotels/abbasi-isfahan.png' },
  { city: 'مشهد', count: 410, image: '/hotels/darvishi-mashhad.png' },
  { city: 'کیش', count: 180, image: '/hotels/dariush-kish.png' },
  { city: 'شیراز', count: 260, image: '/hotels/chamran-shiraz.png' },
  { city: 'تبریز', count: 140, image: '/hotels/pars-tabriz.png' },
]

export const recentSearches = [
  { city: 'تهران', dates: '۲۵ تا ۲۷ مهر', guests: '۲ مهمان' },
  { city: 'کیش', dates: '۱ تا ۴ آبان', guests: '۲ مهمان، ۱ اتاق' },
  { city: 'مشهد', dates: '۱۲ تا ۱۵ آبان', guests: '۴ مهمان، ۲ اتاق' },
]

export function formatToman(value: number): string {
  return value.toLocaleString('fa-IR')
}
