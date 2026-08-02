import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'دات وان',
  description: 'اکوسیستم یکپارچه خدمات دیجیتال',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark flex items-center justify-center min-h-screen bg-zinc-950">
      {children}
    </div>
  )
}
