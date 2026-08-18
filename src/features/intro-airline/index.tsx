import { AirCTA } from "./sections/air-cta";
import { AirDestinations } from "./sections/air-destinations";
import { AirFeatures } from "./sections/air-featues";
import { AirJourney } from "./sections/air-journey";
import { AirHero } from "./sections/hero";

export default function DotOneAirPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <AirHero />

      <AirDestinations />

      <AirFeatures />

      <AirJourney />

      <AirCTA />
    </main>
  );
}
