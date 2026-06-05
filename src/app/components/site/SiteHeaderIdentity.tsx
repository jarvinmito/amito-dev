"use client";

import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import HackedText from "@/app/components/Branding/Cyberpunk/HackedText";

/**
 * Animated site mark + availability strip — mirrors legacy header behavior while
 * matching the minimal type scale.
 */
export function SiteHeaderIdentity() {
  const [nowLabel, setNowLabel] = useState(() => format(new Date(), "h:mm a"));

  useEffect(() => {
    const tick = () => setNowLabel(format(new Date(), "h:mm a"));
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="space-y-3 sm:space-y-4">
      <Link
        href="/"
        className="inline-block tracking-tight text-black"
        aria-label="Amito — home"
      >
        <span className="text-2xl font-semibold sm:text-3xl md:text-[2rem]">
          <HackedText
            text="Amito"
            autoPlay
            anaglyphOff
            className="font-semibold tracking-tight"
          />
        </span>
      </Link>

      <p className="flex max-w-xl flex-row flex-wrap items-center gap-x-2 gap-y-2 text-neutral-700">
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] sm:text-[0.75rem] sm:tracking-[0.26em]">
          Available for business
        </span>
        <span
          aria-hidden
          className="relative mx-px inline-flex h-2 w-2 shrink-0 rounded-full bg-lime-400 before:absolute before:-inset-px before:size-2.5 before:animate-ping before:rounded-full before:bg-lime-400 before:opacity-75"
        />
        <span className="inline-flex flex-wrap items-baseline gap-x-1 font-mono text-[0.7rem] text-neutral-600 sm:text-xs">
          <span className="hidden xl:inline">Based in </span>
          <span className="font-semibold uppercase tracking-[0.12em] text-neutral-900 sm:normal-case sm:tracking-normal">
            Philippines
          </span>{" "}
          <span aria-live="polite" className="tabular-nums text-neutral-700">
            <span suppressHydrationWarning>
              {nowLabel}{" "}
            </span>
            <span className="uppercase tracking-wide text-neutral-500">
              (UTC+8)
            </span>
          </span>
        </span>
      </p>
    </div>
  );
}
