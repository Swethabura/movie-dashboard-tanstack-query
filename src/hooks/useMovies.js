import { useQuery } from '@tanstack/react-query'
import { getTrendingMovies } from '../api/movieApi'

export const useMovies = () => {
  return useQuery({
    queryKey: ['trending-movies'],
    queryFn: getTrendingMovies,
    staleTime: 1000 * 60 * 5
  })
}
