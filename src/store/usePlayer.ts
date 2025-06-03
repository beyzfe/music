import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MusicType {
  id: number;
  name: string;
  auth: string;
  img: string;
  path: string;
}

type PlayerType = {
  selectedMusic: MusicType | null;
  favorites: MusicType[];
  search: string;
  setSelectedMusic: (music: MusicType | null) => void;
  addToFavorites: (music: MusicType) => void;
  removeFromFavorites: (music: MusicType) => void;
  setSearch: (search: string) => void;
};

export const usePlayer = create<PlayerType>()(
  persist(
    (set, get) => ({
      selectedMusic: null,
      favorites: [],
      search: "",
      setSearch: (search) => set({ search }),
      setSelectedMusic: (music) => set({ selectedMusic: music }),
      addToFavorites: (music) => {
        const exists = get().favorites.some((item) => item.id === music.id);
        if (!exists) {
          set((state) => ({ favorites: [...state.favorites, music] }));
        }
      },
      removeFromFavorites: (music) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== music.id),
        })),
    }),
    {
      name: "player-storage",
      partialize: (state) => ({
        selectedMusic: state.selectedMusic,
        favorites: state.favorites,
      }),
    }
  )
);
