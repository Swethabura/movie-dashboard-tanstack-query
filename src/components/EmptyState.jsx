import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <SearchX
        size={64}
        className="text-gray-300 mb-4"
      />

      <h2 className="text-2xl font-semibold">
        No Movies Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        We couldn't find any movies matching
        your search. Try a different title or
        keyword.
      </p>
    </div>
  );
}