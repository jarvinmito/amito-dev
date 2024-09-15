import type { Metadata } from "next";
import { Box } from "@mantine/core";
import { PADDING } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Bucket List",
  description: "Be fulfilled by checking your bucket list",
};

export default function AppsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box mih="100vh" w="100%" p={PADDING} color="gray.8">
      {children}
    </Box>
  );
}
