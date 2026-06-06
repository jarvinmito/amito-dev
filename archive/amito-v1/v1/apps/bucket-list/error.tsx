"use client";

import { Button, Stack, Text } from "@mantine/core";

export default function BucketListError() {
  return (
    <Stack>
      <Text c="red">Error</Text>
      <Button>Try again</Button>
    </Stack>
  );
}
