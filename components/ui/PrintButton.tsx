"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
    >
      🖨️ Print Resep
    </button>
  );
}