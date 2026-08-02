import {
  Car,
  ShoppingBag,
  Package,
  Wallet,
  Coins,
  Plane,
  Store,
  Cpu,
  Bell,
  ChevronLeft,
} from 'lucide-react'

const APP_SHORTCUTS = [
  { id: 'mydot', label: 'مای دات', icon: Cpu, bg: 'bg-black' },
  { id: 'trip', label: 'تریپ', icon: Car, bg: 'bg-blue-500' },
  { id: 'shopex', label: 'شاپکس', icon: ShoppingBag, bg: 'bg-zinc-800' },
  { id: 'wallet', label: 'کیف پول', icon: Wallet, bg: 'bg-zinc-700' },
  { id: 'gold', label: 'طلا', icon: Coins, bg: 'bg-zinc-600' },
  { id: 'airlines', label: 'ایرلاینز', icon: Plane, bg: 'bg-zinc-900' },
  { id: 'sell', label: 'دات وان سل', icon: Store, bg: 'bg-zinc-800' },
  { id: 'postex', label: 'پستکس', icon: Package, bg: 'bg-blue-600' },
]

export function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-[260px] sm:w-[280px] select-none"
    >
      {/* Phone Shell */}
      <div className="relative bg-zinc-900 rounded-[2.5rem] p-[3px] shadow-xl">
        {/* Side buttons */}
        <div className="absolute -right-[3px] top-20 w-[3px] h-8 bg-zinc-700 rounded-r-sm" />
        <div className="absolute -right-[3px] top-32 w-[3px] h-8 bg-zinc-700 rounded-r-sm" />
        <div className="absolute -left-[3px] top-24 w-[3px] h-14 bg-zinc-700 rounded-l-sm" />

        {/* Screen */}
        <div className="bg-white rounded-[2.4rem] overflow-hidden" dir="rtl">
          {/* Status Bar */}
          <div className="bg-zinc-900 px-6 pt-3 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 rounded-sm border border-zinc-400 relative">
                <div className="absolute inset-0.5 bg-zinc-400 rounded-sm" style={{ right: 0, width: '70%' }} />
              </div>
              <div className="w-0.5 h-1 bg-zinc-400 rounded-full ml-0.5" />
            </div>
            {/* Dynamic Island */}
            <div className="w-16 h-4 bg-black rounded-full" />
            <div className="flex items-center gap-1">
              <span className="text-zinc-300 text-[10px] font-medium">۹:۴۱</span>
            </div>
          </div>

          {/* App Content */}
          <div className="bg-zinc-50 min-h-[460px] pb-6">
            {/* App Header */}
            <div className="bg-black px-4 pt-3 pb-5">
              <div className="flex items-center justify-between mb-3">
                <button className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                  <Bell size={12} className="text-white" />
                </button>
                <div className="flex items-center gap-1.5">
                  <span className="text-white text-xs font-semibold">دات وان</span>
                  <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">D1</span>
                  </div>
                </div>
              </div>

              {/* Wallet Card */}
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <p className="text-white/60 text-[9px] mb-1">موجودی کیف پول</p>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-white text-lg font-bold">۱۲,۵۰۰,۰۰۰</span>
                    <span className="text-white/60 text-[9px] mr-1">تومان</span>
                  </div>
                  <button className="flex items-center gap-0.5 bg-blue-500 rounded-lg px-2 py-1">
                    <span className="text-white text-[9px]">شارژ</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="bg-black px-3 pb-3 -mt-0.5">
              <div className="bg-white rounded-xl p-2 flex items-center justify-around shadow-sm">
                {[
                  { label: 'پرداخت', icon: Wallet },
                  { label: 'انتقال', icon: ChevronLeft },
                  { label: 'تاریخچه', icon: ChevronLeft },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-7 h-7 bg-zinc-100 rounded-lg flex items-center justify-center">
                      <action.icon size={12} className="text-zinc-700" />
                    </div>
                    <span className="text-[8px] text-zinc-600">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="px-3 mt-3">
              <p className="text-[9px] font-semibold text-zinc-500 mb-2 px-1">سرویس‌ها</p>
              <div className="grid grid-cols-4 gap-2">
                {APP_SHORTCUTS.map((app) => (
                  <button
                    key={app.id}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className={`w-10 h-10 ${app.bg} rounded-xl flex items-center justify-center`}>
                      <app.icon size={16} className="text-white" />
                    </div>
                    <span className="text-[8px] text-zinc-600 text-center leading-tight">{app.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="px-3 mt-4">
              <p className="text-[9px] font-semibold text-zinc-500 mb-2 px-1">آخرین تراکنش‌ها</p>
              <div className="bg-white rounded-xl divide-y divide-zinc-100 shadow-sm">
                {[
                  { title: 'تریپ - سفر شهری', amount: '-۴۵,۰۰۰', type: 'debit' },
                  { title: 'شاپکس - خرید', amount: '-۲۳۰,۰۰۰', type: 'debit' },
                  { title: 'شارژ کیف پول', amount: '+۵۰۰,۰۰۰', type: 'credit' },
                ].map((tx) => (
                  <div key={tx.title} className="flex items-center justify-between px-2.5 py-1.5">
                    <span
                      className={`text-[9px] font-medium ${
                        tx.type === 'credit' ? 'text-emerald-600' : 'text-zinc-800'
                      }`}
                    >
                      {tx.amount}
                    </span>
                    <span className="text-[9px] text-zinc-500">{tx.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="bg-zinc-50 flex justify-center pb-2 pt-1">
            <div className="w-20 h-1 bg-zinc-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
