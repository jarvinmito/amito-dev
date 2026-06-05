import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { SiteMain } from "@/app/components/site/SiteMain";
import { SITE_CONTENT_MEASURE } from "@/app/components/site/site-layout";
import { ROUTES } from "@/app/lib/constants";
import { getAllPostsMeta } from "@/app/lib/blogpost";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays about side projects, product experiments, and the craft behind them.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <SiteHeader />
      <SiteMain>
        <h1 className="pb-20 pt-10 text-[clamp(2.35rem,5.5vw,4.5rem)] font-semibold tracking-[-0.03em] text-black md:pb-28 md:pt-16">
          Blog
        </h1>
        <ul className="divide-y divide-black/15 border-t border-black/15">
          {posts.map((post) => (
            <li key={post.slug} className="py-16 md:py-24">
              <Link
                href={`${ROUTES.LANDING.BLOG}/${post.slug}`}
                className="group flex flex-col gap-6 md:gap-8"
              >
                <p className="font-mono text-base uppercase tracking-[0.28em] text-neutral-500 md:text-lg">
                  {post.publish_date}
                </p>
                <p className="text-[clamp(1.65rem,3.8vw,2.75rem)] font-semibold leading-tight tracking-[-0.02em] text-black transition-colors group-hover:text-neutral-800">
                  {post.title}
                </p>
                {post.teaser_description ? (
                  <p
                    className={`${SITE_CONTENT_MEASURE} text-lg leading-relaxed text-neutral-600 md:text-xl md:leading-loose`}
                  >
                    {post.teaser_description}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        <p className="pb-24 pt-14 text-lg text-neutral-500 md:pb-32 md:pt-20 md:text-xl">
          Original presentation available at{" "}
          <Link
            href="/v1/blog"
            className="text-black underline decoration-black/25 underline-offset-[6px]"
          >
            /v1/blog
          </Link>
          .
        </p>
      </SiteMain>
      <SiteFooter />
    </>
  );
}
