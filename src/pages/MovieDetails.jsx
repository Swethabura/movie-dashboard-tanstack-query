import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import MovieDetailsSkeleton from "../components/MovieDetailsSkeleton";
import { IMAGE_BASE_URL } from "../components/MovieCard";
import { useMovieDetails } from "../hooks/useMovieDetails";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useMovieDetails(id);

  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-red-500 text-xl">
          Failed to load movie details
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Banner */}
      {data.backdrop_path && (
        <div className="relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt={data.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <button
            onClick={() => navigate(-1)}
            className="
              absolute
              top-4
              left-4
              z-10
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-lg
              bg-white/90
              hover:bg-white
              transition
              cursor-pointer
            "
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="absolute bottom-6 left-6 text-white max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold">
              {data.title}
            </h1>

            {data.tagline && (
              <p className="mt-2 italic text-gray-200">
                "{data.tagline}"
              </p>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="grid lg:grid-cols-[350px_1fr] gap-10">
        {/* Poster */}
        <div>
          <img
            src={`${IMAGE_BASE_URL}${data.poster_path}`}
            alt={data.title}
            className="
              w-full
              rounded-2xl
              shadow-xl
            "
          />
        </div>

        {/* Content */}
        <div>
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Star
                size={18}
                className="text-yellow-500 fill-yellow-500"
              />
              <span>{data.vote_average?.toFixed(1)}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{data.release_date}</span>
            </div>

            {data.runtime && (
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{data.runtime} min</span>
              </div>
            )}

            <div>
              <span className="font-semibold">
                Status:
              </span>{" "}
              {data.status}
            </div>
          </div>

          {/* Overview */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Overview
            </h2>

            <p className="leading-8 text-gray-700">
              {data.overview}
            </p>
          </section>

          {/* Genres */}
          {data.genres?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">
                Genres
              </h2>

              <div className="flex flex-wrap gap-2">
                {data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-gray-100
                      border
                      text-sm
                    "
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Additional Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Additional Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">
                  Original Language:
                </span>{" "}
                {data.original_language?.toUpperCase()}
              </div>

              <div>
                <span className="font-semibold">
                  Popularity:
                </span>{" "}
                {Math.round(data.popularity)}
              </div>

              <div>
                <span className="font-semibold">
                  Vote Count:
                </span>{" "}
                {data.vote_count}
              </div>

              <div>
                <span className="font-semibold">
                  Adult Content:
                </span>{" "}
                {data.adult ? "Yes" : "No"}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}