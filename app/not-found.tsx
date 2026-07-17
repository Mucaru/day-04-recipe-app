import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl mb-6">🍽️</p>
        <h2 className="text-2xl font-black text-gray-900 mb-2">
          Resep tidak ditemukan
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Halaman yang kamu cari tidak ada atau sudah dihapus. Yuk cari resep lain!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all"
        >
          🍳 Jelajahi Resep
        </Link>
      </div>
    </main>
  );
}