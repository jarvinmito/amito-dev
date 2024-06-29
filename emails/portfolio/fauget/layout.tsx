import Font from "@/emails/_components/Font";
import { Body, Head, Html, Preview, Tailwind } from "@react-email/components";
import { clientFonts } from "./constants";

interface TemplateLayoutProps {
  previewText?: string;
  children?: React.ReactNode;
  bg?: string;
}

export const TemplateLayout = ({
  previewText,
  children,
  bg,
}: TemplateLayoutProps) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Fauget Email Template</title>
          <Font
            fontFamily="Oswald"
            // use .font-dm with this
            fontFamilyCode="oswald"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${clientFonts}/oswald-v53-latin-regular.woff2`,
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Inter"
            // use .font-dm with this
            fontFamilyCode="inter"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${clientFonts}/inter-v13-latin-regular.woff2`,
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Inter Bold"
            // use .font-dm with this
            fontFamilyCode="inter-bold"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${clientFonts}/inter-v13-latin-700.woff2`,
              format: "woff2",
            }}
            fontWeight={700}
            fontStyle="normal"
          />
          <style>
            {`
            body { margin: 0; }
            table { border-spacing: 0; }
            td { padding: 0; }
            img { border: 0; }
            .wrapper {
              width: 100%;
              table-layout: fixed;
              padding-bottom: 60px;
            }
            .main {
              width: 100%;
              color: #33313d;
              box-shadow: 0 10px 20px 0 rgba(0,0,0,0.05)
            }
          `}
          </style>
        </Head>
        <Body className="m-0 font-inter bg-[#f4ead8] sm:bg-[#fdfefe]">
          <Preview>{previewText!}</Preview>
          <center className="wrapper sm:py-6">
            <table
              className="main max-w-[600px] bg-[#f4ead8] sm:rounded-3xl"
              width="100%"
            >
              {children}
            </table>
          </center>
        </Body>
      </Html>
    </Tailwind>
  );
};
