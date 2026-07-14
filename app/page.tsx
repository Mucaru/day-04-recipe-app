"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { SearchBar } from "@/components/recipe/SearchBar";
import Link from "next/link";

const RecipeGrid = dynamic(
  () => import("@/components/recipe/RecipeGrid").then((m) => m.RecipeGrid),
  { ssr: false }
);

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-b border-orange-100 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-8">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-2xl">🍳</span>
            <span className="text-lg font-bold text-orange-500 tracking-tight">ResepKu</span>
            <Link
              href="/favorites"
              className="ml-3 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-orange-500 bg-white/80 border border-gray-200 px-3 py-1.5 rounded-full transition"
            >
              ❤️ Favorit
            </Link>
          </div>

          

          <div className="text-center mb-7">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
              Masak Apa{" "}
              <span className="text-orange-500">Hari Ini?</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto">
              Ribuan resep dunia, dari yang simpel sampai yang chef banget.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={setQuery} initialValue={query} heroMode />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <RecipeGrid hideSearch externalQuery={query} />
      </div>
    </main>
  );
} 