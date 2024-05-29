import Image from "next/image";
import AmitoLogo from "@/public/amito-brand.svg";
import { Anchor } from "@mantine/core";
import { ROUTES } from "@/constants";
import Link from "next/link";

const Logo = () => {
  return (
    <Anchor href={ROUTES.LANDING.HOME} component={Link}>
      <Image src={AmitoLogo} alt="Amito" height={48} />
    </Anchor>
  );
};

export default Logo;
