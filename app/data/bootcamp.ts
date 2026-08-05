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
    { label: "Daily", value: "8:00-5:00" },
    { label: "Five builds", value: "one week" },
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
  { label: "The Five Builds", href: "#builds" },
  { label: "Build Sprint", href: "#sprint" },
  { label: "Evaluation", href: "#evaluation" },
  { label: "Prep", href: "#prep" },
  { label: "House Rules", href: "#rules" },
  { label: "Resources", href: "#resources" },
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
    hours: "8:00a–5:00p",
    title: "Foundation",
    thesis: "Understand what we're building before we build it.",
    point:
      "Six of you have never run a school year. Today isn't about mastering anything — it's about seeing the whole shape of the thing once, so the rest of the week has somewhere to land. CeCe is here to start workshops, the one piece built from scratch this week and the one with the longest tail.",
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
        start: "8:00a",
        title: "Coffee and name tags",
        kind: "meal",
      },
      {
        id: "mon-welcome",
        start: "8:30a",
        end: "9:30a",
        title: "Welcome + State of Alpha Kirkland",
        kind: "leadership",
        owner: "Ashley",
        detail: [
          "Where this campus sits in Alpha's foundational year, and what we're accountable for by Friday.",
          "House Rules are read at the end of this block.",
        ],
      },
      {
        id: "mon-shape",
        start: "9:30a",
        end: "10:15a",
        title: "The shape of an Alpha day",
        kind: "session",
        owner: "Ashley",
        detail: [
          "The six work units named and the daily rhythm walked end to end: Limitless Launch, Limitless Meetings, Get to Know You Lunch, Limitless Lunch, Townhall, Closing.",
          "The map, not the mechanics. Tuesday is where we go deep and Thursday is where you run them.",
        ],
      },
      {
        id: "mon-behavior",
        start: "10:15a",
        end: "12:00p",
        title: "The behavioral model",
        kind: "session",
        owner: "CeCe",
        detail: [
          "5% policy, 95% curriculum. The de-escalation ladder, strikes, and what actually happens before any of that.",
          "Weighted toward middle school scenarios — that's the room most likely to test a new adult in week one.",
        ],
      },
      { id: "mon-lunch", start: "12:00p", title: "Lunch", kind: "meal" },
      {
        id: "mon-workshop-kickoff",
        start: "1:00p",
        end: "1:45p",
        title: "Workshop build kickoff",
        kind: "session",
        owner: "CeCe",
        detail: [
          "The life skills roadmap, the workshop builder, and what separates a banger from a filler.",
          "The spec for this session: four workshops minimum per level, covering Independence, Giving and Receiving Feedback, and Upholding Community Standards. Double up on whichever your level needs most to start the year.",
        ],
      },
      {
        id: "mon-workshop-build",
        start: "1:45p",
        end: "3:30p",
        title: "Workshop build · working session",
        kind: "build",
        owner: "Level pairs, CeCe circulating",
        detail: [
          "First drafts. You'll come back to these Tuesday afternoon and close them Wednesday morning.",
        ],
        output: "At least one workshop drafted per level, against the four-workshop spec.",
      },
      {
        id: "mon-audit",
        start: "3:30p",
        end: "4:15p",
        title: "Supply audit",
        kind: "build",
        owner: "Level pairs, in your own rooms",
        detail: [
          "Walk every room. What's here, what's missing, what's broken. Write it down by level.",
          "Two lists: room basics, and anything workshop-specific. The second list waits for Wednesday's approvals.",
        ],
        output: "A gap list per level, with an owner and an order-by date on every line.",
      },
      {
        id: "mon-order",
        start: "4:15p",
        end: "4:30p",
        title: "Room basics ordered",
        kind: "session",
        owner: "Ashley + level leads",
        detail: [
          "The non-workshop list goes out today, before anyone leaves. A list that becomes a to-do doesn't arrive.",
        ],
      },
      {
        id: "mon-deck",
        start: "4:30p",
        end: "5:00p",
        title: "Meet the Guides deck",
        kind: "build",
        owner: "Everyone",
        detail: [
          "Eight photos, eight short bios. Families at a brand-new campus don't know a single one of us yet.",
          "Done is better than polished — this ships tomorrow.",
        ],
        output: "Deck ready to send to families.",
      },
    ],
  },

  {
    id: "tuesday",
    label: "Tuesday",
    dayName: "Tuesday",
    date: "Tuesday, September 1, 2026",
    hours: "8:00a–5:00p",
    title: "The Work",
    thesis: "What this job actually is, week in and week out.",
    point:
      "The honest day. Six work units, the weekly cadence, and the real volume of submission and QC. Better to know the workload now than discover it in October. Sanura and Kris take the two units guides run most — hearing it from someone who ran them all last year lands differently.",
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
        id: "tue-launch-unit",
        start: "9:00a",
        end: "9:40a",
        title: "Limitless Launch — the work unit",
        kind: "workUnit",
        owner: "Sanura",
        detail: [
          "The unit every kid feels first, every single day. What the spec asks for and what it looks like when it lands.",
        ],
      },
      {
        id: "tue-meetings-unit",
        start: "9:40a",
        end: "10:20a",
        title: "Limitless Meetings — the work unit",
        kind: "workUnit",
        owner: "Kris",
        detail: [
          "The 3Cs framework, and how a meeting differs from a check-in.",
        ],
      },
      {
        id: "tue-other-units",
        start: "10:20a",
        end: "11:15a",
        title: "The other four units",
        kind: "workUnit",
        owner: "Ashley",
        detail: [
          "Get to Know You Lunch, Limitless Lunch, Townhall, Closing.",
          "Both lunches are work units with specs and QC, not breaks. Get to Know You runs in Session 1; Limitless Lunch every session after.",
        ],
      },
      {
        id: "tue-load",
        start: "11:15a",
        end: "12:00p",
        title: "The weekly load",
        kind: "leadership",
        owner: "Ashley",
        detail: [
          "What gets submitted, who quality-checks it, how fast feedback comes back, and where every spec lives.",
          "Real numbers. This is the block where you find out what the job weighs — and it's better to hear it on day two than to discover it in October.",
        ],
      },
      { id: "tue-lunch", start: "12:00p", title: "Lunch", kind: "meal" },
      {
        id: "tue-workshop",
        start: "1:00p",
        end: "3:00p",
        title: "Workshop build · working session",
        kind: "build",
        owner: "Level pairs, CeCe circulating",
        detail: [
          "The long build block of the week. Four per level, all three life skills covered.",
        ],
        output: "Every level at three or more workshops by 3:00p, ready to close tomorrow.",
      },
      {
        id: "tue-motivational",
        start: "3:00p",
        end: "4:15p",
        title: "The motivational model",
        kind: "build",
        owner: "Ashley, then level pairs",
        detail: [
          "The org's model, adapted to your level. XP, Alpha Bucks, badges, the economy, the ceremonies — what a kid earns, sees, spends and feels.",
        ],
        output: "A reward ladder per level. Org deliverable.",
      },
      {
        id: "tue-schedules",
        start: "4:15p",
        end: "5:00p",
        title: "S1 Daily + Weekly Schedule",
        kind: "build",
        owner: "Level pairs",
        detail: [
          "Both schedules, per level, built off the six work units and this session's workshops.",
        ],
        output: "S1 daily and weekly schedules per level. Org deliverables.",
      },
    ],
  },

  {
    id: "wednesday",
    label: "Wednesday",
    dayName: "Wednesday",
    date: "Wednesday, September 2, 2026",
    hours: "8:00a–5:00p",
    title: "Lock",
    thesis: "Workshops finalized. Orders out. No loose ends after today.",
    point:
      "The hard deadline. Workshops close at noon, which unlocks the materials order — and anything ordered after today may not arrive before kids do. The afternoon moves to bootcamp: what a brand-new kid's first days actually are, and the chart they earn their way through.",
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
        id: "wed-workshops-final",
        start: "9:00a",
        end: "12:00p",
        title: "Workshops finalized",
        kind: "build",
        owner: "Level pairs, CeCe",
        detail: [
          "Four per level minimum. Independence, Giving and Receiving Feedback, and Upholding Community Standards all covered, with the double-up where your level needs it.",
          "Everything submitted with a real vendor, a real cost, and a place in the session calendar.",
        ],
        output: "The workshop bank closes at noon. Vendored, costed, sequenced.",
      },
      { id: "wed-lunch", start: "12:00p", title: "Lunch", kind: "meal" },
      {
        id: "wed-materials",
        start: "1:00p",
        end: "1:45p",
        title: "Materials ordered",
        kind: "session",
        owner: "Ashley + level leads",
        detail: [
          "Workshop-specific materials, ordered live in this block.",
          "Anything that can't arrive within four days gets a substitute decided here — not discovered on Friday.",
        ],
      },
      {
        id: "wed-bootcamp",
        start: "1:45p",
        end: "3:00p",
        title: "S1 Bootcamp",
        kind: "session",
        owner: "Ashley",
        detail: [
          "What the first days actually are, start to finish. Built by the wider org — this block is how it transfers to a campus that wasn't in the room for it.",
        ],
      },
      {
        id: "wed-bootcamp-chart",
        start: "3:00p",
        end: "4:15p",
        title: "Bootcamp check chart",
        kind: "build",
        owner: "Ashley, then level pairs",
        detail: [
          "The entry ramp a brand-new kid earns their way through, wired to the reward ladder from yesterday.",
          "Plus the plan for the kid it takes three times as long.",
        ],
        output: "A bootcamp check chart per level, ready to go on the wall Friday.",
      },
      {
        id: "wed-launches",
        start: "4:15p",
        end: "5:00p",
        title: "Bootcamp Launches + Townhall plan",
        kind: "build",
        owner: "Level pairs",
        detail: [
          "The first Launches a new kid ever sees, and the plan for the first Townhall of the year.",
        ],
        output: "Bootcamp Launches and Bootcamp Townhall plan, per level. Org deliverables.",
      },
    ],
  },

  {
    id: "thursday",
    label: "Thursday",
    dayName: "Thursday",
    date: "Thursday, September 3, 2026",
    hours: "8:00a–5:00p",
    title: "Rehearse",
    thesis: "Run it badly here, not Monday in front of children.",
    point:
      "Everything so far has been explained. Today it gets performed. Every guide runs a real work unit in front of the room and gets coached on it, out loud, in front of people. Middle school goes first — Aidan and Erin have the hardest room in the building and no returner in their pair.",
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
        end: "10:00a",
        title: "Ongoing check charts",
        kind: "session",
        owner: "Ashley",
        detail: [
          "The charts that run all year, and how they differ from the bootcamp chart. Different instruments, different jobs — the bootcamp chart is an entry ramp, these are the daily engine.",
        ],
      },
      {
        id: "thu-reps-1",
        start: "10:00a",
        end: "12:00p",
        title: "Work unit reps · round 1",
        kind: "workUnit",
        owner: "MS first, then L2, L1, LL",
        detail: [
          "Real delivery, full spec, coached out loud in front of the room.",
          "Say it to the face. Brutally honest without being brutal — practise it on each other before you practise it on a kid.",
        ],
      },
      {
        id: "thu-lunch",
        start: "12:00p",
        title: "Lunch — run as a real Get to Know You Lunch",
        kind: "meal",
        detail: [
          "It's a work unit with a spec. Rehearse it rather than describe it.",
        ],
      },
      {
        id: "thu-reps-2",
        start: "1:00p",
        end: "3:00p",
        title: "Work unit reps · round 2",
        kind: "workUnit",
        detail: [
          "The units nobody has run yet. By the end of today every guide has delivered at least two.",
        ],
        output: "Every guide has run at least two work units in front of the room.",
      },
      {
        id: "thu-cpr",
        start: "3:00p",
        end: "5:00p",
        title: "CPR + First Aid certification",
        kind: "session",
      },
    ],
  },

  {
    id: "friday",
    label: "Friday",
    dayName: "Friday",
    date: "Friday, September 4, 2026",
    hours: "8:00a–5:00p · target finish 3:30p",
    title: "Set",
    thesis: "Stop planning. Build the room.",
    point:
      "The last day between the plan and a kid walking through the door. Everything from this week becomes physical. We're aiming to finish by 3:30, but the day is scheduled to 5:00 — we leave when the rooms are actually ready, not when the clock says so.",
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
        id: "fri-rep",
        start: "8:30a",
        end: "9:00a",
        title: "Launch rep · the last one",
        kind: "workUnit",
      },
      {
        id: "fri-set-1",
        start: "9:00a",
        end: "12:00p",
        title: "Set the space · part 1",
        kind: "build",
        owner: "Level pairs, in your rooms",
        detail: [
          "Labeling. Cubbies, lockers, stations, supply areas — every space named before anything goes into it.",
          "Exact scope confirmed the week prior, once the space is settled.",
        ],
      },
      { id: "fri-lunch", start: "12:00p", title: "Lunch", kind: "meal" },
      {
        id: "fri-set-2",
        start: "1:00p",
        end: "2:45p",
        title: "Set the space · part 2",
        kind: "build",
        owner: "Level pairs, in your rooms",
        detail: [
          "Check charts and reward ladders on the walls. Materials out. Standard-school mode set, unlocks visible from the starting desk.",
        ],
        output: "Finished, kid-ready rooms.",
      },
      {
        id: "fri-walkthrough",
        start: "2:45p",
        end: "3:30p",
        title: "First day walkthrough",
        kind: "session",
        owner: "Level pairs",
        detail: [
          "Walked standing in the finished rooms, on the actual clock. Arrival window through first Closing.",
        ],
      },
      {
        id: "fri-deliverables",
        start: "3:30p",
        end: "4:00p",
        title: "Deliverables check",
        kind: "session",
        owner: "Ashley + level leads",
        detail: [
          "Every org deliverable submitted: S1 daily and weekly schedules, bootcamp launches, motivational model, workshops, bootcamp Townhall plan, Meet the Guides deck.",
        ],
        output: "A gap list with owners and order-by dates for anything still outstanding.",
      },
      {
        id: "fri-closing",
        start: "4:00p",
        title: "Closing · the last one",
        kind: "workUnit",
        detail: [
          "Depart when the rooms are ready. Scheduled to 5:00.",
        ],
      },
    ],
  },
];

// ── The Seven Builds ─────────────────────────────────────────────────────────

export const buildsIntro = {
  eyebrow: "The Five Builds",
  heading: "What we make this week",
  body: "Most of what runs this campus was built by the wider org over the summer — the behavioral model, the bootcamp, the check charts, the motivational model. We weren't in the room for that, so a lot of this week is transfer: learning instruments other people designed well, and adapting them to our four levels. But five things get genuinely built here, by us, and they're the five a kid actually walks into on day one. They compound in order.",
};

export const builds: Build[] = [
  {
    n: 1,
    title: "Workshops",
    when: "Mon 1:45 · Tue 1:00 · Wed 9:00",
    duration: "Across three days",
    who: "Level pairs, CeCe facilitating",
    summary:
      "Four minimum per level this session. Independence, Giving and Receiving Feedback, and Upholding Community Standards all covered, doubling up on whichever your level needs most to start the year. The one thing this week we build from scratch — which is why CeCe is on site and why it gets three separate blocks.",
    output:
      "The workshop bank closes Wednesday at noon. Vendored, costed, sequenced into sessions. Nothing gets ordered until it closes.",
  },
  {
    n: 2,
    title: "The Motivational Model",
    when: "Tue 3:00",
    duration: "75 min",
    who: "Ashley, then level pairs",
    summary:
      "The org's model, adapted to your level. XP, Alpha Bucks, badges, the economy, the ceremonies — what a kid earns, sees, spends and feels, and the ladder from standard-school mode to two-hour learner.",
    output:
      "A reward ladder per level. Build 3 wires every check chart unlock into a rung on this ladder.",
  },
  {
    n: 3,
    title: "Bootcamp Check Chart",
    when: "Wed 3:00",
    duration: "75 min",
    who: "Ashley, then level pairs",
    summary:
      "The entry ramp a brand-new kid earns their way through in their first days, wired rung for rung to the reward ladder from Build 2. Plus the plan for the kid it takes three times as long.",
    output:
      "A bootcamp check chart per level, vertical handoffs checked between levels. It goes on the wall Friday.",
  },
  {
    n: 4,
    title: "The Best First Day of School",
    when: "Wed 4:15",
    duration: "45 min",
    who: "Level pairs",
    summary:
      "Start from the sentence you want a kid to say in the car on the way home, and build backwards. The arrival window, the first Launch they ever see, the first Townhall, the shape of the whole day. Six of us have never run one — this is where we decide what it looks like rather than finding out on the morning.",
    output:
      "A first-day run-of-show per level, plus the bootcamp Launches and Townhall plan inside it. Friday's walkthrough tests it standing in the rooms.",
  },
  {
    n: 5,
    title: "Set the Space",
    when: "Fri 9:00 and 1:00",
    duration: "Most of Friday",
    who: "Level pairs, in your rooms",
    summary:
      "Stop planning, go build the room. Labeling first — every space named before anything goes into it. Then check charts and reward ladders on the walls, materials out, standard-school mode set, unlocks visible from the starting desk.",
    output:
      "Finished, kid-ready rooms and a gap list per level with owners and order-by dates.",
  },
];

export const compounds: { build: string; input: string; feeds: string }[] = [
  {
    build: "1 · Workshops",
    input: "The life skills roadmap, the workshop builder, the knowledge tree, CeCe",
    feeds:
      "Wednesday's materials order — nothing can be bought until this closes. Then every afternoon of Session 1.",
  },
  {
    build: "2 · Motivational Model",
    input: "The org's published model, plus what your level actually responds to",
    feeds: "Build 3 — every check chart unlock points at a rung on this ladder.",
  },
  {
    build: "3 · Bootcamp Check Chart",
    input: "Build 2's reward ladder, and Wednesday's bootcamp walkthrough",
    feeds: "Build 4 — it's the instrument a kid's first days actually run on.",
  },
  {
    build: "4 · Best First Day",
    input: "Builds 2 and 3, the six work units, and Thursday's reps",
    feeds:
      "Build 5 — you walk this clock physically while setting the room, and it's the last check before a kid arrives.",
  },
  {
    build: "5 · Set the Space",
    input: "Builds 2, 3 and 4 — all of them become physical here",
    feeds: "The first day of school.",
  },
];

// ── The Sprint ───────────────────────────────────────────────────────────────

export const sprint = {
  eyebrow: "The Alpha Build Sprint",
  heading: "See a problem. Build something better. Ship it.",
  prompt:
    "Build something that makes Alpha Kirkland 10x better this year. What's a problem you feel like you can solve that you're excited about?",
  independence:
    "This isn't on the launch week schedule, and that's deliberate. In week one you don't yet know what this campus's problems are — ask a guide who's never run a school year to name the biggest thing to fix and you'll get a guess. Ask the same guide in October and you'll get something real. So this page is here from day one for a different reason: so that when you do hit something broken, you know there's a method, and you know you're allowed to use it.",
  runsIn:
    "Bring it up in a Townhall or to your Lead Guide and we'll find you the time. A Sprint needs about two and a half hours in one sitting — a session break, a Friday afternoon, a staff day. The point is that it's yours: one guide, one problem you actually care about, one thing you build and put your name on.",
  phases: [
    {
      phase: "Pick it",
      time: "15 min",
      what: "Write your problem as one sentence. If you can't get it into a sentence, it's more than one problem.",
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
      minimum:
        "One sentence. “This BrainLift is about ___. I want to understand ___ so I can ___.”",
      ai: "AI OK — use it to sharpen the sentence",
    },
    {
      node: "2 · Experts",
      time: "15 min",
      minimum:
        "10 people, orgs or feeds. Who they are, what they focus on, why follow, where to find them.",
      ai: "AI OK for finding them",
    },
    {
      node: "3 · Knowledge Tree",
      time: "30 min",
      minimum:
        "6 sources you actually read or watched. Summary of each in your own words. 3 insights connecting across sources.",
      ai: "AI OK to find sources. NO AI for summaries or insights.",
    },
    {
      node: "4 · Spiky POVs",
      time: "17 min",
      minimum:
        "2 minimum. Truths that are true but surprising, or myths people assume are true and aren't.",
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
      body: "BrainLifts are the backbone of self-driven learning. If a guide has never built one, they can't coach a kid through one — and they definitely can't push a kid past DOK 3 into original thinking. Doing one yourself, with your hands, is the prerequisite for asking a student to.",
    },
  ],
  judging: [
    {
      q: "Does it raise the bar?",
      a: "A parent touring the campus would notice this and ask about it.",
    },
    {
      q: "Would kids feel it?",
      a: "A student could describe it at dinner within a week of it landing.",
    },
    {
      q: "Can we actually ship it?",
      a: "Owner named, cost known, first step happens next Monday.",
    },
  ],
};

// ── Prep ─────────────────────────────────────────────────────────────────────

export const prep = {
  eyebrow: "Prep & Who Runs What",
  heading: "Who's on the floor, and what has to be true before Monday.",
  distributionRule:
    "Two of eight guides have run a school year. That changes who delivers what: most of this week is Ashley and CeCe at the front, which is unusual for an Alpha bootcamp and deliberate here. Sanura and Kris take the two work units guides run most, and by Thursday every guide is delivering rather than listening. The goal by Friday isn't that the room has been told things — it's that eight people have run the units, built the workshops, and set their own rooms.",

  floor: [
    {
      block: "Mon 8:30a · Welcome + State of Alpha Kirkland",
      who: "Ashley",
      notes: "Where this campus sits in the foundational year. House Rules read at the end.",
    },
    {
      block: "Mon 9:30a · The shape of an Alpha day",
      who: "Ashley",
      notes: "Six work units named, daily rhythm walked. The map, not the mechanics.",
    },
    {
      block: "Mon 10:15a · The behavioral model",
      who: "CeCe",
      notes: "5% policy, 95% curriculum. Weighted toward middle school scenarios.",
    },
    {
      block: "Mon 1:00p · Workshop kickoff, then the build",
      who: "CeCe, level pairs building",
      notes: "The longest thread of the week. Runs again Tuesday and closes Wednesday.",
    },
    {
      block: "Mon 3:30p · Supply audit",
      who: "Level pairs, in your own rooms",
      notes: "Two lists — room basics order today, workshop materials wait for Wednesday.",
    },
    {
      block: "Tue 9:00a · Limitless Launch",
      who: "Sanura",
      notes: "The unit every kid feels first, every day.",
    },
    {
      block: "Tue 9:40a · Limitless Meetings",
      who: "Kris",
      notes: "The 3Cs framework, and how a meeting differs from a check-in.",
    },
    {
      block: "Tue 10:20a · The other four units + the weekly load",
      who: "Ashley",
      notes: "Both lunches are work units, not breaks. Then the honest conversation about volume.",
    },
    {
      block: "Wed 1:45p · Bootcamp + check chart",
      who: "Ashley",
      notes: "Built by the wider org. This is where it transfers to a campus that wasn't in the room.",
    },
    {
      block: "Thu 8:30a · Ongoing check charts",
      who: "Ashley",
      notes: "And how they differ from the bootcamp chart. Different instruments, different jobs.",
    },
    {
      block: "Thu 10:00a · Work unit reps",
      who: "Every guide. MS first, then L2, L1, LL",
      notes: "Coached out loud in front of the room. Sanura and Kris coach rather than perform.",
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
      notes: "Ashley floats with the gap lists and a card.",
    },
  ],

  commitments: {
    heading: "What leadership owes you this week",
    intro:
      "Six of you have never run a school year. That puts a set of obligations on this side of the room, and they're written down here so you can hold us to them.",
    groups: [
      {
        heading: "Before Monday",
        items: [
          "CeCe confirmed in writing for Monday morning — the whole day is built around it",
          "CPR booked for Thursday 3:00",
          "Sanura and Kris told which units they're taking, with a week to prepare and not a weekend",
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

// ── Evaluation & Growth ──────────────────────────────────────────────────────

export const evaluation = {
  eyebrow: "Evaluation & Growth",
  heading: "How you're measured, how it's calibrated, and how you move up.",
  intro:
    "Covered Monday 9:10a, inside the State of Alpha Kirkland. New guides saw this in onboarding — the block is where you get to ask the questions you didn't ask then. This page is the reference to come back to in January when the mid-year one-pager lands.",
  workUnit: {
    what: "The expectation for the quantity and quality of your daily work. Launch, Limitless Meetings, Townhall, Closing, lunches, check charts — each one has a defined bar.",
    points: [
      "They give clear, objective performance metrics",
      "They make the subjective parts of guiding objective",
      "They're publicly available, so the whole org learns from each other's",
    ],
    checked:
      "Your Lead Guide quality-checks your work units and gives you feedback to improve. AI QC runs on transcripts continuously and costs you nothing to submit.",
    theory:
      "Work units are the inputs that lead to successfully delivering the 3 Commitments. Deliver the units well and the Commitments follow.",
    linkLabel: "Session 4 (24-25) Work Unit Data Structures",
    linkUrl: "https://drive.google.com/drive/folders/1bcf5Fu0inQkTUMY-RBcFwPnArVNc7qtc",
    tieIn:
      "Monday 1:10p ties directly to this. Work Unit Discussion + Alignment is where the whole team agrees, out loud, on the bar for the four units a kid feels every day. That sentence on the wall is what your Lead Guide is quality-checking you against.",
  },
  formal: [
    {
      step: "1 · The one-pager",
      what: "Your Lead Guide writes a detailed one-pager on your performance: proposed rating, High Potential designation if it applies, concrete examples justifying the rating, and growth plans and opportunities.",
    },
    {
      step: "2 · Calibration",
      what: "Every guide is discussed for roughly five minutes. Lead Guides present concrete performance examples. Ratings are calibrated across the organization so they mean the same thing everywhere. Promotion opportunities and special projects are discussed in the same meeting.",
    },
    {
      step: "3 · Your 1:1",
      what: "You sit down with your Lead Guide to review your rating and its justification, then discuss growth opportunities and next steps.",
    },
  ],
  ratings: [
    {
      name: "Exceeds Expectations",
      body: "Above the bar on the work units and on the outcomes they drive.",
    },
    {
      name: "Meets Expectations",
      body: "Delivering the work units at standard. Calibration exists so a Meets here means a Meets network-wide.",
    },
    {
      name: "Below Expectations",
      body: "Named specifically, with concrete examples, a growth plan and a timeline. Never a surprise.",
    },
    {
      name: "High Potential",
      body: "A separate designation, not a rating. It means innovating beyond the framework and demonstrating next-level behaviours — before you're in the next-level role. It is not a streak of Exceeds, the most hours worked, or the most seniority.",
    },
  ],
  promotionNote:
    "Advancement is merit-based. Alpha prioritises internal promotion — 60% of Heads of School and Lead Guides were promoted internally in SY24-25.",
  promotion: [
    { n: "1", what: "An open role becomes available, based on organizational need." },
    { n: "2", what: "You register intent for promotion with your Lead Guide and the Head of K-8. You don't wait to be noticed." },
    { n: "3", what: "You demonstrate readiness: excelling in your current role, showing the traits and capabilities needed at the next level, and consistent interest in learning and doing more." },
    { n: "4", what: "Management gives you opportunities to demonstrate skills for higher responsibilities." },
    { n: "5", what: "You successfully perform tasks at the next level — that's what earns the promotion." },
  ],
  paths: [
    { name: "Traditional path", body: "Guide → Lead Guide → Campus Director." },
    { name: "Special projects", body: "Leading interim roles, coaching other guides, building AI tools." },
    { name: "Y-school path", body: "Becoming an expert, creating content, building an audience." },
    { name: "Geographic", body: "Alpha's expansion — 25 microschools in 2025 — opens roles beyond this campus." },
  ],
  compensation: {
    heading: "Say this out loud in September, not March",
    body: "Alpha uses large salary bands rather than incremental annual increases. That's deliberately different from traditional teaching and from standard market jobs. Promotion is the primary path to a significant compensation increase — it reflects the focus on rewarding increased responsibility and capability rather than time served. People deserve to know that on day one so they can aim at the right thing.",
  },
  owed: [
    "You always know how you're doing, where you stand, and what levels you up",
    "Feedback to your face, not behind your back — brutally honest without being brutal",
    "Weekly 1:1 coaching with your Lead Guide, so the mid-year one-pager contains zero new information",
    "Every input visible to you: work unit QC, student survey data, MAP, 3Cs, Peer 360",
  ],
  standard:
    "The guide standard is changing a kid's life — a higher bar than teaching well. The 3 Commitments have to be delivered to every single kid, not on average. Which is why student survey data is the most valuable data we have. If a kid doesn't see you as the adult changing their life, that's below standard — and it's coachable, but only if we name it early.",
};

// ── Resources ────────────────────────────────────────────────────────────────

export const resources = {
  eyebrow: "Resources",
  heading: "Everything you'll need open in a tab.",
  note: "These live in Google Drive and are shared across Alpha campuses. Sign in with your Alpha account.",
  items: [
    {
      title: "Academic Calendar · SY 26-27",
      description: "Every session start and end, breaks, MAP testing windows and days off. Session 1 runs Sept 8 to Oct 16.",
      url: "/docs/kirkland-calendar-26-27.pdf",
    },
    {
      title: "Life Skills Roadmap",
      description: "The roadmap workshops get built from. Start here before Build 2.",
      url: "https://docs.google.com/document/d/1qFV9eqhQ_blv7oijJnYAAtApJIDR6GLEvQ4ZX1HXjx4/edit",
    },
    {
      title: "Life Skills Knowledge Tree",
      description: "The skills themselves, browsable. Use it to see where a workshop sits in the wider tree.",
      url: "https://life-skills-knowledge-tree.lovable.app/",
    },
    {
      title: "Tree Skills · PDF breakdown",
      description: "Each branch of the tree broken down in detail. Requires your Alpha Google account.",
      url: "https://drive.google.com/drive/folders/1ZyUyUCF--wPTZw1fiYGMYYk0CZRZ7vgf",
    },
    {
      title: "Work Unit Data Structures",
      description: "Session 4 (24-25). The bar your work units get quality-checked against.",
      url: "https://drive.google.com/drive/folders/1bcf5Fu0inQkTUMY-RBcFwPnArVNc7qtc",
    },
  ],
};

export const footer =
  "Alpha School Kirkland · Campus Launch Run-of-Show · Aug 31 - Sep 4, 2026. Click any block to open the detail.";
