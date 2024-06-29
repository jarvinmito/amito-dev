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
  children?: React.ReactNode;
}

const gmail = "https://gmail.com/";
const linkedin = "https://linkedin.com/";
const instagram = "https://instagram.com/";

export const LayoutTemplate = ({
  previewText,
  children,
}: LayoutTemplateProps) => (
  <Tailwind>
    <Html>
      <Head>
        <Font
          fontFamily="Bodoni Moda"
          // use .font-dm with this
          fontFamilyCode="bodoni"
          fallbackFontFamily="Arial"
          webFont={{
            url: `${clientFonts}/bodoni-moda-v25-latin-regular.woff2`,
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body className="mx-auto p-10 m-0 font-sans">
        <Preview>{previewText!}</Preview>
        <Container className="w-full max-w-[700px] mx-auto">
          <Container className="border-1 border-solid border-[#7b7b7b] rounded-lg bg-[#e9c09f] py-10 px-16 shadow-2xl">
            <Section className="mb-4">
              <Row className="w-auto">
                <Column className="px-2">
                  <Img
                    src={`${clientImages}/fasyun-logo.png`}
                    alt="Fasyun logo"
                    width={72}
                  />
                </Column>
                <Column className="px-2">
                  <Heading className="text-center font-bold font-bodoni">
                    Fasyun
                  </Heading>
                </Column>
              </Row>
            </Section>
            <Section>{children}</Section>
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
        </Container>
      </Body>
    </Html>
  </Tailwind>
);
