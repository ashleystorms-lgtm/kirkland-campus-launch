import Link from "next/link";
import type { ReactNode } from "react";
import type {
  archiveByFriday,
  archivePrep,
  archivePrepLabels,
  archiveReading,
  archiveRules,
  archiveS1Links,
  archiveStory,
  archiveSummerNotes,
} from "../data/archive";
import {
  archiveLink,
  evaluation,
  footer,
  library,
  sprint,
  staffDaysIntro,
} from "../data/bootcamp";

// ── Shared shell ─────────────────────────────────────────────────────────────

function Section({
  id,
  eyebrow,
  heading,
  children,
  wide = false,
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-line px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className={`mx-auto ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-muted">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-[1.6rem] font-light leading-tight tracking-[0.02em] text-fg sm:text-[2.05rem]">
          {heading}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-left align-top">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                className="border-b border-line pb-3 pr-6 text-[9px] font-medium uppercase tracking-[0.24em] text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line/60 align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={[
                    "py-4 pr-6 text-[0.86rem] font-light leading-relaxed",
                    j === 0 ? "text-fg" : "text-soft",
                  ].join(" ")}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// The nine summer staff day summaries, used on the Archive page.
function StaffDaysDocs({ docs }: { docs: typeof archiveReading.docs }) {
  return (
    <ol className="mt-10 space-y-px">
      {docs.map((doc) => (
        <li key={doc.n} className="border-t border-line">
          <a
            href={doc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-x-6 gap-y-2 py-8 sm:grid-cols-[3.5rem_1fr]"
          >
            <div className="font-mono text-[1.6rem] font-light leading-none text-accent/80">
              {String(doc.n).padStart(2, "0")}
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="text-[1.1rem] font-normal text-fg transition-colors duration-300 group-hover:text-accent">
                  {doc.title}
                </h3>
                <p className="font-mono text-[0.7rem] text-muted">
                  {doc.day} · {doc.date}
                </p>
                <p className="font-mono text-[0.7rem] text-accent">
                  ~{doc.mins} min
                </p>
              </div>

              <p className="mt-4 max-w-2xl text-[0.9rem] font-light leading-relaxed text-body">
                {doc.summary}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ol>
  );
}

function BookNote({ book }: { book: typeof archiveReading.book }) {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h3 className="text-[1.1rem] font-normal text-fg">
          {book.title}
          <span className="font-light text-soft">
            {" "}
            — {book.author}
          </span>
        </h3>
        <p className="font-mono text-[0.7rem] text-muted">
          {book.scope} · ~{book.mins} min
        </p>
      </div>

      <p className="mt-4 max-w-2xl text-[0.9rem] font-light leading-relaxed text-body">
        {book.why}
      </p>

      <p className="mt-4 text-[0.82rem] font-light leading-relaxed text-muted">
        {book.note}
      </p>
    </div>
  );
}

// ── Archive: what we read before the week ───────────────────────────────────

export function ReadingSection({ data }: { data: typeof archiveReading }) {
  return (
    <Section id="reading" eyebrow={data.eyebrow} heading={data.heading} wide>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {data.intro}
      </p>
      <div className="mt-6 border-l-2 border-accent/40 pl-5">
        <p className="text-[0.92rem] font-light leading-relaxed text-body">
          {data.why}
        </p>
      </div>

      <p className="mt-6 max-w-2xl text-[0.82rem] font-light leading-relaxed text-muted">
        {data.totalNote}
      </p>

      <StaffDaysDocs docs={data.docs} />

      <div className="mt-20 border-t border-line" />

      <BookNote book={data.book} />
    </Section>
  );
}

// ── Archive: the rest of what we flagged before the week ────────────────────

function NoteBlock({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 border-l-2 border-accent/40 pl-5">
      <p className="max-w-2xl text-[0.92rem] font-light leading-relaxed text-body">
        {children}
      </p>
    </div>
  );
}

export function SummerNotesSection({
  data,
  note,
}: {
  data: typeof archiveSummerNotes;
  note: string;
}) {
  return (
    <Section id="summer-notes" eyebrow={data.eyebrow} heading={data.heading} wide>
      <p className="font-mono text-[0.7rem] text-muted">{note}</p>

      <div className="mt-10 rounded-sm border border-warn/30 border-l-4 border-l-warn bg-surface px-6 py-6 sm:px-8">
        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-warn">
          {data.safety.label}
        </p>
        <h3 className="mt-3 text-[1.05rem] font-normal text-fg">
          {data.safety.heading}
        </h3>
        <p className="mt-3 max-w-3xl text-[0.92rem] font-light leading-relaxed text-body">
          {data.safety.body}
        </p>
      </div>

      <h3 className="mt-14 mb-3 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        {data.levelWorkHeading}
      </h3>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {data.levelWorkIntro}
      </p>

      <div className="mt-10 border-l-2 border-accent pl-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-accent">
          {data.whatsNew.date}
        </p>
        <h3 className="mt-3 text-[1.05rem] font-normal text-fg">
          {data.whatsNew.heading}
        </h3>
        <p className="mt-3 max-w-2xl text-[0.92rem] font-light leading-relaxed text-body">
          {data.whatsNew.body}
        </p>

        <h4 className="mt-8 mb-4 text-[0.95rem] font-normal text-accent">
          {data.whatsNew.doFirst.heading}
        </h4>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
          <div>
            <h5 className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
              Before Aug 31
            </h5>
            <ul className="space-y-2.5">
              {data.whatsNew.doFirst.before.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.85rem] font-light leading-relaxed text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
              During the week
            </h5>
            <ul className="space-y-2.5">
              {data.whatsNew.doFirst.during.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.85rem] font-light leading-relaxed text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
              Before Sept 8
            </h5>
            <ul className="space-y-2.5">
              {data.whatsNew.doFirst.after.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.85rem] font-light leading-relaxed text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <NoteBlock>{data.warning}</NoteBlock>

      <h3 className="mt-14 mb-3 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        {data.channels.heading}
      </h3>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {data.channels.body}
      </p>

      <NoteBlock>{data.giveBack}</NoteBlock>
    </Section>
  );
}

// ── Our Story ────────────────────────────────────────────────────────────────

export function StorySection({ data }: { data: typeof archiveStory }) {
  return (
    <Section id="story" eyebrow={data.eyebrow} heading={data.heading}>
      <div className="space-y-6 text-[1rem] font-light leading-[1.8] text-body sm:text-[1.08rem]">
        {data.paragraphs.map((p, i) => (
          <p
            key={p}
            className={
              i === data.paragraphs.length - 1
                ? "border-l-2 border-accent/40 pl-5 text-accent"
                : undefined
            }
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}

// ── By Friday ────────────────────────────────────────────────────────────────

export function ByFridaySection({ data }: { data: typeof archiveByFriday }) {
  return (
    <Section id="byfriday" eyebrow={data.eyebrow} heading={data.heading} wide>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {data.intro}
      </p>

      <ol className="mt-14 space-y-px">
        {data.items.map((item) => (
          <li
            key={item.n}
            className="grid gap-x-6 gap-y-4 border-t border-line py-8 sm:grid-cols-[3.5rem_1fr]"
          >
            <div className="font-mono text-[1.6rem] font-light leading-none text-accent/80">
              {String(item.n).padStart(2, "0")}
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="text-[1.1rem] font-normal text-fg">
                  {item.title}
                </h3>
                <p className="font-mono text-[0.7rem] text-muted">
                  {item.when}
                </p>
              </div>

              <p className="mt-4 max-w-2xl text-[0.9rem] font-light leading-relaxed text-body">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 border-l-2 border-accent/40 pl-6">
        <p className="max-w-2xl text-[0.95rem] font-light leading-relaxed text-body">
          {data.outro}
        </p>
      </div>

      <a
        href={data.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-[0.9rem] font-light text-accent hover:underline"
      >
        {data.link.label}
      </a>
    </Section>
  );
}

// ── The Sprint ───────────────────────────────────────────────────────────────

export function SprintSection() {
  return (
    <Section id="sprint" eyebrow={sprint.eyebrow} heading={sprint.heading} wide>
      <div className="max-w-3xl space-y-6 text-[0.95rem] font-light leading-[1.8] text-body">
        {sprint.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-10 border-l-2 border-warn/60 pl-6">
        <p className="max-w-2xl text-[0.95rem] font-light leading-relaxed text-body">
          {sprint.bar}
        </p>
      </div>

      <p className="mt-8 max-w-3xl text-[0.92rem] font-light leading-relaxed text-body">
        {sprint.howToStart}
      </p>

      <p className="mt-6 max-w-2xl text-[0.82rem] font-light leading-relaxed text-muted">
        {sprint.note}
      </p>
    </Section>
  );
}

// ── Evaluation & Growth ──────────────────────────────────────────────────────

export function EvaluationSection() {
  return (
    <Section
      id="evaluation"
      eyebrow={evaluation.eyebrow}
      heading={evaluation.heading}
      wide
    >
      <div className="mb-12 rounded-sm border border-warn/30 border-l-2 border-l-warn bg-surface px-6 py-5">
        <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-warn">
          Needs review
        </p>
        <p className="mt-3 max-w-2xl text-[0.92rem] font-light leading-relaxed text-body">
          {evaluation.needsReview}
        </p>
      </div>

      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {evaluation.intro}
      </p>

      <h3 className="mt-16 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        Work units — the inputs
      </h3>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {evaluation.workUnit.what}
      </p>
      <ul className="mt-6 space-y-2.5">
        {evaluation.workUnit.points.map((point) => (
          <li
            key={point}
            className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-body"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
            />
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {evaluation.workUnit.checked}
      </p>

      <div className="mt-8 border-l-2 border-accent/40 pl-5">
        <p className="text-[0.92rem] font-light leading-relaxed text-body">
          {evaluation.workUnit.theory}
        </p>
      </div>

      <a
        href={evaluation.workUnit.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-[0.9rem] font-light text-accent hover:underline"
      >
        {evaluation.workUnit.linkLabel}
      </a>

      <div className="mt-6 border-l-2 border-accent/40 pl-5">
        <p className="text-[0.92rem] font-light leading-relaxed text-body">
          {evaluation.workUnit.tieIn}
        </p>
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        The formal evaluation — twice a year
      </h3>
      <Table
        head={["Step", "What happens"]}
        rows={evaluation.formal.map((f) => [f.step, f.what])}
      />

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        Ratings
      </h3>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {evaluation.ratings.map((r) => (
          <div key={r.name}>
            <h3 className="text-[0.98rem] font-normal text-fg">
              {r.name}
            </h3>
            <p className="mt-3 text-[0.89rem] font-light leading-relaxed text-body">
              {r.body}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        Promotion
      </h3>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {evaluation.promotionNote}
      </p>
      <div className="mt-8">
        <Table
          head={["Step", "What it takes"]}
          rows={evaluation.promotion.map((p) => [p.n, p.what])}
        />
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        Growth paths
      </h3>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {evaluation.paths.map((p) => (
          <div key={p.name}>
            <h3 className="text-[0.98rem] font-normal text-fg">
              {p.name}
            </h3>
            <p className="mt-3 text-[0.89rem] font-light leading-relaxed text-body">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-l-2 border-accent/40 pl-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
          {evaluation.compensation.heading}
        </p>
        <p className="mt-3 max-w-2xl text-[0.95rem] font-light leading-relaxed text-body">
          {evaluation.compensation.body}
        </p>
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        The no-surprises contract
      </h3>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        <div>
          <h4 className="mb-4 text-[0.95rem] font-normal text-accent">
            What you&rsquo;re owed
          </h4>
          <ul className="space-y-2.5">
            {evaluation.owed.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-body"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-[0.95rem] font-normal text-accent">
            The standard behind the rating
          </h4>
          <p className="text-[0.89rem] font-light leading-relaxed text-body">
            {evaluation.standard}
          </p>
        </div>
      </div>
    </Section>
  );
}

// ── Prep ─────────────────────────────────────────────────────────────────────

export function PrepSection({
  data,
  labels,
}: {
  data: typeof archivePrep;
  labels: typeof archivePrepLabels;
}) {
  return (
    <Section id="prep" eyebrow={data.eyebrow} heading={data.heading} wide>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-body">
        {data.distributionRule}
      </p>

      <h3 className="mt-16 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        {labels.floor}
      </h3>
      <Table
        head={["Block", "Who runs it", "Notes"]}
        rows={data.floor.map((f) => [f.block, f.who, f.notes])}
      />

      <h3 className="mt-20 mb-3 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        {data.commitments.heading}
      </h3>
      <p className="mb-8 max-w-3xl text-[0.92rem] font-light leading-relaxed text-body">
        {data.commitments.intro}
      </p>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-3">
        {data.commitments.groups.map((group) => (
          <div key={group.heading}>
            <h4 className="mb-4 text-[0.95rem] font-normal text-accent">
              {group.heading}
            </h4>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        {labels.open}
      </h3>
      <ol className="space-y-px">
        {data.openItems.map((item, i) => (
          <li
            key={item.title}
            className="grid gap-x-6 gap-y-2 border-t border-line py-6 sm:grid-cols-[2.5rem_1fr]"
          >
            <span className="font-mono text-[0.8rem] text-warn">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-[0.98rem] font-normal text-fg">
                {item.title}
              </h4>
              <p className="mt-2 max-w-2xl text-[0.89rem] font-light leading-relaxed text-body">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        {labels.stage}
      </h3>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {data.staging.map((group) => (
          <div key={group.heading}>
            <h4 className="mb-4 text-[0.95rem] font-normal text-accent">
              {group.heading}
            </h4>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-l-2 border-accent/40 pl-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
          {labels.nameTags}
        </p>
        <p className="mt-3 max-w-2xl text-[0.95rem] font-light leading-relaxed text-body">
          {data.nameTags}
        </p>
      </div>
    </Section>
  );
}

// ── House Rules ──────────────────────────────────────────────────────────────

export function RulesSection({
  data,
  notDoingLabel,
}: {
  data: typeof archiveRules;
  notDoingLabel: string;
}) {
  return (
    <Section id="rules" eyebrow={data.eyebrow} heading={data.heading} wide>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {data.items.map((rule) => (
          <div key={rule.title}>
            <h3 className="text-[0.98rem] font-normal text-fg">
              {rule.title}
            </h3>
            <p className="mt-3 text-[0.89rem] font-light leading-relaxed text-body">
              {rule.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-24 max-w-2xl text-center text-[1.15rem] font-light leading-relaxed text-accent sm:text-[1.35rem]">
        {data.closingLine}
      </p>

      <h3 className="mt-24 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
        {notDoingLabel}
      </h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {data.notDoing.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[0.89rem] font-light leading-relaxed text-soft"
          >
            <span aria-hidden="true" className="font-mono text-warn">
              ×
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

// ── A plain list of links (the Archive's S1-only links) ─────────────────────

export function LinkListSection({
  id,
  data,
}: {
  id: string;
  data: typeof archiveS1Links;
}) {
  return (
    <Section id={id} eyebrow={data.eyebrow} heading={data.heading}>
      <p className="max-w-2xl text-[0.82rem] font-light leading-relaxed text-muted">
        {data.note}
      </p>

      <div className="mt-10">
        {data.items.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 border-t border-line py-6"
          >
            <div>
              <h3 className="text-[0.98rem] font-normal text-fg transition-colors duration-300 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl text-[0.88rem] font-light leading-relaxed text-soft">
                {item.description}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-[0.9rem] text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}

// ── Home: Staff Days header ─────────────────────────────────────────────────

export function StaffDaysHeader({ isEmpty }: { isEmpty: boolean }) {
  return (
    <Section eyebrow={staffDaysIntro.eyebrow} heading={staffDaysIntro.heading}>
      {isEmpty && (
        <p className="max-w-2xl text-[0.95rem] font-light leading-[1.8] text-body">
          {staffDaysIntro.empty}
        </p>
      )}
    </Section>
  );
}

export function PastDaysLabel() {
  return (
    <div className="border-t border-line px-6 pt-16 sm:px-10">
      <p className="mx-auto max-w-3xl text-[9px] font-medium uppercase tracking-[0.35em] text-muted">
        {staffDaysIntro.pastLabel}
      </p>
    </div>
  );
}

// ── Home: the Resources library ─────────────────────────────────────────────

export function LibrarySection() {
  return (
    <Section id="library" eyebrow={library.eyebrow} heading={library.heading} wide>
      <p className="max-w-2xl text-[0.82rem] font-light leading-relaxed text-muted">
        {library.note}
      </p>

      {/* What's in the library, at a glance */}
      <ul className="mt-10 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {library.categories.map((c) => (
          <li key={c.id}>
            <a
              href={`#res-${c.id}`}
              className="group flex items-baseline justify-between gap-4 border-b border-line/60 py-2"
            >
              <span className="text-[0.9rem] font-light text-body transition-colors duration-300 group-hover:text-accent">
                {c.title}
              </span>
              <span className="font-mono text-[0.7rem] text-muted">
                {c.items.length}
              </span>
            </a>
          </li>
        ))}
        {library.sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className="group flex items-baseline justify-between gap-4 border-b border-line/60 py-2"
            >
              <span className="text-[0.9rem] font-light text-body transition-colors duration-300 group-hover:text-accent">
                {sec.title}
              </span>
              <span className="font-mono text-[0.7rem] text-muted">read</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-16 space-y-16">
        {library.categories.map((c) => (
          <div
            key={c.id}
            id={`res-${c.id}`}
            className="scroll-mt-24 rounded-sm border border-line bg-surface px-6 py-8 sm:px-8"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h3 className="text-[1.1rem] font-normal text-fg">{c.title}</h3>
              <p className="font-mono text-[0.7rem] text-muted">
                {c.items.length} link{c.items.length === 1 ? "" : "s"}
              </p>
            </div>

            {c.intro && (
              <p className="mt-4 max-w-3xl text-[0.88rem] font-light leading-relaxed text-soft">
                {c.intro}
              </p>
            )}

            <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {c.items.map((item) => (
                <li key={`${item.level ?? ""}-${item.title}`}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="text-[0.88rem] font-normal text-fg transition-colors duration-300 group-hover:text-accent">
                      {item.title}
                    </span>
                    {item.level && (
                      <span className="ml-2 font-mono text-[0.65rem] text-muted">
                        {item.level}
                      </span>
                    )}
                    {item.note && (
                      <p className="mt-1 text-[0.82rem] font-light leading-relaxed text-soft">
                        {item.note}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Home: link to the Archive ───────────────────────────────────────────────

export function ArchiveLinkSection() {
  return (
    <Section id="archive" eyebrow={archiveLink.eyebrow} heading={archiveLink.heading}>
      <p className="max-w-2xl text-[0.95rem] font-light leading-[1.8] text-body">
        {archiveLink.body}
      </p>
      <Link
        href={archiveLink.href}
        className="mt-8 inline-block text-[0.9rem] font-light text-accent hover:underline"
      >
        {archiveLink.label} →
      </Link>
    </Section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────

export function SiteFooter({ text = footer }: { text?: string }) {
  return (
    <footer className="theme-dark border-t border-line bg-bg px-6 py-16 text-center sm:px-10">
      <p className="mx-auto max-w-2xl text-[0.78rem] font-light leading-relaxed text-muted">
        {text}
      </p>
    </footer>
  );
}
