import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateRandomString } from "../utils/formatters";

export interface BucketListItem {
  id?: string; // Auto generated random id
  text: string; // The main string of the task or bucket list item
  tag: string; // The tag it belongs to -- to consolidate all related tasks/bucket list item
  isComplete: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

interface BucketListState {
  user: string;
  bucketList: BucketListItem[];

  addToBucketList: (item: BucketListItem) => void;
  updateBucketListItem: (item: BucketListItem) => void;
  removeBucketListItem: (id: string) => void;
  completeBucketListItem: (id: string) => void;
}

const useBucketListStore = create<BucketListState>()(
  persist(
    (set, get) => ({
      user: "",
      bucketList: [],

      // Add an item to the bucket list by appending the new object into the existing array
      // TODO: find a way to add the TAG there before going to this function
      addToBucketList: (item: BucketListItem) =>
        set(() => ({
          bucketList: [
            ...get().bucketList,
            {
              id: generateRandomString(),
              ...item,
              isComplete: false,
              createdAt: new Date(),
            },
          ],
        })),

      // Update an item inside the bucket list by looping through all the items and checking
      // based on the the item's id
      updateBucketListItem: (item: BucketListItem) =>
        set((state: BucketListState) => ({
          bucketList: [
            ...state.bucketList.map((s) => {
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
      removeBucketListItem: (id: string) =>
        set((state: BucketListState) => ({
          bucketList: [...state.bucketList.filter((s) => s.id !== id)],
        })),

      // Specifically update the record into completed state based on item id
      // using the updateBucketListItem
      completeBucketListItem: (id: string) => () => {
        const item = get().bucketList.find((s) => s.id === id);
        if (item) {
          // Execute update
          get().updateBucketListItem({
            id,
            ...item,
            updatedAt: new Date(),
            isComplete: true,
          });
        }
      },
    }),
    {
      name: "bucket-list-store",
      partialize: (state) => ({
        user: state.user,
        bucketList: state.bucketList,
      }),
    }
  )
);

export default useBucketListStore;
