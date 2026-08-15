import { z } from "zod";

export const createIdeaSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "عنوان ایده الزامی است.")
    .max(100, "عنوان ایده نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد."),

  description: z
    .string()
    .trim()
    .min(20, "توضیحات باید حداقل ۲۰ کاراکتر باشد.")
    .max(5000, "توضیحات نمی‌تواند بیشتر از ۵۰۰۰ کاراکتر باشد."),

  price: z
    .string()
    .min(1, "قیمت را وارد کنید.")
    .refine((value) => {
      const price = Number(value);
      return Number.isFinite(price) && price > 0;
    }, "قیمت معتبر وارد کنید."),

  currency: z.enum(["DOTO", "IRR"]),

  image: z
    .instanceof(File, {
      message: "تصویر معتبر انتخاب کنید.",
    })
    .nullable(),

  documents: z.array(z.instanceof(File)),
});

export type CreateIdeaFormValues = z.infer<typeof createIdeaSchema>;
