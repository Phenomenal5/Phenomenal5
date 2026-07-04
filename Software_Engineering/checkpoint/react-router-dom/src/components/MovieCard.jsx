import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='border p-4 rounded-md shadow-md i'>
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p className="text-gray-600">{movie.description}</p>
      <p className="text-gray-600">Rating: {movie.rating}</p>
    </div>
  )
}

export default MovieCard