"use client";

import {
  ActionIcon,
  Alert,
  Button,
  Container,
  Flex,
  Grid,
  GridCol,
  Group,
  NumberInput,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Tooltip,
  rem,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import { format, isSameDay, isToday, isTomorrow, isYesterday } from "date-fns";
import { formatNum } from "@/lib/utils/formatters";
import useSpendingListStore, { SpendingItem } from "../lib/store/app";
import { IconRefresh, IconRocket } from "@tabler/icons-react";

const DEFAULT_SPENDING = {
  text: "",
  amount: 0,
  spentAt: new Date(),
};

const TrackMySpending = () => {
  const {
    getSpendings,
    addToList,
    updateListItem,
    removeListItem,
    resetList,
    getTotalSpending,
  } = useSpendingListStore();

  const totalSpending = getTotalSpending();
  const spendings = getSpendings();

  const [spending, setSpending] = useState<SpendingItem>(DEFAULT_SPENDING);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleAddSpending = () => {
    setSubmitting(true);

    if (editMode) {
      updateListItem(spending);
    } else {
      addToList(spending);
    }

    setTimeout(handleResetSpending, 600);
  };

  const handleResetSpending = () => {
    setSubmitting(true);
    setSpending(DEFAULT_SPENDING);
    setSubmitting(false);
    setEditMode(false);
  };

  const handleEditing = (item: SpendingItem) => {
    setEditMode(true);
    setSpending({
      ...item,
      spentAt: new Date(item.spentAt!),
      createdAt: new Date(item.createdAt!),
      updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
    });
  };

  const handleRemove = (id: string) => {
    setSubmitting(true);
    removeListItem(id);

    setTimeout(handleResetSpending, 600);
  };

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

  useEffect(() => {
    const { text, amount } = spending;
    setDisabled(!Boolean(text && +amount));
  }, [spending]);

  return (
    <Container size="lg">
      <Stack gap="lg">
        <Flex
          direction="row"
          wrap="nowrap"
          justify="space-between"
          align="center"
          gap="lg"
          p="sm"
          className="sticky top-0 z-10 bg-white dark:bg-black h-28"
        >
          <div>
            <Group align="center" gap="xs">
              <Text component="h1" className="text-2xl font-bold">
                Track My Spending
              </Text>
              <Text c="dimmed" component="span">
                &mdash; {format(new Date(), "MMMM yyyy")}
              </Text>
            </Group>
            <Text c="lime.5" className="text-5xl font-bold">
              {formatNum(totalSpending)}
            </Text>
          </div>
          <Tooltip label="Reset Spendings">
            <ActionIcon
              size={48}
              radius="xl"
              variant="light"
              color="red.6"
              onClick={resetList}
            >
              <IconRefresh style={{ width: rem(32), height: rem(32) }} />
            </ActionIcon>
          </Tooltip>
        </Flex>
        <Grid gutter={rem(72)}>
          <GridCol span={8}>
            {/* List everything here */}
            {spendings.length ? (
              spendings.map((spending, index) => (
                <>
                  {renderDate(index)}
                  <Flex
                    key={`spending-${spending.id}-${index}`}
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="nowrap"
                    gap="lg"
                    py="xs"
                    px="sm"
                    className="hover:bg-lime-900 rounded-2xl cursor-pointer"
                    onClick={() => handleEditing(spending)}
                  >
                    <ThemeIcon size={36} radius="xl" variant="light">
                      <IconRocket style={{ width: rem(18), height: rem(18) }} />
                    </ThemeIcon>
                    <Group justify="space-between" gap="lg" w="100%">
                      <Text>{spending.text}</Text>
                      <Text>{formatNum(spending.amount)}</Text>
                    </Group>
                  </Flex>
                </>
              ))
            ) : (
              <Text p="sm">Empty</Text>
            )}
          </GridCol>
          <GridCol span={4}>
            {/* Use form here */}
            <Stack gap="lg" className="sticky top-28" py="sm">
              <TextInput
                label={
                  <Text component="span" lh="sm" fw="bold">
                    Spent on
                  </Text>
                }
                description={
                  <Text
                    component="span"
                    size="xs"
                    c="dimmed"
                    className="hidden lg:flex"
                  >
                    Where did I spent my money?
                  </Text>
                }
                radius="lg"
                placeholder="Electric Bill"
                value={spending.text}
                onChange={(e) =>
                  setSpending({ ...spending, text: e.currentTarget.value })
                }
              />
              <NumberInput
                label={
                  <Text component="span" lh="sm" fw="bold">
                    Amount
                  </Text>
                }
                description={
                  <Text
                    component="span"
                    size="xs"
                    c="dimmed"
                    className="hidden lg:flex"
                  >
                    How much did I spend on this?
                  </Text>
                }
                radius="lg"
                prefix="₱"
                placeholder={formatNum(1000)}
                thousandSeparator=","
                min={0}
                value={spending.amount}
                onChange={(value) =>
                  setSpending({ ...spending, amount: +value })
                }
              />
              <DateInput
                label={
                  <Text component="span" lh="sm" fw="bold">
                    Date
                  </Text>
                }
                description={
                  <Text
                    component="span"
                    size="xs"
                    c="dimmed"
                    className="hidden lg:flex"
                  >
                    When did I make this spending?
                  </Text>
                }
                radius="lg"
                min={0}
                value={spending.spentAt}
                onChange={(value) =>
                  setSpending({ ...spending, spentAt: value })
                }
              />
              <Group>
                <Button
                  fullWidth
                  radius="lg"
                  disabled={disabled}
                  loading={submitting}
                  onClick={handleAddSpending}
                >
                  Save
                </Button>
                {editMode ? (
                  <>
                    <Button
                      fullWidth
                      radius="lg"
                      variant="light"
                      color="red.6"
                      disabled={disabled}
                      loading={submitting}
                      onClick={handleResetSpending}
                    >
                      Cancel
                    </Button>
                    {spending.id ? (
                      <Button
                        fullWidth
                        radius="lg"
                        variant="subtle"
                        color="red.6"
                        disabled={disabled}
                        loading={submitting}
                        onClick={() => handleRemove(spending.id!)}
                      >
                        Delete
                      </Button>
                    ) : null}
                  </>
                ) : null}
              </Group>
              <Alert
                variant="light"
                radius="lg"
                color="yellow"
                title="Your usage of this app"
              >
                This tool does not collect data and all my spending data are
                stored on my device. Uninstalling, clearing caches from my
                device will remove any spending data.
              </Alert>
            </Stack>
          </GridCol>
        </Grid>
      </Stack>
    </Container>
  );
};

export default TrackMySpending;
