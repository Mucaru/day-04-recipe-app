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
  const promises = Array.from({ length: count }, () =>
    fetch(`${BASE_URL}/random.php`).then((r) => r.json())
  );
  const results = await Promise.all(promises);
  return results.map((r) => r.meals?.[0]).filter(Boolean);
}