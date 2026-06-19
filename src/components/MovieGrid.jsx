import MovieCard from "./MovieCard";

export default function MovieGrid({
  movies,
}) {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 max-w-7xl">
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}