import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { SiteMain } from "@/app/components/site/SiteMain";
import { SITE_CONTENT_MEASURE } from "@/app/components/site/site-layout";
import { ROUTES } from "@/app/lib/constants";
import { getPostData, listPostSlugs } from "@/app/lib/blogpost";
import type { BlogPostPageProps } from "@/app/lib/types/blog-post";

export async function generateStaticParams() {
  return listPostSlugs().map((post) => ({ post }));
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { post } = await params;
  const postData = await getPostData(post);
  return {
    title: postData.title,
    openGraph: {
      title: postData.title,
      description: postData.teaser_description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { post } = await params;
  const postData = await getPostData(post);

  return (
    <>
      <SiteHeader />
      <SiteMain>
        <article className="pb-28 pt-12 md:pb-40 md:pt-16">
          <div className={SITE_CONTENT_MEASURE}>
            <Link
              href={ROUTES.LANDING.BLOG}
              className="inline-block border-b border-transparent pb-1 text-lg font-semibold uppercase tracking-[0.24em] text-neutral-500 transition-colors hover:border-black hover:text-black md:text-xl"
            >
              ← Back to blog
            </Link>
            <header className="space-y-6 pb-16 pt-16 md:space-y-8 md:pb-24 md:pt-24">
              <p className="font-mono text-base uppercase tracking-[0.28em] text-neutral-500 md:text-lg">
                {postData.publish_date}
              </p>
              <h1 className="text-[clamp(2.2rem,5.25vw,4.125rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-black">
                {postData.title}
              </h1>
            </header>
          </div>
          <div className="minimal-prose pt-6 md:pt-10">
            <ReactMarkdown>{postData.content}</ReactMarkdown>
          </div>
        </article>
      </SiteMain>
      <SiteFooter />
    </>
  );
}
