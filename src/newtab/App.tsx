import { useEffect, useState } from 'react'
import { fetchPopularMovies } from '../api/tmdb'

export default function App() {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    fetchPopularMovies().then(setMovies)
  }, [])

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  )
}