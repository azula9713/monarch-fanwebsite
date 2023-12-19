import { create } from "zustand";
import IOutpost from "../interfaces/IOutpost";

interface SelectedOutpostStore {
  selectedOutpost: IOutpost | null;
  setSelectedOutpost: (outpost: IOutpost) => void;
}

const useSelectedOutpostStore = create<SelectedOutpostStore>((set) => ({
  selectedOutpost: null,
  setSelectedOutpost: (outpost) => set(() => ({ selectedOutpost: outpost })),
}));

export { useSelectedOutpostStore };
