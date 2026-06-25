"use client";

import { useMeals } from "@/hooks/useMeals";
import { SkeletonGrid } from "@/components/ui/Skeleton";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { SearchBar } from "@/components/recipe/SearchBar";
import { CategoryFilter } from "@/components/recipe/CategoryFilter";
import { getCategories } from "@/lib/mealdb";
import { useEffect, useState } from "react";
import { Category } from "@/types/meal";

export function RecipeGrid() {
  const { meals, isLoading, error, search, filterByCategory, activeCategory, searchQuery } = useMeals();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div className="space-y-6">
      {/* Search */}
      <SearchBar onSearch={search} initialValue={searchQuery} />

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onSelect={filterByCategory}
      />

      {/* Status */}
      {!isLoading && !error && meals.length > 0 && (
        <p className="text-sm text-gray-400">
          {searchQuery
            ? `${meals.length} hasil untuk "${searchQuery}"`
            : activeCategory !== "All"
            ? `${meals.length} resep dalam kategori ${activeCategory}`
            : `${meals.length} resep untukmu hari ini`}
        </p>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-12">
          <p className="text-gray-500">{error}</p>
        </div>
      )}

      {/* Grid */}
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
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}