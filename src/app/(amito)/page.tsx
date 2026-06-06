import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import ReactBitsGlassSurface from "@/components/ReactBitsGlassSurface";
import { GOOGLE_PROFILE } from "@/app/lib/constants";
import { EXPERIENCES } from "@/app/lib/constants/experiences";
import { SiteHeaderIdentity } from "@/app/components/site/SiteHeaderIdentity";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import AmitoWatercolorBackground from "@/public/images/amito-watercolor-background.png";
import SingilinBackground from "@/public/images/singilin-watercolor-background.png";

export const metadata: Metadata = {
  title: "Amito",
  description:
    "Jan Arvin Mito — senior web product engineer helping businesses design, build, and ship practical software with speed and care.",
};

const rail = "w-[min(88vw,760px)]";
const heroRail = "w-[min(88vw,900px)]";

export default function HomePage() {
  const recentYears = EXPERIENCES.slice(0, 2);

  return (
    <>
      <main
        className="min-h-[260vh] bg-white bg-cover bg-fixed bg-center text-black"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.88)), url(${AmitoWatercolorBackground.src})`,
        }}
      >
        <div className="fixed left-8 top-8 z-50 w-fit md:left-16 lg:left-20 xl:left-28 2xl:left-36">
          <ReactBitsGlassSurface
            width="fit-content"
            height={72}
            borderRadius={30}
            backgroundOpacity={0.06}
            saturation={1}
            borderWidth={0.1}
            brightness={50}
            opacity={0.95}
            blur={6}
            displace={0.5}
            distortionScale={-180}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            className="px-5 py-4 sm:px-6 sm:py-4"
          >
            <SiteHeaderIdentity />
          </ReactBitsGlassSurface>
        </div>

        <section className="grid min-h-[100svh] place-items-start px-8 pb-14 pt-36 sm:pt-40 md:px-16 md:pb-16 md:pt-44 lg:px-20 xl:px-28 2xl:px-36">
          <div className={`${heroRail} space-y-6 md:space-y-8`}>
            <h1 className="text-[clamp(3.35rem,9.4vw,7.75rem)] font-black leading-[0.9] text-black">
              Web products. Built with intent.
            </h1>
            <p className="max-w-[780px] text-2xl font-semibold leading-[1.28] text-neutral-800 md:text-[2rem] md:leading-[1.18]">
              Senior engineering for SaaS, portals, dashboards, and business
              websites.
            </p>
            <p className="max-w-[720px] text-lg font-medium leading-[1.45] text-neutral-600 md:text-[1.35rem] md:leading-[1.35]">
              AI-assisted where it speeds the work. Human-led where quality
              matters.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-2 text-base font-black uppercase tracking-[0.18em] text-black md:text-lg md:tracking-[0.2em]">
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
          </div>
        </section>

        <section className="relative grid min-h-[100svh] place-items-start overflow-hidden px-8 py-20 md:px-16 md:py-24 lg:px-20 xl:px-28 2xl:px-36">
          <NextImage
            src={SingilinBackground}
            alt=""
            aria-hidden
            fill
            className="object-cover object-left-top opacity-[0.18]"
            sizes="100vw"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-white/78" />
          <div className={`${heroRail} relative z-10 space-y-8 md:space-y-10`}>
            <div className="space-y-6 md:space-y-7">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-neutral-600 md:text-base md:tracking-[0.34em]">
                Singilin
              </p>
              <h2 className="text-[clamp(2.8rem,7vw,5.8rem)] font-black leading-[0.9] text-black">
                Client billing. Less chasing.
              </h2>
              <p className="max-w-[780px] text-2xl font-semibold leading-[1.28] text-neutral-800 md:text-[2rem] md:leading-[1.18]">
                A focused workspace for proposals, invoices, payments, and
                follow-ups.
              </p>
              <a
                href="https://singilin.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-flex border-b-2 border-black pb-2 text-base font-black uppercase tracking-[0.18em] text-black hover:text-neutral-700 md:text-lg md:tracking-[0.2em]"
              >
                Visit Singilin
              </a>
            </div>
            <div className="max-w-md">
              <div className="flex flex-col justify-between space-y-6 border border-black/10 bg-white/70 p-6 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-7">
                <p className="font-mono text-sm font-black uppercase tracking-[0.28em] text-neutral-500">
                  Built for
                </p>
                <ul className="space-y-3 text-xl font-semibold leading-snug text-neutral-700 md:text-[1.35rem]">
                  <li>Freelancers</li>
                  <li>Small agencies</li>
                  <li>Service businesses</li>
                </ul>
                <p className="text-base font-medium leading-relaxed text-neutral-500">
                  Simple enough to use daily. Strong enough to support the
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-16 md:px-16 md:py-24 lg:px-20 xl:px-28 2xl:px-36">
          <div className={`${rail} space-y-10 border-t border-black/10 pt-16 md:space-y-14 md:pt-24`}>
            <h2 className="text-sm font-black uppercase tracking-[0.32em] text-neutral-500 md:text-base md:tracking-[0.34em]">
              Services
            </h2>
            <p className="text-[clamp(2.6rem,7vw,5.8rem)] font-black leading-[0.9] text-black">
              Practical web work for growing businesses.
            </p>
            <ul className="divide-y divide-black/10 border-y border-black/10 text-2xl font-semibold leading-tight text-neutral-800 md:text-4xl">
              {[
                "SaaS MVPs",
                "Business websites",
                "Customer portals",
                "Dashboards and internal tools",
                "AI-assisted product delivery",
              ].map((service) => (
                <li key={service} className="py-7 md:py-9">
                  {service}
                </li>
              ))}
            </ul>
            <Link
              href={GOOGLE_PROFILE}
              className="inline-flex border-b-2 border-black pb-2 text-lg font-black uppercase tracking-[0.2em] text-black hover:text-neutral-700 md:text-xl"
            >
              Start a conversation
            </Link>
          </div>
        </section>

        <section className="px-8 py-16 md:px-16 md:py-24 lg:px-20 xl:px-28 2xl:px-36">
          <div className={`${rail} space-y-10 border-t border-black/10 pt-16 md:space-y-14 md:pt-24`}>
            <h2 className="text-sm font-black uppercase tracking-[0.32em] text-neutral-500 md:text-base md:tracking-[0.34em]">
              Background
            </h2>
            <p className="text-2xl font-semibold leading-[1.35] text-neutral-800 md:text-4xl md:leading-[1.22]">
              Years of product delivery. Now focused on faster, sharper web
              builds.
            </p>
            <div className="space-y-12 md:space-y-16">
              {recentYears.map((block) => (
                <div key={block.year} className="space-y-6 md:space-y-8">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-neutral-400 md:text-sm">
                    {block.year}
                  </p>
                  <ul className="space-y-8 md:space-y-10">
                    {block.experiences.map((xp) => (
                      <li key={`${xp.title}-${xp.role}`} className="space-y-3">
                        <div className="space-y-2">
                          <p className="text-xl font-black text-black md:text-2xl">
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
                            <span className="font-medium text-neutral-500">
                              {" "}
                              · {xp.role}
                            </span>
                          </p>
                          <p className="text-lg font-medium text-neutral-500 md:text-xl">
                            {xp.date}
                            {xp.location ? ` · ${xp.location}` : ""}
                          </p>
                        </div>
                        <ul className="list-disc space-y-2 pl-6 text-lg font-medium leading-relaxed text-neutral-600 marker:text-neutral-300 md:text-xl md:leading-relaxed">
                          {xp.description.slice(0, 1).map((line) => (
                            <li key={line.slice(0, 42)}>{line}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="pt-4 text-base font-medium text-neutral-500 md:text-lg">
              Full chronology mirrors the archived build at{" "}
              <Link
                className="text-black underline decoration-black/25 underline-offset-[6px]"
                href="/v1"
              >
                /v1
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
