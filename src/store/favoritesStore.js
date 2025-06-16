import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (photo) => {
        if (!get().favorites.find((p) => p.id === photo.id)) {
          set({ favorites: [...get().favorites, photo] });
        }
      },

      removeFavorite: (id) => {
        set({ favorites: get().favorites.filter((p) => p.id !== id) });
      },

      isFavorite: (id) => {
        return !!get().favorites.find((p) => p.id === id);
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);

export default useFavoritesStore;
