"use client";

import { useEffect, useState } from "react";
import { navItems } from "../data/bootcamp";
import { useSchedule } from "./schedule-state";

export default function SiteNav() {
  const [active, setActive] = useState<string>("");
  const [lifted, setLifted] = useState(false);
  const { expandAll, collapseAll, allExpanded } = useSchedule();

  // Highlight whichever section is currently crossing the top third of the screen.
  useEffect(() => {
    const targets = navItems
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // The nav floats over the hero, then gains a background once you've scrolled past it.
  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-print-hide
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-8 sm:pt-6"
    >
      <nav
        className={[
          "flex max-w-full items-center gap-1 overflow-x-auto rounded-full border px-3 py-2 backdrop-blur-2xl transition-all duration-500 sm:gap-2 sm:px-5",
          lifted
            ? "border-white/15 bg-[#0b1210]/80 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            : "border-white/20 bg-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.18)]",
        ].join(" ")}
      >
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={[
                "group relative whitespace-nowrap rounded-full px-2.5 py-1.5 font-medium uppercase tracking-[0.22em] transition duration-300 sm:px-3",
                "text-[9px] sm:text-[10px]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3d7a3]",
                isActive ? "text-[#f3d7a3]" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              {item.label}
              <span
                className={[
                  "absolute bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-current transition-all duration-300",
                  isActive ? "w-5" : "w-0 group-hover:w-4",
                ].join(" ")}
              />
            </a>
          );
        })}

        <span className="mx-1 hidden h-4 w-px bg-white/15 sm:block" />

        <button
          type="button"
          onClick={allExpanded ? collapseAll : expandAll}
          className="hidden whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3d7a3] sm:block"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>

        <button
          type="button"
          onClick={() => window.print()}
          className="hidden whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3d7a3] sm:block"
        >
          Print
        </button>
      </nav>
    </header>
  );
}
