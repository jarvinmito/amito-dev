import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUnixTime, isSameMonth } from "date-fns";
import { generateRandomString } from "@/lib/utils/formatters";

export interface BudgetDateItem {
  date: Date; // month only
  amount: number;
}

export interface ISpendingItem {
  id?: string; // Auto generated random id
  text: string; // What or where the money is spent
  amount: number; // Amount of money spent
  spentAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SpendingState {
  // Budget record
  budgets: BudgetDateItem[];
  updateBudget: (budget: number) => void;

  // All spending record
  spendings: ISpendingItem[];

  // Date view range
  date: Date;
  updateDate: (date: Date) => void;

  // CRUD operations
  addToList: (item: ISpendingItem) => void;
  updateListItem: (item: ISpendingItem) => void;
  removeListItem: (id: string) => void;
  resetList: () => void;

  // Getters
  getSpendings: () => ISpendingItem[];
  getTotalSpending: () => number;
  getCurrentBudget: () => BudgetDateItem | undefined;
}

const useSpendingListStore = create<SpendingState>()(
  persist(
    (set, get) => ({
      budgets: [],
      updateBudget: (amount: number) =>
        set((state: SpendingState) => {
          // Check if budget on a date exists
          const { budgets, date } = state;
          const thereIsABudget = budgets.find((budget) =>
            isSameMonth(new Date(budget.date), new Date(date))
          );
          // If there is, update it
          if (thereIsABudget) {
            return {
              budgets: budgets.map((b) => {
                if (isSameMonth(new Date(b.date), new Date(date))) {
                  return {
                    ...b,
                    amount,
                  };
                }
                return b;
              }),
            };
          }
          // If not, add it
          return { budgets: [...get().budgets, { date, amount }] };
        }),

      spendings: [],

      date: new Date(),
      updateDate: (date: Date) => set(() => ({ date })),

      // Add an item to the bucket list by appending the new object into the existing array
      // TODO: find a way to add the TAG there before going to this function
      addToList: (item: ISpendingItem) =>
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
      updateListItem: (item: ISpendingItem) =>
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
      // Get spendings and sort it based on date spent latest to oldest
      getSpendings: () =>
        get()
          // Filter out based on the current selected date -- month
          .spendings.filter((spend) =>
            isSameMonth(new Date(spend.spentAt!), new Date(get().date))
          )
          // Sort by latest -> oldest date
          .sort(
            (a, b) =>
              getUnixTime(new Date(b.spentAt!)) -
              getUnixTime(new Date(a.spentAt!))
          ),

      getTotalSpending: () =>
        get()
          .getSpendings()
          .reduce((total, spendingItem) => spendingItem.amount + total, 0),

      getCurrentBudget: () =>
        get().budgets.find((b) =>
          isSameMonth(new Date(b.date), new Date(get().date))
        ),
    }),
    {
      name: "spending-list-store",
      partialize: (state) => ({
        budgets: state.budgets,
        spendings: state.spendings,
      }),
    }
  )
);

export default useSpendingListStore;
