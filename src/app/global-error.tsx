"use client";

import { Button, Container, Title } from "@mantine/core";
import Link from "next/link";
import { ROUTES } from "./lib/constants";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Title>Oops! Page not found!</Title>
          <Button component={Link} href={ROUTES.LANDING.HOME}>
            Back to Home
          </Button>
        </Container>
      </body>
    </html>
  );
}
