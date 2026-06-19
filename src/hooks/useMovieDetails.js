import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../api/movieApi";

export const useMovieDetails = (id) => {
  return useQuery({
    queryKey: ["movie", id],

    queryFn: () => getMovieDetails(id),

    enabled: !!id,

    staleTime: 1000 * 60 * 5,
  });
};