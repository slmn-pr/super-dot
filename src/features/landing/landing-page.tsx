import {lazy} from "react";

import Hero from "./components/hero";

const EcosystemSection = lazy(()=> import('./sections/eco-system-section'))
const WhySection = lazy(()=> import('./sections/why-section'))
const HowItWorks = lazy(()=> import('./sections/how-it-works-section'))
const FinalCTA = lazy(()=> import('./sections/final-cta'))

/* ---------------- page ---------------- */
export default function SuperDotLanding() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}
    >
      <Hero />
      {/* <Ticker /> */}
      <EcosystemSection />
      <WhySection />
      <HowItWorks />
      <FinalCTA />
    </div>
  );
}
