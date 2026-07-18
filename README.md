# 🍳 ResepKu

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000?style=flat-square&logo=vercel)
![Day](https://img.shields.io/badge/100_Days_Challenge-Day_04-orange?style=flat-square)
![Lighthouse](https://img.shields.io/badge/Lighthouse-83%2F100-green?style=flat-square)

> Jelajahi ribuan resep dari seluruh dunia — dari yang simpel sampai yang chef banget.

🌐 **[day-04-recipe-app.vercel.app](https://day-04-recipe-app.vercel.app)**

## ✨ Fitur

- 🔀 Resep random setiap kali halaman dibuka
- 🔍 Cari resep langsung dari hero section
- 🏷️ Filter berdasarkan kategori (Beef, Chicken, Dessert, dll)
- 📖 Halaman detail — bahan, langkah memasak, video YouTube
- ❤️ Simpan & hapus resep favorit (localStorage)
- 🍽️ Related recipes di halaman detail
- 🔗 Share button dengan clipboard fallback
- 🖨️ Print resep langsung dari browser
- 🧭 Breadcrumb navigasi di halaman detail
- ⬆️ Scroll to top button
- 🔔 Toast notification saat bookmark
- 💀 Loading skeleton saat data dimuat
- 🚫 Custom error & not-found page

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| Next.js 15 (App Router) | Framework utama |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| TheMealDB API | Sumber data resep (free, no API key) |
| React Context | Global state favorites & toast |
| localStorage | Persistensi favorit |
| Vercel | Deployment |

## 📁 Struktur Folder

```
app/
  page.tsx                    # Halaman utama (server component)
  layout.tsx                  # Root layout + metadata + providers
  error.tsx                   # Custom error page
  not-found.tsx               # Custom 404 page
  loading.tsx                 # Loading skeleton utama
  favorites/
    page.tsx                  # Halaman favorit
  recipes/[id]/
    page.tsx                  # Halaman detail resep
    loading.tsx               # Loading skeleton detail
components/
  recipe/
    RecipeCard.tsx            # Card resep dengan bookmark + animasi
    RecipeGrid.tsx            # Grid + filter kategori
    SearchBar.tsx             # Search input (hero & inline)
    CategoryFilter.tsx        # Filter kategori pill
    RelatedRecipes.tsx        # Resep terkait di detail
    HomeClient.tsx            # Client wrapper untuk home
    FavoriteButton.tsx        # Tombol favorit di detail page
  ui/
    Skeleton.tsx              # Loading skeleton
    ScrollToTop.tsx           # Tombol scroll ke atas
    ShareButton.tsx           # Share / copy link
    Toast.tsx                 # Toast notification + provider
    Footer.tsx                # Footer
    PrintButton.tsx           # Tombol print resep
contexts/
  FavoritesContext.tsx        # Global favorites state + toast integration
hooks/
  useMeals.ts                 # Custom hook data fetching
lib/
  mealdb.ts                   # API layer TheMealDB
types/
  meal.ts                     # TypeScript types + helper
```

## 🚀 Jalankan Lokal

```bash
git clone https://github.com/Mucaru/day-04-recipe-app.git
cd day-04-recipe-app
npm install
npm run dev
```

Buka `http://localhost:3000`

## 📊 Lighthouse Score (Desktop)

| Metrik | Score |
|---|---|
| Performance | 83 |
| Accessibility | 94 |
| Best Practices | 100 |
| SEO | 100 |

---

Bagian dari tantangan [100 Hari 100 Web App](https://github.com/Mucaru) · Day 04 of 100