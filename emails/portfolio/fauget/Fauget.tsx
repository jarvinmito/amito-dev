import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import Font from "@/emails/_components/Font";
import { clientFonts, clientImages } from "./constants";

const Page1Again = () => {
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
              background-color: #f4ead8;
              padding-bottom: 60px;
            }
            .main {
              width: 100%;
              color: #33313d;
            }
          `}
          </style>
        </Head>
        <Body className="m-0 font-inter bg-[#f4ead8]">
          <Preview>New Courses</Preview>
          <center className="wrapper">
            <table className="main" width="100%">
              {/* HEADER */}
              <tr>
                <td></td>
              </tr>
              {/* SECTIONS */}
              <tr>
                <td className="border-0 border-b border-solid border-black">
                  <Container className="two-columns w-full max-w-[600px] text-[0px] text-center sm:text-left">
                    <Container className="column-padding h-full inline-block max-w-[299px] align-top p-6 sm:py-14">
                      <Container className="w-full max-w-full mx-auto">
                        <Text className="font-oswald uppercase text-lg m-0 mb-3">
                          Fauget
                        </Text>
                        <h1 className="font-inter-bold uppercase text-5xl leading-none m-0 mb-4">
                          New Course
                        </h1>
                        <Text className="text-lg uppercase leading-none m-0 mb-5 max-w-[240px]">
                          The more you learn, the more you earn
                        </Text>
                        <Text className="m-0 mx-auto sm:mx-0 leading-snug mb-8 max-w-[160px]">
                          Join the online course lesson and get 40 lessons on
                          how to be a successful creator.
                        </Text>
                        <Button className="uppercase py-3 px-4 sm:px-6 bg-[#624141] inline-block w-auto text-white text-sm sm:text-lg font-inter-bold cursor-pointer">
                          Join Now
                        </Button>
                      </Container>
                    </Container>
                    <Container className="bg-black w-px max-w-full h-[482px] m-0 hidden sm:inline-block" />
                    <Container className="column-padding h-full inline-block max-w-[299px] align-top p-6 sm:py-14">
                      <Container className="w-full max-w-full mx-auto sm:text-right">
                        <Text className="uppercase m-0 mb-6">Newsletter</Text>
                        <Img
                          src={`${clientImages}/laptop-min.png`}
                          alt="Laptop"
                          className="rounded-[64px] border border-black border-solid w-full sm:w-auto sm:h-80"
                        />
                      </Container>
                    </Container>
                  </Container>
                </td>
              </tr>
              <tr>
                <td className="border-0 border-b border-solid border-black">
                  <Container className="two-columns w-full max-w-[600px] text-[0px] text-center sm:text-left">
                    <Container className="column-padding h-full inline-block max-w-[300px] align-top p-6 sm:py-14">
                      <Container className="w-full max-w-full mx-auto">
                        <Img
                          src={`${clientImages}/woman-min.png`}
                          alt="Laptop"
                          className="w-full max-w-[132px] h-auto sm:h-60 sm:w-auto border border-solid border-black rounded-3xl mr-3 inline-block"
                        />
                        <Img
                          src={`${clientImages}/pamaypay-min.png`}
                          alt="Laptop"
                          className="w-full max-w-[104px] h-auto sm:h-60 sm:w-auto border border-solid border-black rounded-3xl inline-block"
                        />
                      </Container>
                    </Container>
                    <Container className="column-padding h-full inline-block max-w-[300px] align-top p-6 sm:py-14">
                      <Container className="w-full max-w-full mx-auto">
                        <Text className="m-0 text-xs uppercase font-inter-bold mb-11">
                          Guest by Catherine Wilson
                        </Text>
                        <h2 className="m-0 text-3xl font-inter-bold uppercase leading-none mb-2">
                          New Podcast Is here!
                        </h2>
                        <Text className="m-0 text-base mb-8">
                          &quot;Keep that creative mind alive!&quot;
                        </Text>
                        <Button className="uppercase py-3 px-4 sm:px-6 bg-[#624141] inline-block w-auto text-white text-sm sm:text-lg font-inter-bold cursor-pointer">
                          Listen Now
                        </Button>
                      </Container>
                    </Container>
                  </Container>
                </td>
              </tr>
              <tr>
                <td className="border-0 border-b border-solid border-black">
                  <Container className="two-columns w-full max-w-[600px] text-[0px] text-center sm:text-left">
                    <Container className="column-padding h-full inline-block w-full max-w-[430px] align-middle p-6">
                      <Container className="w-full max-w-full mx-auto">
                        <h3 className="font-inter-bold text-2xl uppercase m-0">
                          This week&apos;s episode
                        </h3>
                        <Text className="uppercase m-0 leading-snug">
                          &quot;What is your biggest inspiration ?&quot; Eps.19
                        </Text>
                      </Container>
                    </Container>
                    <Container className="column-padding h-full inline-block w-full max-w-[170px] align-middle p-6 text-center sm:text-right">
                      <Container className="w-full max-w-full mx-auto">
                        <Button className="uppercase py-3 px-4 bg-black inline-block w-auto text-white text-sm sm:text-sm font-inter-bold cursor-pointer mx-auto">
                          Listen Now
                        </Button>
                      </Container>
                    </Container>
                  </Container>
                </td>
              </tr>
              {/* FOOTER */}
              <tr>
                <td></td>
              </tr>
            </table>
          </center>
        </Body>
      </Html>
    </Tailwind>
  );
};
export default Page1Again;
