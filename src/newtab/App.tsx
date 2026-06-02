import { useEffect, useState } from 'react'
import { fetchMovies } from '../api/tmdb'
import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm'
import MovieCard from './components/MovieCard'
import type { Movie } from '../types/tmdb'

import './App.css'

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  const initGlide = () => {
    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      gap: 10,
      focusAt: 'center',
    }).mount({
      Controls,
    })
  }

  useEffect(() => {
    fetchMovies('now_playing').then(() => {
      console.log('Movies fetched successfully')
      return setMovies
    }).then(() => {
      console.log('Initializing Glide...')
      setTimeout(initGlide, 200)
    })
  }, [])

  return (
    <div>
      <img src="/images/now_showing.png" alt="Now Showing" className="hero-marquee" />
      <section className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {movies.map((m) => (
              <li key={m.id} className="glide__slide">
                <MovieCard movie={m} />
              </li>
            ))}
          </ul>
        </div>
        <div data-glide-el="controls">
          <button data-glide-dir="<">Prev</button>
          <button data-glide-dir=">">Next</button>
        </div>
      </section>
    </div>
  )
}