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
              <Text className="text-xl lg:text-3xl text-white font-poltawski my-0">
                Capture Moments
              </Text>
            </Column>
          </Row>
          <Row className="w-auto">
            <Column>
              <Text className="text-lg lg:text-2xl text-yellow-400 font-oswald my-0">
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
          <Text className="">Hello {props.name},</Text>
          <Text className="leading-6 py-6">
            Celebrate your cherished moments with our exclusive photo gifts—and
            get an extra treat for FREE! Choose from any of our top-selling
            photo gift sizes and enjoy these amazing freebies:
          </Text>
        </Container>

        <Row className="md:hidden">
          <Column
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-2-min.gif)`,
            }}
          ></Column>
        </Row>
        <Row>
          <Column className="hidden md:table-cell md:w-1/2 bg-cover bg-center">
            <Img
              className="mx-auto"
              src={`${assets.CLIENT_IMAGES}/twent3-lenticular-2-min.gif`}
              alt="Lenticular Photo Gift 1"
              width="240"
              height="240"
            />
          </Column>
          <Column className="w-full md:w-1/2 text-center relative">
            <Container className="pt-3 pb-20 px-6 md:pl-10 md:pr-6 md:py-10">
              <Text className="text-lg font-bold m-0">6x4 Photo Gift</Text>
              <Text className="font-bold m-0 text-red-800">
                FREE Mini Keyring
              </Text>
              <Img
                className="mx-auto"
                src={`${assets.CLIENT_IMAGES}/twent3-keyring.png`}
                alt="Mini Keyring"
                width="72"
                height="72"
              />
              <Text className="mt-0">Carry your memories wherever you go!</Text>
              <Text className="m-0 text-sm text-gray-500">
                Use discount code
                <Text className="m-0 text-lg text-red-800 font-bold">
                  T3MKR
                </Text>
              </Text>
              <Button
                href={props.photoGift1Link}
                className="uppercase bg-blue-800 px-6 py-1 rounded-sm text-white text-lg"
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
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-1-min.gif)`,
            }}
          ></Column>
        </Row>
        <Row>
          <Column className="w-full md:w-1/2 text-center relative">
            <Container className="pt-3 pb-20 px-6 md:pl-10 md:pr-6 md:py-10">
              <Text className="text-lg font-bold m-0">7x5 Photo Gift</Text>
              <Text className="font-bold m-0 text-red-800">
                FREE Fridge Magnet
              </Text>
              <Img
                className="mx-auto"
                src={`${assets.CLIENT_IMAGES}/twent3-fridge-magnet.png`}
                alt="Fridge Magnet"
                width="84"
                height="79"
              />
              <Text className="mt-0">
                Keep your favorite photo front and center!
              </Text>
              <Text className="m-0 text-sm text-gray-500">
                Use discount code
                <Text className="m-0 text-lg text-red-800 font-bold">
                  T3FMG
                </Text>
              </Text>
              <Button
                href={props.photoGift2Link}
                className="uppercase bg-blue-800 px-6 py-1 rounded-sm text-white text-lg"
              >
                Buy now
              </Button>
            </Container>
          </Column>
          <Column className="hidden md:table-cell md:w-1/2 bg-cover bg-center">
            <Img
              className="mx-auto"
              src={`${assets.CLIENT_IMAGES}/twent3-lenticular-1-min.gif`}
              alt="Lenticular Photo Gift 2"
              width="240"
              height="240"
            />
          </Column>
        </Row>

        <Row className="md:hidden">
          <Column
            className="w-full h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assets.CLIENT_IMAGES}/twent3-lenticular-3-min.gif)`,
            }}
          ></Column>
        </Row>
        <Row>
          <Column className="hidden md:table-cell md:w-1/2 bg-cover bg-center">
            <Img
              className="mx-auto"
              src={`${assets.CLIENT_IMAGES}/twent3-lenticular-3-min.gif`}
              alt="Lenticular Photo Gift 3"
              width="240"
              height="240"
            />
          </Column>
          <Column className="w-full md:w-1/2 text-center relative">
            <Container className="pt-3 pb-20 px-6 md:pl-10 md:pr-6 md:py-10">
              <Text className="text-lg font-bold m-0">10x8 Photo Gift</Text>
              <Text className="font-bold m-0 text-red-800">
                FREE Jumbo Keyring
              </Text>
              <Img
                className="mx-auto"
                src={`${assets.CLIENT_IMAGES}/twent3-keyring.png`}
                alt="Jumbo Keyring"
                width="84"
                height="84"
              />
              <Text className="mt-0">
                A bigger keyring for your most precious memories!
              </Text>
              <Text className="m-0 text-sm text-gray-500">
                Use discount code
                <Text className="m-0 text-lg text-red-800 font-bold">
                  T3JKR
                </Text>
              </Text>
              <Button
                href={props.photoGift3Link}
                className="uppercase bg-blue-800 px-6 py-1 rounded-sm text-white text-lg"
              >
                Buy now
              </Button>
            </Container>
          </Column>
        </Row>

        <Container className="p-9 text-center">
          <Text className="leading-6 py-6">
            Don&apos;t miss out—this is the perfect time to turn your special
            moments into timeless keepsakes and receive a free gift with every
            order. Simply select your desired photo gift size and we&apos;ll
            take care of the rest!
          </Text>

          <Text className="text-blue-600 font-bold">
            Order now and get your free gift!
          </Text>
        </Container>
      </Container>
    </LayoutTemplate>
  );
};

export default Twent3PhotoGifts;
