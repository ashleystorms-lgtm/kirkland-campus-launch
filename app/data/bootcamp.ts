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

export type DayStatus = "now" | "upcoming" | "past";

export type Day = {
  id: string; // becomes the anchor: #oct-13
  status: DayStatus; // "now" shows at the top. Change this one word to move it.
  label: string; // nav label
  dayName: string; // "Tuesday"
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
  subtitle: "Staff Days",
};

// ── Navigation ───────────────────────────────────────────────────────────────

export const navItems = [
  { label: "Now", href: "#now" },
  { label: "Staff Days", href: "#staff-days" },
  { label: "Resources", href: "#resources" },
  { label: "Archive", href: "/archive" },
];

// ── Staff days ───────────────────────────────────────────────────────────────
// Every current staff day. Set status to "now", "upcoming", or "past".
// Exactly one day should be "now". Opening week lives in archive.ts.

export const days: Day[] = [
  {
    id: "oct-13",
    status: "past",
    label: "Oct 13",
    dayName: "Tuesday · Session 2 staff day",
    date: "Tuesday, October 13, 2026",
    hours: "4:00p–8:00p PT",
    title: "Work unit updates and building Session 2",
    thesis: "What changes in S2, what it means for our kids, and time to build it.",
    point:
      "A condensed after-school version. We watch the kickoff, walk through every work unit and playbook change for S2 with time to talk about our own kids, then use the evening to build S2. We leave with S2 underway and a plan for accountability report first drafts, due Oct 23.",
    theme: {
      name: "Douglas fir",
      accent: "#a7c1a1",
      soft: "rgba(167,193,161,0.28)",
      glow: "rgba(167,193,161,0.10)",
      image: "/images/days/tuesday.jpg",
    },
    blocks: [
      {
        id: "oct13-welcome",
        start: "4:00p",
        end: "4:05p",
        title: "Welcome",
        kind: "leadership",
        detail: ["Quick look at the agenda and what we leave with tonight."],
        links: [
          { label: "Oct Staff Days agenda and hub (org sheet)", url: "https://docs.google.com/spreadsheets/d/17eXkBzihUx43P6J9WwW-S9Zrc7_ZFLSnFOMPu_FmKFs/edit?gid=2#gid=2" },
        ],
      },
      {
        id: "oct13-kickoff",
        start: "4:05p",
        end: "4:45p",
        title: "Joe's kickoff at 2x",
        kind: "session",
        detail: [
          "We watch this together as a group, at 2x.",
          "Joe's portion starts at 1:40:00 in the recording.",
          "We watch from there to the end.",
        ],
        links: [
          { label: "Joe's kickoff recording (Zoom)", url: "https://alpha-school.zoom.us/rec/play/vyF8gJwHpoLZY5EAcmb5-q1dLruge2rpmCralo3bqUiKgbSAcfSgOpstSSlJhYV_u1OXChfnqDD91mHx.H-SyXq7aKImJZ_P5?accessLevel=meeting&canPlayFromShare=true&from=my_recording&continueMode=true&oldStyle=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Falpha-school.zoom.us%2Frec%2Fshare%2FcL98mJWQQkqEOvJgsfFW-bKWvF4S0bFljKvSSkvwtAnQt1KblLTiWuXVFtL2d8Fh.g0kk37iJet7I8_wa" },
        ],
      },
      {
        id: "oct13-work-units",
        start: "4:45p",
        end: "5:45p",
        title: "Work unit and playbook updates for S2",
        kind: "workUnit",
        detail: [
          "Discussion time is built in. Talk through what each change means for your kids.",
          "Closing: one recorded Closing per group per week, not daily.",
          "Tier 1 motivational model: the new game plan for creating closed loops.",
          "Talking to parents.",
          "Math note taking.",
          "Love of Reading Initiative: baseline data and S2 book clubs.",
          "Workshop checkpoints and check chart status must live in GuidePlatform. In S2 the Community App shows parents who is on track or behind.",
        ],
        links: [
          { label: "Motivational Models", url: "https://docs.google.com/document/d/1bNOW5BC0wcouGb_dyR3WuO-SoN6TiHwp1aMMaxRVZ-s/edit?usp=sharing" },
          { label: "Talking to Parents WUD", url: "https://docs.google.com/document/d/18untU1vi46LYP0gR0d380qzI-05cYtpVBrQqwfF9IHg/edit?usp=sharing" },
          { label: "Guidelines for Math Journals", url: "https://docs.google.com/document/d/1rsYwrnuXBsM9CqoFM1henzrMS8fWGe9SSHKX_EyCji4/edit?usp=sharing" },
          { label: "Baseline Data: Love of Reading October 2026", url: "https://docs.google.com/spreadsheets/d/1edhAwy-NkchTFEDBGbQSW5S9H2sZjMAn_-qbRMG70-Q/edit?usp=sharing" },
          { label: "Technology Use and Screen Time WUD", url: "https://docs.google.com/document/d/1qC36AcrOhrRcdYXNibbGg6IH6dSOkOeKSP7l95ylaHA/edit?usp=sharing" },
          { label: "Community App guide one-pager (PDF)", url: "https://drive.google.com/file/d/14NldR4ZaZ1ml-EHw2Oapj0nws2C7pGTj/view?usp=drive_link" },
          { label: "Guide Platform", url: "https://alpha-guide-platform.vercel.app" },
          { label: "Book Clubs One-Pager", url: "https://claude.ai/artifact/UXq5WXR6vtVSLq8X63mX14" },
        ],
      },
      { id: "oct13-break", start: "5:45p", end: "6:00p", title: "Break", kind: "meal" },
      {
        id: "oct13-build",
        start: "6:00p",
        end: "7:00p",
        title: "Build S2",
        kind: "build",
        links: [
          { label: "Campus Admin (load your S2 campus page)", url: "https://alpha-campus-admin.vercel.app/" },
          { label: "AlphaBoxd workshop library", url: "https://alphaboxd.pplx.app/" },
          { label: "Life Skills Workshops playbook (Pitch, Facilitate, Coach, AlphaTest)", url: "/resources/Life_Skills_Workshop_Playbook.pdf" },
        ],
      },
      {
        id: "oct13-accountability",
        start: "7:00p",
        end: "7:20p",
        title: "Accountability reports talk-through",
        kind: "session",
        detail: [
          "The BOY Accountability Report prototype.",
          "Guide comment standards: what I learned about the kid, how I will motivate and inspire them, and our goal for them.",
          "First drafts due Oct 23. Reports ship Oct 30.",
        ],
        links: [
          { label: "BOY Accountability Report: Standards for Guide Comments", url: "https://docs.google.com/document/d/1J80ZHDhtyxINtWBEmSa0oV_7p9ccjnB7bpG6cNh9iRQ/edit" },
          { label: "BOY Accountability Report Prototype", url: "https://www.perplexity.ai/computer/a/d8f1513b-d273-4b86-8a0a-154787c287e7" },
        ],
      },
      {
        id: "oct13-academics",
        start: "7:20p",
        end: "7:50p",
        title: "Academics",
        kind: "session",
        links: [
          { label: "S1 Academic Questions and Feedback", url: "https://docs.google.com/document/d/1CiAiqgzIk1zeTFtBlr05hms6XRRrbIESNE7Q01T5T_I/edit?usp=sharing" },
        ],
      },
      {
        id: "oct13-close",
        start: "7:50p",
        end: "8:00p",
        title: "Close and homework",
        kind: "session",
        output: "Accountability report first drafts due Oct 23.",
        links: [
          { label: "Limitless Game Film PD: Do This, Not That", url: "https://docs.google.com/document/d/1Aw8aeKt4XCUxDM7spYsbTma-IdL5GjZmVgIYbhgeQuM/edit?usp=sharing" },
        ],
      },
    ],
  },

  {
    id: "oct-16",
    status: "now",
    label: "Oct 16",
    dayName: "Friday · Session 2 staff day",
    date: "Friday, October 16, 2026",
    hours: "12:00p–4:00p PT",
    title: "Data, Feathers, and what's working",
    thesis:
      "We look at what Session 1 taught us, learn from Tom Bennett's behavior training, make sure every kid is covered, and share what's working.",
    point:
      "Session 1 is done. Before Session 2 starts on Monday, we read the S1 data honestly, train on behavior together, run Find Your Feathers for every kid, and trade what's working in Timeback.",
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
      { id: "oct16-welcome", start: "12:00p", end: "12:05p", title: "Welcome", kind: "leadership" },
      {
        id: "oct16-data-walk",
        start: "12:05p",
        end: "12:30p",
        title: "S1 data walk",
        kind: "session",
        detail: [
          "Review the S1 student and parent survey results.",
          "What went well? Where did we fall short? Learn from it, codify it, and fix it.",
        ],
        links: [
          { label: "Guide Platform", url: "https://alpha-guide-platform.vercel.app" },
        ],
      },
      {
        id: "oct16-behavior-training",
        start: "12:30p",
        end: "1:30p",
        title: "Tom Bennett's behavior training, together at 2x",
        kind: "session",
        detail: ["The full session is 2 hours."],
      },
      {
        id: "oct16-slides",
        start: "1:30p",
        end: "1:50p",
        title: "Slides review",
        kind: "session",
        links: [
          { label: "Alpha Guide behaviour training (slides)", url: "https://docs.google.com/presentation/d/1U1ddZMtZZD-eUBLoNQBq7Hs6TkG1aWwfZ2le6ZWkOn0/edit?usp=sharing" },
        ],
      },
      { id: "oct16-break", start: "1:50p", end: "2:00p", title: "Break", kind: "meal" },
      {
        id: "oct16-feathers",
        start: "2:00p",
        end: "3:10p",
        title: "Find Your Feathers and fix, in GuidePlatform",
        kind: "workUnit",
        detail: [
          "For each kid: Love of School, Learn 2x, Life Skills, 10x Guide, and Character/Culture.",
          "Look at the S1 data first (kid survey, XP per day and by subject, workshop results, Bootcamp check chart, Peer 360, greens, yellows, strikes), then give a Y or N for each commitment.",
          "Every N gets a root cause, a fix, and an owner. If you override a suggested Y or N, say why.",
          "Finish the rest as homework.",
        ],
        links: [
          { label: "Guide Platform", url: "https://alpha-guide-platform.vercel.app" },
        ],
      },
      {
        id: "oct16-xp-groups",
        start: "3:10p",
        end: "3:45p",
        title: "XP Groups knowledge share",
        kind: "session",
        detail: [
          "Pair top-XP outputs with lower-XP outputs, by level.",
          "Prompt: what do you do during Timeback that the rest of us don't? Think coaching moves, motivational models, data review, and how you get kids locked in.",
        ],
        links: [
          { label: "XP Exchange starts here", url: "https://www.perplexity.ai/computer/a/50944cbf-27ed-4f81-8dc3-f8303094f8ad" },
          { label: "XP Exchange sheet, Oct Staff Days", url: "https://docs.google.com/spreadsheets/d/1amsdJbJDBySUBm2rdxF-_cDRaxjcWGHDJ5NQSjNrt0U/edit" },
        ],
      },
      {
        id: "oct16-close",
        start: "3:45p",
        end: "4:00p",
        title: "Close and homework",
        kind: "session",
        detail: ["Finish Find Your Feathers for every kid."],
        output: "Accountability report first drafts are due Oct 23.",
      },
    ],
  },
];

// ── The Sprint ───────────────────────────────────────────────────────────────

export const sprint = {
  eyebrow: "Build Sprint (BrainLift method)",
  heading: "When you find something broken, there's a method for taking it on.",
  body: [
    "This isn't on a staff day schedule, and that's deliberate. In week one nobody knows yet what this campus's real problems are — ask in October and you'll have several. So this is here from day one for a different reason: so that when you do hit something broken, you know there's a way to go after it, and you know you're allowed to.",
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

// ── Evaluation & Growth ──────────────────────────────────────────────────────

export const evaluation = {
  eyebrow: "Evaluation and Growth",
  needsReview:
    "Needs review. This section was written for opening week, so some of it describes an older schedule (for example “Covered Monday 9:10a” and “Monday 1:10p”). The evaluation process itself is still current.",
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
// One library, in categories. Every link has a title, a note and a url.
// "level" is optional and shows which level's channel it came from.

export type LibraryItem = {
  title: string;
  note?: string;
  url: string;
  level?: "LL" | "L1" | "L2" | "MS";
};

export type LibraryCategory = {
  id: string;
  title: string;
  intro?: string;
  items: LibraryItem[];
};

export const library: {
  eyebrow: string;
  heading: string;
  note: string;
  categories: LibraryCategory[];
  // The two reading sections that sit at the end of the library.
  sections: { id: string; title: string }[];
} = {
  eyebrow: "Resources",
  heading: "Everything you'll need open in a tab.",
  note: "Most of these live in Google Drive or Slack and are shared across Alpha campuses. Sign in with your Alpha account.",
  categories: [
    {
      id: "safety",
      title: "Student safety",
      intro:
        "At Kirkland: tell the Head Guide immediately, then follow the workflow. David Cooney is Alpha's school psychologist and the referral point. You are never expected to handle one of these conversations alone, and you never need to be certain before you say something — reporting a concern that turns out to be nothing is always the right call.",
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
    {
      id: "platforms",
      title: "Platforms and tools",
      items: [
        {
          title: "S1 Playbook · the default Session 1 manual",
          note: "The single most useful link on this page. The standard day hour by hour, a runbook for every block you'll run, the default workshop slate with Guide's Guides, launch plans by level, the behavioral model, check charts, and printables. Most of what we assumed we'd build from scratch already exists here. Pick Kirkland in the campus bar to see anything we've posted; everything else shows the default. Where the two differ, your Lead Guide's word wins.",
          url: "https://s1-playbook-2627.netlify.app/",
        },
        {
          title: "Guide's Guide Builder",
          note: "Where workshops get built, reviewed and committed. The only route to Guide Platform — nothing is built on the platform directly. Committing unlocks a pre-filled Guide's Guide and locks the skill tracker, so commit once your lead has approved. It doubles as the workshop library: paste your Canva and lesson plan links into the pitch page.",
          url: "https://guides-guide-app.vercel.app/",
        },
        {
          title: "Alpha Experiences · vendors and After School",
          note: "The portal for external vendors, experiences and After School programming. Vendors submit through the staff-join form, then wait on an Alpha-side approval — campuses have reported vendors stalling at that step with no clear point person, so build in time when you're booking anything. Questions go to Xlearning@2hourlearning.com.",
          url: "https://alpha-experiences.manus.space/",
        },
        {
          title: "Alpha Behavior Response Tool",
          note: "Guide-facing. Look up a behaviour, get the response the model calls for — warning, yellow, red or strike — so enforcement is consistent whichever adult is standing there. Team password required; it's shared separately, not posted here.",
          url: "https://alphabehaviortool.netlify.app/",
        },
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
          title: "Find Your Feathers",
          note: "The root-cause tool. We run it every session, kid by kid — never grouped.",
          url: "https://alpha-feathers.vercel.app/#/",
        },
        {
          title: "MAP practice before the real thing",
          note: "Jen Greenham runs the tools and practice test with students the day before, so they're fighting the questions rather than the interface.",
          url: "https://warmup.nwea.org/app/gradetwoplus/gradeTwoPlus.html",
        },
      ],
    },
    {
      id: "slack",
      title: "Slack channels",
      intro:
        "Slack file links only open if you're signed in to Alpha Slack. If one won't load, search the file name in the channel.",
      items: [
        {
          title: "#prek-12-guides",
          note: "Everyone. Announcements, academic updates, cross-level resources.",
          url: "https://go-alpha.slack.com/archives/C08EYUB0WP8",
        },
        {
          title: "#k-1-guides",
          note: "LL",
          url: "https://go-alpha.slack.com/archives/C0990STD53J",
        },
        {
          title: "#2-3-guides",
          note: "L1",
          url: "https://go-alpha.slack.com/archives/C098988MAQK",
        },
        {
          title: "#4-5-guides",
          note: "L2",
          url: "https://go-alpha.slack.com/archives/C098TGTK6DB",
        },
        {
          title: "#6-8-guides",
          note: "MS",
          url: "https://go-alpha.slack.com/archives/C098R4ETVLK",
        },
        {
          title: "#guide-platform-support",
          note: "Anything broken in Guide Platform. Post here rather than DMing Alec — he watches this channel, and a fix helps everyone.",
          url: "https://go-alpha.slack.com/archives/C0B8EPYBVB6",
        },
      ],
    },
    {
      id: "policies",
      title: "Policies and org updates",
      items: [
        {
          title: "Academic updates · placement, MAP and the new apps",
          note: "MAP is now the first step in placement (ours runs Sept 15–18). Placement no longer drops a student to the bottom — below 90% steps down one grade at a time until they hit a grade they've mastered. New apps: AlphaScience, AlphaMath, Math Raiders. XP and the two-hour block are unchanged.",
          url: "https://docs.google.com/document/d/1lZjWanACDOHquLoRqbPfQdk9I_kGbkGv04Ky-Aezvlc/edit",
        },
        {
          title: "Check chart and leveling-up policy",
          note: "A student who didn't finish last year's chart stays in their level until the remaining relevant checks are done. A student who is behind does the bootcamp chart for the level they're currently in, not the next one. Unfinished regular check chart work is homework, not bootcamp time. Catching up before week 4 of Session 1 can move them up, but they complete the new level's full bootcamp.",
          url: "https://go-alpha.slack.com/archives/C08EYUB0WP8",
        },
        {
          title: "Behavior Curriculum",
          note: "The 95% — the teaching half of the behavioral model, before any consequence exists.",
          url: "https://docs.google.com/spreadsheets/d/1DOnw2lRleTBBkfOsVra_vZQktNf9U9YzwUMWf6V5F38/edit",
        },
        {
          title: "Campus Security Portal",
          note: "Alpha's security policies. Surfaced network-wide on Aug 19 with the note that most campuses didn't know it existed — worth reading before we open.",
          url: "https://campus-security-portal-ochre.vercel.app/policies",
        },
        {
          title: "Academic Calendar · SY 26-27",
          note: "Every session start and end, breaks, MAP testing windows and days off. Session 1 runs Sept 8 to Oct 16.",
          url: "/docs/kirkland-calendar-26-27.pdf",
        },
        {
          title: "Alphas · work unit doc",
          note: "The rules on what pays out, what doesn't, and the 120 XP threshold. Read before building any motivational model.",
          url: "https://docs.google.com/document/d/1XYd7BSR-5D2IqeDz2FDG6_Mq3OEjkvNn6yh3fbWt14I/edit",
        },
        {
          title: "Work Unit Data Structures",
          note: "Session 4 (24-25). The bar your work units get quality-checked against.",
          url: "https://drive.google.com/drive/folders/1bcf5Fu0inQkTUMY-RBcFwPnArVNc7qtc",
        },
        {
          title: "S1 Guide Deliverables · where everything gets submitted",
          note: "The org's tracking sheet. Every deliverable we build this week gets linked on Kirkland's row here — that's what submitted means. The 26-27 workshop roadmap goes in column J. Nothing counts until it's on this sheet.",
          url: "https://docs.google.com/spreadsheets/d/10J5Uwd6jmgzEEwI2fVeFigQBDXCixtA8ToC07ZUYVE8/edit",
        },
      ],
    },
    {
      id: "ms",
      title: "Middle school plan of record",
      items: [
        {
          title: "Alpha MS Playbook",
          note: "Drew Casebier's full middle school plan of record. Vision, socialization, MAX, the check chart and the schedule in one place. Drew is the source of truth for anything middle school — start here.",
          url: "https://alpha-ms-playbook.vercel.app/",
          level: "MS",
        },
        {
          title: "Life Skills — the accountability map",
          note: "What gets taught where. ME and WE run as workshops; KEY runs through MAX. Session 1 is the only session with three workshops, because bootcamp is Independence, Feedback and Uphold Community Standards — the same three every level builds workshops for.",
          url: "https://alpha-ms-playbook.vercel.app/life-skills",
          level: "MS",
        },
        {
          title: "MAX — and when it actually starts",
          note: "The four faces — Explore, Create, Connect, Deploy — and the Challenge Bank. MAX does not unlock until Session 2, and completing the bootcamp check chart is what unlocks it. Session 1 is bootcamp with MAX visible but locked. Show it, don't run it.",
          url: "https://max-mvp.vercel.app/",
          level: "MS",
        },
        {
          title: "MAX Q&A",
          note: "Talking points and FAQs for conversations with families.",
          url: "https://drive.google.com/file/d/1o4gfiXaR_qyN80M-pANeEHMa2vFBCzhG/view",
          level: "MS",
        },
        {
          title: "MS Socialization One Pager",
          note: "Session-by-session mobile squad and socialization plan. Draft.",
          url: "https://drive.google.com/file/d/1xTFcb6hpJVbcjj_tilmksDYMdlWTgSxK/view",
          level: "MS",
        },
        {
          title: "MS Testing Schedule One Pager",
          note: "ISEE prep and PSAT 8/9.",
          url: "https://drive.google.com/file/d/1PqTbCbOCRaRyoVqLqE3nELo6uy-QUSTF/view",
          level: "MS",
        },
        {
          title: "MS Office Hours with Drew Casebier",
          note: "3pm EST. Drew is the source of truth for all things middle school, and the bootcamp chart has already changed once — worth joining one before Sept 8.",
          url: "https://meet.google.com/cfu-nxjd-drz",
          level: "MS",
        },
      ],
    },
    {
      id: "bootcamp",
      title: "Bootcamp and the first three days",
      intro:
        "The bootcamp time budget is roughly 15 hours per level. L2 already reported coming in at double that. Check your total before you commit to adapting anything.",
      items: [
        {
          title: "Bootcamp Check Chart · All Levels · SY26-27",
          note: "The master build doc. Every level's checks in one sheet. This is the thing we adapt on Wednesday.",
          url: "https://docs.google.com/spreadsheets/d/1Wj9mYrneOnVVtNbXXOpRdy6A9c6Rqpjgxawesd_f46Y/edit",
        },
        {
          title: "Week 1, Session 1 · Student Onboarding",
          note: "The dashboard you run your first three days from. Calendar B is ours — Sept 8-10. Mornings run as normal; afternoons are onboarding and Workshop Sprints, one life skill per day, ending with an off-campus community standards sprint.",
          url: "https://week1-session1.netlify.app/",
        },
        {
          title: "Day one, as Calendar A ran it",
          note: "Aug 12 in #prek-12-guides: new students had no tests or apps in TimeBack on day one except Fast Math, because MAP came first — so the Core Skills block needed filling. The advice was to get every kid logged into their device and TimeBack to surface problems early, then onto Fast Math. Worth reading the whole day-one thread before Sept 8.",
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
          title: "First three days deck, adapted for L1",
          note: "Scott Dangerfield took Katie Boye's slides and reworked them for this age band — Alpha Bootcamp and Core Life Skills, the Behavioral Model, and Feedback.",
          url: "https://www.canva.com/design/DAHR71lIuJQ/wkAECOrbuMNS9H4CiBFu_A/edit",
          level: "L1",
        },
        {
          title: "Bootcamp check chart intro deck",
          note: "Katie Boye posted this in #4-5-guides after someone asked rather than rebuilding it. Basic overview — copy and edit as needed.",
          url: "https://canva.link/434kw1329j0jc09",
          level: "L2",
        },
        {
          title: "Hannah Burkhauser's two-week bingo structure",
          note: "The best thinking in the channel. One double-sided sheet — kid's bingo card on the front, guide's evidence log on the back. Two cards: week 1 is the on-ramp of routines and quick wins, week 2 is the real AlphaChecks once the room already runs itself.",
          url: "https://canva.link/f7rc3chare1co8r",
          level: "LL",
        },
        {
          title: "Grade K Bootcamp BINGO",
          note: "Caitlin Calzadilla. Finished and printable. The blank circles show how many times a guide must observe the behaviour before the check is earned.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNUAM4DND/grade_k_bootcamp_bingo.png.pdf",
          level: "LL",
        },
        {
          title: "Grade 1 Bootcamp BINGO",
          note: "Caitlin Calzadilla.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNW3EMULU/grade_1_bootcamp_bingo.png.pdf",
          level: "LL",
        },
        {
          title: "Mood Meter AlphaCheck (LLKIN05)",
          note: "Bryce Derry. A worked example of what a finished check doc looks like.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNAFLR5RP/llkin05_-_alphacheck_-_mood_meter",
          level: "LL",
        },
        {
          title: "Mini Bootcamp Bingo",
          note: "Caitlin Calzadilla built this for the exact gap where check chart time exists but students haven't learned enough routine to earn the real checks yet. They pick a task, do it independently, clean up, add a sticker — learning how the check chart works while getting to know the room. Finishing it rings a gong and earns their first Polaroid for the Brag Wall.",
          url: "https://go-alpha.slack.com/archives/C0990STD53J",
          level: "LL",
        },
        {
          title: "Bootcamp check chart tracking app",
          note: "Scott Dangerfield built it to take the tracking lift off guides. Two Loom tutorials in the channel.",
          url: "https://bootcampcheckchart.lovable.app",
          level: "L1",
        },
        {
          title: "L1 Bootcamp BINGO · Grade 2",
          note: "England Reddy. No guide check-off column — Guide Platform handles that.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNK7V92GM/l1_bootcamp_bingo_grade2.pdf",
          level: "L1",
        },
        {
          title: "L1 Bootcamp BINGO · Grade 3",
          note: "England Reddy.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNSCM6JJ0/l1_bootcamp_bingo_grade3.pdf",
          level: "L1",
        },
        {
          title: "The independence binder",
          note: "Scott Dangerfield. A physical binder plus a Canva insert that carries a student through five 2nd-grade and two 3rd-grade independence checks: TimeBack steps five days running, solving a tech issue alone, moving between apps in under a minute, arriving fully charged, and tracking their own data.",
          url: "https://canva.link/los4yz51cxb4mke",
          level: "L1",
        },
        {
          title: "L2 Bootcamp BINGO · Grade 4",
          note: "England Reddy.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNQRBLNG5/l2_bootcamp_bingo_grade4_1.pdf",
          level: "L2",
        },
        {
          title: "L2 Bootcamp BINGO · Grade 5",
          note: "England Reddy.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNW854881/l2_bootcamp_bingo_grade5.pdf",
          level: "L2",
        },
        {
          title: "5th Grade Independence Scavenger Hunt",
          note: "Erin Colucci built it in GooseChase. Ten missions — five on campus, five at a local mall — and each completed mission unlocks the next.",
          url: "https://join.goosechase.com/6dd61b18-bb5d-4e72-9c6c-5a495644f036",
          level: "L2",
        },
        {
          title: "5th TED Talk GPT Prompt",
          note: "Sunny Lulla, for the public speaking check.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BN0GM7EKC/5th_ted_talk_gpt_prompt.pdf",
          level: "L2",
        },
        {
          title: "School-year check chart · Google Sheet",
          note: "Luke Phillips has one and offered it in the channel. Not posted as a link — ask him for it.",
          url: "https://go-alpha.slack.com/archives/C098TGTK6DB",
          level: "L2",
        },
        {
          title: "Open question we could answer",
          note: "A guide in the channel asked for a good independence activity for Wednesday's Bootcamp Sprint #2 — the same sprint we run on Sept 9. If it's still unanswered when we build ours, post it back.",
          url: "https://go-alpha.slack.com/archives/C098TGTK6DB",
          level: "L2",
        },
        {
          title: "One chart, 15 checks, all of 6–8",
          note: "Drew Casebier rebuilt the middle school bootcamp over the weekend of Aug 16. Grade levels no longer matter — every Alpha middle schooler completes the same fifteen checks, organised by pillar. The reason given was consistent feedback from students and guides that the old bootcamp wasn't setting kids up to succeed. Anything you read about MS bootcamp from before Aug 17 is out of date.",
          url: "https://docs.google.com/spreadsheets/d/1aJh3WL1BRULzUVlcHOD9fddWt6w_0nCy3OLHn3k-Ixc/edit",
          level: "MS",
        },
        {
          title: "It lives on the Alpha Project Hub, not Guide Platform",
          note: "Students and guides sign in with their school Google account. Guide Platform pulls progress automatically, so there's no need to touch it for MS bootcamp checks. Everything else — notes, behaviour, workshops — still runs through Guide Platform as normal. Sign in as a guide before Aug 31 and confirm your roster shows.",
          url: "https://alpha-project-hub.vercel.app/",
          level: "MS",
        },
        {
          title: "Recommended order to tackle the checks",
          note: "Drew's suggested sequence for working through the fifteen most efficiently. Students see the whole chart from day one — every check with its name, its “I can” statement and a plain description — so they always know what's coming.",
          url: "https://drive.google.com/file/d/1LSiTEifE_w5WjnnWimheFxlI85_DMxUU/view",
          level: "MS",
        },
        {
          title: "The four checks students can start immediately",
          note: "Mia Schaubhut posted these as editable Canva files while site access was being sorted: 168 Hours, Phone Away Powered Up, Know Your Crew, Mobile Squad Planner, and Lunch Biographer.",
          url: "https://www.canva.com/design/DAHSgfDy44s/ZOq0f2XikwfWq1U0cKZ0Bg/edit",
          level: "MS",
        },
        {
          title: "What the guide has to do outside the platform",
          note: "Mia's list of the lift that isn't automated: randomise the lunch pairings and hang them in the space for Lunch Biographer; run a phone and laptop-charge tracker for Phone Away Powered Up — which also gives students without phones a route through; check bcc'd emails for The Pump Up Email; and for large levels, run a photo-name quiz for Know Your Crew.",
          url: "https://drive.google.com/file/d/1UpGZsNXm6QcZ-Er4RoE_Coq1N4f68WJI/view",
          level: "MS",
        },
      ],
    },
    {
      id: "launches",
      title: "Launches and check activities",
      items: [
        {
          title: "Launch Box · 189 Limitless Launch cards",
          note: "A physical deck. One 15-minute group activity per card — pull it, read the front, run it. No planning and nothing to look up. Version 2 dropped Aug 20: same activities as last year's, with better reflection questions, clearer run steps and bigger cards. Physical decks are on the way; the PDF is linked here.",
          url: "/docs/launch-box-v2.pdf",
        },
        {
          title: "Launches Forever 26-27",
          note: "Grant Cain's full set of proven launches for this age band, each with the growth-mindset principle and the questions kids should be asking at the end. The best single artifact in any of the four channels. Most need 5–15 minutes of setup — not a last-minute resource. Make a copy before editing.",
          url: "https://docs.google.com/presentation/d/1hqKMgFhpwGyGTo1RDYsoAJfo_msEb6fTv5HxnyGOJ1Y/edit",
          level: "L2",
        },
        {
          title: "MS Launches · shared Canva folder",
          note: "Mia Schaubhut's folder of launches already run with a middle school crew and validated by student feedback. Request access from her, and make a copy before editing anything.",
          url: "https://canva.link/6wuynjio3eorui1",
          level: "MS",
        },
        {
          title: "The Magical Yet · launch",
          note: "Christie Ray. Works as a launch or during read-aloud; the plan is in the notes of the first slide.",
          url: "https://canva.link/4nc83xh3hjxeuvk",
          level: "LL",
        },
        {
          title: "Friendship Islands",
          note: "Vanessa Watson. A socialization launch built for the first day when nobody knows anybody. Hula hoops as islands. Directly usable Sept 8.",
          url: "https://canva.link/odzupcjtouy2fzp",
          level: "LL",
        },
        {
          title: "This or That · Friendship Edition",
          note: "Vanessa Watson. The other day-one socialization launch.",
          url: "https://canva.link/dcsni706ca8jw4f",
          level: "LL",
        },
        {
          title: "Puzzle activity as a launch",
          note: "Tamara Friend.",
          url: "https://canva.link/rsopg0p198kndvl",
          level: "L1",
        },
        {
          title: "Student launch planning worksheet",
          note: "Tamara Friend. For when kids start running their own launches.",
          url: "https://canva.link/5w7uxpaxghflk2i",
          level: "L1",
        },
        {
          title: "Green Jellybean challenge",
          note: "Mia Schaubhut. A day-one independence sprint from Dr. Dinin's Learning to Fail series at Duke. Groups of four, then a conversation about independence and operating in ambiguity.",
          url: "https://go-alpha.slack.com/archives/C098R4ETVLK",
          level: "MS",
        },
        {
          title: "Sink or Sail · independence mini-workshop",
          note: "Caitlin Calzadilla. Build a boat that keeps four toy bears afloat for ten seconds, then level up the challenge if they finish early.",
          url: "https://docs.google.com/document/d/1WUwScj65gqv_uMsG75vObZedCjyecKje2Yl3_ADj-RU/edit",
          level: "LL",
        },
        {
          title: "Sink or Sail · slides",
          note: "The Canva that goes with it.",
          url: "https://canva.link/2o9956uqu2tv2uf",
          level: "LL",
        },
        {
          title: "One activity, many feedback checks — built for small campuses",
          note: "Scott Dangerfield's level-wide bootcamp activity clears a batch of the feedback checks in one go, and he explicitly notes it can be run combining LL and L1 at smaller expansion campuses. That's us.",
          url: "https://canva.link/48jrxbatn1iiell",
          level: "LL",
        },
        {
          title: "One activity, many feedback checks — built for small campuses",
          note: "Scott Dangerfield. Can be run combining L1 and LL at smaller expansion campuses.",
          url: "https://canva.link/48jrxbatn1iiell",
          level: "L1",
        },
        {
          title: "Receiving Feedback",
          note: "Scott Dangerfield.",
          url: "https://www.canva.com/design/DAGv3vg7EbE/RYecLb_kq5hOpxJ0i96-Eg/edit",
          level: "L1",
        },
        {
          title: "Independence",
          note: "Tamara Friend. All of these are Canva and editable — make a copy first.",
          url: "https://canva.link/c5srbvbnf177hqu",
          level: "L1",
        },
        {
          title: "Upholding community standards · cleaning up messes",
          note: "Tamara Friend.",
          url: "https://canva.link/p9pus0lafkv45au",
          level: "L1",
        },
        {
          title: "TimeBack readiness",
          note: "Tamara Friend.",
          url: "https://canva.link/rf6xhksaansuxte",
          level: "L1",
        },
        {
          title: "SMART goals",
          note: "Tamara Friend.",
          url: "https://canva.link/dkw47wtmtjqj43d",
          level: "L1",
        },
        {
          title: "Tech Troubleshooting Menu",
          note: "Faith Crenshaw, Grade 2.",
          url: "https://canva.link/wgduf9sqrra0dk9",
          level: "L1",
        },
        {
          title: "Steps to TimeBack Learning",
          note: "Faith Crenshaw.",
          url: "https://canva.link/bn5ztmb3pbb430i",
          level: "L1",
        },
        {
          title: "Focus card · the 3 B's",
          note: "Raya Belton. Blink, Breathe, Back. Both LL levels have a focus check — this gives kids a way to catch and correct themselves without a guide stepping in.",
          url: "https://go-alpha.slack.com/archives/C0990STD53J",
          level: "LL",
        },
        {
          title: "Hello Passport Pal",
          note: "An app for the “hello in ten languages” check. 25 countries, no login, and a practice mode before the test.",
          url: "https://hello-passport-pal.lovable.app/",
          level: "L1",
        },
      ],
    },
    {
      id: "posters",
      title: "Posters, printing, and motivation",
      items: [
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
          title: "Learning Lab Behavior Poster",
          note: "Raya Belton, iterated on channel feedback.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BN41GM7RD/learning_lab_behavior_poster.png",
          level: "LL",
        },
        {
          title: "LL Giving & Receiving Feedback",
          note: "Vanessa Watson.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BP1T52ZDJ/ll_giving___receiving_feedback",
          level: "LL",
        },
        {
          title: "Behavior poster · L2 version",
          note: "Jen Greenham, adapted from the LL one.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNW09FWV7/chatgpt_image_aug_7__2026__01_40_46_pm.png",
          level: "L2",
        },
        {
          title: "MS behavior model posters",
          note: "Caitlin deMello, four variants in the channel.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNRV38MM3/chatgpt_image_aug_7__2026__01_44_28_pm__1_.png",
          level: "MS",
        },
        {
          title: "Tier 1 XP / Alphas poster",
          note: "Jen Greenham.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNWB36CCD/image.png",
          level: "L2",
        },
        {
          title: "L1/L2 Session 1 Rewards Map",
          note: "England Reddy. Some parts deliberately don't start until after week 4.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNNFQ6F6F/l1_l2_session1_rewards_map.pdf",
          level: "L1",
        },
        {
          title: "L1/L2 Session 1 Rewards Map",
          note: "England Reddy.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNUMMCKDY/l1_l2_session1_rewards_map.pdf",
          level: "L2",
        },
        {
          title: "Behavior Chart",
          note: "Christi Gordon, Scottsdale. Printed and laminated, used as a visual so the student names which bucket their behaviour fell into. Includes the setting, discussion prompt and next steps.",
          url: "https://go-alpha.slack.com/files/U026B83SZS5/F0BNRJZ4L2H/behavior_chart.pdf",
          level: "L1",
        },
        {
          title: "A Day at Alpha · the canon site",
          note: "The org's day-in-the-life reference. The motivation page carries the Tier 1 campus jobs list — the starting point before your town hall votes on its own.",
          url: "https://a-day-at-alpha.vercel.app/day/motivation/",
        },
      ],
    },
    {
      id: "workshops",
      title: "Workshops and life skills",
      items: [
        {
          title: "Banger pitches from staff days",
          note: "Every campus's pitches in one place. Worth twenty minutes before you build a single workshop.",
          url: "https://banger-pitches-staff-days.pplx.app/#/",
        },
        {
          title: "LL Workshop Ideas",
          note: "The shared brainstorm sheet, colour-coded to show connections between workshops.",
          url: "https://docs.google.com/spreadsheets/d/1BHMkZ_GW8S-YIkK4eznO7Ou0bdHr-mUXY6HF9W2dQmE/edit",
          level: "LL",
        },
        {
          title: "Road Map Ideas",
          note: "Lauren Sprouse's notes from the roadmap session.",
          url: "https://docs.google.com/document/d/1L317ut3_3kWbVetISKDnd2oSOltyY7ccvpffAGd5LJo/edit",
          level: "LL",
        },
        {
          title: "Articulate Artist · Guide's Guide",
          note: "Darby Knox. Read it as a format example as much as a workshop.",
          url: "https://docs.google.com/document/d/12Kz5bBBLaM8XtQsZgpc6uKcGBrnI4Vs2yuym2V_Zu2I/edit",
          level: "LL",
        },
        {
          title: "Ground Control · Guide's Guide",
          note: "Patty Kelley.",
          url: "https://docs.google.com/document/d/1s6XRKGA4yFfvLf0cehPVXpV1wjWlCfFtkzcwmbP5tg8/edit",
          level: "LL",
        },
        {
          title: "WL Grit · The Wipeout Club",
          note: "Cassie Blessing's banger pitch.",
          url: "https://guides-guide-app.vercel.app/pitches/8a7ad439-19ee-4848-a841-aedbae415c71",
          level: "LL",
        },
        {
          title: "Grit Games",
          note: "Mia Schaubhut and Jacob Frisch. A Survivor-style teamwork competition run at L1 Austin last year, written up as a memo. She's explicitly asked another campus to take it and make it better.",
          url: "https://docs.google.com/document/d/1kk2XkpJeJ1un-OXHmcSUCbZObDOdwFDAmOV7ocFXyLw/edit",
          level: "L1",
        },
        {
          title: "Y26-27 Workshop Roadmap - Kirkland",
          note: "The full workshop roadmap for the year, organized by session.",
          url: "https://docs.google.com/spreadsheets/d/1hvXBrmY8J2AYkOxzi0A3sk5ivVYob_ovzCeSKmGjcSc/edit",
        },
        {
          title: "Life Skills Roadmap",
          note: "The roadmap workshops get built from. Start here before Build 2.",
          url: "https://docs.google.com/document/d/1qFV9eqhQ_blv7oijJnYAAtApJIDR6GLEvQ4ZX1HXjx4/edit",
        },
        {
          title: "Life Skills Knowledge Tree",
          note: "The skills themselves, browsable. Use it to see where a workshop sits in the wider tree.",
          url: "https://life-skills-knowledge-tree.lovable.app/",
        },
        {
          title: "Tree Skills · PDF breakdown",
          note: "Each branch of the tree broken down in detail. Requires your Alpha Google account.",
          url: "https://drive.google.com/drive/folders/1ZyUyUCF--wPTZw1fiYGMYYk0CZRZ7vgf",
        },
        {
          title: "Life Skills Workshops playbook (Pitch, Facilitate, Coach, AlphaTest)",
          url: "/resources/Life_Skills_Workshop_Playbook.pdf",
        },
      ],
    },
  ],
  sections: [
    { id: "evaluation", title: "Evaluation and Growth" },
    { id: "sprint", title: "Build Sprint (BrainLift method)" },
  ],
};

// ON HOLD: not shown on the site until the payout rule is confirmed.
// To show it, move it into the "Policies and org updates" category above.
export const onHold: LibraryItem[] = [
  {
    title: "Alpha payout has changed — this affects Tuesday's build",
    note: "Alphas are now paid for XP only, not for check charts and not for campus jobs, and only on days a student hits 120 XP (except LL). No debit cards for middle school. Build the motivational model against these rules, not last year's.",
    url: "https://go-alpha.slack.com/archives/C08EYUB0WP8",
  },
];

export const footer = "Alpha School Kirkland · Staff Days";

// ── Home page sections ───────────────────────────────────────────────────────

export const staffDaysIntro = {
  eyebrow: "Staff Days",
  heading: "Every staff day, in one place.",
  empty: "Nothing else is on the calendar yet. When the next staff day is added, it shows up here.",
  pastLabel: "Past staff days",
};

export const archiveLink = {
  eyebrow: "Archive",
  heading: "Opening Week Staff Days, Aug 31 to Sep 4, 2026",
  body: "Everything from our first week as a team, kept in one place: what we read, what we planned, what we delivered, and how the week ran.",
  label: "Open the archive",
  href: "/archive",
};
