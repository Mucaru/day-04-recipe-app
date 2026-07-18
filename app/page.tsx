import { HomeClient } from "@/components/recipe/HomeClient";
import { getCategories } from "@/lib/mealdb";
import { Category } from "@/types/meal";

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-gray-50">
      <HomeClient categories={categories} />
    </main>
  );
}