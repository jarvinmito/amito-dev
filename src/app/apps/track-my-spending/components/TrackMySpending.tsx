"use client";

import {
  ActionIcon,
  Box,
  Button,
  Center,
  Container,
  Drawer,
  Flex,
  Grid,
  GridCol,
  Group,
  NumberInput,
  RingProgress,
  Stack,
  Text,
  Tooltip,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { addMonths, format, isSameMonth, subMonths } from "date-fns";
import { formatNum } from "@/lib/utils/formatters";
import useSpendingListStore, {
  BudgetDateItem,
  ISpendingItem,
} from "../lib/store/app";
import {
  IconApps,
  IconArrowBack,
  IconArrowForwardUp,
  IconPencilDollar,
  IconPlus,
  IconTrashOff,
} from "@tabler/icons-react";
import SpendingForm, { DEFAULT_SPENDING } from "./SpendingForm";
import SpendingList from "./SpendingList";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { usePWAContext } from "../context/pwa.context";

const TrackMySpending = () => {
  const {
    date,
    updateDate,
    getGroupedSpendings,
    resetList,
    getTotalSpending,
    getCurrentBudget,
    updateBudget,
  } = useSpendingListStore();

  const { deferredPrompt, handleInstallation } = usePWAContext();

  const totalSpending = getTotalSpending();
  const spendings = getGroupedSpendings();
  const budget = getCurrentBudget();

  const [remainingBudget, setRemainingBudget] = useState(
    (budget?.amount || 0) - totalSpending
  );

  const [percentSpent, setPercentSpent] = useState(
    (totalSpending / (budget?.amount || 0)) * 100
  );

  const [spending, setSpending] = useState<ISpendingItem>(DEFAULT_SPENDING);

  const [formBudget, setFormBudget] = useState<BudgetDateItem | undefined>(
    budget
  );

  const [submittingBudget, setSubmittingBudget] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editBudget, setEditBudget] = useState<boolean>(false);

  // Drawer features
  const [opened, { open, close }] = useDisclosure(false);

  // Media query
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleEditing = (item: ISpendingItem) => {
    console.log("EDITING ", item);
    setEditMode(true);
    setSpending({
      ...item,
      spentAt: new Date(item.spentAt!),
      createdAt: new Date(item.createdAt!),
      updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
    });
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

  useEffect(() => {
    setRemainingBudget((budget?.amount || 0) - totalSpending);
    setPercentSpent((totalSpending / (budget?.amount || 0)) * 100);
  }, [totalSpending, budget]);

  useEffect(() => {
    setFormBudget(budget);
  }, [date]);

  return (
    <>
      <Container size="lg">
        <Stack gap="lg">
          <Flex
            direction="row"
            wrap="nowrap"
            justify="space-between"
            align="center"
            gap="lg"
            p="sm"
            className="sticky top-0 z-10 bg-white dark:bg-black h-28 lg:h-36"
          >
            <div className="grow">
              <Group align="center" gap="xs" mb="xs">
                <Text
                  component="h1"
                  className="text-sm lg:text-2xl font-bold leading-normal"
                >
                  Track My Spending
                </Text>
                <Flex gap="xs" align="center">
                  <Text
                    c="dimmed"
                    component="span"
                    className="text-xs lg:text-lg"
                  >
                    &mdash;
                  </Text>
                  <Flex align="center" gap={4}>
                    <Tooltip label="Previous Month">
                      <ActionIcon
                        variant="light"
                        radius="xl"
                        className="h-5 w-5 lg:h-9 lg:w-9"
                        onClick={handlePreviousMonth}
                      >
                        <IconArrowBack className="h-4 w-4 lg:h-6 lg:w-6" />
                      </ActionIcon>
                    </Tooltip>
                    {!isSameMonth(date, addMonths(new Date(), 1)) ? (
                      <Tooltip label="Next Month">
                        <ActionIcon
                          variant="light"
                          radius="xl"
                          className="h-5 w-5 lg:h-9 lg:w-9"
                          onClick={handleNextMonth}
                        >
                          <IconArrowForwardUp className="h-4 w-4 lg:h-6 lg:w-6" />
                        </ActionIcon>
                      </Tooltip>
                    ) : null}
                  </Flex>
                  <Text
                    c="dimmed"
                    component="span"
                    className="text-xs lg:text-lg"
                  >
                    {format(new Date(date), "MMMM yyyy")}
                  </Text>
                </Flex>
              </Group>
              <Grid gutter="lg">
                <GridCol span={4}>
                  <Stack gap={0}>
                    <Text
                      c="lime.5"
                      className="text-lg lg:text-4xl font-bold"
                      lh={1}
                    >
                      {formatNum(totalSpending)}
                    </Text>
                    <Text className="text-xs lg:text-lg" c="dimmed">
                      Spent
                    </Text>
                  </Stack>
                </GridCol>
                {budget ? (
                  <>
                    <GridCol span={4}>
                      <Stack gap={0}>
                        <Text
                          c={getColorByPercentage(100 - percentSpent)}
                          className="text-lg lg:text-4xl font-bold"
                          lh={1}
                        >
                          {formatNum(remainingBudget)}
                        </Text>
                        <Text className="text-xs lg:text-lg" c="dimmed">
                          Remaining
                          <span className="invisible lg:visible"> Budget</span>
                        </Text>
                      </Stack>
                    </GridCol>
                    <GridCol span={4}>
                      <Stack gap={0}>
                        <Text
                          c="lime.5"
                          className="text-lg lg:text-4xl font-bold"
                          lh={1}
                        >
                          {formatNum(budget.amount)}
                        </Text>
                        <Text className="text-xs lg:text-lg" c="dimmed">
                          Budget
                        </Text>
                      </Stack>
                    </GridCol>
                  </>
                ) : null}
              </Grid>
            </div>
            <Flex gap={isDesktop ? "xs" : 0} align="center">
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
                          radius="xl"
                          variant="light"
                          className="h-8 w-8 lg:h-12 lg:w-12"
                          onClick={() => setEditBudget(true)}
                        >
                          <IconPencilDollar className="w-5 h-5 lg:w-8 lg:h-8" />
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
                  size={isDesktop ? 80 : 56}
                  thickness={4}
                  roundCaps
                />
              )}
              <Tooltip label="Clear Spendings">
                <ActionIcon
                  radius="xl"
                  variant="light"
                  opacity={0.8}
                  color="red.6"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                  onClick={resetList}
                >
                  <IconTrashOff className="w-5 h-5 lg:w-8 lg:h-8" />
                </ActionIcon>
              </Tooltip>
            </Flex>
          </Flex>
          <Grid gutter={rem(72)}>
            <GridCol span={{ base: 12, lg: 8 }} className="py-0 lg:py-10">
              {/* List everything here */}
              <Box visibleFrom="lg">
                <SpendingList
                  spendings={spendings}
                  onItemClick={handleEditing}
                />
              </Box>
              <Box hiddenFrom="lg">
                <SpendingList
                  spendings={spendings}
                  onItemClick={(item: ISpendingItem) => {
                    handleEditing(item);
                    open();
                  }}
                />
              </Box>
            </GridCol>
            <GridCol span={{ base: 12, lg: 4 }} visibleFrom="lg">
              <SpendingForm
                editMode={editMode}
                item={spending}
                onSave={() => setEditMode(false)}
                onCancel={() => setEditMode(false)}
              />
            </GridCol>
          </Grid>
        </Stack>
      </Container>
      <Drawer
        position="bottom"
        size="80%"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <SpendingForm
          editMode={editMode}
          item={spending}
          onSave={() => {
            setEditMode(false);
            close();
          }}
          onCancel={() => {
            setEditMode(false);
            close();
          }}
        />
      </Drawer>
      <Box pos="fixed" bottom={36} right={36} className="z-20">
        <Tooltip label="Add Spending">
          <ActionIcon size={72} radius="xl" onClick={open}>
            <IconPlus style={{ width: rem(48), height: rem(48) }} />
          </ActionIcon>
        </Tooltip>
      </Box>

      <Box pos="fixed" bottom={144} right={36} className="z-20">
        {deferredPrompt && (
          <Tooltip label="Download and Install">
            <ActionIcon
              variant="subtle"
              size={72}
              radius="xl"
              onClick={handleInstallation}
            >
              <IconApps style={{ width: rem(48), height: rem(48) }} />
            </ActionIcon>
          </Tooltip>
        )}
      </Box>
    </>
  );
};

export default TrackMySpending;
