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
  const assets = GET_CLIENT_ASSETS("twent3");
  return (
    <LayoutTemplate
      previewText="Exclusive Sale Alert!"
      version={2}
      data={props}
    >
      <Container className="w-full max-w-[700px] py-9">
        <Text className="font-oswald font-bold uppercase text-yellow-400 text-5xl text-center">
          C u s t o m
        </Text>
        <Img
          src={`${assets.CLIENT_IMAGES}/lenticular-text.gif`}
          alt="Lenticular"
          className="mx-auto max-w-xl w-full"
        />
        <Text className="font-oswald font-bold uppercase text-yellow-400 text-5xl text-center">
          P r i n t s
        </Text>
        <Container className="py-9 text-center">
          <Text className="leading-6 text-lg text-white">
            Exclusively available on our website.
          </Text>

          <Text className="leading-6 text-lg text-white">
            Whether it's a special event, a memorable trip, or a gift for
            someone you love, these prints will bring your photos to life!
          </Text>

          <Row className="w-full mt-12">
            <Column className="p-2">
              <Container className="">
                <Img
                  src="https://cdn.shopify.com/s/files/1/2777/2232/files/Custom_Pattern_Print.gif?v=1727192880"
                  alt="Custom Lenticular Print - Painting"
                  className="mx-auto h-16 lg:h-[140px]"
                  style={{ border: "2px solid #facc15" }}
                />
              </Container>
            </Column>
            <Column className="p-2">
              <Container className="">
                <Img
                  src="https://cdn.shopify.com/s/files/1/2777/2232/files/Custom_animation_print.gif?v=1727192880"
                  alt="Custom Lenticular Print - Just relax"
                  className="mx-auto h-16 lg:h-[140px]"
                  style={{ border: "2px solid #facc15" }}
                />
              </Container>
            </Column>
            <Column className="p-2 text-center">
              <Container className="">
                <Img
                  src="https://cdn.shopify.com/s/files/1/2777/2232/files/Custom_Ruler_Print.gif?v=1727192880"
                  alt="Custom Lenticular Print - Teeth"
                  className="mx-auto h-16 lg:h-[140px]"
                  style={{ border: "2px solid #facc15" }}
                />
              </Container>
            </Column>
          </Row>
          <Button
            href="https://twent3.co.uk"
            className="uppercase bg-red-600 px-6 py-2 rounded-sm text-white text-lg mt-12"
          >
            Visit website
          </Button>
        </Container>
      </Container>
    </LayoutTemplate>
  );
};

export default Twent3Lenticular;
