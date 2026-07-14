"use client";

import { MealSummary } from "@/types/meal";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "resepku-favorites";

function readStorage(): MealSummary[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function writeStorage(data: MealSummary[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  // Dispatch event biar semua instance hook ikut update
  window.dispatchEvent(new Event("favorites-changed"));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<MealSummary[]>([]);
  const [mounted, setMounted] = useState(false);

  const sync = useCallback(() => {
    setFavorites(readStorage());
  }, []);

  useEffect(() => {
    setMounted(true);
    sync();
    window.addEventListener("favorites-changed", sync);
    return () => window.removeEventListener("favorites-changed", sync);
  }, [sync]);

  function toggleFavorite(meal: MealSummary) {
    const current = readStorage();
    const exists = current.some((m) => m.idMeal === meal.idMeal);
    const next = exists
      ? current.filter((m) => m.idMeal !== meal.idMeal)
      : [...current, meal];
    writeStorage(next);
  }

  function isFavorite(idMeal: string) {
    return favorites.some((m) => m.idMeal === idMeal);
  }

  return { favorites, toggleFavorite, isFavorite, mounted };
}