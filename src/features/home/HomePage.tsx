"use client";

// import { HeroSection } from './sections/hero/HeroSection'
// import { EcosystemSection } from './sections/ecosystem/EcosystemSection'
// import { WhyDotOneSection } from './sections/why-dotone/WhyDotOneSection'
// import { ProductsSection } from './sections/products/ProductsSection'
// import { CTASection } from './sections/cta/CTASection'
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export function HomePage() {
  const navigate = useRouter();

  useLayoutEffect(() => {
    navigate.replace("/app");
  }, []);

  return (
    <main id="main-content">
      {/* <HeroSection />
      <WhyDotOneSection />
      <EcosystemSection />
      <ProductsSection />
      <CTASection /> */}
    </main>
  );
}
