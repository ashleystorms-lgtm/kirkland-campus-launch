// ─────────────────────────────────────────────────────────────────────────────
// THE ARCHIVE PAGE (/archive): opening week, Aug 31 to Sep 4, 2026.
//
// This file is the archive's own complete copy. Nothing here depends on the
// home page, so the home page can change freely without losing any of it.
//
// Compared with how the week was first written:
//   - headings, intros and "point of today" lines are in past tense
//   - Kirkland guide names are swapped for roles (or removed)
//   - block details are word for word
// ─────────────────────────────────────────────────────────────────────────────

import type { Day } from "./bootcamp";

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

export const archiveStory = {
  eyebrow: "Our Story",
  heading: "Why that week mattered",
  paragraphs: [
    "A campus is not a building. It's a set of decisions that a group of adults made together, on purpose, before the first kid walked through the door.",
    "That week was where those decisions got made. Not discussed, made: written down, put on a wall, given an owner and a date. By Friday afternoon every room in the building had been physically built by the people who were going to run it.",
    "Nobody left a day without something on the wall.",
    "Almost none of it was ours to invent. The org built the behavioral model, the bootcamp, the check charts, the standard day and a default workshop slate over two weeks of staff days we couldn't attend. Four things were genuinely ours: the weekly workshop schedule, the workshop roadmap, the motivational model, and campus jobs. Everything else that week was transfer, learning instruments other people built well and adapting them to four levels and our kids. Knowing which was which is what stopped us rebuilding something that already worked.",
  ],
};

export const archiveReading = {
  eyebrow: "Summer staff days reading",
  heading: "What we read before Monday.",
  intro:
    "Alpha ran two weeks of staff days in July and early August, first in Austin and then on campuses, where the org built the Canon, AlphaCore, the behavior policy, the boot camp check charts and the life skills stack for the whole network. We weren't in the room for any of it, because we were running Alpha Summer here in Kirkland.",
  why: "So this was how we caught up. Everything we built that week sat on top of decisions made in those nine days, and you can't adapt a system you've never seen.",
  totalNote:
    "Nine summaries plus the level by level doc, about 100 minutes in all, read across the two weeks before we started.",
  docs: [
    {
      n: 1,
      day: "Week 1 · Day 1",
      date: "Mon Jul 27",
      title: "Alpha Canon and the three tiers",
      mins: 5,
      file: "/docs/staff-days-day-1.pdf",
      summary:
        "Why Alpha builds a canon at all, and the three-tier structure every work unit is written in: Tier 1 standard, Tier 2 level flavor, Tier 3 guide magic. Read this first — the tiers come up in everything after it.",
    },
    {
      n: 2,
      day: "Week 1 · Day 2",
      date: "Tue Jul 28",
      title: "BrainLifts, AI and learning science",
      mins: 5,
      file: "/docs/staff-days-day-2.pdf",
      summary:
        "What a BrainLift is and why it has to be typed by a human. Depth of Knowledge 1 through 4, where AI is strong and where it collapses, and the Me / We / Key framing behind the five signature life skills.",
    },
    {
      n: 3,
      day: "Week 1 · Day 3",
      date: "Wed Jul 29",
      title: "The apps, and the behavioral model introduced",
      mins: 10,
      file: "/docs/staff-days-day-3.pdf",
      summary:
        "TimeBack, AlphaTalk, StudyFilm and initial mastery. Then the first pass at the behavior curriculum — the five principles, including 95% coaching and 5% enforcement, and why the system is the bad guy rather than any individual adult.",
    },
    {
      n: 4,
      day: "Week 1 · Day 4",
      date: "Thu Jul 30",
      title: "How we talk to parents, and the banger arc",
      mins: 10,
      file: "/docs/staff-days-day-4.pdf",
      summary:
        "The media rules are the part you're accountable for: never post children on your personal accounts, route any press contact, and no rogue filming. Then the escalation arc that carries a kid from Session 1 to a banger, and the difference between a banger and a booster.",
    },
    {
      n: 5,
      day: "Week 1 · Day 5",
      date: "Fri Jul 31",
      title: "Find Your Feathers, and the boot camp check chart",
      mins: 10,
      file: "/docs/staff-days-day-5.pdf",
      summary:
        "The root-cause exercise we'll run five times this year, and why averages hide every problem worth finding. Then the boot camp check chart — the instrument a brand-new kid earns their way through, which we adapted during opening week.",
    },
    {
      n: 6,
      day: "Week 2 · Day 6",
      date: "Mon Aug 3",
      title: "What the network fixed, and Guide Platform",
      mins: 10,
      file: "/docs/staff-days-day-6.pdf",
      summary:
        "The fixes that came out of Feathers across every campus — early flagging, mid-year joiners, buddy systems, workshop skill progression. Plus Guide Platform, which is where your work units, check charts and behavior data all land this year.",
    },
    {
      n: 7,
      day: "Week 2 · Day 7",
      date: "Tue Aug 4",
      title: "The behavior policy, line by line",
      mins: 10,
      file: "/docs/staff-days-day-7.pdf",
      summary:
        "The most important one on this list. Warnings, yellow cards, red cards, strikes — the first org-wide behavior standard in Alpha's history, argued through line by line. Read it twice if you read anything twice.",
    },
    {
      n: 8,
      day: "Week 2 · Day 8",
      date: "Wed Aug 5",
      title: "The academic model, gate by gate",
      mins: 15,
      file: "/docs/staff-days-day-8.pdf",
      summary:
        "The densest of the nine. Mastery as the thing that actually makes the model work, why MAP is not a mastery test, where the doom loops come from, and what 2X really means at each level. This is the one to read when you're fresh.",
    },
    {
      n: 9,
      day: "Week 2 · Day 9",
      date: "Thu Aug 6",
      title: "Behavior policy final, and the intervention tiers",
      mins: 15,
      file: "/docs/staff-days-day-9.pdf",
      summary:
        "What changed after the room pushed back — including smartwatches becoming phones. Then Pirate Ship, behavior support plans and the strike appeal template: what happens for the kid the standard structure isn't working for.",
    },
    {
      n: 10,
      day: "Week 2",
      date: "Aug 2026",
      title: "What The Network Built: Level by Level",
      mins: 10,
      file: "https://docs.google.com/document/d/1rcT0Mhr1OnK8sGtFLxOLRPHxT7mzM5xfk2cCY5PKUuw/edit",
      summary:
        "A level-by-level walkthrough of what came out of staff days across the whole network — what changed, and what it means depending on which level you guide.",
    },
  ],
  book: {
    title: "The Fearless Organization",
    author: "Amy Edmondson",
    scope: "First 27 pages — through Chapter 1",
    mins: 45,
    why: "We wanted a room where you can say “I don't understand this” out loud on day two, in front of everyone, without it costing you anything. Edmondson's research is on exactly that: why teams that report more mistakes are usually the better teams, not the worse ones. Thursday's rehearsal day depended on it being true here.",
    note: "The link was shared separately.",
  },
};

export const archiveSummerNotes = {
  eyebrow: "Summer notes",
  heading: "What we flagged for the team before the week.",
  safety: {
    label: "Required · deadline set by the org",
    heading: "Reporting suicidal ideation and self-harm",
    body: "Every guide reviews this before the end of week 2. It came from Matt Shenker to all leads, and it is the one item on this page with a deadline set outside this campus.",
  },
  levelWorkHeading: "What the rest of the network already built",
  levelWorkIntro: "Every other campus was in the room for staff days, and they shared almost everything they made. Take what's useful — nobody expects you to build from scratch what someone else already built well. Read your own level's list before Monday. You don't need the other three.",
  whatsNew: {
    date: "Updated August 12",
    heading: "What changed that week",
    body: "Several of these changed decisions we made during opening week. Read this section even if you read the rest already.",
    doFirst: {
      heading: "In priority order",
      before: [
        "Watch Alec's eight-minute Guide Platform video. It's the shortest path to understanding where all of your work lands.",
        "Read the academic updates doc — placement, MAP and the new apps.",
        "Note the Alpha payout change. It affects the motivational model we build on Tuesday, and building against last year's rules means rebuilding it.",
        "MS: read the Playbook site and join one of Drew's office hours.",
      ],
      during: [
        "Carson's print folder and the print-formatted check charts feed Friday's Set the Space directly. Take what fits rather than designing from scratch.",
        "Katie Boye's four intro decks map onto our first three days almost exactly. Adapt them.",
      ],
      after: [
        "Keep watching the channels between now and September 8. Calendar A is four weeks ahead of us and is finding every problem in the first-days plan right now. That is four weeks of other people's mistakes, free, and it expires the day our kids arrive.",
      ],
    },
  },
  warning: "The bootcamp time budget is roughly 15 hours per level. L2 already reported coming in at double that. Check your total before you commit to adapting anything.",
  channels: {
    heading: "Go to the source",
    body: "This page is a snapshot, and it goes stale fast. The network posts to these channels every day — and Calendar A campuses started school on August 12, four weeks ahead of us, which means they are hitting every first-week problem right now and writing it down. That is four weeks of other people's mistakes, free, and it expires on September 8. Check your channel before you build anything.",
  },
  giveBack: "Two questions in those channels are still unanswered — a Guide's Guide for a middle school camping independence workshop, and behaviour posters with worked yellow, red and strike examples. We've been quiet in these channels all summer because we were running camp. Answering one is a cheap way to start showing up in these channels as a campus that contributes.",
};

// ── Part 2 · The five days ───────────────────────────────────────────────────

// Shown once per day, just above the time rail.
export const plannedNote = "This is what we planned.";

export const archiveDays: Day[] = [
  {
    id: "monday",
    status: "past",
    label: "Monday",
    dayName: "Monday",
    date: "Monday, August 31, 2026",
    hours: "8:00a–5:00p",
    title: "Foundation",
    thesis: "We looked at what we were building before we built any of it.",
    point:
      "This day wasn't about mastering anything. It was about seeing the whole shape of the thing once, so the rest of the week had somewhere to land. Most of what runs this campus was built by the org over two weeks of staff days we couldn't attend, so a lot of the week was transfer, not invention. The exception was workshops, which is why the Training team was here and why the afternoon belonged to building them.",
    theme: {
      name: "Sunrise",
      accent: "#f3d7a3",
      soft: "rgba(243,215,163,0.28)",
      glow: "rgba(243,215,163,0.10)",
      image: "/images/days/monday.jpg",
    },
    blocks: [
      { id: "mon-coffee", start: "8:00a", title: "Coffee and name tags", kind: "meal" },
      {
        id: "mon-welcome",
        start: "8:30a",
        end: "9:15a",
        title: "Welcome + State of Alpha Kirkland",
        kind: "leadership",
        detail: [
          "Where this campus sits in Alpha's foundational year, what we're accountable for by Friday, and what we're accountable for by October.",
          "House Rules are read at the end of this block.",
        ],
      },
      {
        id: "mon-read",
        start: "9:15a",
        end: "10:15a",
        title: "What we read",
        kind: "session",
        detail: [
          "The nine Austin staff days summaries, and the first 27 pages of The Fearless Organization. Not a recap — everyone read them. This is the conversation about them.",
          "What surprised you. What you disagree with. What didn't make sense. Where you think it won't survive contact with an actual campus.",
          "Then Edmondson, and why she's on the list. A room where you can say “I don't understand this” out loud on day two, in front of everyone, without it costing you anything — that's a decision we make now, not a mood that develops later. Her research is that teams reporting more mistakes are usually the better teams, not the worse ones. Everything we do this week assumes that's true here.",
        ],
      },
      {
        id: "mon-behavior",
        start: "10:15a",
        end: "11:00a",
        title: "The behavioral model",
        kind: "session",
        detail: [
          "5% policy, 95% curriculum. Warnings, yellow cards, red cards and strikes — the first org-wide behavior standard in Alpha's history.",
          "The system is the bad guy and guides coach kids through it. No individual adult owns the consequence.",
          "The Alpha Behavior Response Tool is the companion to this block — look up a behaviour, get the response the model calls for. Bookmark it today, because the moment you need it you won't want to be searching for it.",
        ],
        links: [
          { label: "Alpha Behavior Response Tool", url: "https://alphabehaviortool.netlify.app/" },
        ],
      },
      {
        id: "mon-workshop-kickoff",
        start: "11:00a",
        end: "12:00p",
        title: "Workshop kickoff",
        kind: "session",
        detail: [
          "Session 1 is four weeks, and Showcase is the week of October 12. Kids arrive September 8; the session ends October 16. Between the first three days of onboarding and Showcase there are about four weeks of delivery — so baseline, both checkpoints and the AlphaTest all land inside that window. Nothing that needs six weeks to build toward. Every workshop has to produce something a kid can stand next to and talk about on October 12.",
          "Then the Life Skills Roadmap — the year mapped across five sessions on the ME and WE dimensions, and where Session 1 sits in it.",
          "Then the Guide's Guide Builder, which is the only door. Workshops reach Guide Platform through a Builder commit and nothing is built on the platform directly. Build your pitch with the co-pilot inside the Builder, save the draft, send it for comments, resolve them, and commit only once it's approved. Commit locks the skill tracker and unlocks a pre-filled Guide's Guide.",
          "The spec: four minimum per level this session, covering Independence, Giving and Receiving Feedback, and Upholding Community Standards, doubling up on whichever your level needs most.",
          "Measure the skill, not the activity. The network is coaching hard on this — too many receiving-feedback workshops end up measuring whether a kid got better at climbing rather than better at receiving feedback.",
        ],
        links: [
          { label: "Guide's Guide Builder", url: "https://guides-guide-app.vercel.app/" },
          { label: "Life Skills Roadmap", url: "https://docs.google.com/document/d/1qFV9eqhQ_blv7oijJnYAAtApJIDR6GLEvQ4ZX1HXjx4/edit" },
          { label: "S1 Playbook — the default workshop slate", url: "https://s1-playbook-2627.netlify.app/" },
        ],
      },
      { id: "mon-lunch", start: "12:00p", end: "1:00p", title: "Lunch", kind: "meal" },
      {
        id: "mon-workshop-build",
        start: "1:00p",
        end: "3:30p",
        title: "Workshop building and feedback",
        kind: "build",
        detail: [
          "The longest build block of the week. Start from the default slate in the S1 Playbook — Rock Climb, 3D Print or Escape Room, and 5 Star Experience all exist with full Guide's Guides. Decide what fits our kids, replace what doesn't, and build the ones that are ours.",
          "Four weeks. Showcase October 12. Hold both while you build.",
          "Learning Lab builds too. We have no LL students today, but enrolment is rolling and a kid could join in week three.",
        ],
        output: "At least one workshop drafted per level, against the four-workshop spec.",
      },
      {
        id: "mon-audit",
        start: "3:30p",
        end: "4:15p",
        title: "Supply audit",
        kind: "build",
        detail: [
          "Walk every room. What's here, what's missing, what's broken. Write it down by level.",
          "Two lists: room basics, and anything workshop-specific. The second waits for Wednesday's approvals.",
        ],
        output: "A gap list per level, with an owner and an order-by date on every line.",
      },
      {
        id: "mon-order",
        start: "4:15p",
        end: "4:45p",
        title: "Room basics ordered",
        kind: "session",
        detail: [
          "The non-workshop list goes out today, before anyone leaves. A list that becomes a to-do doesn't arrive.",
        ],
      },
      {
        id: "mon-closing",
        start: "4:45p",
        end: "5:00p",
        title: "Closing",
        kind: "workUnit",
        detail: [
          "A real Closing, full spec — it models the shout-out format every guide runs for the rest of the week.",
          "Before you leave: submit a Townhall ticket. We run a real Townhall tomorrow at 11:00 and the tickets come from you, not from me. Bring something you actually want decided.",
        ],
      },
    ],
  },

  {
    id: "tuesday",
    status: "past",
    label: "Tuesday",
    dayName: "Tuesday",
    date: "Tuesday, September 1, 2026",
    hours: "8:00a–5:00p",
    title: "The Work",
    thesis: "We got honest about what this job is, week in and week out.",
    point:
      "The honest day. We covered the six work units, the real volume of submission and QC, how guides are evaluated, and the platform it all lands in. Better to know the workload then than discover it in October. The Townhall at 11:00 was a real one, run on the tickets submitted the night before.",
    theme: {
      name: "Douglas fir",
      accent: "#a7c1a1",
      soft: "rgba(167,193,161,0.28)",
      glow: "rgba(167,193,161,0.10)",
      image: "/images/days/tuesday.jpg",
    },
    blocks: [
      { id: "tue-coffee", start: "8:00a", title: "Coffee", kind: "meal" },
      {
        id: "tue-rep",
        start: "8:30a",
        end: "9:00a",
        title: "Launch rep",
        kind: "workUnit",
        detail: [
          "One guide runs a real Limitless Launch. Full spec, cold open, phones down. The room debriefs it afterward.",
        ],
      },
      {
        id: "tue-shape",
        start: "9:00a",
        end: "9:30a",
        title: "The shape of an Alpha day",
        kind: "session",
        detail: [
          "The day is standardised across every campus and every level, and it already exists in the S1 Playbook: Launch at 8:45, Core Skills from 9:00, Q-Break, Core Skills again, lunch, two workshop blocks in the afternoon, check chart or Townhall, then Closing.",
          "We're not designing this. We're learning to run it. Every block has a runbook — read the one you're about to run.",
        ],
        links: [
          { label: "S1 Playbook — the day in order", url: "https://s1-playbook-2627.netlify.app/" },
        ],
      },
      {
        id: "tue-launch-unit",
        start: "9:30a",
        end: "10:15a",
        title: "Limitless Launch — the work unit",
        kind: "workUnit",
        detail: [
          "The unit every kid feels first, every single day. What the spec asks for, and what it looks like when it lands.",
        ],
      },
      {
        id: "tue-meetings-unit",
        start: "10:15a",
        end: "11:00a",
        title: "Limitless Meetings — the work unit",
        kind: "workUnit",
        detail: [
          "Twenty-five minutes, weekly, during TimeBack learning, demonstrating mentor mindset. The 3Cs framework, and how a meeting differs from a check-in.",
          "You'll run one in partners on Thursday.",
        ],
      },
      {
        id: "tue-townhall",
        start: "11:00a",
        end: "12:00p",
        title: "Townhall — and a real one",
        kind: "workUnit",
        detail: [
          "The full hour, because Townhall is where campus culture actually gets built. More than any other unit, this is the one that decides whether kids believe they have a say here.",
          "First the format: a mayor, a recorder, a timekeeper, a real ticket, a vote that gets honoured whichever way it goes. Circles capped at fifteen to twenty. Both sides argued before anyone votes.",
          "Then we run one, live, on the tickets you submitted last night. A Townhall where leadership picks the ticket isn't a Townhall.",
          "On Thursday a guide runs it as mayor and I'll sit outside the circle.",
        ],
      },
      { id: "tue-lunch", start: "12:00p", end: "1:00p", title: "Lunch", kind: "meal" },
      {
        id: "tue-specs",
        start: "1:00p",
        end: "1:30p",
        title: "Closing, and the two lunches",
        kind: "workUnit",
        detail: [
          "The three remaining units, read straight from their work unit docs as a room. Nobody here has run them at this campus yet, so we read the spec rather than pretend otherwise.",
          "Get to Know You Lunch runs in Session 1; Limitless Lunch every session after. Both are work units with specs and QC, not breaks. We run a real Get to Know You Lunch on Thursday.",
        ],
      },
      {
        id: "tue-load",
        start: "1:30p",
        end: "2:15p",
        title: "The weekly load",
        kind: "leadership",
        detail: [
          "What gets submitted, who quality-checks it, how fast feedback comes back, and where every spec lives.",
          "Real numbers. This is the block where you find out what the job weighs — and it's better to hear it on day two than to discover it in October.",
        ],
      },
      {
        id: "tue-evals",
        start: "2:15p",
        end: "3:15p",
        title: "Evaluations",
        kind: "leadership",
        detail: [
          "Straight after the weekly load, on purpose: here's the volume, and here's how it's measured.",
          "What's evaluated. Work units are the unit of measurement — Launch, Limitless Meetings, Townhall, Closing, the lunches, check charts. Your Lead Guide quality-checks them and AI QC runs on transcripts continuously.",
          "How often. A detailed one-pager twice a year, with weekly 1:1 coaching in between. The standard is that the mid-year one-pager contains zero new information. If something in it surprises you, that's a failure on my side, not yours.",
          "The ratings. Exceeds, Meets, Below — calibrated across the whole network, so a Meets here means a Meets everywhere. High Potential is a separate designation, not a rating: it means innovating beyond the framework and showing next-level behaviours before you're in the next-level role.",
          "What you're owed. You always know how you're doing, where you stand, and what levels you up. Feedback to your face, not behind your back. Every input visible to you.",
          "And compensation, said out loud in September rather than discovered in March. Alpha uses large salary bands rather than incremental annual increases — promotion is the primary path to a significant increase. You deserve to know that on day two so you can aim at the right thing.",
        ],
      },
      {
        id: "tue-platform",
        start: "3:15p",
        end: "4:45p",
        title: "Guide Platform · the full run-through",
        kind: "session",
        detail: [
          "Guide Platform is the source of truth for every work unit this year. Everything you enter attaches to a kid and builds their profile, so any guide who picks them up later can motivate them from day one instead of playing knowledge telephone across a dozen spreadsheets.",
          "Everyone together, including middle school. MS bootcamp checks live on the Alpha Project Hub, but every other work unit MS runs lands here like everyone else's.",
          "We work through it properly: notes and shout-outs, the behavior ladder and what happens when a card is issued, voice memos — you can talk for up to 65 minutes and it sorts the notes to the right kids — student profiles, the bootcamp check chart view, workshops, and the 3Cs.",
          "Star each kid's top three checks before they ever log in, so the first thing they see is their focus rather than a wall of everything.",
          "PreK–2 is guide-run. Littles don't log in; you tick the steps and add photo or video proof on the kid's check.",
          "Bring real problems. Anything that doesn't work goes to #guide-platform-support rather than a DM — Alec watches that channel and a fix there helps every campus.",
        ],
        output:
          "Every guide signed in, roster found, a note entered, and knows where each of the six work units lands.",
        links: [
          { label: "Guide Platform — guide sign-in", url: "https://alpha-guide-platform.vercel.app" },
          { label: "Guide Platform — student sign-in", url: "https://alpha-guide-platform.vercel.app/student/login" },
          { label: "Alec's 8-minute walkthrough — watch before this block", url: "https://www.loom.com/share/73cb8690df234d23a7e5ae6bd54eeb39" },
        ],
      },
      {
        id: "tue-closing",
        start: "4:45p",
        end: "5:00p",
        title: "Closing",
        kind: "workUnit",
      },
    ],
  },

  {
    id: "wednesday",
    status: "past",
    label: "Wednesday",
    dayName: "Wednesday",
    date: "Wednesday, September 2, 2026",
    hours: "8:00a–5:00p",
    title: "Lock",
    thesis: "Workshops closed. Then we looked at what a brand-new kid walks into.",
    point:
      "The hard deadline was noon. Workshops closed and the materials order went out, because anything ordered after that day might not arrive before kids did. The afternoon was the opposite kind of work: bootcamp and the check charts were already built by the org, so we read them rather than wrote them.",
    theme: {
      name: "Puget Sound",
      accent: "#9fbccf",
      soft: "rgba(159,188,207,0.28)",
      glow: "rgba(159,188,207,0.10)",
      image: "/images/days/wednesday.jpg",
    },
    blocks: [
      { id: "wed-coffee", start: "8:00a", title: "Coffee", kind: "meal" },
      {
        id: "wed-rep",
        start: "8:30a",
        end: "9:00a",
        title: "Launch rep",
        kind: "workUnit",
        detail: ["A different guide. Everyone runs one before Friday."],
      },
      {
        id: "wed-workshops",
        start: "9:00a",
        end: "12:00p",
        title: "Workshops finalised — and the full-year roadmap",
        kind: "build",
        detail: [
          "Four per level minimum, all three life skills covered, vendored and costed with a place in the session calendar. Then the full-year roadmap: the life skills threads and arcs across all five sessions, linked in column J of the S1 sheet. Workshop names can be generic where you don't have one yet — the AlphaTest cell is the one that matters.",
          "Four weeks and Showcase on October 12. If a workshop can't reach its AlphaTest by week five, it isn't a Session 1 workshop.",
          "Committed, not drafted. Across the network there are hundreds of pitches sitting saved in the Builder and only a fraction committed — and committing is what sends them to Guide Platform. A drafted workshop doesn't exist as far as the system is concerned.",
          "Commit needs approval first, so this morning is a loop rather than a build: draft, send, resolve, commit. Sixteen workshops through one reviewer before noon. Send them as they're ready rather than all at once at 11:30 — the queue is the thing most likely to make us miss this.",
          "Before you send: does the AlphaTest measure the life skill, or the activity? If it's the activity, it isn't finished.",
        ],
        output:
          "The bank closes at noon. Four per level, all three life skills, approved and committed in the Builder, with the full-year roadmap linked.",
        links: [
          { label: "Guide's Guide Builder", url: "https://guides-guide-app.vercel.app/" },
          { label: "S1 Guide Deliverables — column J", url: "https://docs.google.com/spreadsheets/d/10J5Uwd6jmgzEEwI2fVeFigQBDXCixtA8ToC07ZUYVE8/edit" },
        ],
      },
      { id: "wed-lunch", start: "12:00p", end: "1:00p", title: "Lunch", kind: "meal" },
      {
        id: "wed-materials",
        start: "1:00p",
        end: "1:45p",
        title: "Materials ordered",
        kind: "session",
        detail: [
          "Workshop-specific materials, ordered live in this block — not added to somebody's evening.",
          "Anything that can't arrive within four days gets a substitute decided here, not discovered on Friday.",
        ],
      },
      {
        id: "wed-bootcamp",
        start: "1:45p",
        end: "2:45p",
        title: "Bootcamp — what is it?",
        kind: "session",
        detail: [
          "The entry ramp every brand-new kid earns their way through in their first session — and the thing that unlocks the Emporium, the year-long check chart and the signature life skills.",
          "Built by the org while we were running Alpha Summer, so this is reading it together rather than writing anything.",
          "Every kid at this campus is new, so every kid does bootcamp. And because enrolment is rolling, a kid joining in week three does it then — it doubles as the onboarding path all year.",
        ],
        links: [
          { label: "Week 1 Session 1 — our first three days", url: "https://week1-session1.netlify.app/" },
        ],
      },
      {
        id: "wed-charts",
        start: "2:45p",
        end: "3:45p",
        title: "Bootcamp check charts",
        kind: "session",
        detail: [
          "Already built. We review, adapt to our levels, and check the total — the budget is roughly 15 hours per level and campuses have come in at double without noticing.",
          "Middle school is on a different system: one chart, fifteen checks, all of 6–8 with grade levels gone, living on the Alpha Project Hub rather than Guide Platform.",
          "Several checks across the network are currently broken or missing their AI grader. Know which before you promise a student they can complete one.",
        ],
        links: [
          { label: "Bootcamp Check Chart · All Levels", url: "https://docs.google.com/spreadsheets/d/1Wj9mYrneOnVVtNbXXOpRdy6A9c6Rqpjgxawesd_f46Y/edit" },
          { label: "Alpha Project Hub — MS bootcamp", url: "https://alpha-project-hub.vercel.app/" },
        ],
      },
      {
        id: "wed-motivational",
        start: "3:45p",
        end: "4:45p",
        title: "Motivational models and campus jobs",
        kind: "build",
        detail: [
          "Start from the default in the S1 Playbook — daily Alpha payouts, weekly Emporium and Fun Friday, Mobile Squad each session — then adapt to your level.",
          "The formula is fixed and automated: 25 XP earns 1 Alpha. Alphas are paid for XP only, not check charts, and only on days a student hits 120 XP, except LL. Campus jobs do still pay Alphas, and jobs are the one thing you can award manually. No debit cards for middle school.",
          "Build against this year's rules and nothing else. Campuses have been caught running models built from last year's resources that were approved then and aren't now.",
          "Two things are genuinely unsettled network-wide: whether closing rings affects the daily bonus, and whether LL's daily goal is 85, 100 or 120 XP. Tell students what you know and don't promise what nobody has pinned down.",
          "Campus jobs are a town hall decision, not a menu we hand down. Students identify what the room needs and vote. Roles that have worked elsewhere: town hall mayor, assistant to the mayor, assistant to the guide, time manager, equipment manager, board maintenance, Emporium manager. Bring examples, not a finished list.",
          "Every kid here is new to Alpha. The network's own guidance is that Alpha earnings, the Emporium and comfy seating carry new students a long way. The risk isn't building too little — it's building something far more elaborate than our kids need in week one.",
        ],
        output: "A reward ladder per level, and a shortlist of jobs to put to the first Townhall.",
        links: [
          { label: "S1 Playbook — the default model", url: "https://s1-playbook-2627.netlify.app/" },
          { label: "Alphas work unit doc", url: "https://docs.google.com/document/d/1XYd7BSR-5D2IqeDz2FDG6_Mq3OEjkvNn6yh3fbWt14I/edit" },
        ],
      },
      {
        id: "wed-closing",
        start: "4:45p",
        end: "5:00p",
        title: "Closing",
        kind: "workUnit",
      },
    ],
  },

  {
    id: "thursday",
    status: "past",
    label: "Thursday",
    dayName: "Thursday",
    date: "Thursday, September 3, 2026",
    hours: "8:00a–5:00p · Meet the Guides 3:00–5:00p at the Woodmark Hotel",
    title: "Set",
    thesis: "We ran the units, built the rooms, then went to meet the families.",
    point:
      "The morning was the last rehearsal before kids arrived: a Limitless Meeting in partners and a Townhall run by a guide, not by leadership. Then a real Get to Know You Lunch, the rooms, and the Woodmark. The Head Guide was out from 9:30 to 11:15 meeting Microsoft leadership about the Session 1 space, and the Training team had the room.",
    theme: {
      name: "Lichen",
      accent: "#cbcb96",
      soft: "rgba(203,203,150,0.28)",
      glow: "rgba(203,203,150,0.10)",
      image: "/images/days/thursday.jpg",
    },
    blocks: [
      { id: "thu-coffee", start: "8:00a", title: "Coffee", kind: "meal" },
      {
        id: "thu-charts",
        start: "8:30a",
        end: "9:30a",
        title: "Full-year check charts",
        kind: "session",
        detail: [
          "The charts that run all year, and how they differ from the bootcamp chart. Two instruments doing two different jobs — one is a ramp a kid clears once, the other is the daily engine for the rest of the year.",
          "Already built by the org. We're learning where they live and how they work, not writing them.",
        ],
      },
      {
        id: "thu-schedules",
        start: "9:30a",
        end: "10:15a",
        title: "S1 Daily + Weekly Schedule",
        kind: "build",
        detail: [
          "The daily schedule is standard across all levels and already published in the S1 Playbook — this is confirming it against our building and our constraints, not designing it. Flag anything that genuinely can't work here.",
          "The weekly workshop schedule is ours: which workshops run in which block, which week. Four weeks, Showcase October 12.",
        ],
        output: "S1 daily confirmed and weekly workshop schedule drafted per level. Org deliverables.",
      },
      {
        id: "thu-lm-reps",
        start: "10:15a",
        end: "11:15a",
        title: "Limitless Meeting reps, in partners",
        kind: "workUnit",
        detail: [
          "In pairs, for real. One of you is the guide, one is the student, then swap. Twenty-five minutes is longer than it sounds when you're in it.",
          "Say it to the face. Brutally honest without being brutal — practise it on each other before you practise it on a kid.",
        ],
        output: "Every guide has run a Limitless Meeting and been coached on it.",
      },
      {
        id: "thu-townhall-rep",
        start: "11:15a",
        end: "12:00p",
        title: "Townhall rep — a guide runs it",
        kind: "workUnit",
        detail: [
          "The second real Townhall of the week, and this time leadership sits outside the circle and doesn't speak.",
          "A mayor, a recorder, a timekeeper. A ticket from the room. Both sides argued before the vote, and the vote is honoured whichever way it goes.",
          "This is the rehearsal that matters most — kids will read within a week whether Townhall is real here or theatre.",
        ],
      },
      {
        id: "thu-lunch",
        start: "12:00p",
        end: "1:00p",
        title: "Get to Know You Lunch — run for real",
        kind: "meal",
        detail: [
          "Not described. Run. It's a work unit with a spec, and it's the first lunch every kid experiences in Session 1.",
        ],
      },
      {
        id: "thu-set",
        start: "1:00p",
        end: "2:30p",
        title: "Set the spaces, with OPS",
        kind: "build",
        detail: [
          "Labeling first. Cubbies, lockers, stations, supply areas — every space named before anything goes into it.",
          "Whatever you find missing today can still be fixed tomorrow. Write it down rather than remembering it.",
          "Exact scope confirmed the week prior, once the space is settled.",
        ],
      },
      {
        id: "thu-depart",
        start: "2:30p",
        title: "Depart for the Woodmark Hotel",
        kind: "session",
        detail: [
          "1200 Carillon Point, Kirkland. Give yourself the drive plus a margin — better early than arriving alongside families.",
        ],
      },
      {
        id: "thu-event",
        start: "3:00p",
        end: "5:00p",
        title: "Meet the Guides",
        kind: "leadership",
        detail: [
          "The first time most of these families meet any of us. Logistics are handled; our job is to be present and easy to talk to.",
          "You'll get the same handful of questions all evening — what two-hour learning actually is, what the afternoons look like, how their kid gets placed. Have an answer you're comfortable with before you arrive rather than assembling one in front of a parent.",
          "One thing worth knowing: Alpha is not political, not religious, and holds no social points of view. The answer to any version of that question is the three commitments.",
        ],
      },
    ],
  },

  {
    id: "friday",
    status: "past",
    label: "Friday",
    dayName: "Friday",
    date: "Friday, September 4, 2026",
    hours: "8:00a–5:00p · CPR on site 1:00–3:30p",
    title: "Finish",
    thesis: "We closed everything out. Kids arrived the next Tuesday.",
    point:
      "Nothing new started that day. The morning finished the rooms and closed the last orders. The afternoon was CPR and First Aid on site, and we walked the deliverables together before we left.",
    theme: {
      name: "Alpenglow",
      accent: "#e8a58f",
      soft: "rgba(232,165,143,0.28)",
      glow: "rgba(232,165,143,0.10)",
      image: "/images/days/friday.jpg",
      imagePosition: "50% 22%",
      imageHeight: "72vh",
    },
    blocks: [
      { id: "fri-coffee", start: "8:00a", title: "Coffee", kind: "meal" },
      {
        id: "fri-reps",
        start: "8:30a",
        end: "9:15a",
        title: "Launch reps — the last round",
        kind: "workUnit",
        detail: [
          "By the end of this block every guide has run a real Launch in front of the room. That was the point.",
        ],
      },
      {
        id: "fri-set",
        start: "9:15a",
        end: "11:30a",
        title: "Set the spaces",
        kind: "build",
        detail: [
          "Check charts and reward ladders on the walls. Materials out. Standard-school mode set, unlocks visible from the starting desk.",
          "Walk your first day while you're standing in it — arrival window through first Closing, on the actual clock. What you find missing here is the last chance to fix it before Tuesday.",
        ],
        output: "Finished, kid-ready rooms.",
      },
      {
        id: "fri-orders",
        start: "11:30a",
        end: "12:00p",
        title: "Final orders placed",
        kind: "session",
        detail: [
          "The last thing that can still arrive before Tuesday. Anything after this is a week two problem — name it as one.",
        ],
      },
      { id: "fri-lunch", start: "12:00p", end: "1:00p", title: "Lunch", kind: "meal" },
      {
        id: "fri-cpr",
        start: "1:00p",
        end: "3:30p",
        title: "CPR, AED and First Aid certification",
        kind: "session",
      },
      {
        id: "fri-deliverables",
        start: "3:30p",
        end: "4:15p",
        title: "Deliverables check",
        kind: "session",
        detail: [
          "Every org deliverable submitted: workshops committed, the full-year roadmap, the motivational model, S1 daily and weekly schedules, bootcamp launches and the Townhall plan.",
          "Submitted means linked on Kirkland's row of the S1 Guide Deliverables sheet. A finished artifact sitting in someone's Drive is not submitted.",
        ],
        output: "A gap list with owners and dates for anything still outstanding.",
        links: [
          { label: "S1 Guide Deliverables sheet", url: "https://docs.google.com/spreadsheets/d/10J5Uwd6jmgzEEwI2fVeFigQBDXCixtA8ToC07ZUYVE8/edit" },
        ],
      },
      {
        id: "fri-closing",
        start: "4:15p",
        end: "5:00p",
        title: "Closing · the last one",
        kind: "workUnit",
        detail: ["Then go home. Kids arrive Tuesday."],
      },
    ],
  },
];

// ── Part 3 · What we delivered ───────────────────────────────────────────────

export const archiveByFriday = {
  eyebrow: "By Friday",
  heading: "Five things, submitted.",
  intro:
    "Submitted meant linked on Kirkland's row of the S1 Guide Deliverables sheet. A finished artifact sitting in someone's Drive didn't count. We checked all five together at 3:30 on Friday.",
  items: [
    {
      n: 1,
      title: "Workshops",
      when: "Committed Wednesday noon",
      detail:
        "Four minimum per level, all three life skills covered. Lead-approved and committed in the Guide's Guide Builder — drafted doesn't count, and only committed workshops reach Guide Platform.",
    },
    {
      n: 2,
      title: "26-27 Workshop Roadmap",
      when: "Tuesday",
      detail:
        "Per level, linked in column J. Workshop names can be generic; the AlphaTest cell is the one that matters — one sentence naming the measurable bar a student clears.",
    },
    {
      n: 3,
      title: "Motivational Model",
      when: "Tuesday",
      detail:
        "A reward ladder per level, built from the S1 Playbook default and this year's Alpha rules. Plus a fall MAP approach for grades 4–8, who are the only levels that get an achievement-based model this round.",
    },
    {
      n: 4,
      title: "S1 Daily + Weekly Schedule",
      when: "Tuesday",
      detail:
        "The daily schedule is standard across the network — we confirm it rather than design it. The weekly workshop schedule is ours to build.",
    },
    {
      n: 5,
      title: "Bootcamp Launches + Townhall Plan",
      when: "Friday morning",
      detail:
        "The org already built these. Adapted to our kids, not built from scratch — the first Launches a new kid ever sees, and the plan for the first Townhall of the year.",
    },
  ],
  outro:
    "Campus jobs were the sixth thing, and they weren't ours to submit. Jobs are a Townhall decision, so students voted on which ones existed once they arrived.",
  link: {
    label: "S1 Guide Deliverables sheet",
    url: "https://docs.google.com/spreadsheets/d/10J5Uwd6jmgzEEwI2fVeFigQBDXCixtA8ToC07ZUYVE8/edit",
  },
};

// ── Part 4 · How the week ran ────────────────────────────────────────────────

export const archivePrep = {
  eyebrow: "Prep & Who Ran What",
  heading: "Who was on the floor, and what had to be true before Monday.",
  distributionRule:
    "Most of the week was led from the front by the Head Guide and the Training team. Guides took on the work units guides run most, and by Thursday every guide was delivering rather than listening. The goal by Friday wasn't that the room had been told things. It was that the whole team had run the units, built the workshops, and set their own rooms.",

  floor: [
    {
      block: "Mon 8:30a · Welcome + State of Alpha Kirkland",
      who: "Head Guide",
      notes: "Where this campus sits in the foundational year. House Rules read at the end.",
    },
    {
      block: "Mon 9:30a · The shape of an Alpha day",
      who: "Head Guide",
      notes: "Six work units named, daily rhythm walked. The map, not the mechanics.",
    },
    {
      block: "Mon 10:15a · The behavioral model",
      who: "Training team",
      notes: "5% policy, 95% curriculum. Weighted toward middle school scenarios.",
    },
    {
      block: "Mon 1:00p · Workshop kickoff, then the build",
      who: "Training team, level pairs building",
      notes: "The longest thread of the week. Runs again Tuesday and closes Wednesday.",
    },
    {
      block: "Mon 3:30p · Supply audit",
      who: "Level pairs, in your own rooms",
      notes: "Two lists — room basics order today, workshop materials wait for Wednesday.",
    },
    {
      block: "Tue 9:00a · Limitless Launch",
      who: "A guide",
      notes: "The unit every kid feels first, every day.",
    },
    {
      block: "Tue 9:40a · Limitless Meetings",
      who: "A guide",
      notes: "The 3Cs framework, and how a meeting differs from a check-in.",
    },
    {
      block: "Tue 10:20a · The other four units + the weekly load",
      who: "Head Guide",
      notes: "Both lunches are work units, not breaks. Then the honest conversation about volume.",
    },
    {
      block: "Wed 1:45p · Bootcamp + check chart",
      who: "Head Guide",
      notes: "Built by the wider org. This is where it transfers to a campus that wasn't in the room.",
    },
    {
      block: "Thu 8:30a · Ongoing check charts",
      who: "Head Guide",
      notes: "And how they differ from the bootcamp chart. Different instruments, different jobs.",
    },
    {
      block: "Thu 10:00a · Work unit reps",
      who: "Every guide. MS first, then L2, L1, LL",
      notes: "Coached out loud in front of the room.",
    },
    {
      block: "Thu 3:00p · CPR + First Aid",
      who: "External trainer",
      notes: "Booked before the week starts.",
    },
    {
      block: "Daily 8:30a · Launch rep",
      who: "A different guide each day",
      notes: "Tue, Wed, Fri. Everyone runs one before the week ends.",
    },
    {
      block: "Fri 9:00a and 1:00p · Set the space",
      who: "Level pairs, in your rooms",
      notes: "The Head Guide floated with the gap lists and a card.",
    },
  ],

  commitments: {
    heading: "What leadership owed the team that week",
    intro:
      "These were the obligations on the leadership side of the room, written down so the team could hold us to them.",
    groups: [
      {
        heading: "Before Monday",
        items: [
          "The Training team confirmed in writing for Monday morning — the whole day is built around it",
          "CPR booked for Thursday 3:00",
          "Guides told which units they're taking, with a week to prepare and not a weekend",
          "Every account live and tested, not assumed",
          "Four rooms unlocked and cleared, whatever state they're in",
          "The workshop spec and gap-list sheets printed and waiting on your station",
        ],
      },
      {
        heading: "During the week",
        items: [
          "Nothing you're asked to build this week gets invented on the spot by us either — if a block is on the schedule, it has a spec",
          "Gap-list lines answered out loud, in the room, the same day. A list nobody responds to is a list nobody writes again.",
          "Ordering happens live in the block, not added to somebody's evening",
          "If something isn't working by Wednesday, say so. Changing the schedule mid-week is allowed and is not a failure.",
        ],
      },
      {
        heading: "Friday",
        items: [
          "Someone floating the rooms with the gap lists and a card, so what you find missing at 2pm can still be fixed before Monday",
          "The deliverables check done with you, not to you",
          "A named date for anything still unfinished — no “we'll sort it out”",
          "You leave when your room is ready. Scheduled to 5:00, aiming for 3:30, and finishing early is the reward for finishing well.",
        ],
      },
    ],
  },

  openItems: [
    {
      title: "The space",
      body: "Still unresolved. Friday's content and the depth of setup both depend on it. Confirmed the week prior — the block shape holds either way, but the scope inside it doesn't.",
    },
    {
      title: "Meet and Greet",
      body: "TBD whether Kirkland runs one and when. If it falls inside Aug 31 – Sep 4, it needs its own prep block and Friday changes.",
    },
    {
      title: "Food",
      body: "Depends on the space. Lunch breaks at noon every day regardless — whether that's catered in, off campus, or on your own gets decided once we know where we are.",
    },
    {
      title: "A guide Townhall",
      body: "Not currently in the week. Wednesday produces the Bootcamp Townhall plan for kids, but the team never runs the format themselves. Worth adding if Thursday's reps finish early.",
    },
  ],

  nameTags:
    "Your name on top. Underneath: the name of the teacher who changed your life. That's the tag. It's the first thing anyone asks you about, and with six people who've never met each other it does more work than any icebreaker.",

  staging: [
    {
      heading: "Paper",
      items: [
        "The workshop spec, one per level pair — four minimum, three life skills, double up where you need it",
        "Gap-list sheets, one per room — what, who orders it, by when",
        "Work unit one-pagers for all six units",
        "Blank check chart template per level, poster size",
        "First-day run-of-show template, poster size, one per level pair",
        "The org's S1 deliverables list, printed and on the wall all week",
      ],
    },
    {
      heading: "Room",
      items: [
        "Chairs that move — Thursday's reps need a real circle",
        "Four level stations, labeled",
        "A build wall — first-day run-of-shows and check charts go up and stay up",
        "A deliverables wall — the seven org artifacts, ticked off as they land",
        "A speaker that gets loud, two visible timers",
        "Post-its, Sharpies, painter's tape, a second marker colour per level",
      ],
    },
    {
      heading: "Staged in each room before Friday",
      items: [
        "Painter's tape, mounting putty, push pins, command hooks",
        "A step ladder per room",
        "Cubby and locker tags with every kid's name pre-printed",
        "Student photos printed, if enrollment has them",
        "Scissors, box cutters, string, clips",
        "Blank chart paper for the shout-out wall",
        "A cart for moving furniture, and enough hands",
      ],
    },
    {
      heading: "Working before Monday",
      items: [
        "Every guide's accounts confirmed live — not assumed",
        "The workshop builder open and tested",
        "A vendor list with contacts, for Monday and Wednesday ordering",
        "All four rooms unlocked and cleared, whatever state they're in",
        "The Meet the Guides deck template, so Monday 4:30 is filling it in rather than designing it",
      ],
    },
  ],
};

export const archivePrepLabels = {
  floor: "Who was on the floor",
  open: "What was still open",
  stage: "What we printed and staged",
  nameTags: "Name tags",
};

export const archiveRules = {
  eyebrow: "House Rules",
  heading: "We read these out at the end of the State of Alpha Kirkland.",
  items: [
    {
      title: "No lecturing",
      body: "Not from leadership, not from returning guides, not in a build block. If you're talking for more than four minutes straight, you've turned it into school. We don't do that to kids and we're not doing it to each other.",
    },
    {
      title: "We build every day",
      body: "Every day ends with something on the wall. If a block doesn't produce an artifact, it doesn't belong on the schedule.",
    },
    {
      title: "Phones down in Launch and Closing",
      body: "Kids get told no screens at Launch. Same rule applies to the adults. It's fifteen minutes.",
    },
    {
      title: "Say it to the face",
      body: "Brutally honest without being brutal. Feedback in this building happens in the room, out loud, in front of people. If you're saving it for the hallway, you're saving it for nobody.",
    },
    {
      title: "Strategy, not comfort",
      body: "“That was great, don't worry about it” lowers what people believe they're capable of. “Here's the one thing that would make it land” is the job. Practice it on each other before you practice it on a kid.",
    },
    {
      title: "New guides go first",
      body: "Every rep, every demo, every delivery. Returning guides get the harder job of coaching, not performing.",
    },
    {
      title: "AI is a tool, not the author",
      body: "Use it to find experts and sources. Never for your summaries, your insights or your Spiky POVs. If AI could have written it, it isn't your thinking — and it won't be worth anything to a kid.",
    },
    {
      title: "Everything ships with a name and a date",
      body: "No “we should probably.” Owner, first step, start date, or it didn't happen.",
    },
  ],
  closingLine:
    "If they leave Friday thinking “I helped build this school” — we'll have a completely different culture.",
  notDoing: [
    "No icebreakers that don't earn their time.",
    "No policy read-alouds. Handbook goes in an email.",
    "No slide deck longer than what fits on one wall.",
    "No sitting through a demo for a tool you already use.",
    "No “we'll figure that out in Week 1.” Week 1 is for kids.",
    "No day that ends without a build and without shout-outs.",
  ],
};

export const archiveNotDoingLabel = "What we didn’t do";

// ── Part 5 · S1-only links ───────────────────────────────────────────────────

export const archiveS1Links = {
  eyebrow: "Session 1 only",
  heading: "Two links that only applied to Session 1.",
  note: "Both are still live. Sign in with your Alpha account.",
  items: [
    {
      title: "S1 Guide Deliverables · where everything gets submitted",
      description: "The org's tracking sheet. Every deliverable we build this week gets linked on Kirkland's row here — that's what submitted means. The 26-27 workshop roadmap goes in column J. Nothing counts until it's on this sheet.",
      url: "https://docs.google.com/spreadsheets/d/10J5Uwd6jmgzEEwI2fVeFigQBDXCixtA8ToC07ZUYVE8/edit",
    },
    {
      title: "Week 1, Session 1 · Student Onboarding",
      description: "The dashboard you run your first three days from. Calendar B is ours — Sept 8-10. Mornings run as normal; afternoons are onboarding and Workshop Sprints, one life skill per day, ending with an off-campus community standards sprint.",
      url: "https://week1-session1.netlify.app/",
    },
  ],
};
