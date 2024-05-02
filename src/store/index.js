import { create } from "zustand";

export const useSearchStore = create((set) => ({
  searchValue: "",
  setSearchValue: (value) => set({ searchValue: value }),
}));

export const usePaginationStore = create((set) => ({
  page: 1,
  setPage: (value) => set({ page: value }),
}));
