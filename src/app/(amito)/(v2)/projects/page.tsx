import WorksSection from "@/app/components/Sections/Works";

export const metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects",
    description: "List of projects I'm curious about and having fun doing.",
  },
};

export default function ProjectsPage() {
  return (
    <section className="container min-h-screen mx-auto flex flex-col justify-start gap-8 px-5 xl:px-0">
      <WorksSection />
    </section>
  );
}
