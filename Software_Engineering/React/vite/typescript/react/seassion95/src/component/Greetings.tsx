import React from 'react'

interface GreetingProps {
    name: string
    age: number
}

const Greetings: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div className='shadow bg-blue-200 p-3'>
        <h2>{name}</h2>
        <p>{age}</p>
    </div>
  )
}

export default Greetings