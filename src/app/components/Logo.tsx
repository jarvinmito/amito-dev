import { Anchor, Title, VisuallyHidden, rem } from "@mantine/core";
import { ROUTES } from "@/app/lib/constants";
import Link from "next/link";
import Amito from "@/app/components/Icons/Amito";

const Logo = () => {
  return (
    <Anchor
      href={ROUTES.LANDING.HOME}
      component={Link}
      c="var(--mantine-color-text)"
    >
      <Amito style={{ height: rem(48) }} />
      <VisuallyHidden>
        <Title>Amito</Title>
      </VisuallyHidden>
    </Anchor>
  );
};

export default Logo;
