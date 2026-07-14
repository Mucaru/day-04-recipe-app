"use client";

import { MealSummary } from "@/types/meal";
import { useEffect, useState } from "react";

const STORAGE_KEY = "resepku-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<MealSummary[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      setFavorites([]);
    }
  }, []);

  function toggleFavorite(meal: MealSummary) {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.idMeal === meal.idMeal);
      const next = exists
        ? prev.filter((m) => m.idMeal !== meal.idMeal)
        : [...prev, meal];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function isFavorite(idMeal: string) {
    return favorites.some((m) => m.idMeal === idMeal);
  }

  return { favorites, toggleFavorite, isFavorite, mounted };
}