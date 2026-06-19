import { apiClient } from './apiClient'

export const getTrendingMovies = async () => apiClient('/trending/movie/week');

export const searchMovies = async (query, page=1) =>
  apiClient(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);

export const getMovieDetails = (id) =>
  apiClient(`/movie/${id}`);