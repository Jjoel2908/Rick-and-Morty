import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MAX_FAVS = 5;

/** Zustand store for managing favorite items with persistence.
 * - favorites: Array of favorite items.
 * - addFavorite: Function to add an item to favorites.
 * - removeFavorite: Function to remove an item from favorites by ID.
 * - reorder: Function to reorder the favorites list.
 * - isFavorite: Function to check if an item is in favorites by ID.
 */
export const useFavorites = create(
    persist(
        (set, get) => ({
            favorites: [],
            addFavorite: (c) =>
                set((state) => {
                    const existsIdx = state.favorites.findIndex((x) => x.id === c.id);
                    let next = [...state.favorites];
                    if (existsIdx !== -1) {
                        const [item] = next.splice(existsIdx, 1);
                        next.unshift(item);
                    } else {
                        next.unshift(c);
                        if (next.length > MAX_FAVS) next = next.slice(0, MAX_FAVS);
                    }
                    return { favorites: next };
                }),
            removeFavorite: (id) => set((s) => ({ favorites: s.favorites.filter((x) => x.id !== id) })),
            reorder: (next) => set(() => ({ favorites: next.slice(0, MAX_FAVS) })),
            isFavorite: (id) => get().favorites.some((x) => x.id === id),
        }),
        {
            name: 'favorites-store-v1',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({ favorites: state.favorites }),
        }
    )
);