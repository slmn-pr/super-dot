"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMarketStore } from "@/features/nft-market/store/use-market-store";

import { createIdeaSchema, CreateIdeaFormValues } from "./schema";
import { CREATE_IDEA_DEFAULT_VALUES } from "./default-values";

import CreateIdeaHeader from "./components/create-idea-header";
import IdeaDetailsSection from "./components/idea-details-section";
import IdeaImageUpload from "./components/idea-image-upload";
import IdeaDocumentsUpload from "./components/idea-documents-upload";
import IdeaPricingSection from "./components/idea-pricing-section";
import CreateIdeaSubmit from "./components/create-idea-submit";

export default function CreateIdeaPage() {
  const router = useRouter();
  const submitIdea = useMarketStore((state) => state.submitIdea);

  const form = useForm<CreateIdeaFormValues>({
    resolver: zodResolver(createIdeaSchema),
    defaultValues: CREATE_IDEA_DEFAULT_VALUES,
    mode: "onSubmit",
  });

  const onSubmit = async (values: CreateIdeaFormValues) => {
    const imageUrl = values.image
      ? URL.createObjectURL(values.image)
      : "/banners/username_market.png";

    submitIdea({
      title: values.title.trim(),
      description: values.description.trim(),
      imageUrl,
      documents: values.documents.map((file) => ({
        name: file.name,
        sizeKb: Math.round(file.size / 1024),
      })),
      price: Number(values.price),
      currency: values.currency,
    });

    await new Promise((resolve) => setTimeout(resolve, 1200));

    router.push("/wallet/nft-market");
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pb-12">
        <CreateIdeaHeader />

        <div className="space-y-7">
          <IdeaDetailsSection />

          <IdeaImageUpload />

          <IdeaDocumentsUpload />

          <IdeaPricingSection />

          <CreateIdeaSubmit />
        </div>
      </form>
    </FormProvider>
  );
}
