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

interface LayoutTemplateProps {
  previewText?: string;
  bannerText?: string | JSX.Element;
  children?: React.ReactNode;
}

const gmail = "https://gmail.com/";
const linkedin = "https://linkedin.com/";
const instagram = "https://instagram.com/";

export const LayoutTemplate = ({
  previewText,
  bannerText,
  children,
}: LayoutTemplateProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Body className="mx-auto py-10 lg:px-10 m-0 font-sans bg-gray-200">
        <Preview>{previewText!}</Preview>
        <Container className="w-full max-w-[700px] mx-auto">
          <Row className="w-full max-w-[700px] pb-2">
            <Column className="text-right">
              <Link className="mr-6 text-xs text-gray-500">Unsubscribe</Link>
              <Link className="text-xs text-gray-500">View in browser</Link>
            </Column>
          </Row>
          <Row>
            <Column>&nbsp;</Column>
            <Column className="w-[110px] bg-white"></Column>
            <Column>&nbsp;</Column>
          </Row>
          <Row className="w-full max-w-[700px]">
            <Column>
              <Container className="w-full max-w-[700px] rounded-sm bg-white py-10 m-0">
                <Container>
                  <Row>
                    <Column>&nbsp;</Column>
                    <Column className="w-[110px] h-[122px] bg-white"></Column>
                    <Column>&nbsp;</Column>
                  </Row>
                  <Row>
                    <Column>{bannerText}</Column>
                  </Row>
                </Container>

                <Section>{children}</Section>
              </Container>
            </Column>
          </Row>
          <Container className="pt-6">
            <Text className="text-center text-lg">
              View more updates on our social media
            </Text>
            <Row className="w-auto max-w-[320px] mx-auto">
              <Column className="text-center px-2">
                <Link
                  href={gmail}
                  target="_blank"
                  className="text-gray-500 text-xs rounded-full bg-white inline-flex justify-center align-center p-1.5"
                >
                  <Img
                    src={`${commonImages}/brand-gmail.png`}
                    alt="GMail"
                    width={24}
                  />
                </Link>
              </Column>
              <Column className="text-center px-2">
                <Link
                  href={linkedin}
                  target="_blank"
                  className="text-gray-500 text-xs rounded-full bg-white inline-flex justify-center align-center p-1.5"
                >
                  <Img
                    src={`${commonImages}/brand-linkedin.png`}
                    alt="LinkedIn"
                    width={24}
                  />
                </Link>
              </Column>
              <Column className="text-center px-2">
                <Link
                  href={instagram}
                  target="_blank"
                  className="text-gray-500 text-xs rounded-full bg-white inline-flex justify-center align-center p-1.5"
                >
                  <Img
                    src={`${commonImages}/brand-instagram.png`}
                    alt="Instagram"
                    width={24}
                  />
                </Link>
              </Column>
            </Row>
          </Container>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);
