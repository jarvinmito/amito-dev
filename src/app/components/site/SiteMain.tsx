import { SITE_HORIZONTAL_PAD } from "./site-layout";

export function SiteMain({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`site-minimal relative z-0 w-full max-w-none text-left ${SITE_HORIZONTAL_PAD} pb-28 pt-8 md:pb-36 md:pt-12`}
    >
      {children}
    </div>
  );
}
