'use client'

import { useState } from 'react'
import { CheckCircle2, Star } from 'lucide-react'
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
  BottomSheetClose,
} from '@/components/ui/bottom-sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { formatAmount } from '@/lib/format-number'
import { STAR_PACKAGES } from './mock-data'
import type { StarPackage } from './types'

interface BuyStarsSheetProps {
  children: React.ReactNode
  onPurchase: (pkg: StarPackage) => void
}

type Step = 'select' | 'confirm' | 'success'

export function BuyStarsSheet({ children, onPurchase }: BuyStarsSheetProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>('select')
  const [selected, setSelected] = useState<StarPackage | null>(null)
  const [loading, setLoading] = useState(false)

  function handleOpen(o: boolean) {
    setOpen(o)
    if (!o) {
      setTimeout(() => {
        setStep('select')
        setSelected(null)
        setLoading(false)
      }, 300)
    }
  }

  function handleContinue() {
    if (!selected) return
    setStep('confirm')
  }

  async function handlePay() {
    if (!selected) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    onPurchase(selected)
    setStep('success')
  }

  return (
    <BottomSheet open={open} onOpenChange={handleOpen}>
      <BottomSheetTrigger render={<button />}>{children}</BottomSheetTrigger>

      <BottomSheetContent>
        {step === 'select' && (
          <>
            <BottomSheetHeader>
              <BottomSheetTitle>خرید ستاره</BottomSheetTitle>
              <BottomSheetDescription>یک بسته انتخاب کنید</BottomSheetDescription>
            </BottomSheetHeader>

            <div className="flex flex-col gap-3 overflow-y-auto px-5 py-2">
              {STAR_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelected(pkg)}
                  className={cn(
                    'relative flex items-center justify-between rounded-2xl border-2 px-4 py-3.5 text-start transition-all',
                    selected?.id === pkg.id
                      ? 'border-brand bg-brand-muted'
                      : 'border-border bg-card hover:border-brand/40',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                      <Star className="size-5 fill-yellow-500 stroke-yellow-500" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground">
                        {formatAmount(pkg.stars)} ستاره
                      </p>
                      {pkg.bonus && (
                        <p className="text-xs text-brand">
                          + {formatAmount(pkg.bonus)} ستاره هدیه
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-semibold text-foreground">
                      {formatAmount(pkg.price)} تومان
                    </span>
                    {pkg.popular && (
                      <Badge variant="default" className="text-[10px] px-1.5 py-0">
                        پرطرفدار
                      </Badge>
                    )}
                  </div>
                  {selected?.id === pkg.id && (
                    <CheckCircle2 className="absolute top-3 left-3 size-4 text-brand" />
                  )}
                </button>
              ))}
            </div>

            <BottomSheetFooter>
              <Button
                className="w-full"
                disabled={!selected}
                onClick={handleContinue}
              >
                ادامه
              </Button>
            </BottomSheetFooter>
          </>
        )}

        {step === 'confirm' && selected && (
          <>
            <BottomSheetHeader>
              <BottomSheetTitle>تأیید خرید</BottomSheetTitle>
              <BottomSheetDescription>جزئیات خرید خود را بررسی کنید</BottomSheetDescription>
            </BottomSheetHeader>

            <div className="px-5 py-4">
              <div className="flex flex-col gap-3 rounded-2xl bg-muted/50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">بسته انتخابی</span>
                  <span className="font-semibold">
                    {formatAmount(selected.stars + (selected.bonus ?? 0))} ستاره
                  </span>
                </div>
                {selected.bonus && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">هدیه</span>
                    <span className="text-sm text-brand">+{formatAmount(selected.bonus)} ستاره</span>
                  </div>
                )}
                <div className="h-px bg-border" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">مبلغ قابل پرداخت</span>
                  <span className="text-lg font-bold text-foreground">
                    {formatAmount(selected.price)} تومان
                  </span>
                </div>
              </div>
            </div>

            <BottomSheetFooter>
              <Button className="w-full" onClick={handlePay} disabled={loading}>
                {loading ? 'در حال پردازش...' : 'پرداخت'}
              </Button>
              <Button variant="ghost" className="w-full" onClick={() => setStep('select')}>
                بازگشت
              </Button>
            </BottomSheetFooter>
          </>
        )}

        {step === 'success' && selected && (
          <>
            <BottomSheetHeader>
              <BottomSheetTitle className="sr-only">خرید موفق</BottomSheetTitle>
            </BottomSheetHeader>

            <div className="flex flex-col items-center gap-4 px-5 py-10 text-center">
              <span className="flex size-20 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 animate-in zoom-in-50 duration-300">
                <Star className="size-10 fill-yellow-500 stroke-yellow-500" />
              </span>
              <div>
                <p className="text-xl font-bold text-foreground">خرید موفق!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formatAmount(selected.stars + (selected.bonus ?? 0))} ستاره به کیف پول شما اضافه شد
                </p>
              </div>
            </div>

            <BottomSheetFooter>
              <BottomSheetClose render={<Button className="w-full" />}>
                بستن
              </BottomSheetClose>
            </BottomSheetFooter>
          </>
        )}
      </BottomSheetContent>
    </BottomSheet>
  )
}
