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
  version?: 1 | 2;
}

export const LayoutTemplate = ({
  previewText,
  bannerText,
  children,
  data,
  version = 1,
}: LayoutTemplateProps) => {
  const assets = GET_CLIENT_ASSETS("twent3");
  const socialLinks = [
    {
      name: "x",
      link: "https://twitter.com/twent_3",
      image: `${assets.CLIENT_IMAGES}/brand-x.png`,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/TwenT33D/",
      image: `${assets.CLIENT_IMAGES}/brand-facebook.png`,
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/channel/UCBZLo5lr5FCB5SRVBVdjdBA",
      image: `${assets.CLIENT_IMAGES}/brand-youtube.png`,
    },
    {
      name: "pinterest",
      link: "https://www.pinterest.co.uk/TwenT3/",
      image: `${assets.CLIENT_IMAGES}/brand-pinterest.png`,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/twent3/?hl=en",
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
          <Container>
            <Text className="text-center text-sm text-gray-500">
              If you can&apos;t read this email,{" "}
              <Link href={data.viewInBrowserLink} className="">
                View web version
              </Link>
            </Text>
          </Container>
          <Container className="w-full max-w-[700px] mx-auto">
            <Row className="w-full max-w-[700px] pb-2">
              <Column className="text-right">
                <div></div>
                <div></div>
              </Column>
            </Row>
            <Row className="w-full max-w-[700px]">
              <Column>
                <Container className="w-full max-w-[700px] rounded-sm bg-white m-0">
                  <Container className="w-full max-w-[700px] bg-[#00101d] relative z-10">
                    <Row>
                      <Column>&nbsp;</Column>
                      <Column className="w-[110px] h-[122px]">
                        <Link href="https://twent3.co.uk" title="Twent3">
                          <Img
                            src={`${assets.CLIENT_IMAGES}/twent3-logo.png`}
                            width="110"
                            height="122"
                            alt="Twent3 logo"
                          />
                        </Link>
                      </Column>
                      <Column>&nbsp;</Column>
                    </Row>
                    <Row>
                      <Column>
                        <Text className="mx-auto text-center text-sm text-gray-100">
                          Not Interested? No Worries 👉{" "}
                          <Link
                            href={data.unsubscribeLink}
                            className="cursor-pointer text-gray-200"
                          >
                            Unsubscribe here
                          </Link>
                        </Text>
                      </Column>
                    </Row>
                    {version === 1 ? (
                      <Row>
                        <Column className="py-10">{bannerText}</Column>
                      </Row>
                    ) : (
                      <Row>
                        <Column>{children}</Column>
                      </Row>
                    )}
                    <Img
                      src={
                        version === 1
                          ? `${assets.CLIENT_IMAGES}/twent3-lenticular-bg.png`
                          : `${assets.CLIENT_IMAGES}/lenticular-bg-2-min.png`
                        // : "https://cdn.shopify.com/s/files/1/2777/2232/files/Custom_lenticular_Template_bg.png?v=1727196154"
                      }
                      alt="Twent3 background"
                      className="w-full h-full absolute -z-[1] inset-0 object-cover"
                    />
                  </Container>

                  {version === 1 ? (
                    <Section className="pb-10">{children}</Section>
                  ) : null}
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
                      <Img src={social.image} alt={social.name} width={28} />
                    </Link>
                  </Column>
                ))}
              </Row>
              <Row className="mt-8">
                <Column className="px-6">
                  <Text className="text-xs text-center m-0 text-gray-400">
                    TwenT3 - Chantry Road Marden Tonbridge - TN12-9HT- England
                    UK
                  </Text>
                  <Text className="text-xs text-center m-0 mb-4 text-gray-400">
                    <Link href="https://twent3.co.uk">www.twent3.co.uk</Link> -{" "}
                    <Link href="mailto:info@twent3.co.uk?subject=Email us any questions">
                      info@twent3.co.uk
                    </Link>
                  </Text>
                  <Text className="text-xs text-center m-0 text-gray-400">
                    We sent out this message as you may have shown an interest
                    in TwenT3's products or services.
                  </Text>
                  <Text className="text-xs text-center m-0 mb-4 text-gray-400">
                    If you want more information about our privacy policy,
                    please visit{" "}
                    <Link href="https://twent3.co.uk/pages/privacy-policy">
                      this page
                    </Link>
                    .
                  </Text>
                  <Text className="text-xs text-center m-0 mb-4 text-gray-400">
                    If you no longer wish to receive these emails, don't panic,
                    simply{" "}
                    <Link href={data.unsubscribeLink}>[unsubscribe]</Link>.
                  </Text>
                  <Text className="text-xs text-center m-0 text-gray-400">
                    ©2024 TwenT3. All rights reserved.
                  </Text>
                </Column>
              </Row>
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
