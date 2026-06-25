"use client";

import { Category } from "@/types/meal";

interface Props {
  categories: Category[];
  active: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, active, onSelect }: Props) {
  const all = [{ idCategory: "0", strCategory: "All" }, ...categories];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {all.map((cat) => (
        <button
          key={cat.idCategory}
          onClick={() => onSelect(cat.strCategory)}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
            active === cat.strCategory
              ? "bg-orange-500 text-white shadow-sm shadow-orange-200"
              : "bg-white text-gray-500 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
          }`}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}