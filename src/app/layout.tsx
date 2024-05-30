import type { Metadata } from "next";
import {
  Center,
  Group,
  MantineProvider,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import theme from "@/app/theme";
import FloatingNavigator from "@/components/FloatingNavigator";
import { GUTTERS, GUTTERS_SMALL, MIN_HEIGHT, PADDING } from "@/constants";
import Logo from "@/components/Logo";
import AmitoSection from "@/components/Sections/Amito";

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
      <MantineProvider theme={theme}>
        <body>
          <main>
            <Center mih="100vh" w="100%" p={PADDING} color="gray.8">
              <SimpleGrid
                cols={{ base: 1, md: 2 }}
                spacing={PADDING}
                verticalSpacing={PADDING}
                flex={1}
                style={{ position: "relative" }}
              >
                {/* LEFT SIDE */}
                <Stack
                  justify="space-between"
                  align="flex-start"
                  gap={GUTTERS}
                  h={MIN_HEIGHT}
                  maw={{ base: 350, xs: 450, sm: 600 }}
                  style={{ position: "sticky", top: GUTTERS_SMALL, zIndex: 1 }}
                >
                  <div
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    style={{ zIndex: 99, isolation: "isolate" }}
                  >
                    <Logo />
                  </div>
                  <AmitoSection />
                </Stack>
                {children}
                {/* RIGHT SIDE */}
              </SimpleGrid>
            </Center>
            <FloatingNavigator />
          </main>
        </body>
      </MantineProvider>
    </html>
  );
}
