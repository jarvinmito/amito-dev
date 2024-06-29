import * as React from "react";
import defaultTheme from "tailwindcss/defaultTheme";

type FallbackFont =
  | "Arial"
  | "Helvetica"
  | "Verdana"
  | "Georgia"
  | "Times New Roman"
  | "serif"
  | "sans-serif"
  | "monospace"
  | "cursive"
  | "fantasy";
type FontFormat =
  | "woff"
  | "woff2"
  | "truetype"
  | "opentype"
  | "embedded-opentype"
  | "svg";
type FontWeight = React.CSSProperties["fontWeight"];
type FontStyle = React.CSSProperties["fontStyle"];
interface FontProps {
  /** The font you want to use. NOTE: Do not insert multiple fonts here, use fallbackFontFamily for that */
  fontFamily: string;
  fontFamilyCode: string;
  /** An array is possible, but the order of the array is the priority order */
  fallbackFontFamily: FallbackFont | FallbackFont[];
  /** Not all clients support web fonts. For support check: https://www.caniemail.com/features/css-at-font-face/ */
  webFont?: {
    url: string;
    format: FontFormat;
  };
  /** Default: 'normal' */
  fontStyle?: FontStyle;
  /** Default: 400 */
  fontWeight?: FontWeight;
}

const Font = ({
  webFont,
  fontStyle = "normal",
  fontFamily,
  fontFamilyCode = "custom",
  fontWeight = 400,
  fallbackFontFamily,
}: FontProps) => {
  const src = webFont
    ? `src: url("${webFont.url}") format("${webFont.format}");`
    : "";

  const htmlData = `
    @font-face {
      font-style: ${fontStyle};
      font-family: "${fontFamily}";
      font-weight: ${fontWeight};
      mso-font-alt: ${
        Array.isArray(fallbackFontFamily)
          ? fallbackFontFamily[0]
          : fallbackFontFamily
      };
      ${src}
    }

    .font-${fontFamilyCode} {
      font-family: "${fontFamily}", ${defaultTheme.fontFamily.sans.join(", ")};
    }
  `;

  /* {`
      @font-face {
          font-style: ${fontStyle};
          font-family: ${fontFamily};
          font-weight: ${fontWeight};
          mso-font-alt: ${
            Array.isArray(fallbackFontFamily)
              ? fallbackFontFamily[0]
              : fallbackFontFamily
          };
          ${src}
      }

      * {
          font-family: ${fontFamily}, ${
    Array.isArray(fallbackFontFamily)
      ? fallbackFontFamily.join(", ")
      : fallbackFontFamily
  };
      }
      `} */
  return <style dangerouslySetInnerHTML={{ __html: htmlData }} />;
};

export default Font;
