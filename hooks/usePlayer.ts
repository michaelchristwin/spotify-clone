import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeid?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeid: undefined,
  setId: (id: string) => set({ activeid: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ ids: [], activeid: undefined }),
}));

export default usePlayer;
