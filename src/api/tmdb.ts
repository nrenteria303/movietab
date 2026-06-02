import type { Movie } from '../types/tmdb'
import type { MovieListResponse } from '../types/tmdb'

const BASE_URL =
  import.meta.env.DEV
    ? 'http://localhost:8888/.netlify/functions'
    : 'https://movietab-extension.netlify.app/.netlify/functions'

export async function fetchMovies(type = 'popular'): Promise<Movie[]> {
  const response = await fetch(`${BASE_URL}/movies?type=${type}`)
  const data: MovieListResponse = await response.json()
  return data.results
}
