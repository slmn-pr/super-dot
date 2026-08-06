"use client";

import { Car, ShoppingBag, Wallet, Sparkles, Target } from "lucide-react";
import { MissionHeader } from "./components/mission-header";
import { MissionProgress } from "./components/mission-progress";
import { MissionTabs } from "./components/mission-tabs";
import { MissionCard } from "./components/mission-card";

const missions = [
  {
    id: 1,
    title: "اولین سفر امروز",
    description: "با دات‌وان تریپ یک سفر انجام بده",
    reward: "+50 ⭐",
    progress: 70,
    icon: Car,
    category: "سفر",
  },

  {
    id: 2,
    title: "خرید هوشمند",
    description: "اولین خرید خودت را از ShopEx انجام بده",
    reward: "+100 ⭐",
    progress: 30,
    icon: ShoppingBag,
    category: "خرید",
  },

  {
    id: 3,
    title: "کیف پولت را فعال کن",
    description: "اولین تراکنش کیف پول را انجام بده",
    reward: "+80 ⭐",
    progress: 0,
    icon: Wallet,
    category: "مالی",
  },
];

export default function MissionsPage() {
  return (
    <main
      className="
min-h-screen
px-4
pb-28
pt-6
"
    >
      <MissionHeader />

      <MissionProgress />

      <section className="mt-8">
        <MissionTabs />

        <div
          className="
mt-5
space-y-3
"
        >
          {missions.map((mission) => (
            <MissionCard key={mission.id} {...mission} />
          ))}
        </div>
      </section>
    </main>
  );
}
