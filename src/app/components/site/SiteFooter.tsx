import Link from "next/link";
import {
  GITHUB_PROFILE,
  GOOGLE_PROFILE,
  LINKEDIN_PROFILE,
  MOBILE_NUMBER,
} from "@/app/lib/constants";
import { SITE_HORIZONTAL_PAD } from "./site-layout";

export function SiteFooter() {
  return (
    <footer
      className={`site-minimal mt-40 border-t border-black/10 ${SITE_HORIZONTAL_PAD} py-20 md:mt-52 md:py-28`}
    >
      <div className="flex w-full max-w-none flex-col gap-14 text-lg text-neutral-700 md:text-xl">
        <div className="flex flex-wrap gap-x-14 gap-y-6">
          <Link
            className="text-black underline-offset-[6px] hover:underline hover:text-neutral-800"
            href={LINKEDIN_PROFILE}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            className="text-black underline-offset-[6px] hover:underline hover:text-neutral-800"
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="text-black underline-offset-[6px] hover:underline hover:text-neutral-800"
            href={GOOGLE_PROFILE}
          >
            Email
          </Link>
          <Link
            className="text-black underline-offset-[6px] hover:underline hover:text-neutral-800"
            href={`tel:${MOBILE_NUMBER}`}
          >
            Phone
          </Link>
          <Link
            className="text-black underline-offset-[6px] hover:underline hover:text-neutral-800"
            href="/AmitoCV2024.pdf"
            target="_blank"
            rel="noreferrer"
            download={`AmitoCV${new Date().getFullYear()}`}
          >
            CV
          </Link>
        </div>
        <p className="max-w-none text-lg text-neutral-500 md:text-xl">
          © {new Date().getFullYear()} amito.dev ·{" "}
          <span className="text-neutral-400">Archived site: </span>
          <Link
            href="/v1"
            className="text-black underline-offset-[6px] hover:underline"
          >
            /v1
          </Link>
        </p>
      </div>
    </footer>
  );
}
