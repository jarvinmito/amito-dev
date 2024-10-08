import type { Metadata } from "next";
import { ParallaxContextProvider } from "@/lib/context/parallax.context";

export const metadata: Metadata = {
  title: "Amito",
  description:
    "Jan Arvin Mito - Front End Developer and Designer, Amito Software Development Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ParallaxContextProvider>
      <div className="w-full min-h-screen pb-6">{children}</div>
    </ParallaxContextProvider>
  );
}
