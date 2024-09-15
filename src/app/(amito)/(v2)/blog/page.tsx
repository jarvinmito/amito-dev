import BlogSection from "@/app/components/Sections/Blog";

export const metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
    description:
      "Find out and join me on the latest projects that I'm working on and I hope it to be of help to you as well. If not, it's okay just enjoy reading!",
  },
};

export default function BlogPage() {
  return (
    <section className="container min-h-screen max-w-3xl mx-auto flex flex-col justify-start gap-8 px-5 xl:px-0">
      <BlogSection />
    </section>
  );
}
