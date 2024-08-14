import type { Metadata } from "next";
import { Box } from "@mantine/core";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import FloatingNavigator from "@/app/components/FloatingNavigator";
import { GOOGLE_ANALYTICS_ID, PADDING } from "@/app/lib/constants";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Amito",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Box mih="100vh" w="100%" p={PADDING} color="gray.8">
        {children}
      </Box>
      <FloatingNavigator />
    </>
  );
}
