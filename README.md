# 🍳 ResepKu

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000?style=flat-square&logo=vercel)
![Day](https://img.shields.io/badge/100_Days_Challenge-Day_04-orange?style=flat-square)
![Lighthouse](https://img.shields.io/badge/Lighthouse-93%2F100-green?style=flat-square)

> Jelajahi ribuan resep dari seluruh dunia — dari yang simpel sampai yang chef banget.

🌐 **[day-04-recipe-app.vercel.app](https://day-04-recipe-app.vercel.app)**

## ✨ Fitur

- 🔀 Resep random setiap kali halaman dibuka
- 🔍 Cari resep berdasarkan nama langsung dari hero section
- 🏷️ Filter berdasarkan kategori (Beef, Chicken, Dessert, dll)
- 📖 Halaman detail lengkap — bahan, langkah memasak, video YouTube
- ❤️ Simpan resep favorit ke localStorage
- 🍽️ Related recipes di halaman detail
- 🔗 Share button dengan clipboard fallback
- ⬆️ Scroll to top button
- 💀 Loading skeleton saat data dimuat

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| Next.js 15 (App Router) | Framework utama |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| TheMealDB API | Sumber data resep (free, no API key) |
| localStorage | Penyimpanan favorit |
| Vercel | Deployment |

## 📁 Struktur Folder

```
app/
  page.tsx                  # Halaman utama + hero search
  favorites/
    page.tsx                # Halaman favorit
  recipes/[id]/
    page.tsx                # Halaman detail resep
    loading.tsx             # Loading skeleton detail
  loading.tsx               # Loading skeleton utama
  layout.tsx                # Root layout + metadata
components/
  recipe/
    RecipeCard.tsx          # Card resep dengan bookmark
    RecipeGrid.tsx          # Grid + filter kategori
    SearchBar.tsx           # Search input (hero & inline)
    CategoryFilter.tsx      # Filter kategori pill
    RelatedRecipes.tsx      # Resep terkait di detail
  ui/
    Skeleton.tsx            # Loading skeleton
    ScrollToTop.tsx         # Tombol scroll ke atas
    ShareButton.tsx         # Share / copy link
hooks/
  useMeals.ts               # Custom hook data fetching
  useFavorites.ts           # Custom hook localStorage favorit
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

## 📊 Lighthouse Score

| Metrik | Score |
|---|---|
| Performance | 93 |
| Accessibility | 94 |
| Best Practices | 96 |
| SEO | 100 |

---

Bagian dari tantangan [100 Hari 100 Web App](https://github.com/Mucaru) · Day 04 of 100