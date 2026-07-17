"use client";

import { getMealsByCategory, getRandomMeals, searchMeals } from "@/lib/mealdb";
import { MealSummary } from "@/types/meal";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const initialized = useRef(false);

  const fetchMeals = useCallback(async (query: string, category: string) => {
    setIsLoading(true);
    setError(null);
    try {
      let data: MealSummary[] = [];
      if (query.trim()) {
        data = await searchMeals(query);
      } else if (category !== "All") {
        data = await getMealsByCategory(category);
      } else {
        data = await getRandomMeals(12);
      }
      setMeals(data);
    } catch {
      setError("Gagal memuat resep. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Init — load random sekali saat mount
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      fetchMeals("", "All");
    }
  }, [fetchMeals]);

  // Sync external query dari hero search
  useEffect(() => {
    if (!initialized.current) return;
    if (externalQuery === undefined) return;
    setSearchQuery(externalQuery);
    setActiveCategory("All");
    fetchMeals(externalQuery, "All");
  }, [externalQuery, fetchMeals]);

  const search = useCallback((query: string) => {
    setSearchQuery(query);
    setActiveCategory("All");
    fetchMeals(query, "All");
  }, [fetchMeals]);

  const filterByCategory = useCallback((category: string) => {
    setActiveCategory(category);
    setSearchQuery("");
    fetchMeals("", category);
  }, [fetchMeals]);

  return { meals, isLoading, error, search, filterByCategory, activeCategory, searchQuery };
}