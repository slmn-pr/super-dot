import { CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { CreateIdeaFormValues } from "../schema";

export default function CreateIdeaSubmit() {
  const {
    formState: { isSubmitting },
  } = useFormContext<CreateIdeaFormValues>();

  return (
    <div className="mt-1">
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-xl text-sm font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2Icon className="ml-2 h-4 w-4 animate-spin" />
            در حال انتشار...
          </>
        ) : (
          "ثبت و انتشار ایده"
        )}
      </Button>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        با انتشار، ایده شما در بازار MyDot قابل مشاهده و خرید خواهد بود.
      </p>
    </div>
  );
}
