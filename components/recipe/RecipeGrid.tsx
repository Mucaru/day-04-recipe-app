"use client";

import { useMeals } from "@/hooks/useMeals";
import { SkeletonGrid } from "@/components/ui/Skeleton";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { SearchBar } from "@/components/recipe/SearchBar";
import { CategoryFilter } from "@/components/recipe/CategoryFilter";
import { getCategories } from "@/lib/mealdb";
import { useEffect, useState } from "react";
import { Category } from "@/types/meal";

interface Props {
  hideSearch?: boolean;
  externalQuery?: string;
}

export function RecipeGrid({ hideSearch = false, externalQuery }: Props) {
  const { meals, isLoading, error, search, filterByCategory, activeCategory, searchQuery } = useMeals(externalQuery);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div className="space-y-5">
      {!hideSearch && (
        <SearchBar onSearch={search} initialValue={searchQuery} />
      )}

      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onSelect={filterByCategory}
      />

      {!isLoading && !error && meals.length > 0 && (
        <p className="text-sm text-gray-400">
          {searchQuery
            ? `${meals.length} hasil untuk "${searchQuery}"`
            : activeCategory !== "All"
            ? `${meals.length} resep dalam kategori ${activeCategory}`
            : `${meals.length} resep untukmu hari ini`}
        </p>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-gray-500">{error}</p>
        </div>
      )}

      {isLoading ? (
        <SkeletonGrid />
      ) : meals.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-gray-600 font-semibold text-lg">Resep tidak ditemukan</p>
          <p className="text-gray-400 text-sm mt-1">Coba kata kunci lain</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {meals.map((meal, index) => (
            <RecipeCard key={meal.idMeal} meal={meal} priority={index < 4} />
          ))}
        </div>
      )}
    </div>
  );
}