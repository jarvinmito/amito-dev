import { ActionIcon } from "@mantine/core";
import Image from "next/image";

import GoogleLogo from "@/public/google-logo.svg";
import LinkedInLogo from "@/public/linkedin-logo.svg";
import { GOOGLE_PROFILE, LINKEDIN_PROFILE } from "@/constants";

export interface ISocialItem {
  name: string;
  image: string;
  href: string;
}

const Socials = () => {
  const items: ISocialItem[] = [
    { name: "LinkedIn Profile", image: LinkedInLogo, href: LINKEDIN_PROFILE },
    { name: "Google", image: GoogleLogo, href: GOOGLE_PROFILE },
  ];

  return (
    <>
      {items.map((item, itemIndex) => (
        <ActionIcon
          key={`social-link-${itemIndex}`}
          variant="transparent"
          component="a"
          {...item}
        >
          <Image src={item.image} alt={item.name} />
        </ActionIcon>
      ))}
    </>
  );
};

export default Socials;
