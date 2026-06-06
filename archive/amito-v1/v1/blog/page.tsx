import BlogSection from "@/app/components/Sections/Blog";
import { ROUTES } from "@/app/lib/constants";
import { getAllPostsMeta } from "@/app/lib/blogpost";

export const metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
    description:
      "Find out and join me on the latest projects that I'm working on and I hope it to be of help to you as well. If not, it's okay just enjoy reading!",
  },
};

export default function BlogPage() {
  const posts = getAllPostsMeta().map((m) => ({
    title: m.title,
    description: m.teaser_description || "",
    publish_date: m.publish_date,
    filename: m.slug,
    image: m.teaser_image,
  }));

  return (
    <section className="container min-h-screen max-w-3xl mx-auto flex flex-col justify-start gap-8 px-5 xl:px-0">
      <BlogSection posts={posts} blogPathPrefix={ROUTES.V1.BLOG} />
    </section>
  );
}
