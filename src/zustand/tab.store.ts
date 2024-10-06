import { create } from "zustand";

type TabStoreState = {
  initialTab: string;
  setActiveTab: (tab: string) => void;
};

export const useTabStore = create<TabStoreState>((set) => ({
  initialTab: "내 판매글",
  setActiveTab: (initialTab) => set({ initialTab }),
}));
