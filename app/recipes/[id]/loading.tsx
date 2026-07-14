export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero skeleton */}
      <div className="w-full h-72 md:h-96 bg-gray-300 animate-pulse" />

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Title skeleton */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="h-8 w-3/4 bg-gray-200 rounded-xl animate-pulse" />
        </div>

        {/* Ingredients skeleton */}
        <div className="space-y-3">
          <div className="h-6 w-32 bg-gray-200 rounded-lg animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>

        {/* Steps skeleton */}
        <div className="space-y-3">
          <div className="h-6 w-36 bg-gray-200 rounded-lg animate-pulse" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </main>
  );
}