import React from "react";
import {
  Button,
  Column,
  Container,
  Img,
  Row,
  Text,
} from "@react-email/components";
import { LayoutTemplate } from "./_components/layout";
import { GET_CLIENT_ASSETS } from "@/emails/_lib/constants";

interface Twent3LenticularProps {
  name?: string;
}

const Twent3Lenticular = ({ name }: Twent3LenticularProps) => {
  const assets = GET_CLIENT_ASSETS("twent3");
  return (
    <LayoutTemplate
      previewText="Exclusive Sale Alert!"
      bannerText={
        <Row className="w-auto">
          <Column>
            <Text className="text-5xl lg:text-7xl">Truly</Text>
          </Column>
          <Column>
            <Text className="text-5xl lg:text-7xl">Magical</Text>
          </Column>
        </Row>
      }
    >
      <Container className="">
        <Container className="p-9 text-center">
          <Text className="text-2xl">Hello {name},</Text>
          <Text className="text-2xl leading-10">
            Turn your favorite moments into something truly magical with our
            Custom Lenticular Prints, exclusively available on our website.
            Whether it's a special event, a memorable trip, or a gift for
            someone you love, these prints will bring your photos to life!
          </Text>
          <Button className="uppercase bg-blue-800 px-6 py-3 rounded-sm text-white text-xl">
            Visit website
          </Button>
        </Container>
      </Container>
    </LayoutTemplate>
  );
};

export default Twent3Lenticular;
