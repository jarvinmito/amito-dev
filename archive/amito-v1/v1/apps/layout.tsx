import type { Metadata } from "next";
import { Box } from "@mantine/core";
import { PADDING } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Amito Apps — Archive",
  description:
    "Need something done? Checkout some of my tools here that might help you.",
  robots: { index: false, follow: false },
};

export default function AppsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box mih="100vh" w="100%" color="gray.8">
      {children}
    </Box>
  );
}
