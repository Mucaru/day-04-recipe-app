"use client";

import { MealSummary } from "@/types/meal";
import { useCallback, useEffect, useState } from "react";

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
    window.dispatchEvent(new Event("favorites-changed"));
  } catch {
    // storage penuh atau tidak tersedia
  }
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

  const toggleFavorite = useCallback((meal: MealSummary) => {
    const current = readStorage();
    const exists = current.some((m) => m.idMeal === meal.idMeal);
    const next = exists
      ? current.filter((m) => m.idMeal !== meal.idMeal)
      : [...current, meal];
    writeStorage(next);
  }, []);

  const isFavorite = useCallback((idMeal: string) => {
    return favorites.some((m) => m.idMeal === idMeal);
  }, [favorites]);

  return { favorites, toggleFavorite, isFavorite, mounted };
}