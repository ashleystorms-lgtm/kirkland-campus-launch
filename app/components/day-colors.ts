import type { DayTheme } from "../data/bootcamp";

// Each day theme's accent was picked to glow on a dark background. The dark
// header band still uses it as is. On the light page (the time rail, links,
// markers) the same color is deepened so it stays readable on bone.
// Keyed by the original accent, so the themes in bootcamp.ts don't change.
const deepAccents: Record<string, string> = {
  "#f3d7a3": "#86581a", // Sunrise
  "#a7c1a1": "#3d6a3b", // Douglas fir
  "#9fbccf": "#2c5e7f", // Puget Sound
  "#cbcb96": "#5f6120", // Lichen
  "#e8a58f": "#a1462b", // Alpenglow
};

export function deepAccent(theme: DayTheme): string {
  // A new theme without a hand-picked deep color still darkens toward ink.
  return (
    deepAccents[theme.accent.toLowerCase()] ??
    `color-mix(in oklab, ${theme.accent} 45%, #0b1210)`
  );
}
