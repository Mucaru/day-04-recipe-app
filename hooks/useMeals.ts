"use client";

import { getMealsByCategory, getRandomMeals, searchMeals } from "@/lib/mealdb";
import { MealSummary } from "@/types/meal";
import { useCallback, useEffect, useState } from "react";

interface UseMealsReturn {
  meals: MealSummary[];
  isLoading: boolean;
  error: string | null;
  search: (query: string) => void;
  filterByCategory: (category: string) => void;
  activeCategory: string;
  searchQuery: string;
}

export function useMeals(externalQuery?: string): UseMealsReturn {
  const [meals, setMeals] = useState<MealSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const loadRandom = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getRandomMeals(12);
      setMeals(data);
    } catch {
      setError("Gagal memuat resep. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const search = useCallback(async (query: string) => {
    setSearchQuery(query);
    setActiveCategory("All");
    setIsLoading(true);
    setError(null);
    try {
      const data = query.trim() ? await searchMeals(query) : await getRandomMeals(12);
      setMeals(data);
    } catch {
      setError("Gagal mencari resep. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filterByCategory = useCallback(async (category: string) => {
    setActiveCategory(category);
    setSearchQuery("");
    setIsLoading(true);
    setError(null);
    try {
      const data = category === "All" ? await getRandomMeals(12) : await getMealsByCategory(category);
      setMeals(data);
    } catch {
      setError("Gagal memuat kategori. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Sync external query dari hero search
  useEffect(() => {
    if (externalQuery !== undefined) {
      search(externalQuery);
    }
  }, [externalQuery, search]);

  useEffect(() => {
    if (externalQuery === undefined) {
      loadRandom();
    }
  }, [loadRandom, externalQuery]);

  return { meals, isLoading, error, search, filterByCategory, activeCategory, searchQuery };
}