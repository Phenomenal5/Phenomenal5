import React from 'react'

const MovieCard = ({movie}) => {
    const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <div>
            <img src={poster} width={500} height={500} alt={`${movie.title} poster image`} />
            {movie.title}
        </div>
    )
}

export default MovieCard