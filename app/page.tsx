import { RecipeGrid } from "@/components/recipe/RecipeGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍳</span>
              <span className="text-xl font-bold text-gray-900 tracking-tight">ResepKu</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Masak Apa Hari Ini?
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-sm">
              Ribuan resep dunia, dari yang simpel sampai yang chef banget.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <RecipeGrid />
      </div>
    </main>
  );
}