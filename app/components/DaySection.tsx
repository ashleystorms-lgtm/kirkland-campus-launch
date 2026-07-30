"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { Block, BlockKind, Day } from "../data/bootcamp";
import { useSchedule } from "./schedule-state";

// The marker on the rail encodes what kind of block it is, so you can read the
// build density of a day without reading a single word.
const marker: Record<BlockKind, { dot: string; label?: string }> = {
  build: { dot: "h-2.5 w-2.5 bg-[var(--day-accent)]", label: "Build" },
  sprint: {
    dot: "h-2.5 w-2.5 bg-[var(--day-accent)] ring-4 ring-[var(--day-soft)]",
    label: "Sprint",
  },
  workUnit: { dot: "h-2 w-2 border border-[#f7efe8]/70", label: "Work unit" },
  leadership: { dot: "h-2 w-2 border border-[#8ba39d]", label: "Leadership" },
  session: { dot: "h-1.5 w-1.5 bg-[#8ba39d]" },
  meal: { dot: "h-1 w-1 bg-[#8ba39d]/40" },
};

function ScheduleRow({ block }: { block: Block }) {
  const { isOpen, toggle } = useSchedule();
  const hasDetail = Boolean(block.detail?.length || block.output);
  const open = isOpen(block.id);
  const m = marker[block.kind];
  const dim = block.kind === "meal";

  const heading = (
    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-left">
      <span
        className={[
          "text-[0.95rem] leading-snug sm:text-[1.02rem]",
          dim ? "font-light text-[#f7efe8]/45" : "font-normal text-[#f7efe8]",
        ].join(" ")}
      >
        {block.title}
      </span>
      {m.label && !dim && (
        <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
          {m.label}
        </span>
      )}
    </span>
  );

  return (
    <li className="grid grid-cols-[3.5rem_1.25rem_1fr] sm:grid-cols-[4.25rem_1.5rem_1fr]">
      {/* Clock column — monospace so every time in the week aligns vertically */}
      <div className="pt-[0.45rem] text-right font-mono text-[0.7rem] leading-none text-[#8ba39d] sm:text-[0.75rem]">
        {block.start}
        {block.end && (
          <span className="mt-1 block text-[#8ba39d]/45">{block.end}</span>
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
              className="group flex w-full items-start gap-2 rounded-sm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3d7a3]"
            >
              <span className="flex-1">{heading}</span>
              <span
                aria-hidden="true"
                className={[
                  "mt-1 shrink-0 font-mono text-[0.7rem] text-[#8ba39d] transition-transform duration-300",
                  open ? "rotate-90" : "group-hover:translate-x-0.5",
                ].join(" ")}
              >
                ›
              </span>
            </button>

            <div
              id={`${block.id}-detail`}
              hidden={!open}
              className="mt-3 space-y-3 border-l border-[var(--day-soft)] pl-4 text-[0.88rem] font-light leading-relaxed text-[#f7efe8]/65"
            >
              {block.owner && (
                <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
                  {block.owner}
                </p>
              )}
              {block.detail?.map((p) => <p key={p}>{p}</p>)}
              {block.output && (
                <p className="text-[var(--day-accent)]">
                  <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
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
              <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
                {block.owner}
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function DaySection({ day }: { day: Day }) {
  const buildCount = day.blocks.filter(
    (b) => b.kind === "build" || b.kind === "sprint",
  ).length;

  const themeStyle = {
    "--day-accent": day.theme.accent,
    "--day-soft": day.theme.soft,
    "--day-glow": day.theme.glow,
  } as CSSProperties;

  return (
    <section
      id={day.id}
      style={themeStyle}
      className="relative overflow-hidden scroll-mt-24 border-t border-[var(--day-soft)] px-6 py-20 sm:px-10 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,var(--day-glow),transparent)]"
      />
      {day.theme.image && (
        <div className="relative -mx-6 -mt-20 mb-8 h-[42vh] min-h-[280px] sm:-mx-10 sm:-mt-28">
          <Image
            src={day.theme.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,16,0.5)_0%,rgba(11,18,16,0.3)_45%,#0b1210_100%)]" />
        </div>
      )}
      <div className="relative mx-auto max-w-3xl">
        <header className="mb-14">
          <p className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.35em] text-[#8ba39d]">
            {day.dayName}
            <span aria-hidden="true" className="h-px w-6 bg-[var(--day-soft)]" />
            <span className="text-[var(--day-accent)] tracking-[0.28em]">
              {day.theme.name}
            </span>
          </p>

          <h2 className="mt-4 text-[1.9rem] font-light uppercase leading-tight tracking-[0.18em] text-[#f8f2eb] sm:text-[2.4rem]">
            {day.title}
          </h2>

          <p className="mt-4 text-[1.05rem] font-light leading-relaxed text-[var(--day-accent)] sm:text-[1.15rem]">
            {day.thesis}
          </p>

          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[#8ba39d]">
            {day.date} · {day.hours}
          </p>

          <div className="mt-8 border-l-2 border-[var(--day-accent)] pl-5">
            <p className="text-[0.92rem] font-light leading-relaxed text-[#f7efe8]/70">
              <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8ba39d]">
                The point of today ·{" "}
              </span>
              {day.point}
            </p>
          </div>

          {buildCount > 0 && (
            <p className="mt-6 font-mono text-[0.7rem] text-[#8ba39d]/70">
              {buildCount} build{buildCount === 1 ? "" : "s"} today
            </p>
          )}
        </header>

        {/* The rail stops at the last block rather than dangling past it. */}
        <ol className="[&>li:last-child_.rail-line]:h-4">
          {day.blocks.map((block) => (
            <ScheduleRow key={block.id} block={block} />
          ))}
        </ol>
      </div>
    </section>
  );
}
