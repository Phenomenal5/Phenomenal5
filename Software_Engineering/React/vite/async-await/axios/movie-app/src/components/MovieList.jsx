import React, { useState } from 'react'
import { searchMovies } from '../apiService'
import MovieCard from './MovieCard'

const MovieList = () => {
    const [movies, setMovies] = useState([])  // an empty list default
    const [searchQuery, setSearchQuery] = useState('')

    const onInputChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    const handleSearch = async () => {
        const response = await searchMovies(searchQuery);
        if (response.results) {
            setMovies(response.results);
        }
    }
    
    return (
        <div className='mx-5 p-5'>
            <div className='bg-gray-400 p-3 '>
                <input value={searchQuery} onChange={onInputChange} className='border border-gray-100 p-0.5'/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='grid grid-cols-5 gap-5'>
                {movies.map((movie, index) => (<MovieCard movie={movie} key={index}/>))}
            </div>
            
        </div>
    )
}

export default MovieList