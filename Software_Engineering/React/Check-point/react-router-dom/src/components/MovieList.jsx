import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {movies.map((movie, index) => (
        <div key={index} className="p-4">
          <MovieCard movie = {movie}/>
        </div>
      ))}
    </div>
  )
}

export default MovieList