import axios from "axios";

const CONSTANTS = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: '8dd654895f7123b075cb365650cc2c31',
    ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGQ2NTQ4OTVmNzEyM2IwNzVjYjM2NTY1MGNjMmMzMSIsIm5iZiI6MTc1MzQwNTU3Ny4wNzgsInN1YiI6IjY4ODJkODg5OTIwZWNhZjI5ZjI0NWQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDiwK7aPLZR_ceqfEXSSryWVSm7D9XOubijk_blUJ9Q'
}

export const searchMovies = async (query ='') => {
    try {
        const url = `${CONSTANTS.BASE_URL}/search/movie?query=${query}`
        const response = await axios.get(url, {
            headers: {
                'Authorization' : `Bearer ${CONSTANTS.ACCESS_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error fetching movies', error);
        return null;
    }
}