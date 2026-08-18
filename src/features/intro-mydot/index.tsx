import { MyDotAudience } from "./sections/my-dot-audience";
import { MyDotConversion } from "./sections/my-dot-conversion";
import { MyDotCTA } from "./sections/my-dot-cta";
import { MyDotEconomy } from "./sections/my-dot-economy";
import { MyDotHero } from "./sections/my-dot-hero";
import { MyDotIntro } from "./sections/my-dot-intro";
import { MyDotIP } from "./sections/my-dot-ip";
import { MyDotShowcase } from "./sections/my-dot-showcase";

export default function MyDotPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <MyDotHero />
      <MyDotIntro />
      <MyDotEconomy />
      <MyDotShowcase />
      <MyDotAudience />
      <MyDotIP />
      <MyDotConversion />
      <MyDotCTA />
    </main>
  );
}
