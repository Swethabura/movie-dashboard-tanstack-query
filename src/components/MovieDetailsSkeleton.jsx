export default function MovieDetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse">
      <div className="h-10 w-24 bg-gray-200 rounded mb-6" />

      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div className="h-[450px] bg-gray-200 rounded-xl" />

        <div className="space-y-4">
          <div className="h-10 bg-gray-200 rounded w-2/3" />

          <div className="h-6 bg-gray-200 rounded w-1/4" />

          <div className="h-5 bg-gray-200 rounded w-1/3" />

          <div className="h-5 bg-gray-200 rounded w-1/4" />

          <div className="space-y-2 mt-6">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}