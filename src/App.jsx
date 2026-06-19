import { useEffect, useState } from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieGridSkeleton from "./components/MovieGridSkeleton";

import { useMovies } from "./hooks/useMovies";
import { useDebounce } from "./hooks/useDebounce";
import { useInfiniteMovies } from "./hooks/useInfiniteMovies";

import { useInView } from "react-intersection-observer";
import EmptyState from "./components/EmptyState";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError, error } = useMovies();

  const debouncedSearch = useDebounce(searchTerm, 500);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteMovies(debouncedSearch);

  const isSearching =
    searchTerm.trim() && !infiniteData && searchTerm !== debouncedSearch;

  const movies = infiniteData?.pages.flatMap((page) => page.results) ?? [];

  const moviesToRender = searchTerm.trim() ? movies : data?.results;

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        {" "}
        <MovieGridSkeleton />{" "}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        {" "}
        <h2 className="text-2xl font-semibold text-red-500">
          Something went wrong{" "}
        </h2>
        <p className="text-gray-500">{error.message}</p>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}{" "}
      <section className="text-center mb-8">
        {" "}
        <h1 className="text-4xl md:text-5xl font-bold">Movie Explorer </h1>
        <p className="text-gray-500 mt-2">
          Discover trending and popular movies
        </p>
        {searchTerm && (
          <p className="mt-3 text-lg">
            Results for <span className="font-semibold">"{searchTerm}"</span>
          </p>
        )}
      </section>
      {/* Search */}
      <section className="mb-8">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClear={() => setSearchTerm("")}
        />
      </section>
      {/* Empty State */}
      {isSearching ? (
        <MovieGridSkeleton />
      ) : moviesToRender?.length === 0 ? (
        <EmptyState />
      ) : (
        <MovieGrid movies={moviesToRender} />
      )}
      {/* Infinite Scroll Loader */}
      <div ref={ref} className="h-24 flex items-center justify-center">
        {isFetchingNextPage && (
          <div className="flex items-center gap-3">
            <div
              className="
            h-5
            w-5
            rounded-full
            border-2
            border-gray-300
            border-t-black
            animate-spin
          "
            />

            <span className="text-gray-600">Loading more movies...</span>
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="text-center text-gray-500 py-8">
        Built with React, TanStack Query, TMDB API & Tailwind CSS
      </footer>
    </main>
  );
}

export default App;
