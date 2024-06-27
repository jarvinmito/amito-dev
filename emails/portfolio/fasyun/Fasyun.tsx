import { Button, Container, Img, Text } from "@react-email/components";
import { LayoutTemplate } from "./layout";
import { clientFolder } from "./constants";

interface FasyunProps {
  customerName?: string;
}

const Fasyun = ({ customerName }: FasyunProps) => {
  return (
    <LayoutTemplate previewText="Exclusive Sale Alert!">
      <Img
        src={`${clientFolder}/images/banner-min.png`}
        alt="Fasyun"
        width="100%"
        className="rounded-t-lg"
      />
      <Container className="bg-[#fbf0de] rounded-b-lg">
        <Container className="p-9 text-center">
          <Text className="text-[36px] leading-[40px] font-bodoni">
            Exclusive Sale Alert! Save Big with Our Email Newsletter
          </Text>
          <Text className="text-lg">Hello {customerName},</Text>
          <Text className="text-lg">
            We hope this message finds you well. As a valued member of our
            community, we&apos;re excited to bring you an exclusive opportunity
            to save big on your favorite products/services through our email
            newsletter.
          </Text>
          <Button className="uppercase bg-[#e9c09f] px-6 py-3 rounded-full text-white font-bold text-sm">
            Shop now
          </Button>
        </Container>
      </Container>
    </LayoutTemplate>
  );
};

export default Fasyun;
