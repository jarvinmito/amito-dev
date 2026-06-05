import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { SiteMain } from "@/app/components/site/SiteMain";
import { SITE_CONTENT_MEASURE } from "@/app/components/site/site-layout";
import { GOOGLE_PROFILE } from "@/app/lib/constants";
import { EXPERIENCES } from "@/app/lib/constants/experiences";
import SingilinScreen from "@/public/images/singilin-screen.png";

export const metadata: Metadata = {
  title: "Amito",
  description:
    "Jan Arvin Mito — senior web product engineer helping businesses design, build, and ship practical software with speed and care.",
};

export default function HomePage() {
  const recentYears = EXPERIENCES.slice(0, 2);

  return (
    <>
      <SiteHeader />
      <SiteMain>
        <section className="space-y-12 py-16 md:space-y-16 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500 md:text-base md:tracking-[0.38em]">
            Hey, I&apos;m Arvin
          </p>
          <h1 className="text-[clamp(2.85rem,7.5vw,5.85rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-black">
            Senior web product engineer
          </h1>
          <p
            className={`${SITE_CONTENT_MEASURE} text-xl leading-[1.75] text-neutral-700 md:text-2xl md:leading-[1.72]`}
          >
            I help business partners turn web opportunities into polished,
            reliable products: SaaS MVPs, customer portals, dashboards,
            internal tools, and business websites built with clear judgment and
            long-term maintainability.
          </p>
          <p
            className={`${SITE_CONTENT_MEASURE} text-lg leading-[1.85] text-neutral-600 md:text-xl md:leading-loose`}
          >
            I use AI-assisted development as a professional accelerator, not a
            replacement for craft. It helps me move faster across product
            thinking, UX, frontend implementation, integrations, and iteration
            while keeping ownership, taste, and engineering discipline intact.
          </p>
          <div className="flex flex-wrap gap-12 pb-8 pt-4 text-lg font-semibold uppercase tracking-[0.2em] text-black md:text-xl md:tracking-[0.22em]">
            <Link
              href={GOOGLE_PROFILE}
              className="border-b-2 border-black pb-1.5 hover:border-neutral-400"
            >
              Connect
            </Link>
            <Link
              href="/AmitoCV2024.pdf"
              download={`AmitoCV${new Date().getFullYear()}`}
              target="_blank"
              rel="noreferrer"
              className="border-b-2 border-transparent pb-1.5 text-neutral-600 hover:border-black hover:text-black"
            >
              Download CV
            </Link>
          </div>
        </section>

        <section className="space-y-14 border-t border-black/10 py-24 md:space-y-20 md:py-32">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500 md:text-base md:tracking-[0.34em]">
              Current product
            </p>
            <h2 className="max-w-5xl text-[clamp(2.25rem,5.5vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-black">
              Singilin helps freelancers and agencies keep client billing moving.
            </h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.55fr)] lg:gap-20">
            <div className="space-y-8 text-xl leading-[1.8] text-neutral-800 md:text-2xl md:leading-[1.78]">
              <p>
                I&apos;m currently building{" "}
                <a
                  href="https://singilin.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black underline decoration-black/25 underline-offset-[6px] hover:decoration-black"
                >
                  Singilin
                </a>
                , a lightweight client and invoice management product for
                freelancers and small service teams that need proposals,
                payment tracking, and client follow-ups without spreadsheet
                busywork.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600 md:text-xl md:leading-loose">
                It&apos;s also a practical example of my current delivery model:
                modern AI tooling helps shorten the path from idea to working
                product, while engineering judgment keeps the experience
                focused, maintainable, and business-ready.
              </p>
              <a
                href="https://singilin.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex border-b-2 border-black pb-2 text-lg font-semibold uppercase tracking-[0.2em] text-black hover:text-neutral-700 md:text-xl"
              >
                Visit Singilin
              </a>
            </div>
            <div className="space-y-7">
              <figure className="overflow-hidden border border-black/10 bg-neutral-50 p-3 shadow-[0_24px_70px_-42px_rgba(0,0,0,0.38)] md:p-4">
                <NextImage
                  src={SingilinScreen}
                  alt="Singilin product interface showing business workspace screens"
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 36vw, 92vw"
                />
              </figure>
              <div className="space-y-6 border border-black/10 p-7 md:p-8">
                <p className="font-mono text-sm uppercase tracking-[0.28em] text-neutral-500">
                  Built for
                </p>
                <ul className="space-y-4 text-lg leading-relaxed text-neutral-700 md:text-xl">
                  <li>Freelancers managing client work</li>
                  <li>Small agencies sending proposals</li>
                  <li>Service businesses tracking payments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-black/10 py-16 md:space-y-14 md:py-24">
          <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500 md:text-base md:tracking-[0.34em]">
            Background
          </h2>
          <p className={`${SITE_CONTENT_MEASURE} text-lg leading-relaxed text-neutral-600 md:text-xl md:leading-loose`}>
            A short work-history snapshot for context. The main story now is
            the products I can help shape and ship.
          </p>
          <div className="space-y-12 md:space-y-16">
            {recentYears.map((block) => (
              <div key={block.year} className="space-y-6 md:space-y-8">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-400 md:text-sm">
                  {block.year}
                </p>
                <ul className="space-y-8 md:space-y-10">
                  {block.experiences.map((xp) => (
                    <li key={`${xp.title}-${xp.role}`} className="space-y-3">
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-black md:text-xl">
                          {xp.href ? (
                            <a
                              href={xp.href}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-black/15 underline-offset-[6px] transition-colors hover:decoration-black"
                            >
                              {xp.title}
                            </a>
                          ) : (
                            xp.title
                          )}
                          <span className="font-normal text-neutral-500">
                            {" "}
                            · {xp.role}
                          </span>
                        </p>
                        <p className="text-lg text-neutral-500 md:text-xl">
                          {xp.date}
                          {xp.location ? ` · ${xp.location}` : ""}
                        </p>
                      </div>
                      <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-600 marker:text-neutral-300 md:text-lg md:leading-relaxed">
                        {xp.description.slice(0, 2).map((line) => (
                          <li key={line.slice(0, 42)}>{line}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p
            className={`${SITE_CONTENT_MEASURE} pt-4 text-base text-neutral-500 md:text-lg`}
          >
            Full chronology mirrors the archived build at{" "}
            <Link
              className="text-black underline decoration-black/25 underline-offset-[6px]"
              href="/v1"
            >
              /v1
            </Link>
            .
          </p>
        </section>
      </SiteMain>
      <SiteFooter />
    </>
  );
}
