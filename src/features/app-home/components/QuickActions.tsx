'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  SlidersHorizontal,
  Check,
} from 'lucide-react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cn } from '@/lib/utils'
import { QUICK_ACTIONS } from '../data'

const COMPACT_LIMIT = 7
const STORAGE_KEY = 'dotone:quick-actions-order'

type QuickAction = (typeof QUICK_ACTIONS)[number]

export function QuickActions() {
  const [expanded, setExpanded] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [orderIds, setOrderIds] = useState<string[]>(() =>
    QUICK_ACTIONS.map((a) => a.id)
  )
  const listId = useId()

  // بارگذاری چیدمان ذخیره‌شدهٔ کاربر بعد از mount (برای جلوگیری از hydration mismatch)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) return

      const savedIds: string[] = JSON.parse(saved)
      const validIds = savedIds.filter((id) =>
        QUICK_ACTIONS.some((a) => a.id === id)
      )
      // اکشن‌های جدیدی که در چیدمان ذخیره‌شده نبودن، انتهای لیست اضافه می‌شن
      const missingIds = QUICK_ACTIONS.map((a) => a.id).filter(
        (id) => !validIds.includes(id)
      )
      setOrderIds([...validIds, ...missingIds])
    } catch {
      // localStorage در دسترس نیست یا داده خرابه؛ ترتیب پیش‌فرض حفظ می‌شه
    }
  }, [])

  const orderedActions = useMemo(() => {
    const map = new Map(QUICK_ACTIONS.map((a) => [a.id, a]))
    return orderIds.map((id) => map.get(id)).filter(Boolean) as QuickAction[]
  }, [orderIds])

  const visibleActions =
    editMode || expanded ? orderedActions : orderedActions.slice(0, COMPACT_LIMIT)

  // فاصله/تاخیر فعال‌سازی drag تا با اسکرول/تپ تداخل نکنه (فقط داخل edit mode استفاده می‌شه)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 200, tolerance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return

    setOrderIds((prev) => {
      const oldIndex = prev.indexOf(String(active.id))
      const newIndex = prev.indexOf(String(over.id))
      const next = arrayMove(prev, oldIndex, newIndex)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // ذخیره‌سازی ناموفق بود؛ ترتیب فقط در همین session می‌مونه
      }
      return next
    })
  }

  function startEdit() {
    setEditMode(true)
    setExpanded(true)
  }

  function finishEdit() {
    setEditMode(false)
    setExpanded(false)
  }

  return (
    <section aria-labelledby="quick-actions-heading" className="mt-6 px-4">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2
            id="quick-actions-heading"
            className="text-lg font-bold tracking-tight"
          >
            دسترسی سریع
          </h2>
          {/* <p className="mt-1 text-xs text-muted-foreground">
            {editMode
              ? 'آیتم‌ها رو بکشید و چیدمان دلخواهتون رو بسازید'
              : 'سرویس‌های پرکاربرد دات‌وان'}
          </p> */}
        </div>

        <div className="flex items-center gap-3">
          {editMode ? (
            <button
              type="button"
              onClick={finishEdit}
              className="
                flex items-center gap-1 rounded-md px-2 py-1
                text-xs font-medium text-primary
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-primary focus-visible:ring-offset-2
              "
            >
              <Check size={15} aria-hidden="true" />
              تمام
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={startEdit}
                aria-label="شخصی‌سازی چیدمان دسترسی سریع"
                className="
                  rounded-md p-1 text-muted-foreground transition-colors
                  hover:text-primary
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-primary focus-visible:ring-offset-2
                "
              >
                <SlidersHorizontal size={16} aria-hidden="true" />
              </button>

              {QUICK_ACTIONS.length > COMPACT_LIMIT && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  aria-controls={listId}
                  className="
                    flex items-center gap-1 rounded-md px-1 py-1
                    text-xs font-medium text-primary
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-primary focus-visible:ring-offset-2
                  "
                >
                  {expanded ? 'بستن' : 'بیشتر'}
                  {expanded ? (
                    <ChevronUp size={15} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={15} aria-hidden="true" />
                  )}
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Slider - حالت فشرده، تک‌ردیف، فقط مرور (بدون drag) */}
      {!editMode && !expanded && (
        <div
          id={listId}
          className="
            flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2
            scrollbar-none
          "
        >
          {visibleActions.map((action) => (
            <QuickActionItem key={action.id} action={action} />
          ))}
        </div>
      )}

      {/* گرید کامل - حالت بازشده، فقط مرور (بدون drag) */}
      {!editMode && expanded && (
        <div
          id={listId}
          className="
            grid grid-cols-4 gap-x-2 gap-y-6
            duration-200 animate-in fade-in
          "
        >
          {visibleActions.map((action) => (
            <QuickActionItem key={action.id} action={action} />
          ))}
        </div>
      )}

      {/* حالت ویرایش - گرید کامل قابل‌درگ (موس + تاچ + کیبورد) */}
      {editMode && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={orderIds} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-4 gap-x-2 gap-y-6 duration-200 animate-in fade-in">
              {visibleActions.map((action) => (
                <SortableQuickActionItem key={action.id} action={action} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </section>
  )
}

/* ---------- آیتم عادی (فقط ناوبری) ---------- */

function QuickActionItem({ action }: { action: QuickAction }) {
  const Icon = action.icon

  return (
    <Link
      href={action.href}
      aria-label={action.isNew ? `${action.label} (جدید)` : action.label}
      className="
        group flex min-w-[68px] snap-start flex-col items-center
        rounded-2xl transition-transform active:scale-95
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
      "
    >
      <ActionIcon action={action} Icon={Icon} />
      <ActionLabel label={action.label} />
    </Link>
  )
}

/* ---------- آیتم قابل‌درگ (فقط داخل حالت ویرایش) ---------- */

function SortableQuickActionItem({ action }: { action: QuickAction }) {
  const Icon = action.icon
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: action.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'relative flex touch-none select-none flex-col items-center',
        isDragging && 'z-10 opacity-70'
      )}
      {...attributes}
      {...listeners}
    >
      <ActionIcon action={action} Icon={Icon} editMode />
      <ActionLabel label={action.label} />
      <span className="absolute -end-1.5 -top-1.5 rounded-full border border-border bg-background p-0.5 text-muted-foreground">
        <GripVertical size={11} aria-hidden="true" />
      </span>
    </div>
  )
}

/* ---------- زیرقطعه‌های مشترک ---------- */

function ActionIcon({
  action,
  Icon,
  editMode = false,
}: {
  action: QuickAction
  Icon: QuickAction['icon']
  editMode?: boolean
}) {
  return (
    <div
      className={cn(
        'relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card transition-colors',
        !editMode && 'group-hover:border-primary/30 group-hover:bg-primary/5',
        editMode && 'motion-safe:animate-wiggle'
      )}
    >
      <Icon
        size={22}
        strokeWidth={1.8}
        aria-hidden="true"
        className={cn(
          'text-muted-foreground transition-colors',
          !editMode && 'group-hover:text-primary'
        )}
      />

      {action.isNew && (
        <span
          aria-hidden="true"
          className="absolute end-1 top-1 h-2 w-2 rounded-full bg-primary"
        />
      )}
    </div>
  )
}

function ActionLabel({ label }: { label: string }) {
  return (
    <span
      className="
        mt-2 max-w-[68px] text-center text-[11px] font-medium
        leading-4 text-muted-foreground line-clamp-2
      "
    >
      {label}
    </span>
  )
}