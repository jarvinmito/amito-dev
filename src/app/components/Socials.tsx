import { ReactElement } from "react";
import { ActionIcon, rem, useMantineColorScheme } from "@mantine/core";

import { GOOGLE_PROFILE, LINKEDIN_PROFILE } from "@/app/lib/constants";
import LinkedIn from "@/app/components/Icons/LinkedIn";
import Google from "@/app/components/Icons/Google";

export interface ISocialItem {
  name: string;
  image: string | JSX.Element | ReactElement;
  href: string;
}

const Socials = () => {
  const svgStyle = {
    width: rem(24),
  };

  const items: ISocialItem[] = [
    {
      name: "LinkedIn Profile",
      image: <LinkedIn style={svgStyle} />,
      href: LINKEDIN_PROFILE,
    },
    {
      name: "Google",
      image: <Google style={svgStyle} />,
      href: GOOGLE_PROFILE,
    },
  ];

  return (
    <>
      {items.map((item, itemIndex) => (
        <ActionIcon
          key={`social-link-${itemIndex}`}
          variant="transparent"
          size="lg"
          radius="xl"
          c="var(--mantine-color-text)"
          component="a"
          {...item}
        >
          {item.image}
        </ActionIcon>
      ))}
    </>
  );
};

export default Socials;
