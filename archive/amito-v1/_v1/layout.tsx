import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { Box } from "@mantine/core";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import FloatingNavigator from "@/app/components/FloatingNavigator";
import { PADDING } from "@/app/lib/constants";
import theme from "@/theme";

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
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Box mih="100vh" w="100%" p={PADDING} color="gray.8">
        {children}
      </Box>
      <FloatingNavigator />
    </MantineProvider>
  );
}
