import { useEffect, useState } from 'react'
import { fetchMovies } from '../api/tmdb'
import MovieCard from './components/MovieCard'

export default function App() {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    fetchMovies('now_playing').then(setMovies)
  }, [])

  return (
    <div>
      <h1>Now in Theaters</h1>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <MovieCard movie={m} />
          </li>
        ))}
      </ul>
    </div>
  )
}