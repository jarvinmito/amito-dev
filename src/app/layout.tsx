import type { Metadata } from "next";
import {
  Center,
  Group,
  MantineProvider,
  MantineSpacing,
  Stack,
} from "@mantine/core";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import theme from "@/app/theme";
import FloatingNavigator from "@/components/FloatingNavigator";
import { GUTTERS, MIN_HEIGHT, PADDING } from "@/constants";
import Logo from "@/components/Brand/Logo/Logo";

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
              <Group gap={GUTTERS} flex={1} justify="space-between">
                {/* LEFT SIDE */}
                <Stack
                  justify="space-between"
                  align="flex-start"
                  gap={GUTTERS}
                  mih={MIN_HEIGHT}
                  maw={{ base: 350, xs: 450, sm: 600 }}
                >
                  <div data-aos="fade-in" data-aos-duration="1200">
                    <Logo />
                  </div>
                  {children}
                </Stack>
                {/* RIGHT SIDE */}
                <FloatingNavigator />
              </Group>
            </Center>
          </main>
        </body>
      </MantineProvider>
    </html>
  );
}
