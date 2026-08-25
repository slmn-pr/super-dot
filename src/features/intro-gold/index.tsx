import { GoldHero } from "./sections/hero";
import { GoldWeights } from "./sections/gold-weights";
import { GoldFeatures } from "./sections/gold-features";
import { GoldBuyback } from "./sections/gold-buyback";
import { GoldCTA } from "./sections/gold-cta";

export default function DotOneGoldPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <GoldHero />
      <GoldWeights />
      <GoldFeatures />
      <GoldBuyback />
      <GoldCTA />
    </main>
  );
}
