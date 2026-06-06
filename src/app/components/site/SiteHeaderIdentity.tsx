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
    <div className="min-w-0">
      <Link
        href="/"
        className="inline-block tracking-tight text-black"
        aria-label="Amito — home"
      >
        <span className="text-xl font-black sm:text-2xl md:text-[1.75rem]">
          <HackedText
            text="Amito"
            autoPlay
            anaglyphOff
            className="font-black tracking-tight"
          />
        </span>
      </Link>

      <p className="flex max-w-md flex-row flex-wrap items-center gap-x-2 gap-y-2 text-neutral-700">
        <span className="inline-flex flex-wrap items-baseline gap-x-1 font-mono text-[0.58rem] text-neutral-600 sm:text-[0.64rem]">
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
