import { useEffect, useState } from 'react'

export default function MovieCard({ movie }: { movie: any }) {
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
        <div>
            {imageSrc && <img src={imageSrc} alt={movie.title} />}  
        </div>
    )
}
    