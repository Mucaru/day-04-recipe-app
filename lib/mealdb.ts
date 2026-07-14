import { Category, Meal, MealSummary } from "@/types/meal";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query: string): Promise<MealSummary[]> {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data.meals ?? [];
}

export async function getMealById(id: string): Promise<Meal | null> {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data.meals?.[0] ?? null;
}

export async function getMealsByCategory(category: string): Promise<MealSummary[]> {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data.meals ?? [];
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/categories.php`, {
    next: { revalidate: 86400 },
  });
  const data = await res.json();
  return data.categories ?? [];
}

export async function getRandomMeals(count = 12): Promise<MealSummary[]> {
  // Ambil semua meals dari kategori random, jauh lebih efisien dari 12 request
  const categories = ["Chicken", "Beef", "Seafood", "Pasta", "Vegetarian", "Dessert"];
  const randomCat = categories[Math.floor(Math.random() * categories.length)];
  const res = await fetch(`${BASE_URL}/filter.php?c=${randomCat}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  const meals: MealSummary[] = data.meals ?? [];

  // Shuffle dan ambil 12
  return meals.sort(() => Math.random() - 0.5).slice(0, count);
}