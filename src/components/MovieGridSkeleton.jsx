export default function MovieGridSkeleton() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse
            rounded-xl
            overflow-hidden
            shadow-md
            bg-white
          "
        >
          <div className="h-[320px] bg-gray-200" />

          <div className="p-3">
            <div className="h-5 bg-gray-200 rounded mb-3" />

            <div className="flex justify-between">
              <div className="h-4 w-14 bg-gray-200 rounded" />

              <div className="h-4 w-10 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}