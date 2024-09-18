import HireMeSection from "@/app/components/Sections/HireMe";

export const metadata = {
  title: "Services",
  openGraph: {
    title: "Services",
    description:
      "Web design and development, Micro-SaaS development, Start-up MVP build.",
  },
};

export default function ServicesPage() {
  return (
    <section className="container min-h-screen max-w-3xl mx-auto flex flex-col justify-start gap-8 px-5 xl:px-0">
      <HireMeSection />
    </section>
  );
}
