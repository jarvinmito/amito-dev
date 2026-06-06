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
      className="px-3 py-2 hover:bg-lime-950 rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <ThemeIcon radius="xl" variant="light" className="h-7 w-7 lg:h-9 lg:w-9">
        <IconRocket style={{ width: rem(18), height: rem(18) }} />
      </ThemeIcon>
      <Group justify="space-between" gap="lg" w="100%">
        <Text c="dimmed" className="text-sm lg:text-lg">
          {spending.text}
        </Text>
        <Text c="dimmed" className="text-sm lg:text-lg">
          {formatNum(spending.amount)}
        </Text>
      </Group>
    </Flex>
  );
};

export default SpendingItem;
