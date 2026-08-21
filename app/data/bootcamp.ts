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
  links?: { label: string; url: string }[];
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
  { label: "Before we start", href: "#prework" },
  { label: "Mon", href: "#monday" },
  { label: "Tue", href: "#tuesday" },
  { label: "Wed", href: "#wednesday" },
  { label: "Thu / Fri", href: "#thursday" },
  { label: "By Friday", href: "#byfriday" },
  { label: "Prep", href: "#prep" },
  { label: "House Rules", href: "#rules" },
  { label: "Evaluation", href: "#evaluation" },
  { label: "Build Sprint", href: "#sprint" },
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
    "Almost none of this is ours to invent. The org built the behavioral model, the bootcamp, the check charts, the standard day and a default workshop slate over two weeks of staff days we couldn't attend. Four things are genuinely ours: the weekly workshop schedule, the workshop roadmap, the motivational model, and campus jobs. Everything else this week is transfer — learning instruments other people built well, and adapting them to four levels and our kids. Knowing which is which is what stops us rebuilding something that already works.",
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
      "Most of us are walking into our first Alpha school year. Today isn't about mastering anything — it's about seeing the whole shape of the thing once, so the rest of the week has somewhere to land. CeCe is here to start workshops, the one piece built from scratch this week and the one with the longest tail.",
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
          "The day is standardised across every campus and every level, and it already exists in the S1 Playbook: Launch at 8:45, Core Skills from 9:00, Q-Break, Core Skills again, lunch at 11:30, two workshop blocks in the afternoon, check chart or Townhall at 2:30, Closing at 3:15. We are not designing this. We are learning to run it.",
          "The map, not the mechanics. Tuesday is where we go deep and Thursday is where you run them. Every block has a runbook in the Playbook — read the one you're about to run.",
        ],
        links: [
          { label: "S1 Playbook — the day in order, with a runbook for every block", url: "https://s1-playbook-2627.netlify.app/" },
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
          "The Alpha Behavior Response Tool is the companion to this block — look up a behaviour, get the response the model calls for. Guide-facing and password-protected; the password comes separately. Bookmark it today, because the moment you need it you will not want to be searching for it.",
        ],
        links: [
          { label: "Alpha Behavior Response Tool", url: "https://alphabehaviortool.netlify.app/" },
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
          "Start from what already exists. The S1 Playbook carries a default workshop slate that every level runs unless a campus posts its own — Rock Climb for Independence, 3D Print or Escape Room for Receiving Feedback, and 5 Star Experience for Upholding Community Standards. Each comes with a Guide's Guide: the overview, the AlphaTest students build toward, biweekly checkpoints and a daily plan for every block.",
          "So this block is not four workshops from nothing. It's reading the default slate, deciding what fits our kids and what doesn't, and building the fourth — the one that's ours. Adapting something proven beats inventing something untested, especially in a first year.",
          "The spec still stands: four minimum per level this session, all three life skills covered, doubling up on whichever your level needs most to start the year.",
          "Measure the skill, not the activity. The network is coaching hard on this right now — too many receiving-feedback workshops end up measuring whether a kid got better at biking or tae kwon do rather than better at receiving feedback. Your baseline, midpoint and AlphaTest all have to point at the life skill itself.",
        ],
        links: [
          { label: "S1 Playbook — default workshops and Guide's Guides", url: "https://s1-playbook-2627.netlify.app/" },
          { label: "Life Skills Knowledge Tree", url: "https://life-skills-knowledge-tree.lovable.app/" },
        ],
      },
      {
        id: "mon-builder",
        start: "1:45p",
        end: "2:05p",
        title: "The Guide's Guide Builder",
        kind: "session",
        owner: "CeCe + Ashley",
        detail: [
          "Everyone opens the Builder before anyone starts building. It is the only door — workshops reach Guide Platform through a Builder commit and nothing is built on Guide Platform directly. If you design a workshop somewhere else, you'll be re-entering every step here anyway, so start here.",
          "The path, start to finish: build your pitch with the co-pilot inside the Builder → save the draft and send it to your lead for comments → resolve them, back and forth, until nothing is outstanding → commit, but only once your lead has approved → download the pre-filled Guide's Guide, which unlocks on commit, and review every section before you use it. It's a starting draft, not a finished document.",
          "Commit locks the skill tracker. Descriptive edits stay open afterwards, but the tracked structure does not — so commit when it's right, not when you're tired of it.",
          "The Builder is also our workshop library. Paste your Canva deck and lesson plan links into the pitch page. You can add those any time, including after commit.",
          "One workshop per level, even where levels share an activity. The builder handles one at a time and gets confused otherwise, and each level needs its own baseline and AlphaTest anyway.",
        ],
        links: [
          { label: "Guide's Guide Builder", url: "https://guides-guide-app.vercel.app/" },
        ],
      },
      {
        id: "mon-workshop-build",
        start: "2:05p",
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
        end: "5:00p",
        title: "Room basics ordered",
        kind: "session",
        owner: "Ashley + level leads",
        detail: [
          "The non-workshop list goes out today, before anyone leaves. A list that becomes a to-do doesn't arrive.",
        ],
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
          "There is a default model in the S1 Playbook covering daily Alpha payouts, weekly Emporium and Fun Friday, and Mobile Squad each session. Read it first. The campus model is one of only four genuinely campus-specific things, so this is a real build — but it starts from the default, not from a blank page.",
          "The formula is fixed and automated: 25 XP earns 1 Alpha, everywhere. Alphas are paid for XP only, not for check charts, and only on days a student hits 120 XP, except LL. Campus jobs do still pay Alphas, and jobs are the one thing you can still award manually. No debit cards for middle school.",
          "Build against this year's rules and nothing else. Campuses across the network have been caught running models built from last year's resources that were approved then and aren't now. If you found it in a channel rather than in the work unit doc, check it before you use it.",
          "MAP is separate and level-dependent. For the fall round, only grades 4–8 get an achievement-based model; every other level simply sets a baseline. Growth-based models for everyone start in winter. Our MAP runs Sept 15–18, so the model gets built here and used in week two.",
          "Every kid at this campus is new to Alpha. The network's own guidance is that Alpha earnings, the Emporium and comfy seating carry new students a long way on their own. The risk here isn't building too little — it's building something far more elaborate than our kids need in week one.",
          "Campus jobs are a town hall decision, not a menu we hand down. Students identify what the room needs and vote on which jobs exist. Roles that have worked elsewhere: town hall mayor, assistant to the mayor, assistant to the guide, time manager, equipment manager, board maintenance, Emporium manager. Bring examples, not a finished list.",
          "MAP payouts are now settled. L2 Alphas sync with MAP results and deposit automatically once testing finishes. For MS, the lead guide submits a form, the head guide approves, and the payout is deposited for the lead to withdraw and pay students in cash — processed as a reimbursement, so there are no tax implications. Academics is building a MAP dashboard view showing percentiles and payout per student.",
          "Two things are still genuinely unsettled network-wide: whether closing rings affects the daily Alpha bonus, and whether the Learning Lab daily goal is 85, 100 or 120 XP. Campuses have asked repeatedly and neither has an answer. Build the ladder on the fixed formula — 25 XP earns 1 Alpha — tell students what you know, and don't promise the parts nobody has pinned down.",
        ],
        output: "A reward ladder per level, plus a fall MAP approach for the levels that need one. Org deliverable.",
        links: [
          { label: "S1 Playbook — the default motivational model", url: "https://s1-playbook-2627.netlify.app/" },
          { label: "Alphas work unit doc", url: "https://docs.google.com/document/d/1XYd7BSR-5D2IqeDz2FDG6_Mq3OEjkvNn6yh3fbWt14I/edit" },
          { label: "MAP work unit doc", url: "https://docs.google.com/document/d/15IODVNnHhwd6rESQY8qt96TZ-0pb8-lf80LAW5_BRwc/edit" },
        ],
      },
      {
        id: "tue-roadmap",
        start: "4:15p",
        end: "4:45p",
        title: "26-27 Workshop Roadmap",
        kind: "build",
        owner: "Level pairs",
        detail: [
          "Copy the org's roadmap sheet, fill it in for your level, and link it on Kirkland's row of the S1 Guide Deliverables sheet, column J. The link is in Resources.",
          "This does not lock you in. The point is showing the life skills threads and arcs taking shape across the year — workshop names can be generic if you don't have one yet. The AlphaTest cell is the one that matters: one sentence naming the specific, measurable bar a student has to clear.",
        ],
        output: "A workshop roadmap per level, linked on the deliverables tab. Org deliverable.",
      },
      {
        id: "tue-schedules",
        start: "4:45p",
        end: "5:00p",
        title: "S1 Daily + Weekly Schedule",
        kind: "build",
        owner: "Level pairs",
        detail: [
          "The daily schedule is standard across all levels and already published in the S1 Playbook — this block is confirming it against our building and our constraints, not designing it. Flag anything that genuinely can't work here.",
          "The weekly workshop schedule is ours to build: which workshops run in which block, which week. That's one of only four things the Playbook treats as campus-specific.",
        ],
        output: "S1 daily schedule confirmed and weekly workshop schedule drafted per level. Org deliverables.",
        links: [
          { label: "S1 Playbook — the standard day", url: "https://s1-playbook-2627.netlify.app/" },
        ],
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
    thesis: "Workshops close. Then we learn the systems that run the year.",
    point:
      "The hard deadline is noon — workshops close and the materials order goes out, and anything ordered after today may not arrive before kids do. The afternoon is the opposite kind of work. Bootcamp and the check charts are already built by the org, so we read them rather than write them. Then Guide Platform, properly, because every work unit you run this year lands there and none of us has used it through a school year.",
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
        title: "Workshops committed",
        kind: "build",
        owner: "Level pairs, CeCe · Ashley reviewing",
        detail: [
          "Four per level minimum. Independence, Giving and Receiving Feedback, and Upholding Community Standards all covered, with the double-up where your level needs it. Everything with a real vendor, a real cost, and a place in the session calendar.",
          "Committed, not drafted. Across the network there are hundreds of workshop pitches sitting saved in the Builder and only a fraction actually committed — and committing is what sends them to Guide Platform. A drafted workshop does not exist as far as the system is concerned.",
          "Commit requires lead approval first, so this morning runs as a loop rather than a build: draft, send for comments, resolve, commit. Sixteen workshops need reviewing before noon. Send them as they're ready rather than all at once at 11:30 — the queue is the thing most likely to make us miss the deadline.",
          "Before you send anything for review, check the AlphaTest measures the life skill and not the activity. If it measures whether a kid got better at climbing, it isn't finished.",
        ],
        output:
          "The workshop bank closes at noon. Four per level, all three life skills, vendored, costed, lead-approved and committed in the Builder.",
        links: [
          { label: "Guide's Guide Builder", url: "https://guides-guide-app.vercel.app/" },
          { label: "S1 Playbook — default workshops", url: "https://s1-playbook-2627.netlify.app/" },
        ],
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
          "Workshop-specific materials, ordered live in this block — not added to somebody's evening.",
          "Anything that can't arrive within four days gets a substitute decided here, not discovered on Friday.",
        ],
      },
      {
        id: "wed-charts",
        start: "1:45p",
        end: "2:45p",
        title: "Bootcamp and the check charts",
        kind: "session",
        owner: "Ashley",
        detail: [
          "All of this is already built. The org spent two weeks of staff days on it while we were running Alpha Summer, so this block is reading it together with the real charts open — not writing anything.",
          "What bootcamp actually is: the entry ramp every brand-new kid earns their way through in their first session, and the thing that unlocks the Emporium, the year-long check chart and the signature life skills.",
          "The bootcamp check chart versus the ongoing check chart. Two different instruments doing two different jobs — one is a ramp a kid clears once, the other is the daily engine for the rest of the year. Know which is which and where each lives.",
          "Middle school is on a different system: one chart, fifteen checks, all of 6–8 with grade levels gone, living on the Alpha Project Hub rather than Guide Platform. Everything else about MS still runs through Guide Platform.",
          "Two things to watch. The bootcamp time budget is roughly 15 hours per level, and campuses have come in at double without noticing. And several checks across the network are currently broken or missing their AI grader — know which before you promise a student they can complete one.",
        ],
        links: [
          { label: "Bootcamp Check Chart · All Levels", url: "https://docs.google.com/spreadsheets/d/1Wj9mYrneOnVVtNbXXOpRdy6A9c6Rqpjgxawesd_f46Y/edit" },
          { label: "Alpha Project Hub — MS bootcamp", url: "https://alpha-project-hub.vercel.app/" },
        ],
      },
      {
        id: "wed-platform",
        start: "2:45p",
        end: "5:00p",
        title: "Guide Platform · the full run-through",
        kind: "session",
        owner: "Ashley · everyone together, laptops open",
        detail: [
          "The longest block of the week, and it earns it. Guide Platform is the source of truth for every work unit this year. Everything you enter attaches to a kid and builds their profile, so any guide who picks them up later can motivate them from day one instead of playing knowledge telephone across a dozen spreadsheets.",
          "Everyone together, including middle school. MS bootcamp checks live on the Project Hub, but every other work unit MS runs lands here like everyone else's.",
          "We work through it properly: notes and shout-outs, the behavior ladder and what happens when a card is issued, voice memos — you can talk for up to 65 minutes and it sorts the notes to the right kids — student profiles, the bootcamp check chart view, workshops, and the 3Cs.",
          "Star each kid's top three checks before they ever log in, so the first thing they see is their focus rather than a wall of everything.",
          "PreK–2 is guide-run. Littles don't log in; you tick the steps and add photo or video proof on the kid's check.",
          "Bring real problems. Anything that doesn't work goes to #guide-platform-support rather than a DM — Alec watches that channel and a fix there helps every campus.",
        ],
        output:
          "Every guide has signed in, found their roster, entered a note, and knows where each of the six work units lands.",
        links: [
          { label: "Guide Platform — guide sign-in", url: "https://alpha-guide-platform.vercel.app" },
          { label: "Guide Platform — student sign-in", url: "https://alpha-guide-platform.vercel.app/student/login" },
          { label: "Alec's 8-minute walkthrough — watch before this block", url: "https://www.loom.com/share/73cb8690df234d23a7e5ae6bd54eeb39" },
        ],
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
      "Everything so far has been explained. Today it gets performed. Every guide runs a real work unit in front of the room and gets coached on it, out loud, in front of people. Middle school goes first, because it's the room where the first ten minutes set the tone for the year.",
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
        owner: "MS first, then L2, L1, LL — everyone runs one",
        detail: [
          "Real delivery, full spec, coached out loud in front of the room.",
          "Keep the Behavior Response Tool open during reps. Somebody will hit a real behaviour question in front of the room, and looking up the right response together is a better rep than guessing at it.",
          "Say it to the face. Brutally honest without being brutal — practise it on each other before you practise it on a kid.",
        ],
        links: [
          { label: "Alpha Behavior Response Tool", url: "https://alphabehaviortool.netlify.app/" },
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
          "Every org deliverable submitted: S1 daily and weekly schedules, bootcamp launches, motivational model, workshops committed in the builder, the 26-27 workshop roadmap linked on the deliverables tab, bootcamp Townhall plan.",
          "Submitted means linked on Kirkland's row of the S1 Guide Deliverables sheet. A finished artifact sitting in someone's Drive is not submitted.",
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

// ── The Sprint ───────────────────────────────────────────────────────────────

export const sprint = {
  eyebrow: "The Alpha Build Sprint",
  heading: "When you find something broken, there's a method for taking it on.",
  body: [
    "This isn't on the launch week schedule, and that's deliberate. In week one nobody knows yet what this campus's real problems are — ask in October and you'll have several. So this is here from day one for a different reason: so that when you do hit something broken, you know there's a way to go after it, and you know you're allowed to.",
    "A Sprint is one guide, one problem you actually care about, one thing you build and put your name on. About two and a half hours in one sitting: pick the problem, build a BrainLift on it, then build the thing. Everything else this week is team work — this is the part that's yours.",
    "The BrainLift is what makes it work. Four nodes: your purpose in one sentence; ten experts worth following; six sources you actually read, with your own summaries and three insights connecting them; and two Spiky POVs — things that are true but surprising, or that people assume are true and aren't. AI is fine for finding sources and experts. It is not fine for the summaries, the insights or the POVs. If AI could have written it, it isn't your thinking.",
    "The test for a real Spiky POV: ask AI the same question your POV answers. If it agrees with you, it isn't spiky enough. If it disagrees, you've made something new — and that's the one thing here that can't be faked.",
  ],
  bar: "The bar: it raises the standard enough that a parent touring in October would notice and ask about it, kids feel it within a week of it landing, and it's actually shippable — owner named, cost known, first step next Monday.",
  howToStart:
    "Bring it up in a Townhall or to your Lead Guide and we'll find you the time. A session break, a Friday afternoon, a staff day.",
  note:
    "BrainLifts are also the backbone of self-driven learning here, and the kids build them. A guide who has never made one can't coach a student through one — which is the other reason this is up before anyone needs it.",
};

// ── Prep ─────────────────────────────────────────────────────────────────────

export const prep = {
  eyebrow: "Prep & Who Runs What",
  heading: "Who's on the floor, and what has to be true before Monday.",
  distributionRule:
    "Two guides on this team have run an Alpha school year before. That changes who delivers what: most of this week is Ashley and CeCe at the front. Sanura and Kris take the two work units guides run most, and by Thursday every guide is delivering rather than listening. The goal by Friday isn't that the room has been told things — it's that eight people have run the units, built the workshops, and set their own rooms.",

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
      title: "S1 Playbook · the default Session 1 manual",
      description: "The single most useful link on this page. The standard day hour by hour, a runbook for every block you'll run, the default workshop slate with Guide's Guides, launch plans by level, the behavioral model, check charts, and printables. Most of what we assumed we'd build from scratch already exists here. Pick Kirkland in the campus bar to see anything we've posted; everything else shows the default. Where the two differ, your Lead Guide's word wins.",
      url: "https://s1-playbook-2627.netlify.app/",
    },
    {
      title: "Guide's Guide Builder",
      description: "Where workshops get built, reviewed and committed. The only route to Guide Platform — nothing is built on the platform directly. Committing unlocks a pre-filled Guide's Guide and locks the skill tracker, so commit once your lead has approved. It doubles as the workshop library: paste your Canva and lesson plan links into the pitch page.",
      url: "https://guides-guide-app.vercel.app/",
    },
    {
      title: "Alpha Experiences · vendors and After School",
      description: "The portal for external vendors, experiences and After School programming. Vendors submit through the staff-join form, then wait on an Alpha-side approval — campuses have reported vendors stalling at that step with no clear point person, so build in time when you're booking anything. Questions go to Xlearning@2hourlearning.com.",
      url: "https://alpha-experiences.manus.space/",
    },
    {
      title: "Campus Security Portal",
      description: "Alpha's security policies. Surfaced network-wide on Aug 19 with the note that most campuses didn't know it existed — worth reading before we open.",
      url: "https://campus-security-portal-ochre.vercel.app/policies",
    },
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
    {
      title: "Academic Calendar · SY 26-27",
      description: "Every session start and end, breaks, MAP testing windows and days off. Session 1 runs Sept 8 to Oct 16.",
      url: "/docs/kirkland-calendar-26-27.pdf",
    },
    {
      title: "Y26-27 Workshop Roadmap - Kirkland",
      description: "The full workshop roadmap for the year, organized by session.",
      url: "https://docs.google.com/spreadsheets/d/1hvXBrmY8J2AYkOxzi0A3sk5ivVYob_ovzCeSKmGjcSc/edit",
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
      title: "Alpha Behavior Response Tool",
      description: "Guide-facing. Look up a behaviour, get the response the model calls for — warning, yellow, red or strike — so enforcement is consistent whichever adult is standing there. Team password required; it's shared separately, not posted here.",
      url: "https://alphabehaviortool.netlify.app/",
    },
    {
      title: "A Day at Alpha · the canon site",
      description: "The org's day-in-the-life reference. The motivation page carries the Tier 1 campus jobs list — the starting point before your town hall votes on its own.",
      url: "https://a-day-at-alpha.vercel.app/day/motivation/",
    },
    {
      title: "Alphas · work unit doc",
      description: "The rules on what pays out, what doesn't, and the 120 XP threshold. Read before building any motivational model.",
      url: "https://docs.google.com/document/d/1XYd7BSR-5D2IqeDz2FDG6_Mq3OEjkvNn6yh3fbWt14I/edit",
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
    {
      title: "Launch Box · 189 Limitless Launch cards",
      description: "A physical deck. One 15-minute group activity per card — pull it, read the front, run it. No planning and nothing to look up. Version 2 dropped Aug 20: same activities as last year's, with better reflection questions, clearer run steps and bigger cards. Physical decks are on the way; the PDF is linked here.",
      url: "/docs/launch-box-v2.pdf",
    },
  ],
};

export const prework = {
  eyebrow: "Before we start",
  heading: "Read all of this before Monday morning.",
  safety: {
    label: "Required · deadline set by the org",
    heading: "Reporting suicidal ideation and self-harm",
    body:
      "Every guide reviews this before the end of week 2. It came from Matt Shenker to all leads, and it is the one item on this page with a deadline set outside this campus.",
    contact:
      "At Kirkland: tell Ashley immediately, then follow the workflow. David Cooney is Alpha's school psychologist and the referral point. You are never expected to handle one of these conversations alone, and you never need to be certain before you say something — reporting a concern that turns out to be nothing is always the right call.",
    items: [
      {
        title: "Video overview",
        note: "How guides must respond to any suicide-related statement or self-harm concern. Start here.",
        url: "https://www.loom.com/share/f4a76eb6d6be4d35a40de3c2c0aab230",
      },
      {
        title: "Suicidal Ideation Reporting Workflow",
        note: "The steps, in order.",
        url: "https://docs.google.com/document/d/17nxH641gFAhEfLlBPG20NPldCyJuVHvKs0DftvNFNIo/edit",
      },
      {
        title: "Suicidal Ideation and Self-Harm Scenarios",
        note: "Worked examples. Read these — they're what make the workflow usable under pressure.",
        url: "https://docs.google.com/document/d/1MYrAduTacqSqC75ScU1w15d-flYWKlY89CjKtPWcymY/edit",
      },
      {
        title: "Student Safety Quick Reference",
        note: "The one to keep somewhere you can reach in seconds. Print it.",
        url: "https://docs.google.com/document/d/1EII9fX7vkQ_J_FpDBP8Pq4cCaz3GOMy-nx_HE2VHf3Q/edit",
      },
    ],
  },
  intro:
    "Alpha ran two weeks of staff days in July and early August — Austin, then campus-based — where the org built the Canon, AlphaCore, the behavior policy, the boot camp check charts and the life skills stack for the whole network. We weren't in the room for any of it, because we were running Alpha Summer here in Kirkland.",
  why:
    "So this is how we catch up. Everything we build during launch week sits on top of decisions made in these nine days, and you can't adapt a system you've never seen. This isn't background reading — it's the foundation. All of it is required.",
  totalNote:
    "Nine summaries, about 90 minutes total. Do it across two weeks rather than the night before — some of it is worth arguing with, and you'll want time to.",
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
        "The root-cause exercise we'll run five times this year, and why averages hide every problem worth finding. Then the boot camp check chart — the instrument a brand-new kid earns their way through, which we adapt during launch week.",
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
  levelWork: {
    heading: "What the rest of the network already built",
    intro:
      "Every other campus was in the room for staff days, and they shared almost everything they made. Take what's useful — nobody expects you to build from scratch what someone else already built well. Read your own level's list before Monday. You don't need the other three.",
    warning:
      "The bootcamp time budget is roughly 15 hours per level. L2 already reported coming in at double that. Check your total before you commit to adapting anything.",
    slackNote:
      "Slack file links only open if you're signed in to Alpha Slack. If one won't load, search the file name in the channel.",

    channels: {
      heading: "Go to the source",
      body:
        "This page is a snapshot, and it goes stale fast. The network posts to these channels every day — and Calendar A campuses started school on August 12, four weeks ahead of us, which means they are hitting every first-week problem right now and writing it down. That is four weeks of other people's mistakes, free, and it expires on September 8. Check your channel before you build anything.",
      items: [
        { title: "#prek-12-guides", note: "Everyone. Announcements, academic updates, cross-level resources.", url: "https://go-alpha.slack.com/archives/C08EYUB0WP8" },
        { title: "#k-1-guides", note: "LL", url: "https://go-alpha.slack.com/archives/C0990STD53J" },
        { title: "#2-3-guides", note: "L1", url: "https://go-alpha.slack.com/archives/C098988MAQK" },
        { title: "#4-5-guides", note: "L2", url: "https://go-alpha.slack.com/archives/C098TGTK6DB" },
        { title: "#6-8-guides", note: "MS", url: "https://go-alpha.slack.com/archives/C098R4ETVLK" },
        { title: "Day one, as Calendar A ran it", note: "Aug 12 in #prek-12-guides: new students had no tests or apps in TimeBack on day one except Fast Math, because MAP came first — so the Core Skills block needed filling. The advice was to get every kid logged into their device and TimeBack to surface problems early, then onto Fast Math. Worth reading the whole day-one thread before Sept 8.", url: "https://go-alpha.slack.com/archives/C08EYUB0WP8" },
        { title: "#guide-platform-support", note: "Anything broken in Guide Platform. Post here rather than DMing Alec — he watches this channel, and a fix helps everyone.", url: "https://go-alpha.slack.com/archives/C0B8EPYBVB6" },
      ],
    },

    whatsNew: {
      date: "Updated August 12",
      heading: "What changed this week",
      body:
        "Several of these change decisions we make during launch week. Read this section even if you read the rest already.",
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
      items: [
        {
          title: "Watch this first · Guide Platform in 8 minutes",
          note: "Alec Ngai's walkthrough of the system every piece of your work lands in — notes and shout-outs, the behavior ladder, voice memos that sort themselves to the right kid, student profiles, bootcamp check charts, workshops and 3Cs. Watch it before August 31.",
          url: "https://www.loom.com/share/73cb8690df234d23a7e5ae6bd54eeb39",
        },
        {
          title: "Guide Platform · guide sign-in",
          note: "Your side of it. Sign in with your school Google account.",
          url: "https://alpha-guide-platform.vercel.app",
        },
        {
          title: "Guide Platform · student sign-in",
          note: "Where kids go to reach their own check chart — same school Google account they use for TimeBack, no new password. Star each kid's top 3 checks before they log in so they see their focus straight away. Alec suggests one 10-minute moment where everyone signs in together. PreK–2 is guide-run: littles don't log in, you tick the steps and add photo or video proof yourself.",
          url: "https://alpha-guide-platform.vercel.app/student/login",
        },
        {
          title: "Academic updates · placement, MAP and the new apps",
          note: "MAP is now the first step in placement (ours runs Sept 15–18). Placement no longer drops a student to the bottom — below 90% steps down one grade at a time until they hit a grade they've mastered. New apps: AlphaScience, AlphaMath, Math Raiders. XP and the two-hour block are unchanged.",
          url: "https://docs.google.com/document/d/1lZjWanACDOHquLoRqbPfQdk9I_kGbkGv04Ky-Aezvlc/edit",
        },
        {
          title: "Alpha payout has changed — this affects Tuesday's build",
          note: "Alphas are now paid for XP only, not for check charts and not for campus jobs, and only on days a student hits 120 XP (except LL). No debit cards for middle school. Build the motivational model against these rules, not last year's.",
          url: "https://go-alpha.slack.com/archives/C08EYUB0WP8",
        },
        {
          title: "Check chart and leveling-up policy",
          note: "A student who didn't finish last year's chart stays in their level until the remaining relevant checks are done. A student who is behind does the bootcamp chart for the level they're currently in, not the next one. Unfinished regular check chart work is homework, not bootcamp time. Catching up before week 4 of Session 1 can move them up, but they complete the new level's full bootcamp.",
          url: "https://go-alpha.slack.com/archives/C08EYUB0WP8",
        },
        {
          title: "First three days · Alpha Bootcamp",
          note: "Katie Boye's Canva slides, built for exactly these three days. Geared to older kids — copy and adapt. Scott Dangerfield has an L1 version in #2-3-guides.",
          url: "https://canva.link/434kw1329j0jc09",
        },
        {
          title: "First three days · Core Life Skills intro",
          note: "Katie Boye.",
          url: "https://canva.link/mi0esy94ldf40ov",
        },
        {
          title: "First three days · Behavioral Model intro",
          note: "Katie Boye. Pairs with the behavior policy from staff days Day 7 and Day 9.",
          url: "https://canva.link/p0r098b5c2ebi9c",
        },
        {
          title: "First three days · Giving and Receiving Feedback intro",
          note: "Katie Boye. One of the three life skills every level builds workshops for.",
          url: "https://canva.link/uywfvsquuyxmz5l",
        },
        {
          title: "Everything one campus is printing for their spaces",
          note: "Carson Lehmann's full print folder. The most directly useful thing here for Friday's Set the Space — take what fits rather than designing it from scratch.",
          url: "https://drive.google.com/drive/folders/1ktQAdeUf58ynJXTkN7Ar5VESGs5UUJYW",
        },
        {
          title: "Check charts formatted for print",
          note: "England Reddy posted K–5 charts sized 30x40, and Prathima Venkatesan posted 6–8 plus MAX sized 30x20. Both are file posts in #prek-12-guides — search “formatted for print” in the channel. Katie Boye also made designed MS versions with higher-quality print files.",
          url: "https://go-alpha.slack.com/archives/C08EYUB0WP8",
        },
        {
          title: "How to print a good poster from an AI image",
          note: "Scott Dangerfield's workflow: make the image in ChatGPT or any LLM, upscale it with Krea (krea.ai/enhancer) so it doesn't print blurry, upload to Photo Prints Now, then pick up and pay at CVS. Useful for Friday.",
          url: "https://www.krea.ai/enhancer",
        },
        {
          title: "MAP practice before the real thing",
          note: "Jen Greenham runs the tools and practice test with students the day before, so they're fighting the questions rather than the interface.",
          url: "https://warmup.nwea.org/app/gradetwoplus/gradeTwoPlus.html",
        },
      ],
    },

    shared: {
      heading: "Everyone reads these",
      items: [
        {
          title: "Bootcamp Check Chart · All Levels · SY26-27",
          note: "The master build doc. Every level's checks in one sheet. This is the thing we adapt on Wednesday.",
          url: "https://docs.google.com/spreadsheets/d/1Wj9mYrneOnVVtNbXXOpRdy6A9c6Rqpjgxawesd_f46Y/edit",
        },
        {
          title: "Behavior Curriculum",
          note: "The 95% — the teaching half of the behavioral model, before any consequence exists.",
          url: "https://docs.google.com/spreadsheets/d/1DOnw2lRleTBBkfOsVra_vZQktNf9U9YzwUMWf6V5F38/edit",
        },
        {
          title: "Banger pitches from staff days",
          note: "Every campus's pitches in one place. Worth twenty minutes before you build a single workshop.",
          url: "https://banger-pitches-staff-days.pplx.app/#/",
        },
        {
          title: "Find Your Feathers",
          note: "The root-cause tool. We run it every session, kid by kid — never grouped.",
          url: "https://alpha-feathers.vercel.app/#/",
        },
      ],
    },

    levels: [
      {
        id: "LL",
        name: "LL · Learning Lab",
        guides: "Esther + Olivia",
        channel: "#k-1-guides",
        groups: [
          {
            heading: "Bootcamp check charts",
            items: [
              {
                title: "Hannah Burkhauser's two-week bingo structure",
                note: "The best thinking in the channel. One double-sided sheet — kid's bingo card on the front, guide's evidence log on the back. Two cards: week 1 is the on-ramp of routines and quick wins, week 2 is the real AlphaChecks once the room already runs itself.",
                url: "https://canva.link/f7rc3chare1co8r",
              },
              {
                title: "Grade K Bootcamp BINGO",
                note: "Caitlin Calzadilla. Finished and printable. The blank circles show how many times a guide must observe the behaviour before the check is earned.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNUAM4DND/grade_k_bootcamp_bingo.png.pdf",
              },
              {
                title: "Grade 1 Bootcamp BINGO",
                note: "Caitlin Calzadilla.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNW3EMULU/grade_1_bootcamp_bingo.png.pdf",
              },
              {
                title: "Mood Meter AlphaCheck (LLKIN05)",
                note: "Bryce Derry. A worked example of what a finished check doc looks like.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNAFLR5RP/llkin05_-_alphacheck_-_mood_meter",
              },
            ],
          },
          {
            heading: "New · the first three days",
            items: [
              {
                title: "Mini Bootcamp Bingo",
                note: "Caitlin Calzadilla built this for the exact gap where check chart time exists but students haven't learned enough routine to earn the real checks yet. They pick a task, do it independently, clean up, add a sticker — learning how the check chart works while getting to know the room. Finishing it rings a gong and earns their first Polaroid for the Brag Wall.",
                url: "https://go-alpha.slack.com/archives/C0990STD53J",
              },
              {
                title: "Sink or Sail · independence mini-workshop",
                note: "Caitlin Calzadilla. Build a boat that keeps four toy bears afloat for ten seconds, then level up the challenge if they finish early.",
                url: "https://docs.google.com/document/d/1WUwScj65gqv_uMsG75vObZedCjyecKje2Yl3_ADj-RU/edit",
              },
              {
                title: "Sink or Sail · slides",
                note: "The Canva that goes with it.",
                url: "https://canva.link/2o9956uqu2tv2uf",
              },
              {
                title: "Focus card · the 3 B's",
                note: "Raya Belton. Blink, Breathe, Back. Both LL levels have a focus check — this gives kids a way to catch and correct themselves without a guide stepping in.",
                url: "https://go-alpha.slack.com/archives/C0990STD53J",
              },
              {
                title: "The Magical Yet · launch",
                note: "Christie Ray. Works as a launch or during read-aloud; the plan is in the notes of the first slide.",
                url: "https://canva.link/4nc83xh3hjxeuvk",
              },
              {
                title: "One activity, many feedback checks — built for small campuses",
                note: "Scott Dangerfield's level-wide bootcamp activity clears a batch of the feedback checks in one go, and he explicitly notes it can be run combining LL and L1 at smaller expansion campuses. That's us.",
                url: "https://canva.link/48jrxbatn1iiell",
              },
            ],
          },
          {
            heading: "Day one launches",
            items: [
              {
                title: "Friendship Islands",
                note: "Vanessa Watson. A socialization launch built for the first day when nobody knows anybody. Hula hoops as islands. Directly usable Sept 8.",
                url: "https://canva.link/odzupcjtouy2fzp",
              },
              {
                title: "This or That · Friendship Edition",
                note: "Vanessa Watson. The other day-one socialization launch.",
                url: "https://canva.link/dcsni706ca8jw4f",
              },
            ],
          },
          {
            heading: "Posters",
            items: [
              {
                title: "Learning Lab Behavior Poster",
                note: "Raya Belton, iterated on channel feedback.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BN41GM7RD/learning_lab_behavior_poster.png",
              },
              {
                title: "LL Giving & Receiving Feedback",
                note: "Vanessa Watson.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BP1T52ZDJ/ll_giving___receiving_feedback",
              },
            ],
          },
          {
            heading: "Workshops",
            items: [
              {
                title: "LL Workshop Ideas",
                note: "The shared brainstorm sheet, colour-coded to show connections between workshops.",
                url: "https://docs.google.com/spreadsheets/d/1BHMkZ_GW8S-YIkK4eznO7Ou0bdHr-mUXY6HF9W2dQmE/edit",
              },
              {
                title: "Road Map Ideas",
                note: "Lauren Sprouse's notes from the roadmap session.",
                url: "https://docs.google.com/document/d/1L317ut3_3kWbVetISKDnd2oSOltyY7ccvpffAGd5LJo/edit",
              },
              {
                title: "Articulate Artist · Guide's Guide",
                note: "Darby Knox. Read it as a format example as much as a workshop.",
                url: "https://docs.google.com/document/d/12Kz5bBBLaM8XtQsZgpc6uKcGBrnI4Vs2yuym2V_Zu2I/edit",
              },
              {
                title: "Ground Control · Guide's Guide",
                note: "Patty Kelley.",
                url: "https://docs.google.com/document/d/1s6XRKGA4yFfvLf0cehPVXpV1wjWlCfFtkzcwmbP5tg8/edit",
              },
              {
                title: "WL Grit · The Wipeout Club",
                note: "Cassie Blessing's banger pitch.",
                url: "https://guides-guide-app.vercel.app/pitches/8a7ad439-19ee-4848-a841-aedbae415c71",
              },
            ],
          },
        ],
      },

      {
        id: "L1",
        name: "L1",
        guides: "Sanura + Tylor",
        channel: "#2-3-guides",
        groups: [
          {
            heading: "Bootcamp check charts",
            items: [
              {
                title: "Bootcamp check chart tracking app",
                note: "Scott Dangerfield built it to take the tracking lift off guides. Two Loom tutorials in the channel.",
                url: "https://bootcampcheckchart.lovable.app",
              },
              {
                title: "L1 Bootcamp BINGO · Grade 2",
                note: "England Reddy. No guide check-off column — Guide Platform handles that.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNK7V92GM/l1_bootcamp_bingo_grade2.pdf",
              },
              {
                title: "L1 Bootcamp BINGO · Grade 3",
                note: "England Reddy.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNSCM6JJ0/l1_bootcamp_bingo_grade3.pdf",
              },
            ],
          },
          {
            heading: "New · the first three days",
            items: [
              {
                title: "First three days deck, adapted for L1",
                note: "Scott Dangerfield took Katie Boye's slides and reworked them for this age band — Alpha Bootcamp and Core Life Skills, the Behavioral Model, and Feedback.",
                url: "https://www.canva.com/design/DAHR71lIuJQ/wkAECOrbuMNS9H4CiBFu_A/edit",
              },
              {
                title: "Receiving Feedback",
                note: "Scott Dangerfield.",
                url: "https://www.canva.com/design/DAGv3vg7EbE/RYecLb_kq5hOpxJ0i96-Eg/edit",
              },
              {
                title: "One activity, many feedback checks — built for small campuses",
                note: "Scott Dangerfield. Can be run combining L1 and LL at smaller expansion campuses.",
                url: "https://canva.link/48jrxbatn1iiell",
              },
              {
                title: "The independence binder",
                note: "Scott Dangerfield. A physical binder plus a Canva insert that carries a student through five 2nd-grade and two 3rd-grade independence checks: TimeBack steps five days running, solving a tech issue alone, moving between apps in under a minute, arriving fully charged, and tracking their own data.",
                url: "https://canva.link/los4yz51cxb4mke",
              },
            ],
          },
          {
            heading: "Ready-made check worksheets",
            items: [
              {
                title: "Independence",
                note: "Tamara Friend. All of these are Canva and editable — make a copy first.",
                url: "https://canva.link/c5srbvbnf177hqu",
              },
              {
                title: "Upholding community standards · cleaning up messes",
                note: "Tamara Friend.",
                url: "https://canva.link/p9pus0lafkv45au",
              },
              {
                title: "TimeBack readiness",
                note: "Tamara Friend.",
                url: "https://canva.link/rf6xhksaansuxte",
              },
              {
                title: "SMART goals",
                note: "Tamara Friend.",
                url: "https://canva.link/dkw47wtmtjqj43d",
              },
              {
                title: "Student launch planning worksheet",
                note: "Tamara Friend. For when kids start running their own launches.",
                url: "https://canva.link/5w7uxpaxghflk2i",
              },
              {
                title: "Puzzle activity as a launch",
                note: "Tamara Friend.",
                url: "https://canva.link/rsopg0p198kndvl",
              },
              {
                title: "Tech Troubleshooting Menu",
                note: "Faith Crenshaw, Grade 2.",
                url: "https://canva.link/wgduf9sqrra0dk9",
              },
              {
                title: "Steps to TimeBack Learning",
                note: "Faith Crenshaw.",
                url: "https://canva.link/bn5ztmb3pbb430i",
              },
              {
                title: "Hello Passport Pal",
                note: "An app for the “hello in ten languages” check. 25 countries, no login, and a practice mode before the test.",
                url: "https://hello-passport-pal.lovable.app/",
              },
            ],
          },
          {
            heading: "Motivation and behaviour",
            items: [
              {
                title: "L1/L2 Session 1 Rewards Map",
                note: "England Reddy. Some parts deliberately don't start until after week 4.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNNFQ6F6F/l1_l2_session1_rewards_map.pdf",
              },
              {
                title: "Behavior Chart",
                note: "Christi Gordon, Scottsdale. Printed and laminated, used as a visual so the student names which bucket their behaviour fell into. Includes the setting, discussion prompt and next steps.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNRJZ4L2H/behavior_chart.pdf",
              },
            ],
          },
          {
            heading: "Workshops",
            items: [
              {
                title: "Grit Games",
                note: "Mia Schaubhut and Jacob Frisch. A Survivor-style teamwork competition run at L1 Austin last year, written up as a memo. She's explicitly asked another campus to take it and make it better.",
                url: "https://docs.google.com/document/d/1kk2XkpJeJ1un-OXHmcSUCbZObDOdwFDAmOV7ocFXyLw/edit",
              },
            ],
          },
        ],
      },

      {
        id: "L2",
        name: "L2",
        guides: "Kris + Amy",
        channel: "#4-5-guides",
        groups: [
          {
            heading: "Start here",
            items: [
              {
                title: "Launches Forever 26-27",
                note: "Grant Cain's full set of proven launches for this age band, each with the growth-mindset principle and the questions kids should be asking at the end. The best single artifact in any of the four channels. Most need 5–15 minutes of setup — not a last-minute resource. Make a copy before editing.",
                url: "https://docs.google.com/presentation/d/1hqKMgFhpwGyGTo1RDYsoAJfo_msEb6fTv5HxnyGOJ1Y/edit",
              },
            ],
          },
          {
            heading: "New · the first three days",
            items: [
              {
                title: "Bootcamp check chart intro deck",
                note: "Katie Boye posted this in #4-5-guides after someone asked rather than rebuilding it. Basic overview — copy and edit as needed.",
                url: "https://canva.link/434kw1329j0jc09",
              },
              {
                title: "School-year check chart · Google Sheet",
                note: "Luke Phillips has one and offered it in the channel. Not posted as a link — ask him for it.",
                url: "https://go-alpha.slack.com/archives/C098TGTK6DB",
              },
              {
                title: "Open question we could answer",
                note: "A guide in the channel asked for a good independence activity for Wednesday's Bootcamp Sprint #2 — the same sprint we run on Sept 9. If it's still unanswered when we build ours, post it back.",
                url: "https://go-alpha.slack.com/archives/C098TGTK6DB",
              },
            ],
          },
          {
            heading: "Bootcamp check charts",
            items: [
              {
                title: "L2 Bootcamp BINGO · Grade 4",
                note: "England Reddy.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNQRBLNG5/l2_bootcamp_bingo_grade4_1.pdf",
              },
              {
                title: "L2 Bootcamp BINGO · Grade 5",
                note: "England Reddy.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNW854881/l2_bootcamp_bingo_grade5.pdf",
              },
              {
                title: "5th Grade Independence Scavenger Hunt",
                note: "Erin Colucci built it in GooseChase. Ten missions — five on campus, five at a local mall — and each completed mission unlocks the next.",
                url: "https://join.goosechase.com/6dd61b18-bb5d-4e72-9c6c-5a495644f036",
              },
              {
                title: "5th TED Talk GPT Prompt",
                note: "Sunny Lulla, for the public speaking check.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BN0GM7EKC/5th_ted_talk_gpt_prompt.pdf",
              },
            ],
          },
          {
            heading: "Posters",
            items: [
              {
                title: "Tier 1 XP / Alphas poster",
                note: "Jen Greenham.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNWB36CCD/image.png",
              },
              {
                title: "Behavior poster · L2 version",
                note: "Jen Greenham, adapted from the LL one.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNW09FWV7/chatgpt_image_aug_7__2026__01_40_46_pm.png",
              },
              {
                title: "L1/L2 Session 1 Rewards Map",
                note: "England Reddy.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNUMMCKDY/l1_l2_session1_rewards_map.pdf",
              },
            ],
          },
        ],
      },

      {
        id: "MS",
        name: "MS · Middle School",
        channel: "#6-8-guides",
        groups: [
          {
            heading: "Read this first — bootcamp was rebuilt on August 17",
            items: [
              {
                title: "One chart, 15 checks, all of 6–8",
                note: "Drew Casebier rebuilt the middle school bootcamp over the weekend of Aug 16. Grade levels no longer matter — every Alpha middle schooler completes the same fifteen checks, organised by pillar. The reason given was consistent feedback from students and guides that the old bootcamp wasn't setting kids up to succeed. Anything you read about MS bootcamp from before Aug 17 is out of date.",
                url: "https://docs.google.com/spreadsheets/d/1aJh3WL1BRULzUVlcHOD9fddWt6w_0nCy3OLHn3k-Ixc/edit",
              },
              {
                title: "It lives on the Alpha Project Hub, not Guide Platform",
                note: "Students and guides sign in with their school Google account. Guide Platform pulls progress automatically, so there's no need to touch it for MS bootcamp checks. Everything else — notes, behaviour, workshops — still runs through Guide Platform as normal. Sign in as a guide before Aug 31 and confirm your roster shows.",
                url: "https://alpha-project-hub.vercel.app/",
              },
              {
                title: "Recommended order to tackle the checks",
                note: "Drew's suggested sequence for working through the fifteen most efficiently. Students see the whole chart from day one — every check with its name, its “I can” statement and a plain description — so they always know what's coming.",
                url: "https://drive.google.com/file/d/1LSiTEifE_w5WjnnWimheFxlI85_DMxUU/view",
              },
              {
                title: "The four checks students can start immediately",
                note: "Mia Schaubhut posted these as editable Canva files while site access was being sorted: 168 Hours, Phone Away Powered Up, Know Your Crew, Mobile Squad Planner, and Lunch Biographer.",
                url: "https://www.canva.com/design/DAHSgfDy44s/ZOq0f2XikwfWq1U0cKZ0Bg/edit",
              },
              {
                title: "What the guide has to do outside the platform",
                note: "Mia's list of the lift that isn't automated: randomise the lunch pairings and hang them in the space for Lunch Biographer; run a phone and laptop-charge tracker for Phone Away Powered Up — which also gives students without phones a route through; check bcc'd emails for The Pump Up Email; and for large levels, run a photo-name quiz for Know Your Crew.",
                url: "https://drive.google.com/file/d/1UpGZsNXm6QcZ-Er4RoE_Coq1N4f68WJI/view",
              },
            ],
          },
          {
            heading: "The plan of record",
            items: [
              {
                title: "Alpha MS Playbook",
                note: "Drew Casebier's full middle school plan of record. Vision, socialization, MAX, the check chart and the schedule in one place. Drew is the source of truth for anything middle school — start here.",
                url: "https://alpha-ms-playbook.vercel.app/",
              },
              {
                title: "Life Skills — the accountability map",
                note: "What gets taught where. ME and WE run as workshops; KEY runs through MAX. Session 1 is the only session with three workshops, because bootcamp is Independence, Feedback and Uphold Community Standards — the same three every level builds workshops for.",
                url: "https://alpha-ms-playbook.vercel.app/life-skills",
              },
              {
                title: "MAX — and when it actually starts",
                note: "The four faces — Explore, Create, Connect, Deploy — and the Challenge Bank. MAX does not unlock until Session 2, and completing the bootcamp check chart is what unlocks it. Session 1 is bootcamp with MAX visible but locked. Show it, don't run it.",
                url: "https://max-mvp.vercel.app/",
              },
            ],
          },
          {
            heading: "Shared by other campuses",
            items: [
              {
                title: "MS Launches · shared Canva folder",
                note: "Mia Schaubhut's folder of launches already run with a middle school crew and validated by student feedback. Request access from her, and make a copy before editing anything.",
                url: "https://canva.link/6wuynjio3eorui1",
              },
              {
                title: "Green Jellybean challenge",
                note: "Mia Schaubhut. A day-one independence sprint from Dr. Dinin's Learning to Fail series at Duke. Groups of four, then a conversation about independence and operating in ambiguity.",
                url: "https://go-alpha.slack.com/archives/C098R4ETVLK",
              },
              {
                title: "MS Socialization One Pager",
                note: "Session-by-session mobile squad and socialization plan. Draft.",
                url: "https://drive.google.com/file/d/1xTFcb6hpJVbcjj_tilmksDYMdlWTgSxK/view",
              },
              {
                title: "MS Testing Schedule One Pager",
                note: "ISEE prep and PSAT 8/9.",
                url: "https://drive.google.com/file/d/1PqTbCbOCRaRyoVqLqE3nELo6uy-QUSTF/view",
              },
              {
                title: "MAX Q&A",
                note: "Talking points and FAQs for conversations with families.",
                url: "https://drive.google.com/file/d/1o4gfiXaR_qyN80M-pANeEHMa2vFBCzhG/view",
              },
              {
                title: "MS behavior model posters",
                note: "Caitlin deMello, four variants in the channel.",
                url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNRV38MM3/chatgpt_image_aug_7__2026__01_44_28_pm__1_.png",
              },
            ],
          },
          {
            heading: "Office hours",
            items: [
              {
                title: "MS Office Hours with Drew Casebier",
                note: "3pm EST. Drew is the source of truth for all things middle school, and the bootcamp chart has already changed once — worth joining one before Sept 8.",
                url: "https://meet.google.com/cfu-nxjd-drz",
              },
            ],
          },
        ],
      },
    ],

    giveBack:
      "Two questions in those channels are still unanswered — a Guide's Guide for a middle school camping independence workshop, and behaviour posters with worked yellow, red and strike examples. We've been quiet in these channels all summer because we were running camp. Answering one is a cheap way to start showing up in these channels as a campus that contributes.",
  },
  book: {
    title: "The Fearless Organization",
    author: "Amy Edmondson",
    scope: "First 27 pages — through Chapter 1",
    mins: 45,
    why: "Most of this team is starting their first school year at Alpha together. That only works if this is a room where you can say “I don't understand this” out loud on day two, in front of everyone, without it costing you anything. Edmondson's research is on exactly that — why teams that report more mistakes are usually the better teams, not the worse ones. Thursday's rehearsal day depends on it being true here.",
    note: "The link comes separately.",
  },
};

export const byFriday = {
  eyebrow: "By Friday",
  heading: "Five things, submitted.",
  intro:
    "Submitted means linked on Kirkland's row of the S1 Guide Deliverables sheet. A finished artifact sitting in someone's Drive is not submitted. We check all five together at 3:30 on Friday.",
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
    "Campus jobs are the sixth thing and they aren't ours to submit. Jobs are a Townhall decision, so students vote on which ones exist once they arrive. Bring examples, not a finished list.",
  link: {
    label: "S1 Guide Deliverables sheet",
    url: "https://docs.google.com/spreadsheets/d/10J5Uwd6jmgzEEwI2fVeFigQBDXCixtA8ToC07ZUYVE8/edit",
  },
};

export const footer =
  "Alpha School Kirkland · Campus Launch Run-of-Show · Aug 31 - Sep 4, 2026. Click any block to open the detail.";
