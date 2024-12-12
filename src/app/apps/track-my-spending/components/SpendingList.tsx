import { Flex, Text } from "@mantine/core";
import { ISpendingItem } from "../lib/store/app";
import { format, isSameDay, isToday, isTomorrow, isYesterday } from "date-fns";
import SpendingItem from "./SpendingItem";
import { Fragment } from "react";

export interface ISpendingListProps {
  spendings: ISpendingItem[];
  onItemClick?: (item: ISpendingItem) => void;
}

const SpendingList = ({ spendings, onItemClick }: ISpendingListProps) => {
  const renderDate = (index: number) => {
    const prev = spendings[index - 1];
    const curr = spendings[index];
    const spending = curr;

    // Render the date only if
    // - there is no previous record -- means current record is the first record
    // - there is a previous and the date is not the same as the current
    if (
      !prev ||
      (prev && !isSameDay(new Date(prev.spentAt!), new Date(curr.spentAt!)))
    ) {
      return (
        <Flex className="bg-white dark:bg-black sticky top-28 z-10" p="sm">
          <Text fw="bold" tt="uppercase">
            {isToday(new Date(spending.spentAt!))
              ? "Today"
              : isTomorrow(new Date(spending.spentAt!))
              ? "Tomorrow"
              : isYesterday(new Date(spending.spentAt!))
              ? "Yesterday"
              : format(new Date(spending.spentAt!), "MMM d yyyy")}
          </Text>
        </Flex>
      );
    }

    return null;
  };

  return (
    <>
      {spendings.length ? (
        spendings.map((spending, index) => (
          <Fragment key={`spending-item-${index}-${spending.id}`}>
            {renderDate(index)}
            <SpendingItem
              {...spending}
              index={index}
              onClick={() => onItemClick?.(spending)}
            />
          </Fragment>
        ))
      ) : (
        <Text p="sm">Empty</Text>
      )}
    </>
  );
};

export default SpendingList;
