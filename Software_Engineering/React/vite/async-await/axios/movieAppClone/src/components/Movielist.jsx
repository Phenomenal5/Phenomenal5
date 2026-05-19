import React, { useState } from 'react'
import { searchMovie } from '../apiService'
import MovieCard from './MovieCard';

const Movielist = () => {

    const [input, setInput] = useState('');
    const [movies, setMovies] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault()
        setInput(e.target.value);
    }

    const handleSearchQuery = async () => {
        const response = await searchMovie(input);
        if(response.results) {
            setMovies(response.results);
        }
    }

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={handleInputChange}/>
                <button onClick={handleSearchQuery}>Search</button>
            </div>
            <div>
                {movies.map(movie => (
                    <MovieCard movie= {movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Movielist