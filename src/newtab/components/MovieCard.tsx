import { useEffect, useState } from 'react'
import type { Movie } from '../../types/tmdb'
import './MovieCard.css'

export default function MovieCard({ movie }: { movie: Movie }) {
    const imagePathPrepender = 'https://image.tmdb.org/t/p/{size}/{poster_path}'
    const [imageSrc, setImageSrc] = useState('')

    useEffect(() => {
        if (movie.poster_path) {
            const src = imagePathPrepender
                .replace('{size}', 'w342')
                .replace('{poster_path}', movie.poster_path)
            setImageSrc(src)
        }
    }, [movie.poster_path])

    return (
        <div className="movie-card">
            {imageSrc && <img src={imageSrc} alt={movie.title} className="movie-card__img" />}  
        </div>
    )
}
    