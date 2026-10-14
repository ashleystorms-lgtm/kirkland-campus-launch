import { days } from "./data/bootcamp";
import { ScheduleProvider } from "./components/schedule-state";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import DaySection from "./components/DaySection";
import {
  ArchiveLinkSection,
  EvaluationSection,
  LibrarySection,
  PastDaysLabel,
  SiteFooter,
  SprintSection,
  StaffDaysHeader,
} from "./components/Sections";

export default function Home() {
  // Which day shows where is set by each day's status in bootcamp.ts.
  const nowDay = days.find((d) => d.status === "now");
  const upcoming = days.filter((d) => d.status === "upcoming");
  const past = days.filter((d) => d.status === "past");

  // Every collapsible block on the page, so "Expand all" and Print can reach them.
  const openable = (day: (typeof days)[number]) =>
    day.blocks
      .filter((b) => b.detail?.length || b.output || b.links?.length)
      .map((b) => b.id);
  const allBlockIds = days.flatMap(openable);
  // The "now" day starts fully open so nobody misses the details and links.
  const nowBlockIds = nowDay ? openable(nowDay) : [];

  return (
    <ScheduleProvider allIds={allBlockIds} initialOpen={nowBlockIds}>
      <SiteNav />

      <main className="bg-bg text-fg">
        <Hero />

        {/* Now: the current staff day, in full */}
        <div id="now" className="scroll-mt-24">
          {nowDay && <DaySection day={nowDay} eyebrow={`Now · ${nowDay.dayName}`} />}
        </div>

        {/* Staff Days: upcoming first, then past ones dimmed. The "now" day is shown above. */}
        <div id="staff-days" className="scroll-mt-24">
          <StaffDaysHeader isEmpty={upcoming.length + past.length === 0} />
          {upcoming.map((day) => (
            <DaySection key={day.id} day={day} />
          ))}
          {past.length > 0 && (
            <>
              <PastDaysLabel />
              <div className="past-days">
                {past.map((day) => (
                  <DaySection key={day.id} day={day} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Resources: the link library, then the two reading sections */}
        <div id="resources" className="scroll-mt-24">
          <LibrarySection />
          <EvaluationSection />
          <SprintSection />
        </div>

        <ArchiveLinkSection />
        <SiteFooter />
      </main>
    </ScheduleProvider>
  );
}
