import { TopBar } from './components/TopBar'
import  WalletCard  from './components/WalletCard'
import { QuickActions } from './components/QuickActions'
import { ServiceGrid } from './components/ServiceGrid'
import { PromoCarousel } from './components/PromoCarousel'
import { TransactionFeed } from './components/TransactionFeed'
import { HotDotCarousel } from './components/HotDotCarousel'
import { MOCK_HOT_DOT_POSTS } from './_mock'



export function AppHome() {
  return (
    /*
     * Mobile app shell:
     * - max-w-lg keeps it phone-width on desktop
     * - Full height with flex-col to push BottomNav to bottom
     * - overflow-hidden on outer shell, scrollable inner region
     */
    <div
      className="relative w-full max-w-md pt-5 bg-white"
      role="main"
      aria-label="صفحه اصلی دات وان"
    >
      {/* Status bar — fixed look */}
      {/* <StatusBar /> */}

      {/* Top navigation bar */}
      <TopBar userName="علی" notificationCount={3} />

      {/* Scrollable content area */}
      <div
        className="flex-1 overflow-y-auto hide-scrollbar pb-2"
        role="region"
        aria-label="محتوای اصلی"
      >
        {/* Wallet card */}
        <div className="mt-2">
          <WalletCard balance={12500000} goldGrams={3.2} pointsBalance={4750} />
        </div>

        {/* Quick action shortcuts */}
        <QuickActions />

        {/* Separator */}
        <div
          aria-hidden="true"
          className="mx-4 mt-5 h-px bg-border/40"
        />

        {/* App service grid */}
        <ServiceGrid />

        {/* Promotional offers carousel */}
        <PromoCarousel />

        {/*
         * Trending MyDot posts — placed after commercial promos, before
         * transactions, so the financial/promo hierarchy stays intact
         * while MyDot still gets consistent above-the-fold exposure.
         * Section self-hides when there are no posts (see component).
         */}
        <HotDotCarousel
          posts={MOCK_HOT_DOT_POSTS}
        />

        {/* Recent transactions */}
        {/* <TransactionFeed /> */}

        {/* Bottom breathing room */}
        <div aria-hidden="true" className="h-6" />
      </div>

    </div>
  )
}