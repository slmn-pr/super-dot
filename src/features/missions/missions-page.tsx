import { MissionHeader } from "./components/mission-header";
import { MissionProgress } from "./components/mission-progress";
import { MissionsList } from "./components/mission-list";
import { MISSIONS } from "./_mock";

export default function MissionsPage() {
  return (
    <main className=" min-h-screen pb-10 pt-6">
      <MissionHeader points={2450} newMissionsCount={MISSIONS.length} />

      <MissionProgress />

      <section className="mt-8">
        <div className="mt-5 space-y-3">
          <MissionsList />
        </div>
      </section>
    </main>
  );
}
