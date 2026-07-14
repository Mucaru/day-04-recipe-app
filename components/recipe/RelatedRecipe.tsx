"use client";

import { getMealsByCategory } from "@/lib/mealdb";
import { MealSummary } from "@/types/meal";
import { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

interface Props {
  category: string;
  currentId: string;
}

export function RelatedRecipes({ category, currentId }: Props) {
  const [meals, setMeals] = useState<MealSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMealsByCategory(category)
      .then((data) => {
        const filtered = data
          .filter((m) => m.idMeal !== currentId)
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        setMeals(filtered);
      })
      .finally(() => setIsLoading(false));
  }, [category, currentId]);

  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
        Resep Lain dari{" "}
        <span className="text-orange-500">{category}</span>
      </h2>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : meals.length === 0 ? null : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </section>
  );
}