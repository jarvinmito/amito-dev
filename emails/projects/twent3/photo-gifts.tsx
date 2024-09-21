import React from "react";
import { Button, Container, Img, Text } from "@react-email/components";
import { LayoutTemplate } from "./_components/layout";
import { GET_CLIENT_ASSETS } from "@/emails/_lib/constants";

interface Twent3PhotoGiftProps {
  name?: string;
}

const Twet3PhotoGifts = ({ name }: Twent3PhotoGiftProps) => {
  const assets = GET_CLIENT_ASSETS("twent3");
  return (
    <LayoutTemplate previewText="Exclusive Sale Alert!">
      <Img
        src={`${assets.CLIENT_IMAGES}/banner-min.png`}
        alt="Twent3"
        width="100%"
        className="rounded-t-lg"
      />
      <Container className="bg-[#fbf0de] rounded-b-lg">
        <Container className="p-9 text-center">
          <Text className="text-[36px] leading-[40px] font-bodoni">
            Photo Gifts!
          </Text>
          <Text className="text-lg">Hello {name},</Text>
          <Text className="text-lg">
            We hope this message finds you well. As a valued member of our
            community, we&apos;re excited to bring you an exclusive opportunity
            to save big on your favorite products/services through our email
            newsletter.
          </Text>
          <Button className="uppercase bg-[#e9c09f] px-6 py-3 rounded-full text-white font-inter-bold text-sm">
            Shop now
          </Button>
        </Container>
      </Container>
    </LayoutTemplate>
  );
};

export default Twet3PhotoGifts;
