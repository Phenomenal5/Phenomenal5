import React from 'react'

const Card = ({ title , description}) => {
  return (
    <div className='border p-4 rounded-lg shadow-lg'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='text-gray-600'>{description}</p>
    </div>
  )
}

export default Card