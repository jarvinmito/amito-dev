import Link from "next/link";
import GlassSurface from "@/components/GlassSurface";
import { NAV_LINKS } from "@/app/lib/constants/navigator";
import { SITE_HORIZONTAL_PAD } from "./site-layout";
import { SiteHeaderIdentity } from "./SiteHeaderIdentity";

export function SiteHeader() {
  return (
    <header
      className={`site-minimal sticky top-0 z-50 w-full bg-transparent ${SITE_HORIZONTAL_PAD} border-b border-black/[0.04] pb-4 pt-[max(0.875rem,env(safe-area-inset-top))] md:pb-5`}
    >
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={14}
        borderWidth={0.055}
        brightness={94}
        opacity={0.38}
        blur={18}
        displace={0}
        /* Low overlay = nearer “clear glass”; high values read gray on a white minimal theme. Scroll content must pass under sticky header to diffract. */
        backgroundOpacity={0.22}
        saturation={1.08}
        distortionScale={-95}
        mixBlendMode="overlay"
        greenOffset={6}
        blueOffset={14}
        className="w-full shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_40px_-24px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
        contentClassName="flex w-full min-w-0 flex-col gap-10 p-0 px-7 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-x-12 md:px-10 md:py-7 lg:gap-x-16"
      >
        <SiteHeaderIdentity />
        <nav
          aria-label="Primary"
          className="sm:flex sm:flex-1 sm:justify-end sm:pt-1"
        >
          <ul className="flex flex-wrap gap-x-10 gap-y-4 text-lg font-medium uppercase tracking-[0.14em] text-black md:gap-x-12 md:text-xl">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="underline-offset-[8px] transition-colors hover:underline hover:text-neutral-700"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </GlassSurface>
    </header>
  );
}
