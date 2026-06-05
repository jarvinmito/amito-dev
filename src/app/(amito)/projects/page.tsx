import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { SiteMain } from "@/app/components/site/SiteMain";
import { SITE_CONTENT_MEASURE } from "@/app/components/site/site-layout";
import { APPS } from "@/app/lib/constants/apps";
import { PROJECTS, type IPortfolio } from "@/app/lib/constants/projects";
import NextImage from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tools, experiments, and case studies — from micro-apps to polished marketing sites.",
};

function portfolioHeading(p: IPortfolio): string {
  if (typeof p.title === "string") return p.title;
  return "Project";
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <SiteMain>
        <h1 className="pb-6 pt-10 text-[clamp(2.35rem,5.8vw,4.75rem)] font-semibold tracking-[-0.03em] text-black md:pt-16">
          Projects
        </h1>
        <p
          className={`${SITE_CONTENT_MEASURE} pb-20 text-xl leading-[1.8] text-neutral-700 md:pb-28 md:text-2xl md:leading-relaxed`}
        >
          Concepts, experiments, and side work — experience under NDA is distilled
          into writings when I can. Prior presentation also lives at{" "}
          <Link
            href="/v1/projects"
            className="text-black underline decoration-black/25 underline-offset-[6px]"
          >
            /v1/projects
          </Link>
          .
        </p>

        <section className="border-t border-black/10 pb-24 pt-16 md:pb-36 md:pt-24">
          <h2 className="pb-14 text-base font-semibold uppercase tracking-[0.32em] text-neutral-500 md:pb-20 md:text-lg md:tracking-[0.34em]">
            Apps &amp; utilities
          </h2>
          <ul className="space-y-16 md:space-y-24">
            {APPS.map((app) => (
              <li key={app.link} className="space-y-4 md:space-y-5">
                <Link
                  href={app.link}
                  {...(app.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-block border-b border-black text-2xl font-semibold md:text-[1.75rem]"
                >
                  {app.title}
                </Link>
                <p
                  className={`${SITE_CONTENT_MEASURE} text-lg leading-relaxed text-neutral-700 md:text-xl md:leading-loose`}
                >
                  {app.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-black/10 pb-32 pt-16 md:pb-40 md:pt-28">
          <h2 className="pb-6 text-base font-semibold uppercase tracking-[0.32em] text-neutral-500 md:pb-8 md:text-lg md:tracking-[0.34em]">
            Portfolio
          </h2>
          <p
            className={`${SITE_CONTENT_MEASURE} pb-14 text-lg leading-relaxed text-neutral-500 md:pb-20 md:text-xl md:leading-loose`}
          >
            Case studies below are archival — they remain as documentation of
            past builds, not as active offerings or retainers.
          </p>
          <ul className="space-y-16 md:space-y-24">
            {PROJECTS.map((p, idx) => (
              <li key={`projects-portfolio-${idx}`} className="space-y-8 md:space-y-10">
                <div className="space-y-5 md:space-y-6">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3">
                    <h3 className="text-2xl font-semibold md:text-[1.85rem]">
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-black underline decoration-black/20 underline-offset-[6px]"
                        >
                          {portfolioHeading(p)}
                        </a>
                      ) : (
                        <span className="text-black">{portfolioHeading(p)}</span>
                      )}
                    </h3>
                    {p.obsolete ? (
                      <span
                        className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-neutral-400 md:text-xs md:tracking-[0.3em]"
                        title="Historical presentation; comparable engagements are no longer actively offered."
                      >
                        Not actively serviced
                      </span>
                    ) : null}
                  </div>
                  <p
                    className={`${SITE_CONTENT_MEASURE} text-lg leading-relaxed text-neutral-700 md:text-xl md:leading-loose`}
                  >
                    {p.description}
                  </p>
                </div>

                {(p.desktop || p.mobile || p.image) && (
                  <div
                    className={`ml-0 mr-auto grid w-full gap-6 md:gap-8 lg:gap-x-9 ${
                      p.desktop && p.mobile
                        ? "max-w-xl sm:max-w-2xl lg:max-w-[46rem] lg:grid-cols-2 xl:max-w-[48rem]"
                        : "max-w-xl sm:max-w-2xl"
                    }`}
                  >
                      {p.desktop ? (
                        <figure className="space-y-3 md:space-y-4">
                          <p className="text-[0.7rem] font-mono uppercase tracking-[0.24em] text-neutral-400 md:text-sm md:tracking-[0.26em]">
                            Desktop
                          </p>
                          <div className="border border-black/10 bg-neutral-50 p-3 md:p-4">
                            <NextImage
                              src={p.desktop}
                              alt={p.imageAlt ?? portfolioHeading(p)}
                              className="mx-auto h-auto max-h-[min(46vw,260px)] w-full max-w-full object-contain sm:max-h-[min(42vw,300px)] md:max-h-[320px] lg:max-h-[280px]"
                              sizes="(min-width: 1280px) 360px, (min-width: 1024px) 42vw, 90vw"
                            />
                          </div>
                        </figure>
                      ) : null}
                      {p.mobile ? (
                        <figure className="space-y-3 md:space-y-4">
                          <p className="text-[0.7rem] font-mono uppercase tracking-[0.24em] text-neutral-400 md:text-sm">
                            Mobile
                          </p>
                          <div className="border border-black/10 bg-neutral-50 p-3 md:mx-auto md:w-fit md:p-4 lg:mx-0 lg:w-full">
                            <NextImage
                              src={p.mobile}
                              alt={`${portfolioHeading(p)} · mobile`}
                              className="mx-auto h-auto max-h-[min(64vw,300px)] w-auto max-w-full object-contain sm:max-h-[min(52vw,320px)] md:max-h-[340px] lg:max-h-[300px]"
                              sizes="(min-width: 1280px) 280px, (min-width: 1024px) 38vw, 85vw"
                            />
                          </div>
                        </figure>
                      ) : null}
                      {!p.desktop && !p.mobile && p.image ? (
                        <figure className="space-y-3 md:space-y-4">
                          <p className="text-[0.7rem] font-mono uppercase tracking-[0.24em] text-neutral-400 md:text-sm">
                            Preview
                          </p>
                          <div className="border border-black/10 bg-neutral-50 p-3 md:p-5">
                            <NextImage
                              src={p.image}
                              alt={p.imageAlt ?? portfolioHeading(p)}
                              className="mx-auto h-auto max-h-[min(72vw,300px)] w-full max-w-full object-contain sm:max-h-[min(62vw,340px)] md:max-h-[360px]"
                              sizes="(min-width: 1024px) 640px, 92vw"
                            />
                          </div>
                        </figure>
                      ) : null}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </SiteMain>
      <SiteFooter />
    </>
  );
}
