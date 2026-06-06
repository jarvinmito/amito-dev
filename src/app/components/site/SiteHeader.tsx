import Link from "next/link";
import ReactBitsGlassSurface from "@/components/ReactBitsGlassSurface";
import { NAV_LINKS } from "@/app/lib/constants/navigator";
import { SITE_CONTENT_RAIL, SITE_HORIZONTAL_PAD } from "./site-layout";
import { SiteHeaderIdentity } from "./SiteHeaderIdentity";

export function SiteHeader() {
  return (
    <header
      className={`site-minimal fixed left-0 right-0 top-0 z-50 w-full bg-transparent ${SITE_HORIZONTAL_PAD} pb-4 pt-[max(0.875rem,env(safe-area-inset-top))] md:pb-5`}
    >
      <div className={`${SITE_CONTENT_RAIL} transform-gpu`}>
        <ReactBitsGlassSurface
          width="100%"
          height={148}
          borderRadius={80}
          backgroundOpacity={0.1}
          saturation={1}
          borderWidth={0.1}
          brightness={50}
          opacity={0.93}
          blur={11}
          displace={0.5}
          distortionScale={-180}
          redOffset={50}
          greenOffset={100}
          blueOffset={150}
          className="px-10 py-8 shadow-[0_18px_54px_-32px_rgba(0,0,0,0.22)]"
        >
          <div className="flex w-full min-w-0 flex-col gap-7 sm:flex-row sm:items-start sm:justify-between sm:gap-x-10">
            <SiteHeaderIdentity />
            <nav
              aria-label="Primary"
              className="sm:flex sm:flex-1 sm:justify-end sm:pt-1"
            >
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold uppercase tracking-[0.14em] text-black md:gap-x-9 md:text-base">
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
          </div>
        </ReactBitsGlassSurface>
      </div>
    </header>
  );
}
