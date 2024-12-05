import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateRandomString } from "@/lib/utils/formatters";

export interface SpendingItem {
  id?: string; // Auto generated random id
  text: string; // What or where the money is spent
  amount: number; // Amount of money spent
  createdAt?: Date;
  updatedAt?: Date;
}

interface SpendingState {
  spendings: SpendingItem[];

  addToList: (item: SpendingItem) => void;
  updateListItem: (item: SpendingItem) => void;
  removeListItem: (id: string) => void;
  resetList: () => void;

  getTotalSpending: () => number;
}

const useSpendingListStore = create<SpendingState>()(
  persist(
    (set, get) => ({
      spendings: [],

      // Add an item to the bucket list by appending the new object into the existing array
      // TODO: find a way to add the TAG there before going to this function
      addToList: (item: SpendingItem) =>
        set(() => ({
          spendings: [
            ...get().spendings,
            {
              id: generateRandomString(),
              ...item,
              createdAt: new Date(),
            },
          ],
        })),

      // Update an item inside the bucket list by looping through all the items and checking
      // based on the the item's id
      updateListItem: (item: SpendingItem) =>
        set((state: SpendingState) => ({
          spendings: [
            ...state.spendings.map((s) => {
              if (s.id === item.id) {
                return {
                  ...s,
                  ...item,
                  updatedAt: new Date(),
                };
              }
              return s;
            }),
          ],
        })),

      // Remove an item from the bucket list
      // by filtering out the selected item based on id
      // reassigning the new bucket list to the filtered one.
      removeListItem: (id: string) =>
        set((state: SpendingState) => ({
          spendings: [...state.spendings.filter((s) => s.id !== id)],
        })),

      // Reset
      resetList: () =>
        set(() => ({
          spendings: [],
        })),

      // State getters
      getTotalSpending: () =>
        get().spendings.reduce(
          (total, spendingItem) => spendingItem.amount + total,
          0
        ),
    }),
    {
      name: "spending-list-store",
      partialize: (state) => ({
        spendings: state.spendings,
      }),
    }
  )
);

export default useSpendingListStore;
