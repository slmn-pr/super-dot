import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-vazirmatn',
})

export const metadata: Metadata = {
  title: 'دات وان | اکوسیستم یکپارچه خدمات دیجیتال',
  description:
    'دات وان اکوسیستمی هوشمند است که تمام خدمات روزمره شما را در یک تجربه سریع، امن و یکپارچه گرد هم آورده است.',
  keywords: ['دات وان', 'سوپر اپ', 'کیف پول', 'تریپ', 'شاپکس', 'پستکس', 'طلا', 'ایرلاینز'],
  authors: [{ name: 'DotOne' }],
  openGraph: {
    title: 'دات وان | اکوسیستم یکپارچه خدمات دیجیتال',
    description: 'همه خدمات دیجیتال در یک سوپر اپلیکیشن',
    locale: 'fa_IR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
