"use client";

import { RecipeCard } from "@/components/recipe/RecipeCard";
import { useFavorites } from "@/contexts/FavoritesContext";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, mounted } = useFavorites();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-400 hover:text-orange-500 transition">
            ← Kembali
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">❤️ Favorit Saya</h1>
            <p className="text-xs text-gray-400">
              {mounted ? `${favorites.length} resep tersimpan` : "Memuat..."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {!mounted ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : favorites.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">🤍</p>
            <p className="text-gray-600 font-semibold text-lg">Belum ada resep favorit</p>
            <p className="text-gray-400 text-sm mt-1 mb-6">
              Tap ikon hati di card resep untuk menyimpannya
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition"
            >
              🍳 Jelajahi Resep
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {favorites.map((meal, index) => (
              <RecipeCard key={meal.idMeal} meal={meal} priority={index < 4} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}