import { Flex, Text } from "@mantine/core";
import { IGroupedSpending, ISpendingItem } from "../lib/store/app";
import SpendingItem from "./SpendingItem";
import { Fragment } from "react";
import { formatNum } from "@/app/lib/utils/formatters";

export interface ISpendingListProps {
  spendings: IGroupedSpending[];
  onItemClick?: (item: ISpendingItem) => void;
}

const SpendingList = ({ spendings, onItemClick }: ISpendingListProps) => (
  <>
    {spendings.length ? (
      spendings.map((spending, index) => (
        <Fragment key={`spending-group-${index}`}>
          <Flex
            className="bg-white dark:bg-black sticky top-28 z-10 flex flex-row items-center justify-between"
            p="sm"
          >
            <Text fw="bold" tt="uppercase">
              {spending.title}
            </Text>
            <Text fw="bold" tt="uppercase">
              {formatNum(spending.total)}
            </Text>
          </Flex>
          {spending.spendings.length
            ? spending.spendings.map((s, i) => (
                <SpendingItem
                  {...s}
                  key={`spending-item-${i}-${s.id}`}
                  onClick={() => onItemClick?.(s)}
                />
              ))
            : null}
        </Fragment>
      ))
    ) : (
      <Text p="sm">Empty</Text>
    )}
  </>
);

export default SpendingList;
