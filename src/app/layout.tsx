import type { Metadata } from "next";
import { Box, Center, MantineProvider } from "@mantine/core";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import theme from "@/app/theme";
import FloatingNavigator from "@/app/components/FloatingNavigator";
import { PADDING } from "@/app/lib/constants";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle";

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
    <html lang="en">
      <MantineProvider theme={theme} defaultColorScheme="light">
        <body>
          <main>
            <Box mih="100vh" w="100%" p={PADDING} color="gray.8">
              {children}
            </Box>
            <FloatingNavigator />
            {/* <ColorSchemeToggle /> */}
          </main>
        </body>
      </MantineProvider>
    </html>
  );
}
