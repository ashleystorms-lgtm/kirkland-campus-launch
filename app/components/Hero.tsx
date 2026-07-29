import Image from "next/image";
import { hero } from "../data/bootcamp";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <Image
        src="/images/rainier-hero.jpg"
        alt="Mount Rainier at sunrise"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Soft cinematic overlays — unchanged from the locked hero */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,12,13,0.12)_0%,_rgba(8,12,13,0.06)_42%,_rgba(8,12,13,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,228,202,0.18),_transparent_48%)]" />

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 pb-24 pt-28 sm:px-8">
        <div className="text-center">
          {/* Mountain icon */}
          <div className="mb-10 flex justify-center animate-[fade-in_0.8s_ease-out_both]">
            <svg
              viewBox="0 0 64 64"
              className="h-7 w-7 text-[#f6d8b8] sm:h-8 sm:w-8"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 44L24 22L34 34L48 18L56 44H8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mb-8 animate-[fade-in_0.9s_ease-out_both] text-[9px] font-medium uppercase tracking-[0.35em] text-white/50 sm:text-[10px]">
            {hero.eyebrow}
          </p>

          <h1 className="animate-[fade-in_1s_ease-out_both] text-[2.2rem] font-semibold leading-[1.02] tracking-[0.34em] text-[#f8f2eb] sm:text-[3rem] lg:text-[3.6rem]">
            {hero.titleLines.map((line, i) => (
              <span
                key={line}
                className={i === 0 ? "block" : "mt-4 block text-[#f4ebdf]"}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-10 animate-[fade-in_1.2s_ease-out_both] text-[1.7rem] font-extralight uppercase tracking-[0.2em] text-[#f3d7a3] sm:text-[2.3rem] lg:text-[2.7rem]">
            {hero.subtitle}
          </p>

          <div className="mt-14 animate-[fade-in_1.4s_ease-out_both] space-y-2 text-[0.95rem] font-light leading-7 text-white/75 sm:text-[1.05rem]">
            {hero.statement.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          {/* Stat row — the NYC site's date and headcount chips */}
          <dl className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-[fade-in_1.6s_ease-out_both]">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <dt className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/45">
                  {stat.label}
                </dt>
                <dd className="font-mono text-[0.8rem] text-[#f3d7a3]/90">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 animate-[fade-in_1.8s_ease-out_both] text-[9px] font-medium uppercase tracking-[0.35em] text-white/40 sm:text-[10px]">
            {hero.date}
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-print-hide
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <div className="mx-auto h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.3em] text-white/40">
          Explore
        </p>
      </div>
    </section>
  );
}
