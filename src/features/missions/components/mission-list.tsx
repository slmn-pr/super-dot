"use client";

import { useState } from "react";
import { MissionTabs } from "./mission-tabs";
import { MissionCard } from "./mission-card";
import { MissionCategoryId, MISSIONS } from "../_mock";

export function MissionsList() {
  const [activeCategory, setActiveCategory] =
    useState<MissionCategoryId>("all");

  const filteredMissions =
    activeCategory === "all"
      ? MISSIONS
      : MISSIONS.filter((mission) => mission.category === activeCategory);

  return (
    <div className="mt-5 space-y-4">
      <MissionTabs value={activeCategory} onValueChange={setActiveCategory} />

      {filteredMissions.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          ماموریتی در این دسته‌بندی وجود نداره
        </p>
      ) : (
        <div className="space-y-3">
          {filteredMissions.map((mission) => (
            <MissionCard
              key={mission.id}
              title={mission.title}
              description={mission.description}
              reward={mission.reward}
              progress={mission.progress}
              icon={mission.icon}
              category={mission.category} // id واقعی: "travel", "daily"...
              categoryLabel={mission.categoryLabel} // لیبل فارسی برای نمایش
            />
          ))}
        </div>
      )}
    </div>
  );
}
