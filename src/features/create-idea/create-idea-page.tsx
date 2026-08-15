"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRight,
  FileTextIcon,
  ImageIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react";
import Link from "next/link";
import { useMarketStore } from "@/features/nft-market/store/use-market-store";
import { Currency } from "@/features/nft-market/types/market";

export default function CreateIdeaPage() {
  const router = useRouter();
  const submitIdea = useMarketStore((s) => s.submitIdea);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState<Currency>("DOTO");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [documents, setDocuments] = useState<
    { name: string; sizeKb: number }[]
  >([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const docsInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleDocsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setDocuments((prev) => [
      ...prev,
      ...files.map((f) => ({
        name: f.name,
        sizeKb: Math.round(f.size / 1024),
      })),
    ]);
  };

  const removeDocument = (name: string) => {
    setDocuments((prev) => prev.filter((d) => d.name !== name));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!title.trim()) nextErrors.title = "عنوان ایده الزامی است.";
    if (!description.trim() || description.trim().length < 20)
      nextErrors.description = "توضیحات باید حداقل ۲۰ کاراکتر باشد.";
    const parsedPrice = parseFloat(price);
    if (Number.isNaN(parsedPrice) || parsedPrice <= 0)
      nextErrors.price = "قیمت معتبر وارد کنید.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const idea = submitIdea({
      title: title.trim(),
      description: description.trim(),
      imageUrl: imagePreview ?? "/banners/username_market.png",
      documents,
      price: parseFloat(price),
      currency,
    });

    setSubmitted(true);
    setTimeout(() => router.push("/market"), 1200);
    void idea;
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-lg font-bold">ثبت ایده جدید</h1>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        ایده‌ات رو به یک دارایی قابل معامله تبدیل کن. بعد از ثبت، ایده فوراً در
        بازار با قیمت ثابتی که تعیین می‌کنی قابل خرید خواهد بود.
      </p>

      {/* تصویر */}
      <Card className="rounded-2xl p-4">
        <Label className="mb-2 block text-sm font-semibold">تصویر ایده</Label>
        <button
          type="button"
          onClick={() => imageInputRef.current?.click()}
          className="flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-muted"
        >
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="پیش‌نمایش"
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <ImageIcon className="h-6 w-6" />
              <span className="text-xs">برای آپلود تصویر کلیک کنید</span>
            </div>
          )}
        </button>
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </Card>

      {/* اطلاعات اصلی */}
      <Card className="mt-4 rounded-2xl p-4">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="idea-title">عنوان ایده</Label>
            <Input
              id="idea-title"
              placeholder="مثلاً AI Resume Builder"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="idea-description">توضیحات ایده</Label>
            <Textarea
              id="idea-description"
              rows={5}
              placeholder="ایده‌ات رو با جزئیات توضیح بده: مشکل چیه، راه‌حل چیه، مخاطب کیه..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <p className="text-xs text-red-500">{errors.description}</p>
            )}
          </div>
        </div>
      </Card>

      {/* مستندات */}
      <Card className="mt-4 rounded-2xl p-4">
        <Label className="mb-2 block text-sm font-semibold">
          مستندات پشتیبان (اختیاری)
        </Label>
        <p className="mb-3 text-xs text-muted-foreground">
          فایل‌های pitch deck، wireframe یا تحقیق بازار که به خریدار کمک می‌کنه
          ایده رو بهتر بفهمه.
        </p>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => docsInputRef.current?.click()}
        >
          <UploadIcon className="ml-2 h-4 w-4" />
          افزودن فایل
        </Button>
        <input
          ref={docsInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleDocsChange}
        />

        {documents.length > 0 && (
          <div className="mt-3 space-y-2">
            {documents.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center justify-between rounded-lg bg-muted p-2 text-sm"
              >
                <div className="flex items-center gap-2">
                  <FileTextIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{doc.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {doc.sizeKb} KB
                  </span>
                </div>
                <button type="button" onClick={() => removeDocument(doc.name)}>
                  <Trash2Icon className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* قیمت‌گذاری */}
      <Card className="mt-4 rounded-2xl p-4">
        <Label className="mb-2 block text-sm font-semibold">قیمت‌گذاری</Label>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 space-y-1.5">
            <Input
              type="number"
              step="0.01"
              placeholder="مبلغ"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && (
              <p className="text-xs text-red-500">{errors.price}</p>
            )}
          </div>
          <Select
            value={currency}
            onValueChange={(v) => setCurrency(v as Currency)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DOTO">DOTO</SelectItem>
              <SelectItem value="IRR">ریال</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {submitted && (
        <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-center text-sm text-emerald-700">
          ایده با موفقیت ثبت و منتشر شد. در حال انتقال به بازار...
        </p>
      )}

      <Button
        className="mt-6 w-full"
        size="lg"
        onClick={handleSubmit}
        disabled={submitted}
      >
        ثبت و انتشار ایده
      </Button>
    </div>
  );
}
