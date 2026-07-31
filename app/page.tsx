import { days } from "./data/bootcamp";
import { ScheduleProvider } from "./components/schedule-state";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import DaySection from "./components/DaySection";
import {
  BuildsSection,
  EvaluationSection,
  PrepSection,
  RulesSection,
  SiteFooter,
  SprintSection,
  StorySection,
} from "./components/Sections";

export default function Home() {
  // Every collapsible block on the page, so "Expand all" and Print can reach them.
  const allBlockIds = days.flatMap((day) =>
    day.blocks
      .filter((b) => b.detail?.length || b.output)
      .map((b) => b.id),
  );

  return (
    <ScheduleProvider allIds={allBlockIds}>
      <SiteNav />

      <main className="bg-[#0b1210] text-[#f7efe8]">
        <Hero />
        <StorySection />

        {days.map((day) => (
          <DaySection key={day.id} day={day} />
        ))}

        <BuildsSection />
        <SprintSection />
        <EvaluationSection />
        <PrepSection />
        <RulesSection />
        <SiteFooter />
      </main>
    </ScheduleProvider>
  );
}
