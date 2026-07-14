"use client";

import { useEffect, useState } from "react";

interface Props {
  onSearch: (query: string) => void;
  initialValue?: string;
  heroMode?: boolean;
}

export function SearchBar({ onSearch, initialValue = "", heroMode = false }: Props) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(value);
  }

  function handleClear() {
    setValue("");
    onSearch("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <span className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none ${heroMode ? "text-base" : "text-sm"}`}>
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cari resep... (contoh: chicken, pasta, beef)"
        className={`w-full pl-11 pr-28 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition ${
          heroMode
            ? "py-4 border-orange-200 shadow-lg shadow-orange-100"
            : "py-3.5 border-gray-200 shadow-sm"
        }`}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition text-lg leading-none"
        >
          ✕
        </button>
      )}
      <button
        type="submit"
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-semibold rounded-xl transition-all ${
          heroMode ? "px-6 py-2.5" : "px-5 py-2"
        }`}
      >
        Cari
      </button>
    </form>
  );
}