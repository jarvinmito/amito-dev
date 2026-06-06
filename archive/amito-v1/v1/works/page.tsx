import WorksSection from "@/app/components/Sections/Works";

export const metadata = {
  title: "My Works",
  openGraph: {
    title: "My Works",
    description:
      "My works tell the story of my expertise as a web developer. Browse my portfolio and witness the possibilities. Let's connect and discuss how I can elevate your digital presence.",
  },
};

export default function PortfolioPage() {
  return <WorksSection />;
}
