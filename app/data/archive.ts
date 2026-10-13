// ─────────────────────────────────────────────────────────────────────────────
// THE ARCHIVE PAGE (/archive): opening week, Aug 31 to Sep 4, 2026.
//
// Most of this is borrowed straight from bootcamp.ts, so nothing is typed twice.
// What's written here is only what changed for the archive:
//   - headings, intros and "point of today" lines rewritten in past tense
//   - Kirkland guide names swapped for roles (or removed)
// Block details are left word for word.
// ─────────────────────────────────────────────────────────────────────────────

import {
  byFriday,
  days,
  prep,
  prework,
  resources,
  rules,
  story,
  type Day,
} from "./bootcamp";

export const archiveHeader = {
  eyebrow: "Archive",
  title: "Opening Week Staff Days, Aug 31 to Sep 4, 2026",
  intro:
    "Our first week together as a team, before kids arrived on September 8. This is the record of what we read, what we planned, what we delivered, and how the week ran.",
  backLabel: "Back to the current site",
  footer: "Alpha School Kirkland · Archive · Opening Week Staff Days, Aug 31 to Sep 4, 2026.",
};

// The archive's own floating nav. Same look as the main site.
export const archiveNav = [
  { label: "Current site", href: "/" },
  { label: "Before the week", href: "#before" },
  { label: "The five days", href: "#days" },
  { label: "Delivered", href: "#delivered" },
  { label: "How it ran", href: "#how-it-ran" },
  { label: "S1 links", href: "#s1-links" },
];

// The five parts, in order. Each one gets a divider on the page.
export const archiveParts = {
  before: { n: 1, title: "Before the week" },
  days: { n: 2, title: "The five days" },
  delivered: { n: 3, title: "What we delivered" },
  howItRan: { n: 4, title: "How the week ran" },
  s1Links: { n: 5, title: "S1-only links" },
};

// ── Part 1 · Before the week ─────────────────────────────────────────────────

export const archiveStory: typeof story = {
  ...story,
  heading: "Why that week mattered",
  paragraphs: [
    "A campus is not a building. It's a set of decisions that a group of adults made together, on purpose, before the first kid walked through the door.",
    "That week was where those decisions got made. Not discussed, made: written down, put on a wall, given an owner and a date. By Friday afternoon every room in the building had been physically built by the people who were going to run it.",
    "Nobody left a day without something on the wall.",
    "Almost none of it was ours to invent. The org built the behavioral model, the bootcamp, the check charts, the standard day and a default workshop slate over two weeks of staff days we couldn't attend. Four things were genuinely ours: the weekly workshop schedule, the workshop roadmap, the motivational model, and campus jobs. Everything else that week was transfer, learning instruments other people built well and adapting them to four levels and our kids. Knowing which was which is what stopped us rebuilding something that already worked.",
  ],
};

export type ArchiveReading = {
  eyebrow: string;
  heading: string;
  intro: string;
  why: string;
  totalNote: string;
  docs: typeof prework.docs;
  book: typeof prework.book;
};

export const archiveReading: ArchiveReading = {
  eyebrow: "Summer staff days reading",
  heading: "What we read before Monday.",
  intro:
    "Alpha ran two weeks of staff days in July and early August, first in Austin and then on campuses, where the org built the Canon, AlphaCore, the behavior policy, the boot camp check charts and the life skills stack for the whole network. We weren't in the room for any of it, because we were running Alpha Summer here in Kirkland.",
  why: "So this was how we caught up. Everything we built that week sat on top of decisions made in those nine days, and you can't adapt a system you've never seen.",
  totalNote:
    "Nine summaries plus the level by level doc, about 100 minutes in all, read across the two weeks before we started.",
  docs: prework.docs,
  book: {
    ...prework.book,
    why: "We wanted a room where you can say “I don't understand this” out loud on day two, in front of everyone, without it costing you anything. Edmondson's research is on exactly that: why teams that report more mistakes are usually the better teams, not the worse ones. Thursday's rehearsal day depended on it being true here.",
    note: "The link was shared separately.",
  },
};

// ── Part 2 · The five days ───────────────────────────────────────────────────

// Shown once per day, just above the time rail.
export const plannedNote = "This is what we planned.";

// Past-tense headline lines for each day. Everything else comes from bootcamp.ts.
const pastTense: Record<string, { thesis: string; point: string }> = {
  monday: {
    thesis: "We looked at what we were building before we built any of it.",
    point:
      "This day wasn't about mastering anything. It was about seeing the whole shape of the thing once, so the rest of the week had somewhere to land. Most of what runs this campus was built by the org over two weeks of staff days we couldn't attend, so a lot of the week was transfer, not invention. The exception was workshops, which is why the Training team was here and why the afternoon belonged to building them.",
  },
  tuesday: {
    thesis: "We got honest about what this job is, week in and week out.",
    point:
      "The honest day. We covered the six work units, the real volume of submission and QC, how guides are evaluated, and the platform it all lands in. Better to know the workload then than discover it in October. The Townhall at 11:00 was a real one, run on the tickets submitted the night before.",
  },
  wednesday: {
    thesis: "Workshops closed. Then we looked at what a brand-new kid walks into.",
    point:
      "The hard deadline was noon. Workshops closed and the materials order went out, because anything ordered after that day might not arrive before kids did. The afternoon was the opposite kind of work: bootcamp and the check charts were already built by the org, so we read them rather than wrote them.",
  },
  thursday: {
    thesis: "We ran the units, built the rooms, then went to meet the families.",
    point:
      "The morning was the last rehearsal before kids arrived: a Limitless Meeting in partners and a Townhall run by a guide, not by leadership. Then a real Get to Know You Lunch, the rooms, and the Woodmark. The Head Guide was out from 9:30 to 11:15 meeting Microsoft leadership about the Session 1 space, and the Training team had the room.",
  },
  friday: {
    thesis: "We closed everything out. Kids arrived the next Tuesday.",
    point:
      "Nothing new started that day. The morning finished the rooms and closed the last orders. The afternoon was CPR and First Aid on site, and we walked the deliverables together before we left.",
  },
};

export const archiveDays: Day[] = days
  .filter((day) => day.id in pastTense)
  .map((day) => ({
    ...day,
    ...pastTense[day.id],
    // Block owners named people, so they're left off the archive.
    blocks: day.blocks.map((block) => ({ ...block, owner: undefined })),
  }));

// ── Part 3 · What we delivered ───────────────────────────────────────────────

export const archiveByFriday: typeof byFriday = {
  ...byFriday,
  eyebrow: "By Friday",
  heading: "Five things, submitted.",
  intro:
    "Submitted meant linked on Kirkland's row of the S1 Guide Deliverables sheet. A finished artifact sitting in someone's Drive didn't count. We checked all five together at 3:30 on Friday.",
  outro:
    "Campus jobs were the sixth thing, and they weren't ours to submit. Jobs are a Townhall decision, so students voted on which ones existed once they arrived.",
};

// ── Part 4 · How the week ran ────────────────────────────────────────────────

// Roles in place of names on the "who's on the floor" rows, keyed by block.
const floorChanges: Record<string, { who?: string; notes?: string }> = {
  "Mon 8:30a · Welcome + State of Alpha Kirkland": { who: "Head Guide" },
  "Mon 9:30a · The shape of an Alpha day": { who: "Head Guide" },
  "Mon 10:15a · The behavioral model": { who: "Training team" },
  "Mon 1:00p · Workshop kickoff, then the build": { who: "Training team, level pairs building" },
  "Tue 9:00a · Limitless Launch": { who: "A guide" },
  "Tue 9:40a · Limitless Meetings": { who: "A guide" },
  "Tue 10:20a · The other four units + the weekly load": { who: "Head Guide" },
  "Wed 1:45p · Bootcamp + check chart": { who: "Head Guide" },
  "Thu 8:30a · Ongoing check charts": { who: "Head Guide" },
  "Thu 10:00a · Work unit reps": { notes: "Coached out loud in front of the room." },
  "Fri 9:00a and 1:00p · Set the space": {
    notes: "The Head Guide floated with the gap lists and a card.",
  },
};

export const archivePrep: typeof prep = {
  ...prep,
  eyebrow: "Prep & Who Ran What",
  heading: "Who was on the floor, and what had to be true before Monday.",
  distributionRule:
    "Most of the week was led from the front by the Head Guide and the Training team. Guides took on the work units guides run most, and by Thursday every guide was delivering rather than listening. The goal by Friday wasn't that the room had been told things. It was that the whole team had run the units, built the workshops, and set their own rooms.",
  floor: prep.floor.map((row) => ({ ...row, ...floorChanges[row.block] })),
  commitments: {
    ...prep.commitments,
    heading: "What leadership owed the team that week",
    intro:
      "These were the obligations on the leadership side of the room, written down so the team could hold us to them.",
    groups: prep.commitments.groups.map((group) => ({
      ...group,
      items: group.items.map((item) =>
        item
          .replace("CeCe confirmed in writing", "The Training team confirmed in writing")
          .replace("Sanura and Kris told", "Guides told"),
      ),
    })),
  },
};

export const archivePrepLabels = {
  floor: "Who was on the floor",
  open: "What was still open",
  stage: "What we printed and staged",
  nameTags: "Name tags",
};

export const archiveRules: typeof rules = {
  ...rules,
  heading: "We read these out at the end of the State of Alpha Kirkland.",
};

export const archiveNotDoingLabel = "What we didn’t do";

// ── Part 5 · S1-only links ───────────────────────────────────────────────────

const s1OnlyTitles = [
  "S1 Guide Deliverables · where everything gets submitted",
  "Week 1, Session 1 · Student Onboarding",
];

export const archiveS1Links: typeof resources = {
  eyebrow: "Session 1 only",
  heading: "Two links that only applied to Session 1.",
  note: "Both are still live. Sign in with your Alpha account.",
  items: resources.items.filter((item) => s1OnlyTitles.includes(item.title)),
};
