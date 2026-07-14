"use client";

import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      // Native share sheet (mobile)
      await navigator.share({ title: document.title, url });
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all active:scale-95 ${
        copied
          ? "bg-green-500 text-white"
          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
      }`}
    >
      {copied ? "✅ Link tersalin!" : "🔗 Bagikan Resep"}
    </button>
  );
}