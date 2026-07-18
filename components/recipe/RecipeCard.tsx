"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { MealSummary } from "@/types/meal";
import Image from "next/image";
import Link from "next/link";

interface Props {
  meal: MealSummary;
  priority?: boolean;
  index?: number;
}

export function RecipeCard({ meal, priority = false, index = 0 }: Props) {
  const { toggleFavorite, isFavorite, mounted } = useFavorites();
  const favorited = mounted && isFavorite(meal.idMeal);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 aspect-[3/4] bg-gray-200"
      style={{
        animation: "cardFadeIn 0.4s ease-out forwards",
        animationDelay: `${index * 60}ms`,
        opacity: 0,
      }}
    >
      <Link href={`/recipes/${meal.idMeal}`} className="absolute inset-0 z-0">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : "low"}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </Link>

      <button
        onClick={() => toggleFavorite(meal)}
        className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-black/30 backdrop-blur-sm hover:bg-black/50"
        aria-label={favorited ? "Hapus dari favorit" : "Simpan ke favorit"}
      >
        <span className="text-sm">{favorited ? "❤️" : "🤍"}</span>
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-3 z-0">
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow">
          {meal.strMeal}
        </h3>
      </div>
    </div>
  );
}