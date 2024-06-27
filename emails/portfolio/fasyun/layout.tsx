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
import React from "react";
import Font from "@/emails/components/Font";

interface LayoutTemplateProps {
  previewText?: string;
  children?: React.ReactNode;
}

const baseUrl = "https://amito.dev";
const gmail = "https://gmail.com/";
const linkedin = "https://linkedin.com/";
const instagram = "https://instagram.com/";

export const LayoutTemplate = ({
  previewText,
  children,
}: LayoutTemplateProps) => (
  <Html>
    <Head>
      <Font
        fontFamily="Bodoni Moda"
        // use .font-dm with this
        fontFamilyCode="bodoni"
        fallbackFontFamily="Arial"
        webFont={{
          url: `${baseUrl}/assets/portfolio/fasyun/fonts/bodoni-moda-v25-latin-regular.woff2`,
          // url: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>{previewText!}</Preview>
    <Tailwind>
      <Body className="mx-auto p-10 m-0 font-sans">
        <Container className="w-full max-w-[640px] mx-auto">
          <Container className="border-1 border-solid border-[#7b7b7b] rounded-lg bg-[#e9c09f] py-10 px-20">
            <Section>
              <Heading className="text-center font-bold">Fasyun</Heading>
            </Section>
            <Section>{children}</Section>
            <Container className="pt-6">
              <Text className="text-center text-lg">
                View more updates on our social media
              </Text>
              <Row className="max-w-[320px] mx-auto">
                <Column>
                  <Link
                    href={gmail}
                    target="_blank"
                    className="text-gray-500 text-xs rounded-full bg-white"
                  >
                    <Img
                      src={`${baseUrl}/assets/common/images/brand-gmail.png`}
                      alt="GMail"
                    />
                  </Link>
                </Column>
                <Column>
                  <Link
                    href={linkedin}
                    target="_blank"
                    className="text-gray-500 text-xs rounded-full bg-white"
                  >
                    <Img
                      src={`${baseUrl}/assets/common/images/brand-linkedin.png`}
                      alt="LinkedIn"
                    />
                  </Link>
                </Column>
                <Column>
                  <Link
                    href={instagram}
                    target="_blank"
                    className="text-gray-500 text-xs rounded-full bg-white"
                  >
                    <Img
                      src={`${baseUrl}/assets/common/images/brand-instagram.png`}
                      alt="Instagram"
                    />
                  </Link>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-center text-xs">
                    A Product by{" "}
                    <Link
                      href="https://amito.dev"
                      target="_blank"
                      className="font-bold text-[#ffb119]"
                    >
                      Amito
                    </Link>
                  </Text>
                </Column>
              </Row>
            </Container>
          </Container>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
