import React, { useState } from 'react'
import { moviesData } from '../data'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    
    
    return (
        <div className='movie-section'>
            <h1>MOVIES</h1>
            <div className='movie-list'>
                {props.moviesData.map((movie) => (
                    <MovieCard movie = {movie}/>
                ))}
            </div>
            
        </div>
    )
}

export default MoviesList