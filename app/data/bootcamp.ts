// ─────────────────────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES HERE.
// Edit this file to change the site. You should almost never need to touch JSX.
//
// PLACEHOLDERS: anything marked "TBD" is a Kirkland fact I don't have yet.
// Search this file for "TBD" to find every one of them.
// ─────────────────────────────────────────────────────────────────────────────

export type BlockKind =
  | "build" // a numbered team build
  | "sprint" // the independent Build Sprint
  | "workUnit" // Launch, Closing, Townhall, Limitless Meeting
  | "leadership" // the rare leadership-fronted block
  | "session" // demo, workshop, discussion
  | "meal"; // food, breaks, dinners

export type Block = {
  id: string;
  start: string; // "8:55a" — keep the format consistent, it's set in mono type
  end?: string;
  title: string;
  kind: BlockKind;
  owner?: string; // who runs it
  detail?: string[]; // paragraphs, revealed when the block is opened
  output?: string; // what's on the wall when it's over
  buildNumber?: number; // links a block to a numbered build
};

export type DayTheme = {
  name: string;
  accent: string;
  soft: string;
  glow: string;
  image?: string;
  imagePosition?: string;
  imageHeight?: string;
};

export type Day = {
  id: string; // becomes the anchor: #monday
  label: string; // nav label
  dayName: string; // "Monday"
  date: string;
  hours: string;
  title: string; // "Discover"
  thesis: string; // one line
  point: string; // "The point of today:"
  theme: DayTheme;
  blocks: Block[];
};

export type Build = {
  n: number;
  title: string;
  when: string;
  duration: string;
  who: string;
  summary: string;
  output: string;
};

// ── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  titleLines: ["ALPHA", "KIRKLAND"],
  subtitle: "Campus Launch",
  statement: ["A new campus.", "A new team.", "A shared beginning."],
  date: "Aug 31 - Sep 4, 2026",
  stats: [
    { label: "Mon–Wed", value: "8:30–5:00" },
    { label: "Thu", value: "8:30–5:00" },
    { label: "Fri", value: "8:30–3:30" },
    { label: "Seven builds", value: "plus the Sprint" },
  ],
};

// ── Navigation ───────────────────────────────────────────────────────────────
// Separate from `days` on purpose, so you can group Thursday + Friday under one
// nav item the way the NYC site groups nothing — your week is longer.

export const navItems = [
  { label: "Mon", href: "#monday" },
  { label: "Tue", href: "#tuesday" },
  { label: "Wed", href: "#wednesday" },
  { label: "Thu / Fri", href: "#thursday" },
  { label: "The Builds", href: "#builds" },
  { label: "Sprint + BrainLift", href: "#sprint" },
  { label: "Prep", href: "#prep" },
  { label: "House Rules", href: "#rules" },
];

// ── Our Story ────────────────────────────────────────────────────────────────

export const story = {
  eyebrow: "Our Story",
  heading: "Why this week matters",
  paragraphs: [
    "A campus is not a building. It's a set of decisions that a group of adults made together, on purpose, before the first kid walked through the door.",
    "This week is where those decisions get made. Not discussed — made, written down, put on a wall, given an owner and a date. By Friday afternoon every room in this building will have been physically built by the people who are going to run it.",
    "Nobody leaves a day without something on the wall.",
  ],
};

// ── The week ─────────────────────────────────────────────────────────────────
// Monday–Wednesday below are adapted from the NYC three-day run-of-show.
// Thursday and Friday are scaffolds — the real Kirkland blocks go in the same
// shape. Delete the placeholder blocks and add yours.

export const days: Day[] = [
  {
    id: "monday",
    label: "Monday",
    dayName: "Monday",
    date: "Monday, August 31, 2026",
    hours: "8:30a–5:00p · Whole Team Dinner 6:30p",
    title: "Discover",
    thesis: "Discover the guide you want to be.",
    point:
      "Level placements land in the first hour, so by mid-afternoon every guide is building their first day of school with the level team they'll run the year with. Ikigai in the morning. The TimeBack block splits — half this room already knows the platform, so they get a head start on workshop seeding instead of sitting through a demo they don't need.",
    theme: {
      name: "Sunrise",
      accent: "#f3d7a3",
      soft: "rgba(243,215,163,0.28)",
      glow: "rgba(243,215,163,0.10)",
      image: "/images/days/monday.jpg",
    },
    blocks: [
      {
        id: "mon-coffee",
        start: "8:30a",
        title: "Team Coffee and Bagels at the door",
        kind: "meal",
      },
      {
        id: "mon-launch",
        start: "8:55a",
        title: "Launch #1",
        kind: "workUnit",
        owner: "Head Guide — TBD",
        detail: [
          "A real Limitless Launch, full spec, cold open. Not an explanation of a Launch — a Launch.",
          "Phones down. Same rule the kids get.",
        ],
      },
      {
        id: "mon-state",
        start: "9:10a",
        title: "State of Alpha Kirkland + Level Placements",
        kind: "leadership",
        owner: "Head of Schools — TBD",
        detail: [
          "The only leadership-fronted block of the week. Forty minutes total across five days.",
          "Placements are read out at 9:35a and printed big for the wall. House Rules are read at the end of this block.",
        ],
      },
      {
        id: "mon-ikigai",
        start: "10:00a",
        title: "Ikigai",
        kind: "session",
        detail: [
          "Everybody writes their own, in the room, including leadership. Chairs in a real circle.",
        ],
      },
      {
        id: "mon-split",
        start: "10:40a",
        title: "TimeBack Demo  /  Workshop Seeding — the split",
        kind: "session",
        owner: "Demo owner: TBD",
        detail: [
          "Two rooms. Split by TimeBack fluency, not tenure — some new hires came from other Alpha campuses and already know it cold; some returning guides never got comfortable. Ask people, don't assume.",
          "The demo needs someone who has watched a kid stall out mid-Pomodoro and knows what to do about it, not someone reading the explainer.",
          "The other room gets a head start on workshop seeding, which feeds Build 2 on Tuesday.",
        ],
      },
      {
        id: "mon-lunch",
        start: "12:00p",
        title: "Lunch off campus, in pairs, 90 minutes, no agenda",
        kind: "meal",
        detail: ["New guide + returning guide. Nobody picks their own pairing."],
      },
      {
        id: "mon-alignment",
        start: "1:10p",
        title: "Work Unit Discussion + Alignment",
        kind: "session",
        owner: "Four returning guides open, the room works it",
        detail: [
          "One opener each for Launch, Limitless Meetings, Townhall, Closing. Five minutes of setup, then it's the room's.",
          "Leadership is in the room, not at the front.",
        ],
      },
      {
        id: "mon-build1",
        start: "3:05p",
        end: "4:35p",
        title: "Build 1 · The Best First Day of School",
        kind: "build",
        buildNumber: 1,
        owner: "Level teams",
        detail: [
          "Start from the sentence you want the kid to say in the car and build backwards.",
        ],
        output:
          "Poster-size run-of-shows covering the arrival window and the school day, plus a Back to School Night plan per level. They stay on the wall until Friday.",
      },
      {
        id: "mon-closing",
        start: "4:35p",
        title: "Closing #1",
        kind: "workUnit",
        owner: "Head Guide — TBD",
        detail: [
          "Models the shout-out spec the new guides run for the rest of the week. Tomorrow's Launch and Closing get assigned by name here.",
        ],
      },
      {
        id: "mon-dinner",
        start: "6:30p",
        title: "Whole Team Dinner — one long table, everybody",
        kind: "meal",
      },
    ],
  },

  {
    id: "tuesday",
    label: "Tuesday",
    dayName: "Tuesday",
    date: "Tuesday, September 1, 2026",
    hours: "8:30a–5:00p · Level Team Dinners 6:30p",
    title: "Build",
    thesis: "Design the experience your students deserve.",
    point:
      "The heaviest day. The Build Sprint runs as one uninterrupted 2.5-hour block — your problem, your BrainLift, your build, start to finish, no coming back to it later. Then workshops, a Townhall the guides own, and the motivational model as the last thing we do together before dinner with your level team.",
    theme: {
      name: "Douglas fir",
      accent: "#a7c1a1",
      soft: "rgba(167,193,161,0.28)",
      glow: "rgba(167,193,161,0.10)",
      image: "/images/days/tuesday.jpg",
    },
    blocks: [
      {
        id: "tue-coffee",
        start: "8:30a",
        title: "Team Coffee and Bagels at the door",
        kind: "meal",
      },
      {
        id: "tue-launch",
        start: "8:55a",
        title: "Launch #2",
        kind: "workUnit",
        owner: "A new guide, assigned at Closing #1",
        detail: ["They build it the night before. New guides go first."],
      },
      {
        id: "tue-sprint",
        start: "9:15a",
        end: "11:45a",
        title: "The Alpha Build Sprint",
        kind: "sprint",
        detail: [
          "One sitting. Two and a half hours, straight through, with a stretch in the middle. Pick your problem, build the BrainLift, build the thing.",
          "Independent — one guide, one problem you actually care about, one thing you put your name on.",
        ],
        output:
          "BrainLift, artifact and three numbers (cost, owner, start week) posted by 11:45a.",
      },
      {
        id: "tue-vendor",
        start: "12:45p",
        title: "Vendor Planning over lunch, catered in",
        kind: "meal",
        owner: "Campus lead + level leads",
        detail: ["Year 1 vendor list on the table. Feeds Build 2 immediately after."],
      },
      {
        id: "tue-build2",
        start: "12:45p",
        end: "2:45p",
        title: "Build 2 · Banger Workshops",
        kind: "build",
        buildNumber: 2,
        owner: "Level teams",
        detail: [
          "Through the Workshop Brainstorm form. Life skill, AlphaTest, and everything you need to run it. Seeded Monday by the guides who skipped the TimeBack demo.",
        ],
        output: "Three minimum per level, each stress-tested by a different level team.",
      },
      {
        id: "tue-townhall",
        start: "2:55p",
        title: "Guide Townhall",
        kind: "workUnit",
        owner: "A guide Mayor, a recorder, a timekeeper",
        detail: [
          "Thirty minutes, entirely the team's. Leadership sits outside the circle and nobody from leadership speaks.",
          "The ticket has to be a real decision this campus will honor whichever way the vote goes.",
        ],
      },
      {
        id: "tue-build3",
        start: "3:25p",
        end: "4:50p",
        title: "Build 3 · The World's Best Motivational Model",
        kind: "build",
        buildNumber: 3,
        owner: "Whole team, then levels",
        detail: [
          "XP, TimeBack, Alpha Bucks, badges, the economy, the ceremonies. What a kid earns, sees, spends and feels — plus the unlock ladder from standard-school mode to two-hour learner.",
        ],
        output: "One campus-wide spec and a reward ladder per level.",
      },
      {
        id: "tue-closing",
        start: "4:50p",
        title: "Closing #2",
        kind: "workUnit",
        owner: "A new guide",
      },
      {
        id: "tue-dinner",
        start: "6:30p",
        title: "Level Team Dinners — one table per level, level leads book them",
        kind: "meal",
      },
    ],
  },

  {
    id: "wednesday",
    label: "Wednesday",
    dayName: "Wednesday",
    date: "Wednesday, September 2, 2026",
    hours: "8:30a–5:00p",
    title: "Ship It",
    thesis: "Build the systems that make it possible.",
    point:
      "Culture first thing, because it's the build everybody has an opinion about and nobody ever schedules. Then the check chart, then the workshop bank closes.",
    theme: {
      name: "Puget Sound",
      accent: "#9fbccf",
      soft: "rgba(159,188,207,0.28)",
      glow: "rgba(159,188,207,0.10)",
      image: "/images/days/wednesday.jpg",
    },
    blocks: [
      {
        id: "wed-coffee",
        start: "8:30a",
        title: "Team Coffee and Bagels at the door",
        kind: "meal",
      },
      {
        id: "wed-launch",
        start: "8:55a",
        title: "Launch #3",
        kind: "workUnit",
        owner: "A new guide",
      },
      {
        id: "wed-build4",
        start: "9:10a",
        end: "10:40a",
        title: "Build 4 · Traditions + Culture",
        kind: "build",
        buildNumber: 4,
        owner: "Mixed groups, then the whole room",
        detail: [
          "The chant. The Friday ritual. The wall. The award nobody can buy. The thing a sixth grader tells their cousin about. Plus staff traditions — culture isn't only for kids.",
        ],
        output: "Five named traditions, each with a human owner and a first run date.",
      },
      {
        id: "wed-build5",
        start: "10:50a",
        end: "12:05p",
        title: "Build 5 · Student Bootcamp Check Chart",
        kind: "build",
        buildNumber: 5,
        owner: "Level teams",
        detail: [
          "The chart a brand-new kid earns their way through, wired rung for rung to the reward ladder from Build 3. Plus the plan for the kid it takes three times as long.",
        ],
        output:
          "Poster-size check charts per level, vertical handoffs checked between levels.",
      },
      {
        id: "wed-lunch",
        start: "12:05p",
        title: "Working lunch in the room",
        kind: "meal",
      },
      {
        id: "wed-build6",
        start: "12:50p",
        end: "1:35p",
        title: "Build 6 · Workshops, Finished",
        kind: "build",
        buildNumber: 6,
        owner: "Level teams",
        detail: [
          "Close out Build 2. Everything submitted with a real vendor and a real cost, then sequenced into sessions.",
        ],
        output: "The workshop bank shuts today. Vendored, costed, on the calendar.",
      },
      {
        id: "wed-closing",
        start: "4:35p",
        title: "Closing #3",
        kind: "workUnit",
        owner: "One returning + one new guide, together",
        detail: ["The handoff, made visible."],
      },
    ],
  },

  // ── SCAFFOLD ──────────────────────────────────────────────────────────────
  // Thursday and Friday need the real Kirkland schedule. Structure is ready.
  {
    id: "thursday",
    label: "Thursday",
    dayName: "Thursday",
    date: "Thursday, September 3, 2026",
    hours: "8:30a–5:00p",
    title: "TBD",
    thesis: "TBD — one line, same shape as the other days.",
    point: "TBD",
    theme: {
      name: "Lichen",
      accent: "#cbcb96",
      soft: "rgba(203,203,150,0.28)",
      glow: "rgba(203,203,150,0.10)",
      image: "/images/days/thursday.jpg",
    },
    blocks: [
      {
        id: "thu-placeholder",
        start: "8:55a",
        title: "Blocks go here — copy the shape of any Monday block",
        kind: "session",
      },
    ],
  },
  {
    id: "friday",
    label: "Friday",
    dayName: "Friday",
    date: "Friday, September 4, 2026",
    hours: "8:30a–3:30p",
    title: "TBD",
    thesis: "TBD",
    point: "TBD",
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
      {
        id: "fri-build7",
        start: "1:35p",
        end: "2:45p",
        title: "Build 7 · Set the Space",
        kind: "build",
        buildNumber: 7,
        owner: "Level leads, in your rooms",
        detail: [
          "Stop designing, go build the room. Check charts and reward ladders on the walls, standard-school mode set, unlocks visible from the starting desk, the first-day clock walked physically.",
        ],
        output: "Finished, kid-tested rooms and a gap list per level with owners and order-by dates.",
      },
      {
        id: "fri-walkthrough",
        start: "2:45p",
        title: "First Day Walkthrough",
        kind: "session",
        owner: "Level leads",
        detail: [
          "The callback that closes the week — walked standing in the finished rooms, on the actual clock.",
        ],
      },
      {
        id: "fri-closing",
        start: "3:15p",
        title: "Closing · the last one",
        kind: "workUnit",
        owner: "One returning + one new guide",
      },
    ],
  },
];

// ── The Seven Builds ─────────────────────────────────────────────────────────

export const buildsIntro = {
  eyebrow: "The Seven Builds",
  heading: "Numbered so nothing gets lost",
  body: "Builds 1–7 are team work, mostly level teams, and they compound in order: Build 1 writes the day, Build 2 fills the afternoons, Build 3 wires the motivation, Build 4 names the culture, Build 5 builds the instrument that runs it, Build 6 closes the workshop bank, Build 7 makes all of it physical. The Build Sprint is separate and independent — your problem, your build, your name on it.",
};

export const builds: Build[] = [
  {
    n: 1,
    title: "The Best First Day of School",
    when: "Mon 3:05–4:35",
    duration: "90 min",
    who: "Level teams",
    summary:
      "The arrival window, the school day, and the Back to School Night plan. Start from the sentence you want the kid to say in the car and build backwards.",
    output:
      "Poster-size run-of-shows per level, plus a Back to School Night plan. They stay on the wall until Friday, when we walk them in the rooms.",
  },
  {
    n: 2,
    title: "Banger Workshops",
    when: "Tue 12:45–2:45",
    duration: "2 hours",
    who: "Level teams",
    summary:
      "Life skill, AlphaTest, and everything you need to run it. Seeded Monday by the guides who skipped the TimeBack demo, and closed out in Build 6.",
    output: "Three minimum per level, each stress-tested by a different level team.",
  },
  {
    n: 3,
    title: "The World's Best Motivational Model",
    when: "Tue 3:25–4:50",
    duration: "85 min",
    who: "Whole team, then levels",
    summary:
      "XP, TimeBack, Alpha Bucks, badges, the economy, the ceremonies. What a kid earns, sees, spends and feels — plus the unlock ladder from standard-school mode to two-hour learner.",
    output:
      "One campus-wide spec and a reward ladder per level. Build 5 wires the check charts straight into it.",
  },
  {
    n: 4,
    title: "Traditions + Culture",
    when: "Wed 9:10–10:40",
    duration: "90 min",
    who: "Mixed, then whole team",
    summary:
      "The chant. The Friday ritual. The wall. The award nobody can buy. The thing a sixth grader tells their cousin about. Plus staff traditions.",
    output: "Five named traditions, each with a human owner and a first run date on the calendar.",
  },
  {
    n: 5,
    title: "Student Bootcamp Check Chart",
    when: "Wed 10:50–12:05",
    duration: "75 min",
    who: "Level teams",
    summary:
      "The chart a brand-new kid earns their way through, wired rung for rung to the reward ladder from Build 3. Plus the plan for the kid it takes three times as long.",
    output: "Poster-size check charts, vertical handoffs checked between levels. They go on the wall in Build 7.",
  },
  {
    n: 6,
    title: "Workshops, Finished",
    when: "Wed 12:50–1:35",
    duration: "45 min",
    who: "Level teams",
    summary:
      "Close out Build 2. Everything submitted with a real vendor and a real cost, then sequenced into sessions.",
    output: "The workshop bank shuts today. Vendored, costed, on the calendar.",
  },
  {
    n: 7,
    title: "Set the Space",
    when: "Fri 1:35–2:45",
    duration: "70 min",
    who: "In your rooms",
    summary:
      "Stop designing, go build the room. Check charts and reward ladders on the walls, unlocks visible from the starting desk, the first-day clock walked physically.",
    output: "Finished, kid-tested rooms and a gap list per level with owners and order-by dates.",
  },
];

export const compounds: { build: string; input: string; feeds: string }[] = [
  {
    build: "1 · First Day",
    input: "Level placements, TimeBack demo, the work unit alignment sentences",
    feeds: "Build 7 — you walk this clock physically while setting the room.",
  },
  {
    build: "2 · Workshops",
    input: "Monday's workshop seeds, the vendor list, the Workshop Repository, AlphaTest examples",
    feeds: "Build 6, where the bank actually closes.",
  },
  {
    build: "3 · Motivational Model",
    input: "TimeBack demo, Alpha Bucks data, XP explainer",
    feeds: "Build 5 — every check chart unlock points at a rung on this ladder. Build 7 puts it on the wall.",
  },
  {
    build: "4 · Traditions + Culture",
    input: "Everything from earlier in the week. You can't name a culture before you've built something together.",
    feeds: "Build 7 — the chant, the wall and the award all need a physical home.",
  },
  {
    build: "5 · Check Chart",
    input: "Build 3's reward ladder",
    feeds: "Build 7 — it goes on your wall the same afternoon. Then it runs every day from Week 1.",
  },
  {
    build: "6 · Workshops, Finished",
    input: "Build 2, the vendor list, the session calendar",
    feeds: "Afternoon programming for every session. Vendor calls with names and dates.",
  },
  {
    build: "7 · Set the Space",
    input: "Builds 1, 3, 4 and 5 — all of them become physical here",
    feeds: "The first day of school. The last thing between the plan and a kid walking through the door.",
  },
];

// ── The Sprint ───────────────────────────────────────────────────────────────

export const sprint = {
  eyebrow: "The Alpha Build Sprint",
  heading: "See a problem. Build something better. Ship it. On your own.",
  prompt:
    "Build something that makes Alpha Kirkland 10x better this year. What's a problem you feel like you can solve that you're excited about?",
  independence:
    "The prompt says you, so it's you. Not a committee, not a team you got assigned to. One guide, one problem you actually care about, one thing you build and put your name on. Everything else this week is team work — this is the block that's yours.",
  runsIn:
    "Tuesday 9:15a to 11:45a. Two and a half hours, straight through, with a stretch in the middle. No kickoff-now-come-back-later — you sit down with a blank page and you stand up with something real.",
  phases: [
    {
      phase: "Pick it",
      time: "15 min",
      what: "Write your problem as one sentence on a card and put it on the wall. Read the wall — if three people wrote the same problem, that tells you something, but you still build your own.",
    },
    {
      phase: "BrainLift",
      time: "70 min",
      what: "Four nodes: Purpose, Experts, Knowledge Tree, Spiky POVs.",
    },
    { phase: "Stretch", time: "10 min", what: "On your feet. Ten minutes. Back in." },
    {
      phase: "Build it",
      time: "55 min",
      what: "The artifact itself. Your Spiky POVs are the design brief — if the build doesn't reflect them, the research was decoration.",
    },
  ],
  brainliftBar: [
    {
      node: "1 · Purpose",
      time: "8 min",
      minimum: "One sentence. “This BrainLift is about ___. I want to understand ___ so I can ___.”",
      ai: "AI OK — use it to sharpen the sentence",
    },
    {
      node: "2 · Experts",
      time: "15 min",
      minimum: "10 people, orgs or feeds. Who they are, what they focus on, why follow, where to find them.",
      ai: "AI OK for finding them",
    },
    {
      node: "3 · Knowledge Tree",
      time: "30 min",
      minimum: "6 sources you actually read or watched. Summary of each in your own words. 3 insights connecting across sources.",
      ai: "AI OK to find sources. NO AI for summaries or insights.",
    },
    {
      node: "4 · Spiky POVs",
      time: "17 min",
      minimum: "2 minimum. Truths that are true but surprising, or myths people assume are true and aren't.",
      ai: "NO AI for writing them. AI OK for the disagreement test.",
    },
  ],
  ultimateTest:
    "Ask AI the same question your Spiky POV answers. If AI agrees with you, it isn't spiky enough — go back. If AI disagrees, you've created new knowledge. That's the one thing on this page that can't be faked.",
  whyBrainlift: [
    {
      heading: "We use AI constantly. Most of us use it badly.",
      body: "AI already knows all the facts, and it gives generic answers to everybody. A BrainLift is how you make it useful for you specifically — you feed it your research, your experts, your insights, and it starts answering like someone who knows your world.",
    },
    {
      heading: "And the kids are going to build these.",
      body: "BrainLifts are the backbone of self-driven learning. If a guide has never built one, they can't coach a kid through one — and they definitely can't push a kid past DOK 3 into original thinking. Seventy minutes on Tuesday means every guide has done it with their hands before they ask a student to.",
    },
  ],
  judging: [
    { q: "Does it raise the bar?", a: "A parent touring in October would notice this and ask about it." },
    { q: "Would kids feel it in Week 1?", a: "A student could describe it at dinner on the first Friday." },
    { q: "Can we ship it by Week 3?", a: "Owner named, cost known, first step happens Monday." },
  ],
};

// ── Prep ─────────────────────────────────────────────────────────────────────

export const prep = {
  eyebrow: "Prep & Who Runs What",
  heading: "Leadership sets the table. The team runs the room.",
  distributionRule:
    "Across the week, leadership has the floor for about forty minutes total — the State of Alpha Kirkland and Level Placements. Everything else is delivered by a guide.",
  openItems: [
    {
      title: "TimeBack Demo owner",
      body: "Needs someone who has watched a kid stall out mid-Pomodoro and knows what to do about it, not someone reading the explainer.",
    },
    {
      title: "The TimeBack split list",
      body: "Who's in the demo and who goes to workshop seeding. Split by fluency, not tenure. Ask people, don't assume.",
    },
    {
      title: "The Townhall ticket",
      body: "It has to be a real decision this campus will honor whichever way the vote goes.",
    },
  ],
  nameTags:
    "Your name on top. Underneath: the name of the teacher who changed your life. That's the tag. It's the first thing anyone asks you about and it sets the bar for the whole week without a single slide.",
  staging: [
    {
      heading: "Paper",
      items: [
        "Level placement roster, printed big for the wall",
        "Work unit one-pagers — Launch, Limitless Meeting, Townhall, Closing",
        "Limitless Launch QC rubric",
        "First-day run-of-show template, poster size, one per level team",
        "Blank student check chart template per level, poster size",
        "Big cards for the Sprint problem wall",
      ],
    },
    {
      heading: "Room",
      items: [
        "Chairs that move — Ikigai and Townhall both need a real circle",
        "One labeled station per level team",
        "A problem wall for the Sprint — one card per guide, up all week",
        "A build wall — first-day run-of-shows go up Monday and stay all week",
        "Two rooms for the TimeBack split",
        "All classrooms unlocked and cleared before Build 7",
        "A speaker that actually gets loud, two visible timers",
        "Post-its, Sharpies, painter's tape, a second marker colour per level",
      ],
    },
    {
      heading: "Staged in each room before Build 7",
      items: [
        "Painter's tape, mounting putty, push pins, command hooks",
        "A step ladder per room",
        "Cubby and locker tags with every kid's name pre-printed",
        "Student photos printed, if you have them from enrollment",
        "Scissors, box cutters, string, clips",
        "Blank chart paper for the shout-out wall",
        "Printed gap-list sheet per level — what, who orders it, by when",
        "A cart for moving furniture, and enough hands",
      ],
    },
    {
      heading: "Food",
      items: [
        "Every morning: Team Coffee and Bagels at the door",
        "Monday lunch: off campus, in pairs, 90 minutes, no agenda",
        "Monday 6:30p: Whole Team Dinner — one long table, everybody",
        "Tuesday lunch: catered in, vendor planning on the table",
        "Tuesday 6:30p: Level Team Dinners — level leads book them",
        "Afternoon snack on the long days — 2:00 is where energy dies",
      ],
    },
  ],
};

// ── House Rules ──────────────────────────────────────────────────────────────

export const rules = {
  eyebrow: "House Rules",
  heading: "Read out at the end of the State of Alpha Kirkland.",
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

export const footer =
  "Alpha School Kirkland · Campus Launch Run-of-Show · Aug 31 - Sep 4, 2026. Click any block to open the detail.";
