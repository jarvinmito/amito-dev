import { SITE_CONTENT_RAIL, SITE_HORIZONTAL_PAD } from "./site-layout";

export function SiteMain({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`site-minimal w-full text-left ${SITE_HORIZONTAL_PAD} pb-28 pt-48 md:pb-36 md:pt-56`}
    >
      <div className={SITE_CONTENT_RAIL}>{children}</div>
    </div>
  );
}
