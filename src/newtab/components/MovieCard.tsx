// import { useState } from 'react'
import type { Movie } from '../../types/tmdb'
import './MovieCard.css'

export default function MovieCard({ movie }: { movie: Movie }) {
    const imagePathPrepender = 'https://image.tmdb.org/t/p/{size}/{poster_path}'
    const imageSrc = movie.poster_path ? imagePathPrepender
        .replace('{size}', 'w780')
        .replace('{poster_path}', movie.poster_path) : null
    const formattedDate = new Date(movie.release_date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="movie-card">
            {imageSrc && <img src={imageSrc} alt={movie.title} className="movie-card__img" />}
            {!imageSrc && <div className="movie-card__placeholder">Movie Poster Unavailable</div>}
            <div className="movie-card__info">
                <h3 className="movie-card__title">{movie.title}</h3>
                <p className="movie-card__release-date">
                    <strong>Release Date:</strong>
                    <span>{formattedDate}</span>
                </p>
                <p className="movie-card__overview">{movie.overview}</p>
                <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer" className="movie-card__link">View on TMDb</a>
                <a href={`https://google.com/search?q=${encodeURIComponent(movie.title + ' movie')}+showtimes`} target="_blank" rel="noopener noreferrer" className="movie-card__link">Look for Showtimes</a>
            </div>
        </div>
    )
}
    