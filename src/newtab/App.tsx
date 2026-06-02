import { useEffect, useState } from 'react'
import { fetchMovies } from '../api/tmdb'

import MovieSlider from './components/MovieSlider'

import type { Movie } from '../types/tmdb'

import './App.css'

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetchMovies('now_playing').then(setMovies)
  }, []) // empty array as second argument to run only once on mount

  return (
    <div className="movietab-app">
      <img src="/images/now_showing.png" alt="Now Showing" className="hero-marquee" />
      
      {(!movies || movies.length == 0) && <div className="movie-slider__loader"></div>}
      {movies.length > 0 && <MovieSlider movies={movies} />}
      
    </div>
  )
}