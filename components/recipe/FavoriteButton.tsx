"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { MealSummary } from "@/types/meal";

interface Props {
  meal: MealSummary;
}

export function FavoriteButton({ meal }: Props) {
  const { toggleFavorite, isFavorite, mounted } = useFavorites();
  const favorited = mounted && isFavorite(meal.idMeal);

  return (
    <button
      onClick={() => toggleFavorite(meal)}
      className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all active:scale-95 backdrop-blur-sm ${
        favorited
          ? "bg-red-500 text-white shadow-lg"
          : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
      }`}
      aria-label={favorited ? "Hapus dari favorit" : "Simpan ke favorit"}
    >
      <span>{favorited ? "❤️" : "🤍"}</span>
      <span>{favorited ? "Tersimpan" : "Simpan"}</span>
    </button>
  );
}