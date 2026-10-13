import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  archiveByFriday,
  archiveDays,
  archiveHeader,
  archiveNav,
  archiveNotDoingLabel,
  archiveParts,
  archivePrep,
  archivePrepLabels,
  archiveReading,
  archiveRules,
  archiveS1Links,
  archiveStory,
  archiveSummerNotes,
  plannedNote,
} from "../data/archive";
import { ScheduleProvider } from "../components/schedule-state";
import SiteNav from "../components/SiteNav";
import DaySection from "../components/DaySection";
import {
  ByFridaySection,
  PrepSection,
  LinkListSection,
  ReadingSection,
  RulesSection,
  SiteFooter,
  StorySection,
  SummerNotesSection,
} from "../components/Sections";

export const metadata: Metadata = {
  title: "Archive · Alpha Kirkland",
  description: archiveHeader.title,
};

// A thin divider that names each of the five parts.
function Part({
  id,
  part,
  children,
}: {
  id: string;
  part: { n: number; title: string };
  children: ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="border-t border-line px-6 pb-6 pt-16 sm:px-10 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[0.7rem] text-muted">
            Part {part.n} of 5
          </p>
          <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.35em] text-accent">
            {part.title}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function ArchivePage() {
  // Every collapsible block on the page, so "Expand all" and Print can reach them.
  const allBlockIds = archiveDays.flatMap((day) =>
    day.blocks
      .filter((b) => b.detail?.length || b.output || b.links?.length)
      .map((b) => b.id),
  );

  return (
    <ScheduleProvider allIds={allBlockIds}>
      <SiteNav items={archiveNav} overHero={false} />

      <main className="bg-bg text-fg">
        <header className="px-6 pt-36 pb-16 sm:px-10 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-muted">
              {archiveHeader.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-[1.9rem] font-light leading-tight tracking-[0.02em] text-fg sm:text-[2.6rem]">
              {archiveHeader.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1rem] font-light leading-[1.8] text-body">
              {archiveHeader.intro}
            </p>
            <Link
              href="/"
              className="mt-8 inline-block text-[0.9rem] font-light text-accent hover:underline"
              data-print-hide
            >
              ← {archiveHeader.backLabel}
            </Link>
          </div>
        </header>

        <Part id="before" part={archiveParts.before}>
          <StorySection data={archiveStory} />
          <ReadingSection data={archiveReading} />
          <SummerNotesSection data={archiveSummerNotes} note={plannedNote} />
        </Part>

        <Part id="days" part={archiveParts.days}>
          {/* Slightly dimmed, so the week reads as past at a glance. */}
          <div className="past-days">
            {archiveDays.map((day) => (
              <DaySection key={day.id} day={day} note={plannedNote} />
            ))}
          </div>
        </Part>

        <Part id="delivered" part={archiveParts.delivered}>
          <ByFridaySection data={archiveByFriday} />
        </Part>

        <Part id="how-it-ran" part={archiveParts.howItRan}>
          <PrepSection data={archivePrep} labels={archivePrepLabels} />
          <RulesSection data={archiveRules} notDoingLabel={archiveNotDoingLabel} />
        </Part>

        <Part id="s1-links" part={archiveParts.s1Links}>
          <LinkListSection id="s1-resources" data={archiveS1Links} />
        </Part>

        <SiteFooter text={archiveHeader.footer} />
      </main>
    </ScheduleProvider>
  );
}
