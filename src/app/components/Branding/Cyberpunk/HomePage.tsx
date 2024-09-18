"use client";
import HackedText from "@/components/Branding/Cyberpunk/HackedText";
import Button from "@/components/Branding/Cyberpunk/Button";
import SectionTitle from "@/components/Branding/Cyberpunk/SectionTitle";
import ListingExperiences from "@/components/Listing/Experiences";
import { PROJECTS } from "@/app/lib/constants/projects";
import ListingProjects from "@/components/Listing/Projects";
import { ROUTES } from "@/app/lib/constants";
import { useParallaxContext } from "@/app/lib/context/parallax.context";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

export default function CyberpunkHomePage() {
  const { contentRef } = useParallaxContext();
  return (
    <div ref={contentRef}>
      <section
        className="container mx-auto flex flex-col justify-center gap-8 py-10 px-5 xl:px-0"
        style={{ minHeight: "calc(100dvh - 96px" }}
      >
        <h3 data-aos="fade-up">Hey, I'm Arvin</h3>
        <div
          className="grid grid-cols-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="uppercase col-span-10 anaglyph">
            <HackedText text="Front End" /> <HackedText text="Developer" />
          </h1>
        </div>
        <p className="text-xl" data-aos="fade-up" data-aos-delay="200">
          Software Engineer with years of experience specializing in front end.
        </p>
        <div
          className="flex flex-row items-center gap-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button>Connect</Button>
          <Link
            href="/AmitoCV2024.pdf"
            target="_blank"
            download={`AmitoCV${new Date().getFullYear()}`}
            className="inline-flex flex-row items-center gap-2"
          >
            <IconDownload className="w-7 h-7" />
            <span className="text-xl leading-none">
              <span className="hidden md:inline-flex">Download</span> CV
            </span>
          </Link>
        </div>
      </section>
      <section
        className="container min-h-screen mx-auto flex flex-col justify-center gap-8 py-10 px-5 xl:px-0"
        data-aos="fade-up"
      >
        <div className="max-w-5xl flex flex-col gap-6">
          <p className="text-4xl">
            I create{" "}
            <span
              className="font-quattro text-violet-600 font-bold"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              &lt;websites /&gt;
            </span>{" "}
            and{" "}
            <span
              className="font-quattro text-violet-600 font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              &lt;web-apps /&gt;
            </span>
          </p>
          <p
            className="text-4xl leading-normal"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            with seamless user interfaces that integrate smoothly with backend
            APIs.
          </p>
          <p
            className="text-4xl leading-normal"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Crafting solutions for business needs while being a practitioner of
            writing clean, testable, reusable code and leveraging diverse design
            patterns.
          </p>
        </div>
      </section>
      <section className="container min-h-screen mx-auto flex flex-col gap-10 py-10 px-5 xl:px-0">
        <div data-aos="fade-up">
          <SectionTitle title="Work Experience" />
        </div>
        <ListingExperiences />
      </section>
      <section className="container min-h-screen mx-auto flex flex-col gap-10 py-10 pl-5 xl:pl-0">
        {PROJECTS?.length ? (
          <>
            <div data-aos="fade-up">
              <SectionTitle title="Projects" href={ROUTES.LANDING.PROJECTS} />
            </div>
            <div
              className="relative"
              style={{ width: "calc(100vw - (100vw - 100%) / 2)" }}
            >
              <ListingProjects projects={PROJECTS.slice(0, 4)} />
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
}
