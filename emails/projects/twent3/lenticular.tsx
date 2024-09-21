import React from "react";
import { Button, Column, Container, Row, Text } from "@react-email/components";
import { LayoutTemplate } from "./_components/layout";

interface Twent3LenticularProps {
  name?: string;
  unsubscribeLink?: string;
  viewInBrowserLink?: string;
  logo?: string;
  websiteLink?: string;
  socialXLink?: string;
  socialFacebookLink?: string;
  socialYoutubeLink?: string;
  socialPinterestLink?: string;
  socialInstagramLink?: string;
}

const Twent3Lenticular = (props: Twent3LenticularProps) => {
  return (
    <LayoutTemplate
      previewText="Exclusive Sale Alert!"
      bannerText={
        <Row className="w-auto">
          <Column>
            <Text className="text-5xl lg:text-7xl text-white font-poltawski">
              Truly
            </Text>
          </Column>
          <Column>
            <Text className="text-5xl lg:text-7xl text-yellow-400 font-poltawski">
              Magical
            </Text>
          </Column>
        </Row>
      }
      data={props}
    >
      <Container className="w-full max-w-[700px]">
        <Container className="p-9 text-center">
          <Text className="text-2xl">Hello {props.name},</Text>
          <Text className="text-2xl leading-10 py-6">
            Turn your favorite moments into something truly magical with our
            Custom Lenticular Prints, exclusively available on our website.
            Whether it's a special event, a memorable trip, or a gift for
            someone you love, these prints will bring your photos to life!
          </Text>
          <Button
            href={props.websiteLink}
            className="uppercase bg-blue-800 px-6 py-3 rounded-sm text-white text-xl"
          >
            Visit website
          </Button>
        </Container>
      </Container>
    </LayoutTemplate>
  );
};

export default Twent3Lenticular;
