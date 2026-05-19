import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'

const GameList = () => {

    const [games, setGames] = useState([])

    // Function to fecth data
    const getGameList = async () => {
        try {
            const response = await axios.get('https://jsonfakery.com/games/paginated')
            
            let gamesList = response.data.data;
            setGames(gamesList)
            
        } catch (error) {
            console.error(error)
        }
    }

        useEffect(() => {
            getGameList()
        },[])


    return (
        <div className='h-screen text-4xl'>
            <h1 className='text-xl font-semibold text-center'>ALL GAMES LIST</h1>
            <div className="grid grid-cols-4 p-6 gap-9">
                {
                    games.map(game => (
                        <GameCard key={game.id} game={game}/>
                    ))
                }
            </div>
            
        </div>
    )
}

export default GameList