"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ScheduleState = {
  isOpen: (id: string) => boolean;
  toggle: (id: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
  allExpanded: boolean;
};

const ScheduleContext = createContext<ScheduleState | null>(null);

export function ScheduleProvider({
  allIds,
  children,
}: {
  allIds: string[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = useCallback((id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => setOpen(new Set(allIds)), [allIds]);
  const collapseAll = useCallback(() => setOpen(new Set()), []);

  // Paper doesn't have a disclosure triangle. Open everything before printing.
  useEffect(() => {
    const before = () => setOpen(new Set(allIds));
    window.addEventListener("beforeprint", before);
    return () => window.removeEventListener("beforeprint", before);
  }, [allIds]);

  const value = useMemo<ScheduleState>(
    () => ({
      isOpen: (id) => open.has(id),
      toggle,
      expandAll,
      collapseAll,
      allExpanded: allIds.length > 0 && open.size >= allIds.length,
    }),
    [open, toggle, expandAll, collapseAll, allIds],
  );

  return (
    <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>
  );
}

export function useSchedule() {
  const ctx = useContext(ScheduleContext);
  if (!ctx) throw new Error("useSchedule must be used inside <ScheduleProvider>");
  return ctx;
}
