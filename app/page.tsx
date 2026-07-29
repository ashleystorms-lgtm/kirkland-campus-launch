import Image from "next/image";

const navItems = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday / Friday",
  "Resources",
];

const statementLines = [
  "A new campus.",
  "A new team.",
  "A shared beginning.",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f1713] text-[#f7efe8]">
      <Image
        src="/images/rainier-hero.jpg"
        alt="Mount Rainier at sunrise"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Soft cinematic overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,12,13,0.12)_0%,_rgba(8,12,13,0.06)_42%,_rgba(8,12,13,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,228,202,0.18),_transparent_48%)]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <header className="flex justify-center px-5 pt-6 sm:px-8 sm:pt-8">
          <nav className="flex max-w-full items-center justify-center gap-1 overflow-x-auto rounded-full border border-white/20 bg-white/10 px-4 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:gap-3 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="group relative whitespace-nowrap px-3 py-2 text-[9px] font-medium uppercase tracking-[0.32em] text-white/75 transition duration-300 hover:text-white sm:text-[10px]"
              >
                {item}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-white/80 transition-all duration-300 group-hover:w-6" />
              </a>
            ))}
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-1 items-center justify-center px-6 pb-20 pt-10 sm:px-8 sm:pb-24">
          <div className="-translate-y-6 text-center sm:-translate-y-10">
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

            {/* Main title */}
            <h1 className="animate-[fade-in_1s_ease-out_both] text-[2.2rem] font-semibold leading-[1.02] tracking-[0.34em] text-[#f8f2eb] sm:text-[3rem] lg:text-[3.6rem]">
              <span className="block">ALPHA</span>
              <span className="mt-4 block text-[#f4ebdf]">KIRKLAND</span>
            </h1>

            {/* Campus launch */}
            <p className="mt-10 animate-[fade-in_1.2s_ease-out_both] text-[1.7rem] font-extralight uppercase tracking-[0.2em] text-[#f3d7a3] sm:text-[2.3rem] lg:text-[2.7rem]">
              Campus Launch
            </p>

            {/* Supporting message */}
            <div className="mt-14 animate-[fade-in_1.4s_ease-out_both] space-y-2 text-[0.95rem] font-light leading-7 text-white/75 sm:text-[1.05rem]">
              {statementLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {/* Date */}
            <p className="mt-8 animate-[fade-in_1.6s_ease-out_both] text-[9px] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-[10px]">
              August 2026
            </p>
          </div>
        </section>

        {/* Scroll cue */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center">
          <div className="mx-auto h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
          <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.3em] text-white/40">
            Explore
          </p>
        </div>
      </div>
    </main>
  );
}