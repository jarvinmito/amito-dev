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
import { useDisclosure } from "@mantine/hooks";
import { usePWAContext } from "../context/pwa.context";

const TrackMySpending = () => {
  const {
    date,
    updateDate,
    getSpendings,
    resetList,
    getTotalSpending,
    getCurrentBudget,
    updateBudget,
  } = useSpendingListStore();

  const { deferredPrompt, handleInstallation } = usePWAContext();

  const totalSpending = getTotalSpending();
  const spendings = getSpendings();
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
            <GridCol span={{ base: 12, lg: 8 }} p={{ base: 0, lg: "xl" }}>
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
            <GridCol
              span={{ base: 12, lg: 4 }}
              p={{ base: 0, lg: "xl" }}
              visibleFrom="lg"
            >
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
