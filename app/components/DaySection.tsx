"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { Block, BlockKind, Day } from "../data/bootcamp";
import { deepAccent } from "./day-colors";
import { useSchedule } from "./schedule-state";

// The marker on the rail encodes what kind of block it is, so you can read the
// build density of a day without reading a single word.
const marker: Record<BlockKind, { dot: string; label?: string }> = {
  build: { dot: "h-2.5 w-2.5 bg-[var(--day-accent)]", label: "Build" },
  sprint: {
    dot: "h-2.5 w-2.5 bg-[var(--day-accent)] ring-4 ring-[var(--day-soft)]",
    label: "Sprint",
  },
  workUnit: { dot: "h-2 w-2 border border-fg/70", label: "Work unit" },
  leadership: { dot: "h-2 w-2 border border-muted", label: "Leadership" },
  session: { dot: "h-1.5 w-1.5 bg-muted" },
  meal: { dot: "h-1 w-1 bg-muted/40" },
};

function ScheduleRow({ block }: { block: Block }) {
  const { isOpen, toggle } = useSchedule();
  const hasDetail = Boolean(block.detail?.length || block.output || block.links?.length);
  const open = isOpen(block.id);
  const linkCount = block.links?.length ?? 0;
  const m = marker[block.kind];
  const dim = block.kind === "meal";

  const heading = (
    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-left">
      <span
        className={[
          "text-[0.95rem] leading-snug sm:text-[1.02rem]",
          dim ? "font-light text-muted" : "font-normal text-fg",
        ].join(" ")}
      >
        {block.title}
      </span>
      {m.label && !dim && (
        <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-muted">
          {m.label}
        </span>
      )}
    </span>
  );

  return (
    <li className="grid grid-cols-[3.5rem_1.25rem_1fr] sm:grid-cols-[4.25rem_1.5rem_1fr]">
      {/* Clock column — monospace so every time in the week aligns vertically */}
      <div className="pt-[0.45rem] text-right font-mono text-[0.7rem] leading-none text-muted sm:text-[0.75rem]">
        {block.start}
        {block.end && (
          <span className="mt-1 block text-muted">{block.end}</span>
        )}
      </div>

      {/* The rail */}
      <div className="relative flex justify-center">
        <div className="rail-line h-full w-px bg-[var(--day-soft)]" />
        <span
          aria-hidden="true"
          className={`absolute top-[0.4rem] rounded-full ${m.dot}`}
        />
      </div>

      {/* Content */}
      <div className="pb-7">
        {hasDetail ? (
          <>
            <button
              type="button"
              onClick={() => toggle(block.id)}
              aria-expanded={open}
              aria-controls={`${block.id}-detail`}
              className="group flex w-full flex-wrap items-start gap-x-3 gap-y-2 rounded-sm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--day-accent)]"
            >
              <span className="min-w-[12rem] flex-1">{heading}</span>
              {/* A visible label, so it's obvious the row opens */}
              <span
                data-print-hide
                className={[
                  "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-[0.74rem] font-medium text-[var(--day-accent)] transition-colors duration-300",
                  open
                    ? "border-line bg-bg"
                    : "border-[color-mix(in_oklab,var(--day-accent)_45%,transparent)] bg-bg group-hover:bg-[color-mix(in_oklab,var(--day-accent)_10%,var(--c-bg))]",
                ].join(" ")}
              >
                {open
                  ? "Hide details"
                  : linkCount > 0
                    ? `Details and links (${linkCount})`
                    : "Details and links"}
                <span
                  aria-hidden="true"
                  className={[
                    "inline-block font-mono transition-transform duration-300",
                    open ? "-rotate-90" : "rotate-90",
                  ].join(" ")}
                >
                  ›
                </span>
              </span>
            </button>

            <div
              id={`${block.id}-detail`}
              hidden={!open}
              className="mt-3 space-y-3 border-l border-[var(--day-soft)] pl-4 text-[0.88rem] font-light leading-relaxed text-body"
            >
              {block.owner && (
                <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
                  {block.owner}
                </p>
              )}
              {block.detail?.map((p) => <p key={p}>{p}</p>)}
              {block.links && block.links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {block.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--day-accent)_45%,transparent)] bg-bg px-3.5 py-1.5 text-[0.84rem] font-normal leading-snug text-[var(--day-accent)] transition-colors duration-300 hover:border-[var(--day-accent)] hover:bg-[color-mix(in_oklab,var(--day-accent)_10%,var(--c-bg))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--day-accent)]"
                    >
                      {link.label}
                      <span aria-hidden="true" className="text-[0.8em]">↗</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ))}
                </div>
              )}
              {block.output && (
                <p className="text-[var(--day-accent)]">
                  <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
                    On the wall ·{" "}
                  </span>
                  {block.output}
                </p>
              )}
            </div>
          </>
        ) : (
          <div>
            {heading}
            {block.owner && (
              <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
                {block.owner}
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function DaySection({
  day,
  note,
  eyebrow,
}: {
  day: Day;
  note?: string;
  eyebrow?: string; // replaces the day name above the title, e.g. "Now · Tuesday"
}) {
  const buildCount = day.blocks.filter(
    (b) => b.kind === "build" || b.kind === "sprint",
  ).length;

  // On the light page the day's accent is deepened so it stays readable.
  // The dark header band below switches back to the original bright accent.
  const deep = deepAccent(day.theme);
  const pageStyle = {
    "--day-accent": deep,
    "--day-soft": `color-mix(in oklab, ${deep} 28%, transparent)`,
    "--day-accent-deep": deep,
    "--day-soft-deep": `color-mix(in oklab, ${deep} 28%, transparent)`,
    "--day-glow": day.theme.glow,
  } as CSSProperties;
  const bandStyle = {
    "--day-accent": day.theme.accent,
    "--day-soft": day.theme.soft,
  } as CSSProperties;

  return (
    <section id={day.id} style={pageStyle} className="relative scroll-mt-24">
      {/* The dark moment: photo and header on deep forest */}
      <div
        style={bandStyle}
        className="theme-dark relative overflow-hidden bg-bg px-6 pb-14 pt-20 text-fg sm:px-10 sm:pb-16 sm:pt-28"
      >
        <div
          aria-hidden="true"
          data-print-hide
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,var(--day-glow),transparent)]"
        />
        {day.theme.image && (
          <div
            data-print-hide
            className="relative -mx-6 -mt-20 mb-8 min-h-[280px] sm:-mx-10 sm:-mt-28"
            style={{ height: day.theme.imageHeight ?? "42vh" }}
          >
            <Image
              src={day.theme.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: day.theme.imagePosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,16,0.5)_0%,rgba(11,18,16,0.3)_45%,var(--c-bg)_100%)]" />
          </div>
        )}
        <header className="relative mx-auto max-w-3xl">
          <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-muted">
            {eyebrow ?? day.dayName}
          </p>

          <h2 className="mt-4 text-[1.9rem] font-light uppercase leading-tight tracking-[0.18em] text-fg sm:text-[2.4rem]">
            {day.title}
          </h2>

          <p className="mt-4 text-[1.05rem] font-light leading-relaxed text-[var(--day-accent)] sm:text-[1.15rem]">
            {day.thesis}
          </p>

          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            {day.date} · {day.hours}
          </p>

          <div className="mt-8 border-l-2 border-[var(--day-accent)] pl-5">
            <p className="text-[0.92rem] font-light leading-relaxed text-body">
              <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-muted">
                The point of today ·{" "}
              </span>
              {day.point}
            </p>
          </div>

          {buildCount > 0 && (
            <p className="mt-6 font-mono text-[0.7rem] text-muted">
              {buildCount} build{buildCount === 1 ? "" : "s"} today
            </p>
          )}
        </header>
      </div>

      {/* The time rail, on a slightly lighter surface */}
      <div className="border-b border-line bg-surface px-6 pb-20 pt-14 sm:px-10 sm:pb-28 sm:pt-16">
        <div className="mx-auto max-w-3xl">
          {note && (
            <p className="mb-8 font-mono text-[0.7rem] text-muted">{note}</p>
          )}

          {/* The rail stops at the last block rather than dangling past it. */}
          <ol className="[&>li:last-child_.rail-line]:h-4">
            {day.blocks.map((block) => (
              <ScheduleRow key={block.id} block={block} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
