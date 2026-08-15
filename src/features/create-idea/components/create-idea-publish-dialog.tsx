"use client";

import {
  CheckCircle2Icon,
  CircleIcon,
  Loader2Icon,
  SparklesIcon,
  WandSparklesIcon,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface CreateIdeaPublishDialogProps {
  open: boolean;
  status: "processing" | "success";
}

const steps = [
  {
    id: "details",
    label: "ثبت اطلاعات",
    description: "اطلاعات ایده ثبت شد",
  },
  {
    id: "mint",
    label: "ساخت NFT",
    description: "در حال تبدیل ایده به NFT",
  },
  {
    id: "publish",
    label: "انتشار در بازار",
    description: "قرارگیری در بازار MyDot",
  },
];

export default function CreateIdeaPublishDialog({
  open,
  status,
}: CreateIdeaPublishDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent
        className="
          w-[calc(100%-32px)]
          max-w-md
          overflow-hidden
          rounded-3xl
          border-border/60
          p-0
          shadow-2xl
        "
        showCloseButton={false}
      >
        {status === "processing" ? <ProcessingState /> : <SuccessState />}
      </DialogContent>
    </Dialog>
  );
}

function ProcessingState() {
  const currentStep = 1;
  const progress = 66;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-2xl bg-blue-500/10" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
            <WandSparklesIcon className="h-7 w-7 text-blue-500" />
          </div>
        </div>

        <DialogTitle className="mt-5 text-base font-bold">
          در حال ساخت NFT
        </DialogTitle>

        <DialogDescription className="mt-2 max-w-xs text-xs leading-5">
          ایده شما در حال تبدیل شدن به یک دارایی دیجیتال قابل معامله است.
        </DialogDescription>
      </div>

      {/* Progress */}
      <div className="mt-7">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">پیشرفت ساخت</span>

          <span className="text-[11px] font-semibold text-blue-500">
            {progress}٪
          </span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="
              h-full rounded-full
              bg-blue-500
              transition-all duration-700
            "
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="mt-7">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <ProcessingStep
              key={step.id}
              label={step.label}
              description={step.description}
              active={active}
              completed={completed}
              isLast={index === steps.length - 1}
            />
          );
        })}
      </div>

      {/* Bottom note */}
      <div className="mt-6 flex items-center gap-2 rounded-2xl bg-muted/50 px-4 py-3">
        <SparklesIcon className="h-4 w-4 shrink-0 text-blue-500" />

        <p className="text-[10px] leading-5 text-muted-foreground">
          لطفاً تا پایان فرآیند این صفحه را نبندید.
        </p>
      </div>
    </div>
  );
}

function ProcessingStep({
  label,
  description,
  active = false,
  completed = false,
  isLast = false,
}: {
  label: string;
  description: string;
  active?: boolean;
  completed?: boolean;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-3">
      {/* Connector */}
      {!isLast && (
        <div
          className={`
            absolute right-[13px] top-7 h-[calc(100%-8px)] w-px
            ${completed ? "bg-emerald-500/30" : "bg-border"}
          `}
        />
      )}

      {/* Icon */}
      <div
        className={`
          relative z-10 flex h-7 w-7 shrink-0 items-center
          justify-center rounded-full transition-all duration-300
          ${
            completed
              ? "bg-emerald-500/10 text-emerald-500"
              : active
                ? "bg-blue-500/10 text-blue-500 ring-4 ring-blue-500/5"
                : "bg-muted text-muted-foreground"
          }
        `}
      >
        {completed ? (
          <CheckCircle2Icon className="h-4 w-4" />
        ) : active ? (
          <Loader2Icon className="h-4 w-4 animate-spin" />
        ) : (
          <CircleIcon className="h-3.5 w-3.5" />
        )}
      </div>

      {/* Content */}
      <div className="pb-6">
        <p
          className={`
            text-xs
            ${
              active || completed
                ? "font-semibold text-foreground"
                : "font-medium text-muted-foreground"
            }
          `}
        >
          {label}
        </p>

        <p
          className={`
            mt-1 text-[10px]
            ${active ? "text-blue-500" : "text-muted-foreground"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center text-center">
        {/* Success icon */}
        <div className="relative">
          <div className="absolute inset-0 scale-125 rounded-full bg-emerald-500/5" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2Icon className="h-10 w-10 text-emerald-500" />
          </div>
        </div>

        <DialogTitle className="mt-6 text-base font-bold">
          NFT با موفقیت ساخته شد
        </DialogTitle>

        <DialogDescription className="mt-2 max-w-xs text-xs leading-5">
          ایده شما با موفقیت به یک دارایی دیجیتال تبدیل شد و آماده خرید در بازار
          MyDot است.
        </DialogDescription>

        {/* Success details */}
        <div className="mt-6 w-full rounded-2xl border bg-muted/20 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
              <SparklesIcon className="h-5 w-5 text-blue-500" />
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold">آماده انتشار</p>

              <p className="mt-1 text-[10px] text-muted-foreground">
                NFT شما در بازار MyDot قرار گرفت.
              </p>
            </div>

            <CheckCircle2Icon className="mr-auto h-4 w-4 text-emerald-500" />
          </div>
        </div>

        {/* Redirect */}
        <div className="mt-5 flex items-center gap-2 text-[10px] text-muted-foreground">
          <Loader2Icon className="h-3.5 w-3.5 animate-spin" />

          <span>در حال انتقال به بازار...</span>
        </div>
      </div>
    </div>
  );
}
