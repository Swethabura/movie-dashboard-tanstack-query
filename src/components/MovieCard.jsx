import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../api/movieApi";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }) {
  const queryClient = useQueryClient();

  return (
    <Link
      to={`/movie/${movie.id}`}
      onMouseEnter={() => {
        queryClient.prefetchQuery({
          queryKey: ["movie", movie.id],
          queryFn: () => getMovieDetails(movie.id),
        });
      }}
    >
      <div
        className="
    rounded-xl
    overflow-hidden
    shadow-md
    bg-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-xl
  "
      >
        <img
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : "/no-poster.png"
          }
          alt={movie.title}
        //   className="max-h-[330px] w-full object-cover"
        />

        <div className="p-3">
          <h3
            className="
    font-semibold
    line-clamp-2
    min-h-[30px]
  "
          >
            {movie.title}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-yellow-500">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>

            <span className="text-sm text-gray-500">
              {movie.release_date?.split("-")[0]}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
