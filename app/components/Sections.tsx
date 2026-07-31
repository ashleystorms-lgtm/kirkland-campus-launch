import type { ReactNode } from "react";
import {
  builds,
  buildsIntro,
  compounds,
  evaluation,
  footer,
  prep,
  resources,
  rules,
  sprint,
  story,
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
      className="scroll-mt-24 border-t border-[#f7efe8]/10 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className={`mx-auto ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#8ba39d]">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-[1.6rem] font-light leading-tight tracking-[0.02em] text-[#f8f2eb] sm:text-[2.05rem]">
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
                className="border-b border-[#f7efe8]/15 pb-3 pr-6 text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#f7efe8]/[0.07] align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={[
                    "py-4 pr-6 text-[0.86rem] font-light leading-relaxed",
                    j === 0 ? "text-[#f7efe8]" : "text-[#f7efe8]/60",
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

// ── Our Story ────────────────────────────────────────────────────────────────

export function StorySection() {
  return (
    <Section id="story" eyebrow={story.eyebrow} heading={story.heading}>
      <div className="space-y-6 text-[1rem] font-light leading-[1.8] text-[#f7efe8]/70 sm:text-[1.08rem]">
        {story.paragraphs.map((p, i) => (
          <p
            key={p}
            className={
              i === story.paragraphs.length - 1
                ? "border-l-2 border-[#f3d7a3]/40 pl-5 text-[#f3d7a3]/90"
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

// ── The Seven Builds ─────────────────────────────────────────────────────────

export function BuildsSection() {
  return (
    <Section
      id="builds"
      eyebrow={buildsIntro.eyebrow}
      heading={buildsIntro.heading}
      wide
    >
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-[#f7efe8]/65">
        {buildsIntro.body}
      </p>

      <ol className="mt-14 space-y-px">
        {builds.map((b) => (
          <li
            key={b.n}
            className="grid gap-x-6 gap-y-4 border-t border-[#f7efe8]/10 py-8 sm:grid-cols-[3.5rem_1fr]"
          >
            {/* The numbering is real: these compound in order. */}
            <div className="font-mono text-[1.6rem] font-light leading-none text-[#f3d7a3]/60">
              {String(b.n).padStart(2, "0")}
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="text-[1.1rem] font-normal text-[#f8f2eb]">
                  {b.title}
                </h3>
                <p className="font-mono text-[0.7rem] text-[#8ba39d]">
                  {b.when} · {b.duration} · {b.who}
                </p>
              </div>

              <p className="mt-4 max-w-2xl text-[0.9rem] font-light leading-relaxed text-[#f7efe8]/65">
                {b.summary}
              </p>

              <p className="mt-4 max-w-2xl text-[0.88rem] font-light leading-relaxed text-[#f3d7a3]/80">
                <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
                  Output ·{" "}
                </span>
                {b.output}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        What compounds into what
      </h3>
      <Table
        head={["Build", "Takes as input", "Feeds"]}
        rows={compounds.map((c) => [c.build, c.input, c.feeds])}
      />
    </Section>
  );
}

// ── The Sprint ───────────────────────────────────────────────────────────────

export function SprintSection() {
  return (
    <Section id="sprint" eyebrow={sprint.eyebrow} heading={sprint.heading} wide>
      <blockquote className="border-l-2 border-[#e0946a]/60 pl-6 text-[1.1rem] font-light italic leading-relaxed text-[#f8f2eb] sm:text-[1.25rem]">
        {sprint.prompt}
      </blockquote>

      <p className="mt-10 max-w-3xl text-[0.95rem] font-light leading-[1.8] text-[#f7efe8]/65">
        {sprint.independence}
      </p>

      <h3 className="mt-16 mb-3 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        It runs in one sitting
      </h3>
      <p className="mb-8 max-w-3xl text-[0.92rem] font-light leading-relaxed text-[#f7efe8]/65">
        {sprint.runsIn}
      </p>
      <Table
        head={["Phase", "Time", "What happens"]}
        rows={sprint.phases.map((p) => [p.phase, p.time, p.what])}
      />

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        Why BrainLift is in here
      </h3>
      <div className="grid gap-10 sm:grid-cols-2">
        {sprint.whyBrainlift.map((w) => (
          <div key={w.heading}>
            <h4 className="text-[1rem] font-normal leading-snug text-[#f8f2eb]">
              {w.heading}
            </h4>
            <p className="mt-3 text-[0.9rem] font-light leading-relaxed text-[#f7efe8]/65">
              {w.body}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        The 70-minute bar
      </h3>
      <Table
        head={["Node", "Time", "Minimum", "AI rules"]}
        rows={sprint.brainliftBar.map((n) => [n.node, n.time, n.minimum, n.ai])}
      />

      <div className="mt-12 border-l-2 border-[#e0946a]/60 pl-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
          The ultimate test
        </p>
        <p className="mt-3 max-w-2xl text-[0.95rem] font-light leading-relaxed text-[#f7efe8]/75">
          {sprint.ultimateTest}
        </p>
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        How builds get judged
      </h3>
      <Table
        head={["Question", "What a 5 looks like"]}
        rows={sprint.judging.map((j) => [j.q, j.a])}
      />
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
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-[#f7efe8]/65">
        {evaluation.intro}
      </p>

      <h3 className="mt-16 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        Work units — the inputs
      </h3>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-[#f7efe8]/65">
        {evaluation.workUnit.what}
      </p>
      <ul className="mt-6 space-y-2.5">
        {evaluation.workUnit.points.map((point) => (
          <li
            key={point}
            className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-[#f7efe8]/65"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8ba39d]/50"
            />
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-3xl text-[0.95rem] font-light leading-[1.8] text-[#f7efe8]/65">
        {evaluation.workUnit.checked}
      </p>

      <div className="mt-8 border-l-2 border-[#f3d7a3]/40 pl-5">
        <p className="text-[0.92rem] font-light leading-relaxed text-[#f7efe8]/70">
          {evaluation.workUnit.theory}
        </p>
      </div>

      <a
        href={evaluation.workUnit.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-[0.9rem] font-light text-[#f3d7a3] hover:underline"
      >
        {evaluation.workUnit.linkLabel}
      </a>

      <div className="mt-6 border-l-2 border-[#f3d7a3]/40 pl-5">
        <p className="text-[0.92rem] font-light leading-relaxed text-[#f7efe8]/70">
          {evaluation.workUnit.tieIn}
        </p>
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        The formal evaluation — twice a year
      </h3>
      <Table
        head={["Step", "What happens"]}
        rows={evaluation.formal.map((f) => [f.step, f.what])}
      />

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        Ratings
      </h3>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {evaluation.ratings.map((r) => (
          <div key={r.name}>
            <h3 className="text-[0.98rem] font-normal text-[#f8f2eb]">
              {r.name}
            </h3>
            <p className="mt-3 text-[0.89rem] font-light leading-relaxed text-[#f7efe8]/65">
              {r.body}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        Promotion
      </h3>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-[#f7efe8]/65">
        {evaluation.promotionNote}
      </p>
      <div className="mt-8">
        <Table
          head={["Step", "What it takes"]}
          rows={evaluation.promotion.map((p) => [p.n, p.what])}
        />
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        Growth paths
      </h3>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {evaluation.paths.map((p) => (
          <div key={p.name}>
            <h3 className="text-[0.98rem] font-normal text-[#f8f2eb]">
              {p.name}
            </h3>
            <p className="mt-3 text-[0.89rem] font-light leading-relaxed text-[#f7efe8]/65">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-l-2 border-[#f3d7a3]/40 pl-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
          {evaluation.compensation.heading}
        </p>
        <p className="mt-3 max-w-2xl text-[0.95rem] font-light leading-relaxed text-[#f7efe8]/75">
          {evaluation.compensation.body}
        </p>
      </div>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        The no-surprises contract
      </h3>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        <div>
          <h4 className="mb-4 text-[0.95rem] font-normal text-[#f3d7a3]/90">
            What you&rsquo;re owed
          </h4>
          <ul className="space-y-2.5">
            {evaluation.owed.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-[#f7efe8]/65"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8ba39d]/50"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-[0.95rem] font-normal text-[#f3d7a3]/90">
            The standard behind the rating
          </h4>
          <p className="text-[0.89rem] font-light leading-relaxed text-[#f7efe8]/65">
            {evaluation.standard}
          </p>
        </div>
      </div>
    </Section>
  );
}

// ── Prep ─────────────────────────────────────────────────────────────────────

export function PrepSection() {
  return (
    <Section id="prep" eyebrow={prep.eyebrow} heading={prep.heading} wide>
      <p className="max-w-3xl text-[0.95rem] font-light leading-[1.8] text-[#f7efe8]/65">
        {prep.distributionRule}
      </p>

      <h3 className="mt-16 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        Settle before Monday
      </h3>
      <ol className="space-y-px">
        {prep.openItems.map((item, i) => (
          <li
            key={item.title}
            className="grid gap-x-6 gap-y-2 border-t border-[#f7efe8]/10 py-6 sm:grid-cols-[2.5rem_1fr]"
          >
            <span className="font-mono text-[0.8rem] text-[#e0946a]/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-[0.98rem] font-normal text-[#f8f2eb]">
                {item.title}
              </h4>
              <p className="mt-2 max-w-2xl text-[0.89rem] font-light leading-relaxed text-[#f7efe8]/65">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-20 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        Print and stage
      </h3>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {prep.staging.map((group) => (
          <div key={group.heading}>
            <h4 className="mb-4 text-[0.95rem] font-normal text-[#f3d7a3]/90">
              {group.heading}
            </h4>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.88rem] font-light leading-relaxed text-[#f7efe8]/65"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8ba39d]/50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-l-2 border-[#f3d7a3]/40 pl-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
          Name tags
        </p>
        <p className="mt-3 max-w-2xl text-[0.95rem] font-light leading-relaxed text-[#f7efe8]/75">
          {prep.nameTags}
        </p>
      </div>
    </Section>
  );
}

// ── House Rules ──────────────────────────────────────────────────────────────

export function RulesSection() {
  return (
    <Section id="rules" eyebrow={rules.eyebrow} heading={rules.heading} wide>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {rules.items.map((rule) => (
          <div key={rule.title}>
            <h3 className="text-[0.98rem] font-normal text-[#f8f2eb]">
              {rule.title}
            </h3>
            <p className="mt-3 text-[0.89rem] font-light leading-relaxed text-[#f7efe8]/65">
              {rule.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-24 max-w-2xl text-center text-[1.15rem] font-light leading-relaxed text-[#f3d7a3] sm:text-[1.35rem]">
        {rules.closingLine}
      </p>

      <h3 className="mt-24 mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8ba39d]">
        What we&rsquo;re not doing
      </h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {rules.notDoing.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[0.89rem] font-light leading-relaxed text-[#f7efe8]/55"
          >
            <span aria-hidden="true" className="font-mono text-[#e0946a]/60">
              ×
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

// ── Resources ────────────────────────────────────────────────────────────────

export function ResourcesSection() {
  return (
    <Section id="resources" eyebrow={resources.eyebrow} heading={resources.heading}>
      <p className="max-w-2xl text-[0.82rem] font-light leading-relaxed text-[#f7efe8]/45">
        {resources.note}
      </p>

      <div className="mt-10">
        {resources.items.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 border-t border-[#f7efe8]/10 py-6"
          >
            <div>
              <h3 className="text-[0.98rem] font-normal text-[#f8f2eb] transition-colors duration-300 group-hover:text-[#f3d7a3]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl text-[0.88rem] font-light leading-relaxed text-[#f7efe8]/60">
                {item.description}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-[0.9rem] text-[#8ba39d] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#f3d7a3]"
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────

export function SiteFooter() {
  return (
    <footer className="border-t border-[#f7efe8]/10 px-6 py-16 text-center sm:px-10">
      <p className="mx-auto max-w-2xl text-[0.78rem] font-light leading-relaxed text-[#f7efe8]/40">
        {footer}
      </p>
    </footer>
  );
}
