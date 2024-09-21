// Amito Software Development Services
// Email Template coded by Amito
// Checklist:
// [ ] - Design (Figma / Image / PSD etc.)
// [ ] - Fonts
// [ ] - Image assets
// [ ] - Links
// [ ] - Copies
// [ ] - Customer Email Service Provider (Supports hosting of assets?)

// Delivery Checklist:
// [ ] - Fonts -- upload to host (Mine / Client's) or already hosted?
// [ ] - Images -- upload to host (Mine / Client's) or already hosted?
// [ ] - Code Export
// [ ] - Testing screenshots
// [ ] - Delivery -- Send Code or Upload to Client's ESP
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import Font from "@/emails/_components/Font";
import React from "react";
import {
  clientFonts,
  clientImages,
  commonImages,
} from "@/emails/portfolio/fasyun/constants";
import { BackgroundImage } from "@mantine/core";
import { GET_CLIENT_ASSETS } from "@/emails/_lib/constants";

interface LayoutTemplateProps {
  previewText?: string;
  bannerText?: string | JSX.Element;
  children?: React.ReactNode;
  data?: any;
}

const gmail = "https://gmail.com/";
const linkedin = "https://linkedin.com/";
const instagram = "https://instagram.com/";

export const LayoutTemplate = ({
  previewText,
  bannerText,
  children,
  data,
}: LayoutTemplateProps) => {
  const assets = GET_CLIENT_ASSETS("twent3");
  const socialLinks = [
    {
      name: "x",
      link: data.socialXLink,
      image: `${assets.CLIENT_IMAGES}/brand-x.png`,
    },
    {
      name: "facebook",
      link: data.socialFacebookLink,
      image: `${assets.CLIENT_IMAGES}/brand-facebook.png`,
    },
    {
      name: "youtube",
      link: data.socialYoutubeLink,
      image: `${assets.CLIENT_IMAGES}/brand-youtube.png`,
    },
    {
      name: "pinterest",
      link: data.socialPinterestLink,
      image: `${assets.CLIENT_IMAGES}/brand-pinterest.png`,
    },
    {
      name: "instagram",
      link: data.socialInstagramLink,
      image: `${assets.CLIENT_IMAGES}/brand-instagram.png`,
    },
  ];
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Oswald"
            // use .font-dm with this
            fontFamilyCode="oswald"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${assets.CLIENT_FONTS}/oswald-v53-latin-regular.woff2`,
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Poltawski"
            // use .font-dm with this
            fontFamilyCode="poltawski"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${assets.CLIENT_FONTS}/poltawski-nowy-v2-latin-regular.woff2`,
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="mx-auto py-10 lg:px-10 m-0 font-sans bg-gray-200">
          <Preview>{previewText!}</Preview>
          <Container className="w-full max-w-[700px] mx-auto">
            <Row className="w-full max-w-[700px] pb-2">
              <Column className="text-right">
                <Link
                  href={data.unsubscribeLink}
                  className="mr-6 text-xs text-gray-500"
                >
                  Unsubscribe
                </Link>
                <Link
                  href={data.viewInBrowserLink}
                  className="text-xs text-gray-500"
                >
                  View in browser
                </Link>
              </Column>
            </Row>
            <Row>
              <Column>&nbsp;</Column>
              <Column className="w-[110px] bg-white"></Column>
              <Column>&nbsp;</Column>
            </Row>
            <Row className="w-full max-w-[700px]">
              <Column>
                <Container className="w-full max-w-[700px] rounded-sm bg-white m-0">
                  <Container
                    className="w-full max-w-[700px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${assets.CLIENT_IMAGES}/twent3-lenticular-bg.png")`,
                    }}
                  >
                    <Row>
                      <Column>&nbsp;</Column>
                      <Column className="w-[110px] h-[122px]">
                        <Img
                          src={`${assets.CLIENT_IMAGES}/twent3-logo.png`}
                          width="110"
                          height="122"
                          alt="Twent3 logo"
                        />
                      </Column>
                      <Column>&nbsp;</Column>
                    </Row>
                    <Row>
                      <Column className="py-10">{bannerText}</Column>
                    </Row>
                  </Container>

                  <Section className="pb-10">{children}</Section>
                </Container>
              </Column>
            </Row>
            <Container className="pt-6">
              <Text className="text-center text-gray-500">
                View more updates on our social media
              </Text>
              <Row className="w-auto max-w-[320px] mx-auto">
                {socialLinks.map((social, index) => (
                  <Column
                    key={`social-link-${index}`}
                    className="text-center px-2"
                  >
                    <Link
                      href={social.link}
                      target="_blank"
                      className="text-gray-500 text-xs inline-flex justify-center align-center p-1.5"
                    >
                      <Img src={social.image} alt={social.name} width={24} />
                    </Link>
                  </Column>
                ))}
              </Row>
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
