import type { Metadata } from "next";
import { PostExHero } from "./sections/postex-hero";
import { PostExCTA } from "./sections/postex-cta";
import { PostExServices } from "./sections/postex-services";
import { PostExFeatures } from "./sections/postex-features";
import { PostExJourney } from "./sections/postex-journey";
import { PostExEcosystem } from "./sections/postex-ecosystem";

export const metadata: Metadata = {
  title: "PostEx | سامانه هوشمند ارسال و لجستیک - سوپردات",
  description:
    "پستکس (PostEx)؛ پیک آنلاین، ارسال هوشمند شهری و بین‌شهری، رهگیری لحظه‌ای مرسولات و بیمه کامل در اکوسیستم سوپردات.",
};

export default function IntroPostExPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-x-hidden bg-[#FFFFFF] text-[#09090B] antialiased selection:bg-[#3B82F6]/20 selection:text-[#3B82F6]"
    >
      {/* 1. Hero Section */}
      <PostExHero />

      {/* 2. Services Breakdown (Motor, Cargo, Express) */}
      <PostExServices />

      {/* 3. Core Features (Live Tracking, Insurance, Transparent Price) */}
      <PostExFeatures />

      {/* 4. Easy Steps / Journey */}
      <PostExJourney />

      {/* 5. Ecosystem Integration */}
      <PostExEcosystem />

      {/* 6. Call to Action */}
      <PostExCTA />
    </main>
  );
}
