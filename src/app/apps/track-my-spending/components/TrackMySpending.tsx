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
import { formatNum } from "@/lib/utils/formatters";
import useSpendingListStore, { SpendingItem } from "../lib/store/app";
import { useState } from "react";
import { IconRefresh, IconRocket } from "@tabler/icons-react";

const DEFAULT_SPENDING = {
  text: "",
  amount: 0,
};

const TrackMySpending = () => {
  const { spendings, addToList, updateListItem, resetList, getTotalSpending } =
    useSpendingListStore();
  const totalSpending = getTotalSpending();

  const [spending, setSpending] = useState<SpendingItem>(DEFAULT_SPENDING);

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleAddSpending = () => {
    setSubmitting(true);

    if (editMode) {
      updateListItem(spending);
    } else {
      addToList(spending);
    }

    setTimeout(() => {
      handleResetSpending();
    }, 600);
  };

  const handleResetSpending = () => {
    setSubmitting(true);
    setSpending(DEFAULT_SPENDING);
    setSubmitting(false);
    setEditMode(false);
  };

  const handleEditing = (item: SpendingItem) => {
    setEditMode(true);
    setSpending(item);
  };

  return (
    <Container size="lg">
      <Stack gap="lg">
        <Flex
          direction="row"
          wrap="nowrap"
          justify="space-between"
          align="center"
          gap="lg"
        >
          <Text component="h1" className="text-5xl font-bold">
            Track My Spending
          </Text>
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
        <Text c="dimmed" className="text-2xl font-bold" mb="xl">
          Total: {formatNum(totalSpending)}
        </Text>
        <Grid gutter={rem(72)}>
          <GridCol span={8}>
            {/* List everything here */}
            {spendings.length ? (
              spendings.map((spending, index) => (
                <Flex
                  key={`spending-${spending.id}-${index}`}
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="nowrap"
                  gap="lg"
                  px="sm"
                  className="hover:bg-lime-900 rounded-2xl cursor-pointer"
                  onClick={() => handleEditing(spending)}
                >
                  <ThemeIcon size={44} radius="xl" variant="light">
                    <IconRocket style={{ width: rem(28), height: rem(28) }} />
                  </ThemeIcon>
                  <Group justify="space-between" gap="lg" w="100%">
                    <Text size="lg">{spending.text}</Text>
                    <Text size="lg">{formatNum(spending.amount)}</Text>
                  </Group>
                </Flex>
              ))
            ) : (
              <Text>Empty</Text>
            )}
          </GridCol>
          <GridCol span={4}>
            {/* Use form here */}
            <Stack gap="lg" className="sticky top-0">
              <TextInput
                label={
                  <Text component="span" lh="sm" fw="bold">
                    Spent on
                  </Text>
                }
                description={
                  <Text component="span" size="xs" c="dimmed">
                    Where did you spend your money?
                  </Text>
                }
                size="lg"
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
                  <Text component="span" size="xs" c="dimmed">
                    How much did you spend on this?
                  </Text>
                }
                size="lg"
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
              <Group>
                <Button
                  fullWidth
                  size="lg"
                  radius="lg"
                  loading={submitting}
                  onClick={handleAddSpending}
                >
                  Save
                </Button>
                {editMode ? (
                  <Button
                    fullWidth
                    size="lg"
                    radius="lg"
                    variant="light"
                    color="red.6"
                    loading={submitting}
                    onClick={handleResetSpending}
                  >
                    Cancel
                  </Button>
                ) : null}
              </Group>
              <Alert
                variant="light"
                radius="lg"
                color="yellow"
                title="Your usage of this app"
              >
                This tool does not collect data and all your spending data are
                stored on your device. Uninstalling, clearing caches from your
                device will remove spending data.
              </Alert>
            </Stack>
          </GridCol>
        </Grid>
      </Stack>
    </Container>
  );
};

export default TrackMySpending;
