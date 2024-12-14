"use client";

import {
  Alert,
  Button,
  Group,
  NumberInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import useSpendingListStore, { ISpendingItem } from "../lib/store/app";
import { useEffect, useState } from "react";
import { formatNum } from "@/app/lib/utils/formatters";

export const DEFAULT_SPENDING = {
  text: "",
  amount: 0,
  spentAt: new Date(),
};

export interface ISpendingFormProps {
  editMode?: boolean;
  item?: ISpendingItem;
  onSave?: () => void;
  onCancel?: () => void;
}

const SpendingForm = ({
  editMode = false,
  item = undefined,
  onCancel = () => {},
  onSave = () => {},
}: ISpendingFormProps) => {
  const { updateListItem, addToList, removeListItem } = useSpendingListStore();
  const [spending, setSpending] = useState<ISpendingItem>(
    item || DEFAULT_SPENDING
  );

  const [disabled, setDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleAddSpending = () => {
    setSubmitting(true);

    if (editMode) {
      updateListItem(spending);
    } else {
      addToList(spending);
    }

    setTimeout(() => {
      handleResetSpending();
      // Trigger success event for this
      onSave?.();
    }, 600);
  };

  const handleCancel = () => {
    handleResetSpending();
    onCancel?.();
  };

  const handleResetSpending = () => {
    setSubmitting(true);
    setSpending(DEFAULT_SPENDING);
    setSubmitting(false);
  };

  const handleRemove = (id: string) => {
    setSubmitting(true);
    removeListItem(id);

    setTimeout(() => {
      handleResetSpending();
      onSave?.();
    }, 600);
  };

  useEffect(() => {
    const { text, amount } = spending;
    setDisabled(!Boolean(text && +amount));
  }, [spending]);

  useEffect(() => {
    setSpending(item || DEFAULT_SPENDING);
  }, [item]);

  return (
    <Stack gap="lg" className="sticky lg:top-36" py="sm">
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
        onChange={(value) => setSpending({ ...spending, amount: +value })}
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
        onChange={(value) => setSpending({ ...spending, spentAt: value })}
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
              onClick={handleCancel}
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
      <Alert variant="light" radius="lg" color="yellow" title="Using this app">
        Does not collect or store any data. All the spending data that I put
        here is securely stored on my device. If I uninstall this app or clear
        its cache, all my spending data will be permanently deleted from my
        device.
      </Alert>
    </Stack>
  );
};

export default SpendingForm;
