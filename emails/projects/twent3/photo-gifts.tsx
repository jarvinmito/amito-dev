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

interface Twent3PhotoGiftsProps {
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
  photoGift1Link?: string;
  photoGift2Link?: string;
  photoGift3Link?: string;
}

const Twent3PhotoGifts = (props: Twent3PhotoGiftsProps) => {
  const assets = GET_CLIENT_ASSETS("twent3");
  return (
    <LayoutTemplate
      previewText="Enjoy FREE Gifts! 🎁"
      bannerText={
        <>
          <Row className="w-auto">
            <Column>
              <Text className="text-4xl lg:text-7xl text-white font-poltawski">
                Capture Moments
              </Text>
            </Column>
          </Row>
          <Row className="w-auto">
            <Column>
              <Text className="text-3xl lg:text-4xl text-yellow-400 font-oswald">
                Enjoy FREE Gifts! 🎁
              </Text>
            </Column>
          </Row>
        </>
      }
      data={props}
    >
      <Container className="w-full max-w-[700px]">
        <Container className="p-9 text-center">
          <Text className="text-2xl">Hello {props.name},</Text>
          <Text className="text-2xl leading-10 py-6">
            Celebrate your cherished moments with our exclusive photo gifts—and
            get an extra treat for FREE! Choose from any of our top-selling
            photo gift sizes and enjoy these amazing freebies:
          </Text>
        </Container>

        <Row className="md:hidden">
          <Column
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-2.gif)`,
            }}
          ></Column>
        </Row>
        <Row>
          <Column
            className="hidden md:table-cell md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-2.gif)`,
            }}
          ></Column>
          <Column className="w-full md:w-1/2 text-center md:text-left relative">
            <Container className="pt-3 pb-20 px-6 md:pl-10 md:pr-6 md:py-10">
              <Text className="text-3xl font-bold">6x4 Photo Gift</Text>
              <Text className="text-xl font-bold text-red-800">
                FREE Mini Keyring
              </Text>
              <Img
                className="mx-auto md:m-0"
                src={`${assets.CLIENT_IMAGES}/twent3-keyring.png`}
                alt="Mini Keyring"
                width="72"
                height="72"
              />
              <Text>Carry your memories wherever you go!</Text>
              <Button
                href={props.photoGift1Link}
                className="uppercase bg-blue-800 px-6 py-3 rounded-sm text-white text-xl"
              >
                Buy now
              </Button>
            </Container>
          </Column>
        </Row>

        <Row className="md:hidden">
          <Column
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-1.gif)`,
            }}
          ></Column>
        </Row>
        <Row>
          <Column className="w-full md:w-1/2 text-center md:text-left relative">
            <Container className="pt-3 pb-20 px-6 md:pl-10 md:pr-6 md:py-10">
              <Text className="text-3xl font-bold">7x5 Photo Gift</Text>
              <Text className="text-xl font-bold text-red-800">
                FREE Fridge Magnet
              </Text>
              <Img
                className="mx-auto md:mx-0"
                src={`${assets.CLIENT_IMAGES}/twent3-fridge-magnet.png`}
                alt="Fridge Magnet"
                width="84"
                height="79"
              />
              <Text>Keep your favorite photo front and center!</Text>
              <Button
                href={props.photoGift2Link}
                className="uppercase bg-blue-800 px-6 py-3 rounded-sm text-white text-xl"
              >
                Buy now
              </Button>
            </Container>
          </Column>
          <Column
            className="hidden md:table-cell md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-1.gif)`,
            }}
          ></Column>
        </Row>

        <Row className="md:hidden">
          <Column
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-3.gif)`,
            }}
          ></Column>
        </Row>
        <Row>
          <Column
            className="hidden md:table-cell md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-3.gif)`,
            }}
          ></Column>
          <Column className="w-full md:w-1/2 text-center md:text-left relative">
            <Container className="pt-3 pb-20 px-6 md:pl-10 md:pr-6 md:py-10">
              <Text className="text-3xl font-bold">10x8 Photo Gift</Text>
              <Text className="text-xl font-bold text-red-800">
                FREE Jumbo Keyring
              </Text>
              <Img
                className="mx-auto md:m-0"
                src={`${assets.CLIENT_IMAGES}/twent3-keyring.png`}
                alt="Jumbo Keyring"
                width="84"
                height="84"
              />
              <Text>A bigger keyring for your most precious memories!</Text>
              <Button
                href={props.photoGift3Link}
                className="uppercase bg-blue-800 px-6 py-3 rounded-sm text-white text-xl"
              >
                Buy now
              </Button>
            </Container>
          </Column>
        </Row>

        <Container className="p-9 text-center">
          <Text className="text-2xl leading-10 py-6">
            Don&apos;t miss out—this is the perfect time to turn your special
            moments into timeless keepsakes and receive a free gift with every
            order. Simply select your desired photo gift size and we&apos;ll
            take care of the rest!
          </Text>

          <Text className="text-3xl text-blue-600 font-bold">
            Order now and get your free gift!
          </Text>
        </Container>
      </Container>
    </LayoutTemplate>
  );
};

export default Twent3PhotoGifts;
