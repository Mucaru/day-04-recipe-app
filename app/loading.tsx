import { SkeletonGrid } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍳</span>
              <span className="text-xl font-bold text-gray-900 tracking-tight">ResepKu</span>
            </div>
            <div className="h-9 w-64 bg-gray-200 rounded-xl animate-pulse mb-2" />
            <div className="h-4 w-48 bg-gray-100 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="h-12 w-full max-w-2xl mx-auto bg-gray-200 rounded-2xl animate-pulse" />
          <div className="flex gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-9 w-20 bg-gray-200 rounded-xl animate-pulse shrink-0" />
            ))}
          </div>
          <SkeletonGrid />
        </div>
      </div>
    </main>
  );
}