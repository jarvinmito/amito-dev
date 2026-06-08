import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import ReactBitsGlassSurface from "@/components/ReactBitsGlassSurface";
import {
  GITHUB_PROFILE,
  GOOGLE_PROFILE,
  LINKEDIN_PROFILE,
} from "@/app/lib/constants";
import { EXPERIENCES } from "@/app/lib/constants/experiences";
import { SiteHeaderIdentity } from "@/app/components/site/SiteHeaderIdentity";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import AmitoWatercolorBackground from "@/public/images/amito-watercolor-background.png";
import SingilinBackground from "@/public/images/singilin-watercolor-background.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://amito.dev"),
  title: "Amito — Jan Arvin Mito",
  description:
    "Jan Arvin Mito — senior web product engineer, builder of Singilin, and practical partner for durable web software.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amito — Jan Arvin Mito",
    description:
      "Senior web product engineer, builder of Singilin, and practical partner for durable web software.",
    url: "https://amito.dev",
    siteName: "Amito",
    images: [
      {
        url: "/images/amito-watercolor-background.png",
        width: 1672,
        height: 941,
        alt: "Abstract watercolor background for Amito.",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  authors: [{ name: "Jan Arvin Mito", url: "https://amito.dev" }],
  creator: "Jan Arvin Mito",
  twitter: {
    card: "summary_large_image",
    title: "Amito — Jan Arvin Mito",
    description:
      "Senior web product engineer, builder of Singilin, and practical partner for durable web software.",
    images: ["/images/amito-watercolor-background.png"],
  },
};

const rail = "w-[min(88vw,760px)]";
const heroRail = "w-[min(88vw,900px)]";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://amito.dev/#person",
      name: "Jan Arvin Mito",
      url: "https://amito.dev",
      jobTitle: "Senior Web Product Engineer",
      mainEntityOfPage: "https://amito.dev",
      sameAs: [LINKEDIN_PROFILE, GITHUB_PROFILE, "https://singilin.ph"],
      knowsAbout: [
        "Web product engineering",
        "SaaS development",
        "Frontend engineering",
        "AI-assisted software development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://amito.dev/#website",
      name: "Amito",
      url: "https://amito.dev",
      inLanguage: "en-PH",
      description:
        "Personal website of Jan Arvin Mito, senior web product engineer and builder of Singilin.",
      about: {
        "@type": "Person",
        "@id": "https://amito.dev/#person",
        name: "Jan Arvin Mito",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://singilin.ph/#software",
      name: "Singilin",
      url: "https://singilin.ph",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      areaServed: {
        "@type": "Country",
        name: "Philippines",
      },
      description:
        "A Philippine billing workspace for proposals, invoices, payments, and follow-ups.",
      creator: {
        "@type": "Person",
        "@id": "https://amito.dev/#person",
        name: "Jan Arvin Mito",
        url: "https://amito.dev",
      },
    },
  ],
};

export default function HomePage() {
  const recentYears = EXPERIENCES.slice(0, 2);

  return (
    <>
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-8 focus:top-8 focus:z-[60] focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-black focus:uppercase focus:tracking-[0.18em] focus:text-black focus:shadow-[0_18px_60px_-36px_rgba(0,0,0,0.65)]"
      >
        Skip to content
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main
        id="main-content"
        className="min-h-screen bg-white bg-cover bg-fixed bg-center text-black"
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
            borderWidth={0.06}
            brightness={50}
            opacity={0.95}
            blur={30}
            displace={1}
            distortionScale={-180}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            className="px-5 py-4 sm:px-6 sm:py-4"
          >
            <SiteHeaderIdentity />
          </ReactBitsGlassSurface>
        </div>

        <section
          aria-labelledby="hero-heading"
          className="grid min-h-[100svh] items-center justify-items-start px-8 py-28 md:px-16 md:py-24 lg:px-20 xl:px-28 2xl:px-36"
        >
          <div className={`${heroRail} space-y-6 md:space-y-8`}>
            <h1
              id="hero-heading"
              className="text-[clamp(3.35rem,7.5vw,6.75rem)] font-black leading-[0.9] text-black"
            >
              Web products. Built with intent.
            </h1>
            <p className="max-w-[760px] text-[clamp(1.55rem,2.4vw,2rem)] font-semibold leading-[1.24] text-neutral-900">
              Senior product engineering for SaaS, portals, dashboards, and
              practical business software.
            </p>
            <p className="max-w-[680px] text-[clamp(1.15rem,1.55vw,1.35rem)] font-medium leading-[1.42] text-neutral-700">
              AI-assisted for speed. Human judgment for product, quality, and
              trust.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-2 text-base font-black uppercase tracking-[0.18em] text-black md:text-lg md:tracking-[0.2em]">
              <Link
                href={GOOGLE_PROFILE}
                aria-label="Connect with Jan Arvin Mito by email"
                className="border-b-2 border-black pb-1.5 hover:border-neutral-400"
              >
                Connect
              </Link>
              <Link
                href="/AmitoCV2024.pdf"
                download={`AmitoCV${new Date().getFullYear()}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Jan Arvin Mito's CV"
                className="border-b-2 border-transparent pb-1.5 text-neutral-600 hover:border-black hover:text-black"
              >
                Download CV
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="singilin-heading"
          className="relative grid min-h-[100svh] items-center justify-items-start overflow-hidden px-8 py-20 md:px-16 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-36"
        >
          <NextImage
            src={SingilinBackground}
            alt=""
            aria-hidden
            fill
            loading="eager"
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
              <h2
                id="singilin-heading"
                className="text-[clamp(2.9rem,6.2vw,5.25rem)] font-black leading-[0.9] text-black"
              >
                Client billing. Less chasing.
              </h2>
              <p className="max-w-[760px] text-[clamp(1.55rem,2.4vw,2rem)] font-semibold leading-[1.24] text-neutral-900">
                A Philippine billing workspace for proposals, invoices,
                payments, and follow-ups.
              </p>
              <a
                href="https://singilin.ph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Singilin, Jan Arvin Mito's billing product"
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
                <ul className="space-y-3 text-xl font-semibold leading-snug text-neutral-800 md:text-[1.35rem]">
                  <li>Freelancers</li>
                  <li>Small agencies</li>
                  <li>Service businesses in the Philippines</li>
                </ul>
                <p className="text-base font-medium leading-relaxed text-neutral-600">
                  Built from real service-work friction: quoting, collecting,
                  and following up without the awkward chase.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="capabilities-heading"
          className="px-8 py-16 md:px-16 md:py-24 lg:px-20 xl:px-28 2xl:px-36"
        >
          <div className={`${rail} space-y-10 border-t border-black/10 pt-16 md:space-y-14 md:pt-24`}>
            <h2
              id="capabilities-heading"
              className="text-sm font-black uppercase tracking-[0.32em] text-neutral-500 md:text-base md:tracking-[0.34em]"
            >
              Capabilities
            </h2>
            <p className="text-[clamp(2.75rem,5.8vw,5.25rem)] font-black leading-[0.9] text-black">
              Useful across the web product stack.
            </p>
            <ul className="divide-y divide-black/10 border-y border-black/10 text-[clamp(1.5rem,2.9vw,2.4rem)] font-semibold leading-tight text-neutral-900">
              {[
                "Product-shaped frontend engineering",
                "SaaS MVPs and internal tools",
                "Business websites that stay simple",
                "Dashboards, portals, and workflows",
                "AI-assisted shipping with senior review",
              ].map((service) => (
                <li key={service} className="py-7 md:py-9">
                  {service}
                </li>
              ))}
            </ul>
            <Link
              href={GOOGLE_PROFILE}
              aria-label="Connect with Jan Arvin Mito by email"
              className="inline-flex border-b-2 border-black pb-2 text-lg font-black uppercase tracking-[0.2em] text-black hover:text-neutral-700 md:text-xl"
            >
              Connect if useful
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="track-record-heading"
          className="px-8 py-16 md:px-16 md:py-24 lg:px-20 xl:px-28 2xl:px-36"
        >
          <div className={`${rail} space-y-10 border-t border-black/10 pt-16 md:space-y-14 md:pt-24`}>
            <h2
              id="track-record-heading"
              className="text-sm font-black uppercase tracking-[0.32em] text-neutral-500 md:text-base md:tracking-[0.34em]"
            >
              Track record
            </h2>
            <p className="max-w-[760px] text-[clamp(1.55rem,2.4vw,2rem)] font-semibold leading-[1.24] text-neutral-900">
              Years of product delivery. Current focus: Singilin and durable
              web systems.
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
              Full chronology available on request.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
