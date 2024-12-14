import { Flex, Group, Text, ThemeIcon, rem } from "@mantine/core";
import { ISpendingItem } from "../lib/store/app";
import { IconRocket } from "@tabler/icons-react";
import { formatNum } from "@/app/lib/utils/formatters";

export interface ISpendingItemProps extends ISpendingItem {
  onClick?: () => void;
}

const SpendingItem = ({
  onClick = () => {},
  ...spending
}: ISpendingItemProps) => {
  return (
    <Flex
      justify="flex-start"
      align="center"
      direction="row"
      wrap="nowrap"
      gap="lg"
      py="xs"
      px="sm"
      className="hover:bg-lime-950 rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <ThemeIcon size={36} radius="xl" variant="light">
        <IconRocket style={{ width: rem(18), height: rem(18) }} />
      </ThemeIcon>
      <Group justify="space-between" gap="lg" w="100%">
        <Text c="dimmed">{spending.text}</Text>
        <Text c="dimmed">{formatNum(spending.amount)}</Text>
      </Group>
    </Flex>
  );
};

export default SpendingItem;
