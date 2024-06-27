"use client";

import { Button, Container, Title } from "@mantine/core";
import Link from "next/link";
import { ROUTES } from "./lib/constants";

export default function GlobalError() {
  return (
    <Container>
      <Title>Oops! Page not found!</Title>
      <Button component={Link} href={ROUTES.LANDING.HOME}>
        Back to Home
      </Button>
    </Container>
  );
}
