import { getIngredients } from "@/types/meal";
import { getMealById } from "@/lib/mealdb";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedRecipes } from "@/components/recipe/RelatedRecipe";
import { FavoriteButton } from "@/components/recipe/FavoriteButton";
import { ShareButton } from "@/components/ui/ShareButton";


interface Props {
  params: Promise<{ id: string }>;
}

function parseSteps(instructions: string): string[] {
  // Hapus pattern "STEP X" atau "Step X" atau baris yang cuma angka/label pendek
  const cleaned = instructions
    .replace(/^step\s*\d+[\s\n]*/gim, "") // buang "Step 1", "STEP 2" dll
    .replace(/^\d+[\.\)]\s*/gim, "");      // buang "1." atau "1)"

  // Split by newline
  const lines = cleaned
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length > 15); // hanya ambil kalimat yang cukup panjang

  if (lines.length >= 2) return lines;

  // Fallback: split by kalimat
  return cleaned
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 15);
}

export default async function RecipeDetailPage({ params }: Props) {
  const { id } = await params;
  const meal = await getMealById(id);

  if (!meal) notFound();

  const ingredients = getIngredients(meal);
  const steps = parseSteps(meal.strInstructions);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Image Full Width */}
      <div className="relative w-full h-72 md:h-96">
        <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
        {/* Gradient overlay bawah */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Back button di atas foto */}
        <Link
          href="/"
          className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow transition"
        >
          ← Kembali
        </Link>

        {/* Title di bawah foto */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {meal.strCategory}
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                {meal.strArea}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md leading-tight">
              {meal.strMeal}
            </h1>
              {/* Favorite button */}
              <FavoriteButton meal={{
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strMealThumb: meal.strMealThumb,
              }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* Ingredients */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
            Bahan-bahan
            <span className="text-sm font-normal text-gray-400 ml-1">
              ({ingredients.length} bahan)
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ingredients.map(({ ingredient, measure }, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
              >
                <span className="text-sm text-gray-700 font-medium">{ingredient}</span>
                <span className="text-sm text-orange-500 font-semibold ml-4 shrink-0">
                  {measure}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
            Cara Memasak
            <span className="text-sm font-normal text-gray-400 ml-1">
              ({steps.length} langkah)
            </span>
          </h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-xl px-4 py-4 shadow-sm border border-gray-100">
                <span className="shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* YouTube */}
        {meal.strYoutube && (
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
              Video Tutorial
            </h2>
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              ▶ Tonton di YouTube
            </a>
          </section>
        )}
        {/* Share */}
        <section className="flex items-center gap-3">
          <ShareButton />
        </section>
        {/* Related Recipes */}
        <RelatedRecipes category={meal.strCategory} currentId={meal.idMeal} />
      </div>
    </main>
  );
}