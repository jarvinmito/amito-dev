import LandingSection from "@/app/components/Sections/Landing";

export const metadata = {
  title: "Amito",
  openGraph: {
    title: "Amito",
    description:
      "I am a passionate web developer and designer dedicated to bridging the gap between UI design and implementation, crafting user-friendly, visually appealing, and innovative digital products.",
  },
};

export default function Home() {
  return <LandingSection />;
}
