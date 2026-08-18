import TripHeroSection from "./sections/trip-hero";
import DeepDiveSection from "./sections/deep-dive";
import HowItWorks from "../landing/sections/how-it-works-section";
import BenefitSummaryList from "./sections/benefit-summary-list";
import CtaSection from "./sections/cta";

export default function DotoTripIntro() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#09090B] font-sans dir-rtl">
      {/*  Hero Section */}
      <TripHeroSection />

      {/*  Deep-Dive Features Section (مفصل و جزئی) */}
      <DeepDiveSection />

      {/* How It Works Section (توضیحات فرآیند استفاده) */}
      <HowItWorks />

      {/* Benefits Summary List */}
      <BenefitSummaryList />

      {/* Call to Action (CTA) */}
      <CtaSection />
    </div>
  );
}
