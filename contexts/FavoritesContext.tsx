"use client";

import { MealSummary } from "@/types/meal";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "resepku-favorites";

function readStorage(): MealSummary[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored || stored.trim() === "") return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function writeStorage(data: MealSummary[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

interface FavoritesContextType {
  favorites: MealSummary[];
  toggleFavorite: (meal: MealSummary) => void;
  isFavorite: (idMeal: string) => boolean;
  mounted: boolean;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
  mounted: false,
});

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<MealSummary[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFavorites(readStorage());
  }, []);

  const toggleFavorite = useCallback((meal: MealSummary) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.idMeal === meal.idMeal);
      const next = exists
        ? prev.filter((m) => m.idMeal !== meal.idMeal)
        : [...prev, meal];
      writeStorage(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (idMeal: string) => favorites.some((m) => m.idMeal === idMeal),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, mounted }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}