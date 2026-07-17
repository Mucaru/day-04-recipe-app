"use client";

import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl mb-6">🍳💥</p>
        <h2 className="text-2xl font-black text-gray-900 mb-2">
          Aduh, dapurnya error!
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Terjadi kesalahan yang tidak terduga. Coba lagi atau kembali ke halaman utama.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Coba Lagi
          </button>
          <a
            href="/"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Ke Beranda
          </a>
        </div>
      </div>
    </main>
  );
}