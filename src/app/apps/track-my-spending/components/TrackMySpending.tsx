"use client";

import {
  ActionIcon,
  Alert,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridCol,
  Group,
  NumberInput,
  RingProgress,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Tooltip,
  rem,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import {
  addMonths,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  isTomorrow,
  isYesterday,
  subMonths,
} from "date-fns";
import { formatNum } from "@/lib/utils/formatters";
import useSpendingListStore, {
  BudgetDateItem,
  SpendingItem,
} from "../lib/store/app";
import {
  IconArrowBack,
  IconArrowForwardUp,
  IconCash,
  IconPencilDollar,
  IconRefresh,
  IconRocket,
  IconTrashOff,
} from "@tabler/icons-react";

const DEFAULT_SPENDING = {
  text: "",
  amount: 0,
  spentAt: new Date(),
};

const TrackMySpending = () => {
  const {
    date,
    updateDate,
    getSpendings,
    addToList,
    updateListItem,
    removeListItem,
    resetList,
    getTotalSpending,
    getCurrentBudget,
    updateBudget,
  } = useSpendingListStore();

  const totalSpending = getTotalSpending();
  const spendings = getSpendings();
  const budget = getCurrentBudget();

  const [remainingBudget, setRemainingBudget] = useState(
    (budget?.amount || 0) - totalSpending
  );

  const [percentSpent, setPercentSpent] = useState(
    (totalSpending / (budget?.amount || 0)) * 100
  );

  const [spending, setSpending] = useState<SpendingItem>(DEFAULT_SPENDING);
  const [formBudget, setFormBudget] = useState<BudgetDateItem | undefined>(
    budget
  );
  const [disabled, setDisabled] = useState<boolean>(false);

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittingBudget, setSubmittingBudget] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editBudget, setEditBudget] = useState<boolean>(false);

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

  const handleSaveBudget = () => {
    setSubmittingBudget(true);
    if (formBudget) {
      updateBudget(formBudget.amount);
    }

    setTimeout(handleCancelBudget, 600);
  };

  const handleCancelBudget = () => {
    setSubmittingBudget(false);
    setFormBudget(budget);
    setEditBudget(false);
  };

  const handleChangeMonth = (direction: "next" | "previous") => {
    updateDate(
      direction === "next"
        ? addMonths(new Date(date), 1)
        : subMonths(new Date(date), 1)
    );
  };

  const handleNextMonth = () => {
    handleChangeMonth("next");
  };

  const handlePreviousMonth = () => {
    handleChangeMonth("previous");
  };

  const getColorByPercentage = (percent: number) => {
    if (percent <= 15) return "red.6";
    else if (percent <= 30) return "orange.5";
    else if (percent <= 45) return "yellow.5";
    else if (percent <= 60) return "lime.5";
    else if (percent <= 75) return "teal.5";
    else return "blue.5";
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

  useEffect(() => {
    setRemainingBudget((budget?.amount || 0) - totalSpending);
    setPercentSpent((totalSpending / (budget?.amount || 0)) * 100);
  }, [totalSpending, budget]);

  useEffect(() => {
    setFormBudget(budget);
  }, [date]);

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
          <div className="grow">
            <Group align="center" gap="xs">
              <Text component="h1" className="text-2xl font-bold">
                Track My Spending
              </Text>
              <Flex gap="xs" align="center">
                <Text c="dimmed" component="span">
                  &mdash;
                </Text>
                <Flex align="center" gap={4}>
                  <Tooltip label="Previous Month">
                    <ActionIcon
                      variant="light"
                      radius="xl"
                      size="lg"
                      onClick={handlePreviousMonth}
                    >
                      <IconArrowBack
                        style={{ width: rem(24), height: rem(24) }}
                      />
                    </ActionIcon>
                  </Tooltip>
                  {!isSameMonth(date, addMonths(new Date(), 1)) ? (
                    <Tooltip label="Next Month">
                      <ActionIcon
                        variant="light"
                        radius="xl"
                        size="lg"
                        onClick={handleNextMonth}
                      >
                        <IconArrowForwardUp
                          style={{ width: rem(24), height: rem(24) }}
                        />
                      </ActionIcon>
                    </Tooltip>
                  ) : null}
                </Flex>
                <Text c="dimmed" component="span">
                  {format(new Date(date), "MMMM yyyy")}
                </Text>
              </Flex>
            </Group>
            <Flex gap="lg" align="center" justify="space-between" w="100%">
              <Stack gap={0}>
                <Text c="lime.5" className="text-4xl font-bold" lh={1}>
                  {formatNum(totalSpending)}
                </Text>
                <Text size="sm" c="dimmed">
                  Spent
                </Text>
              </Stack>
              {budget ? (
                <>
                  <Stack gap={0}>
                    <Text
                      c={getColorByPercentage(100 - percentSpent)}
                      className="text-4xl font-bold"
                      lh={1}
                    >
                      {formatNum(remainingBudget)}
                    </Text>
                    <Text size="sm" c="dimmed">
                      Remaining Budget
                    </Text>
                  </Stack>
                  {!editBudget ? (
                    <Stack gap={0}>
                      <Text c="lime.5" className="text-4xl font-bold" lh={1}>
                        {formatNum(budget.amount)}
                      </Text>
                      <Text size="sm" c="dimmed">
                        Budget
                      </Text>
                    </Stack>
                  ) : null}
                </>
              ) : null}
            </Flex>
          </div>
          <Flex gap="xs" align="center">
            {/* BUdget Input */}
            {editBudget ? (
              <Stack gap="xs">
                <NumberInput
                  radius="lg"
                  size="xs"
                  prefix="₱"
                  placeholder={formatNum(1000)}
                  thousandSeparator=","
                  min={0}
                  value={formBudget?.amount || 0}
                  onChange={(value) =>
                    setFormBudget({
                      date: new Date(date),
                      amount: +value,
                    })
                  }
                />
                <Flex wrap="nowrap" gap="xs">
                  <Button
                    size="xs"
                    radius="lg"
                    loading={submittingBudget}
                    variant="light"
                    color="red.6"
                    onClick={handleCancelBudget}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="xs"
                    radius="lg"
                    loading={submittingBudget}
                    onClick={handleSaveBudget}
                  >
                    Save
                  </Button>
                </Flex>
              </Stack>
            ) : (
              <RingProgress
                label={
                  <Center>
                    <Tooltip label="Edit Budget">
                      <ActionIcon
                        size={48}
                        radius="xl"
                        variant="light"
                        onClick={() => setEditBudget(true)}
                      >
                        <IconPencilDollar
                          style={{ width: rem(32), height: rem(32) }}
                        />
                      </ActionIcon>
                    </Tooltip>
                  </Center>
                }
                sections={[
                  {
                    value: percentSpent,
                    color: getColorByPercentage(100 - percentSpent),
                  },
                ]}
                size={80}
                thickness={4}
                roundCaps
              />
            )}
            <Tooltip label="Clear Spendings">
              <ActionIcon
                size={48}
                radius="xl"
                variant="light"
                opacity={0.8}
                color="red.6"
                onClick={resetList}
              >
                <IconTrashOff style={{ width: rem(32), height: rem(32) }} />
              </ActionIcon>
            </Tooltip>
          </Flex>
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
                title="Using this app"
              >
                Does not collect or store any data. All the spending data that I
                put here is securely stored on my device. If I uninstall this
                app or clear its cache, all my spending data will be permanently
                deleted from my device.
              </Alert>
            </Stack>
          </GridCol>
        </Grid>
      </Stack>
    </Container>
  );
};

export default TrackMySpending;
