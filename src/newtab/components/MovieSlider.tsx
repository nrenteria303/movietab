import {useEffect} from 'react'
import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.modular.esm";
import type { Movie } from '../../types/tmdb'
import MovieCard from './MovieCard'

const MovieSlider = ({ movies }: { movies: Movie[] }) => {
    const initGlide = () => {
      new Glide(".glide", {
        type: "carousel",
        perView: 4,
        gap: 10,
        autoplay: 3000,
        hoverpause: true,
        breakpoints: {
            1200: {
                perView: 3
            },
            800: {
                perView: 2
            },
            500: {
                perView: 1
            }
        }
      }).mount({
        Controls,
        Breakpoints
      });
    };

    useEffect(() => {
        initGlide()
    }, []) // empty array as second argument to run only once on mount

    return (
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
    )
}

export default MovieSlider