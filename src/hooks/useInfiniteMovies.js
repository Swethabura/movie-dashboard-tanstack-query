import { useInfiniteQuery } from '@tanstack/react-query'
import { searchMovies } from '../api/movieApi'

export const useInfiniteMovies = searchTerm => {
  return useInfiniteQuery({
    queryKey: ['infinite-movies', searchTerm],
    queryFn: ({ pageParam = 1 }) => searchMovies(searchTerm, pageParam),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1
      }

      return undefined
    },
    enabled: !!searchTerm,
    staleTime: 1000 * 5 * 60
  })
}
