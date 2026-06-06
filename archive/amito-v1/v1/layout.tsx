import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import { ParallaxContextProvider } from "@/app/lib/context/parallax.context";
import theme from "@/theme";

export const metadata: Metadata = {
  title: "Amito — Archive",
  description:
    "Archived version of amito.dev (previous theme). Jan Arvin Mito — Front End Developer and Designer.",
  robots: { index: false, follow: false },
};

export default function V1ArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ParallaxContextProvider>
        {/* Mantine + Tailwind archives share explicit dark styling */}
        <div
          className="dark pb-6"
          data-mantine-color-scheme="dark"
        >
        {children}
        </div>
      </ParallaxContextProvider>
    </MantineProvider>
  );
}
