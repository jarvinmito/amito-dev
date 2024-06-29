import {
  Button,
  Column,
  Container,
  Img,
  Row,
  Text,
} from "@react-email/components";
import { TemplateLayout } from "./layout";
import { clientImages } from "./constants";

const Fauget2 = () => {
  return (
    <TemplateLayout previewText="Free course online">
      {/* SECTIONS STARTS WITH TRs */}
      <tr>
        <td>
          <Container className="two-columns w-full max-w-[600px] text-[0px] text-center sm:text-left">
            <Container className="w-full column-padding h-full inline-block max-w-[486px] align-top pt-6 px-8 sm:pb-6 sm:py-14">
              <Container className="w-full max-w-full mx-auto">
                <h1 className="font-inter-bold uppercase text-3xl sm:text-5xl leading-none m-0">
                  Free online course
                </h1>
              </Container>
            </Container>
            <Container className="w-full column-padding h-full inline-block max-w-[114px] align-top pt-2 px-8 sm:py-14">
              <Container className="w-full max-w-full mx-auto">
                <Text className="font-oswald uppercase text-lg m-0 text-right">
                  Fauget
                </Text>
              </Container>
            </Container>
          </Container>
        </td>
      </tr>
      <tr>
        <td>
          <Container
            className="w-full max-w-[600px] text-center sm:text-left px-8 pt-2 pb-6"
            dir="ltr"
          >
            <Text className="text-lg m-0">
              Building social media strategies
            </Text>
          </Container>
        </td>
      </tr>
      <tr>
        <td>
          <Container
            className="w-full max-w-[600px] text-center sm:text-left px-8"
            dir="ltr"
          >
            <Img
              src={`${clientImages}/working-coffee-min.png`}
              alt="Working with Coffee"
              className="w-full max-w-[450px]"
            />
          </Container>
        </td>
      </tr>
      <tr>
        <td>
          <Container
            className="w-full max-w-[600px] text-center sm:text-right pt-2 px-8"
            dir="ltr"
          >
            <Text className="text-xl sm:text-2xl font-inter-bold m-0">
              with Avery Davis
            </Text>
          </Container>
        </td>
      </tr>
      <tr>
        <td>
          <Container className="w-full max-w-full">
            <Container className="two-columns w-full max-w-[600px] text-[0px] text-center sm:text-left">
              <Container className="w-full column-padding h-full inline-block max-w-[300px] align-top py-6 px-8 sm:pl-10 pb-0 sm:pb-6 sm:py-14">
                <Container className="w-full max-w-full mx-auto"></Container>
                <h1 className="font-inter-bold text-2xl sm:text-3xl leading-none m-0">
                  Enroll for free Start August 18, 2024
                </h1>
                <Text className="text-lg">What will get</Text>
                <ul className="sm:list-disc list-outside p-0 sm:pl-5 mb-8 sm:text-xl text-black">
                  <li>
                    <Text className="text-base my-0.5">Certificate</Text>
                  </li>
                  <li>
                    <Text className="text-base my-0.5">40 Courses</Text>
                  </li>
                  <li>
                    <Text className="text-base my-0.5">100% online</Text>
                  </li>
                </ul>
                <Button className="uppercase py-3 px-4 sm:px-6 bg-[#473e2a] inline-block w-auto text-white text-sm sm:text-lg font-inter-bold cursor-pointer">
                  Register Now
                </Button>
                <Text className="mt-8 text-base">www.amito.dev</Text>
              </Container>
              <Container className="w-full column-padding h-full sm:inline-block max-w-[360px] sm:max-w-[300px] align-top px-0 sm:py-14">
                <Container className="w-full max-w-full mx-auto">
                  <Img
                    src={`${clientImages}/pamaypay3-min.png`}
                    alt="Last pamaypay"
                    className="w-full p-0 m-0"
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </td>
      </tr>
      <tr>
        <td className="h-12"></td>
      </tr>
    </TemplateLayout>
  );
};

export default Fauget2;
