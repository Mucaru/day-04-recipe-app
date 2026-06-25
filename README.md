# 🍳 ResepKu

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000?style=flat-square&logo=vercel)
![Day](https://img.shields.io/badge/100_Days_Challenge-Day_04-orange?style=flat-square)

> Jelajahi ribuan resep dari seluruh dunia — dari yang simpel sampai yang chef banget.

## ✨ Fitur

- 🔀 Resep random setiap kali halaman dibuka
- 🔍 Cari resep berdasarkan nama
- 🏷️ Filter berdasarkan kategori (Beef, Chicken, Dessert, dll)
- 📖 Halaman detail lengkap — bahan, langkah memasak, video YouTube
- 💀 Loading skeleton saat data dimuat

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| Next.js 15 (App Router) | Framework utama |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| TheMealDB API | Sumber data resep (free, no API key) |
| Vercel | Deployment |

## 📁 Struktur Folder

```
app/
  page.tsx                  # Halaman utama
  recipes/[id]/
    page.tsx                # Halaman detail resep
components/
  recipe/
    RecipeCard.tsx          # Card resep dengan overlay
    RecipeGrid.tsx          # Grid + search + filter
    SearchBar.tsx           # Search input
    CategoryFilter.tsx      # Filter kategori
  ui/
    Skeleton.tsx            # Loading skeleton
hooks/
  useMeals.ts               # Custom hook data fetching
lib/
  mealdb.ts                 # API layer TheMealDB
types/
  meal.ts                   # TypeScript types + helper
```

## 🚀 Jalankan Lokal

```bash
git clone https://github.com/Mucaru/day-04-recipe-app.git
cd day-04-recipe-app
npm install
npm run dev
```

Buka `http://localhost:3000`

## 🌐 Live Demo

**[day-04-recipe-app.vercel.app](https://day-04-recipe-app.vercel.app)**

---

Bagian dari tantangan [100 Hari 100 Web App](https://github.com/Mucaru) · Day 04 of 100