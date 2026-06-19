import { useQuery } from "@tanstack/react-query"
import { searchMovies } from "../api/movieApi"

export const useSearchMovies = (serachTerm, page) => {
    return useQuery({
        queryKey: ["movies", serachTerm, page],
        queryFn: () => searchMovies(serachTerm, page),
        enabled: !!serachTerm,
        staleTime: 1000 * 60 * 5,
        gcTime: 10 * 60 * 1000,
    })
}