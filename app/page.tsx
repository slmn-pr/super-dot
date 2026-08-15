"use client";

import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { HomePage } from "@/features/home/HomePage";
import { redirect } from "next/navigation";

export default function Page() {
  return <>{redirect("/app")}</>;

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        رفتن به محتوای اصلی
      </a>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
