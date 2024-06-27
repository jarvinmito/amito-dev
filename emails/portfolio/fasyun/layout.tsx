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
import Font from "@/emails/components/Font";
import React from "react";
import {
  clientFolder,
  commonFolder,
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
  <Html>
    <Head>
      <Font
        fontFamily="Bodoni Moda"
        // use .font-dm with this
        fontFamilyCode="bodoni"
        fallbackFontFamily="Arial"
        webFont={{
          url: `${clientFolder}/fonts/bodoni-moda-v25-latin-regular.woff2`,
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
              <Row className="w-auto max-w-[320px] mx-auto">
                <Column className="text-center px-2">
                  <Link
                    href={gmail}
                    target="_blank"
                    className="text-gray-500 text-xs rounded-full bg-white inline-flex justify-center align-center p-1.5"
                  >
                    <Img
                      src={`${commonFolder}/images/brand-gmail.png`}
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
                      src={`${commonFolder}/images/brand-linkedin.png`}
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
                      src={`${commonFolder}/images/brand-instagram.png`}
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
    </Tailwind>
  </Html>
);
