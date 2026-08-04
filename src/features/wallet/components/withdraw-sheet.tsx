'use client'

import { CreditCard, Clock } from 'lucide-react'
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
  BottomSheetClose,
} from '@/components/ui/bottom-sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface WithdrawSheetProps {
  children: React.ReactNode
}

export function WithdrawSheet({ children }: WithdrawSheetProps) {
  return (
    <BottomSheet>
      <BottomSheetTrigger render={<button />}>{children}</BottomSheetTrigger>

      <BottomSheetContent showCloseButton={false}>
        <BottomSheetHeader>
          <div className="flex items-center gap-2">
            <BottomSheetTitle>برداشت موجودی</BottomSheetTitle>
            <Badge variant="secondary" className="text-xs">به زودی</Badge>
          </div>
        </BottomSheetHeader>

        <div className="flex flex-col items-center gap-5 px-5 py-8 text-center">
          <span className="flex size-20 items-center justify-center rounded-full bg-muted">
            <CreditCard className="size-9 text-muted-foreground" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-foreground">برداشت به کارت بانکی</p>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              به زودی می‌توانید موجودی DOTO خود را به کارت بانکی تأییدشده‌تان برداشت کنید.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            در دست توسعه است
          </div>
        </div>

        <BottomSheetFooter>
          <BottomSheetClose render={<Button variant="outline" className="w-full" />}>
            بستن
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  )
}
