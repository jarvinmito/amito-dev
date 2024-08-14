import { Container, TextInput } from "@mantine/core";
import BrandTitle from "@/components/Branding/BrandTitle";

export default function BucketListPage() {
  return (
    <Container mx="auto">
      <BrandTitle text="Bucket List" />
      <TextInput
        variant="unstyled"
        size="lg"
        radius="lg"
        placeholder="ex. Watch Northern Lights"
      />
    </Container>
  );
}
