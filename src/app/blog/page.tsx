import BlogSection from "@/app/components/Sections/Blog";

export const metadata = {
  title: "Recent Activities",
  openGraph: {
    title: "Recent Activities",
    description:
      "Find out and join me on the latest projects that I'm working on and I hope it to be of help to you as well. If not, it's okay just enjoy reading!",
  },
};

export default function BlogPage() {
  return <BlogSection />;
}
