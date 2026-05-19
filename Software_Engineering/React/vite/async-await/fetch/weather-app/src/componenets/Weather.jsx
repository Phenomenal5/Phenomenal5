import React, { useEffect, useState } from 'react'
import "../App.css"

const Weather = () => {
const [cityName, setCityName] = useState('');
const [weatherData, setWeatherData] = useState({})
// const [isLoading, setIsLoding] = useState(true)
const API_KEY = '7a2cc6a5c64bab16b77d9c218083b9e9'

    const getWeather = async () => {
        
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
            );
            // setIsLoding(false)
            const data = await response.json()
            setWeatherData(data);
        } catch (error) {
            console.error(error);
        } 
        
    }
    console.log(weatherData)
    

    return (
        <div className='mx-auto w-80'>
            <h1 className='text-3xl font-bold text-center'>WEATHER APP</h1>
            <div>
                <img src= {`https://openweathermap.org/img/wn/${weatherData?.main && weatherData.weather[0].icon}@4x.png`} alt="" />
                <fieldset>
                    {/* <select name="cities" onChange={(e) => setCityName(e.target.value)} value={cityName}>
                        <option value="" disabled>Select city .....</option>
                        <option value="london">London</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="canada">Canada</option>
                        <option value="new york">New York</option>
                    </select> */}
                    <input type="text" placeholder = 'Enter a city...' value = {cityName} onChange = {(e) => setCityName(e.target.value)} className='border border-black'/>
                </fieldset>
                <button onClick={getWeather} className='bg-gray-700 font-semibold rounded p-0.5 mx-1'>Search</button>

                {/* <h1>city Name : {weatherData?.name && weatherData.name}</h1>
                <p>Temperature: {weatherData?.main&&weatherData.main.temp} C</p>
                <p>Humidity: {weatherData?.main&&weatherData.main.humidity} %</p>
                <p>Wind Speed: {weatherData?.wind&&weatherData.wind.speed} km/h</p> */}

                {/* OR */}
                {
                    weatherData?.main
                    &&
                    <div>
                        <h1>city Name : {weatherData.name}</h1>
                        <p>Temperature: {weatherData.main.temp} C</p>
                        <p>Humidity: {weatherData.main.humidity} %</p>
                        <p>Wind Speed: {weatherData.wind.speed} km/h</p>
                    </div>
                }
            </div>
            
        </div>
    )
}

export default Weather