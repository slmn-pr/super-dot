import Hero from "./components/hero";
import EcosystemSection from "./sections/eco-system-section";
import WhySection from "./sections/why-section";
import HowItWorks from "./sections/how-it-works-section";
import FinalCTA from "./sections/final-cta";

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
