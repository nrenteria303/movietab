import {useEffect} from 'react'
import Glide, { Controls, Breakpoints, Autoplay } from "@glidejs/glide/dist/glide.modular.esm";
import type { Movie } from '../../types/tmdb'
import MovieCard from './MovieCard'

import './MovieSlider.css'

const MovieSlider = ({ movies }: { movies: Movie[] }) => {
    const initGlide = () => {
      new Glide(".glide", {
        type: "carousel",
        perView: 4,
        gap: 10,
        autoplay: 3200,
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
        Breakpoints,
        Autoplay
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
            <div data-glide-el="controls" className="glide__arrows">
                <button data-glide-dir="<" className="glide__arrow glide__arrow--prev" aria-label="Previous slide">&lt;</button>
                <button data-glide-dir=">" className="glide__arrow glide__arrow--next" aria-label="Next slide">&gt;</button>
            </div>
        </section>
    )
}

export default MovieSlider