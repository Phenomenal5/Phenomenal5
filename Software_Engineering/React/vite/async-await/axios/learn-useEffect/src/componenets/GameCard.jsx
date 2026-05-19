import React from 'react'

const GameCard = ({game}) => {
  return (
    <div className='border shadow flex flex-col gap-16 items-center h-96'>
        <img width={400} height={400} src={game.background_image} alt={game.name + 'image poster'} />
        <div className="flex items-center justify-between font-bold">
            <h1 className='w-1/2'>{game.name}</h1>
            <p>{game.released}</p>
        </div>
        
    </div>
  )
}

export default GameCard