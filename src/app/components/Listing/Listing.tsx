import { List, Text, ThemeIcon, rem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export interface ListingItem {
  title: string;
  description: string;
  icon?: string;
}
export interface ListingProps {
  list: ListingItem[];
}

const Listing = ({ list }: ListingProps) => (
  <List
    spacing="lg"
    icon={
      <ThemeIcon radius="xl" size="md" variant="light" color="black">
        <IconCheck style={{ width: rem(16), height: rem(16) }} />
      </ThemeIcon>
    }
  >
    {list.map((item, itemIndex) => (
      <List.Item key={`offer-${itemIndex}`}>
        <Text size="sm">
          <Text fw={700} component="span">
            {item.title}
          </Text>
          : {item.description}
        </Text>
      </List.Item>
    ))}
  </List>
);

export default Listing;
