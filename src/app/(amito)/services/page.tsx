import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { SiteMain } from "@/app/components/site/SiteMain";
import { SITE_CONTENT_MEASURE } from "@/app/components/site/site-layout";
import { GOOGLE_PROFILE } from "@/app/lib/constants";
import { formatNumber } from "@/app/lib/utils/formatters";
import { CURRENCIES } from "@/app/lib/constants/currencies";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom frontend development — landing pages, email templates, micro-SaaS, and product polish.",
};

const mitotweeMonthly = 180;
const mitotweeYearlyMonthly = 135;

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <SiteMain>
        <h1 className="pb-8 pt-10 text-[clamp(2.35rem,5.5vw,4.5rem)] font-semibold tracking-[-0.03em] text-black md:pb-12 md:pt-16">
          Products &amp; services
        </h1>
        <p
          className={`${SITE_CONTENT_MEASURE} pb-12 text-xl leading-[1.8] text-neutral-700 md:text-2xl md:leading-relaxed`}
        >
          Custom development spanning landing pages, email templates,
          micro‑SaaS, and pragmatic product UI. Questions welcome — drop a note
          or say hello via{" "}
          <Link
            href={GOOGLE_PROFILE}
            className="text-black underline decoration-black/25 underline-offset-[6px]"
          >
            email
          </Link>
          .
        </p>
        <section className="space-y-12 border-t border-black/10 py-20 md:space-y-16 md:py-32">
          <h2 className="text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold text-black md:leading-snug">
            Software for sari-sari store owners
          </h2>
          <div className="space-y-8 text-xl leading-relaxed text-neutral-800 md:text-2xl md:leading-loose">
            <p className={SITE_CONTENT_MEASURE}>
              Do you operate a neighbourhood store and still juggle handwritten
              stock counts? Mitotwee is a lightweight inventory and sales tracker
              built for Filipino micro-retail rhythms.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-7 border border-black/10 px-10 py-12 md:space-y-8 md:px-12 md:py-14">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-neutral-500 md:text-base">
                Monthly
              </p>
              <p className="font-mono text-4xl leading-none text-black md:text-5xl">
                {formatNumber(mitotweeMonthly, 0, false, CURRENCIES.PHP)}
                <span className="block pt-5 text-xl font-normal text-neutral-500 md:text-2xl">
                  billed monthly
                </span>
              </p>
              <p className="text-lg text-neutral-600 md:text-xl">
                Billed monthly · averages{" "}
                {formatNumber(mitotweeMonthly / 30, 2, false, CURRENCIES.PHP)} /
                day
              </p>
              <a
                className="inline-flex border-b-2 border-black pb-2 text-lg font-semibold uppercase tracking-[0.2em]"
                href="https://mitotwee.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit Mitotwee
              </a>
            </div>
            <div className="space-y-7 border border-black px-10 py-12 md:space-y-8 md:px-12 md:py-14">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-neutral-500 md:text-base">
                Yearly
              </p>
              <p className="font-mono text-4xl leading-none text-black md:text-5xl">
                {formatNumber(mitotweeYearlyMonthly * 12, 0, false, CURRENCIES.PHP)}
                <span className="block pt-5 text-xl font-normal text-neutral-500 md:text-2xl">
                  billed yearly (25% savings)
                </span>
              </p>
              <p className="text-lg text-neutral-600 md:text-xl">
                Billed yearly · averages{" "}
                {formatNumber(mitotweeYearlyMonthly / 30, 2, false, CURRENCIES.PHP)}{" "}
                / day
              </p>
              <a
                className="inline-flex border-b-2 border-black pb-2 text-lg font-semibold uppercase tracking-[0.2em]"
                href="https://mitotwee.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit Mitotwee
              </a>
            </div>
          </div>
        </section>

        <section className="space-y-8 border-t border-black/10 py-20 md:space-y-10 md:py-32">
          <h2 className="text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold text-black">
            Custom frontend development
          </h2>
          <p
            className={`${SITE_CONTENT_MEASURE} text-xl leading-relaxed text-neutral-800 md:text-2xl md:leading-loose`}
          >
            Available for fractional or embedded roles — bridging design, product,
            and frontend implementation for teams shipping on React / Next.js.
          </p>
          <Link
            href={GOOGLE_PROFILE}
            className="inline-flex border-b-2 border-black pb-2 text-lg font-semibold uppercase tracking-[0.2em] md:text-xl"
          >
            Discuss a project
          </Link>
        </section>
      </SiteMain>
      <SiteFooter />
    </>
  );
}
