import { useState }from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(Number(0))
  return (
    <div className='w-full text-center'>
        <h2>counter: {counter}</h2>
        <div>
            <button onClick={() => setCounter(counter + 1)} className='bg-blue-500 text-white p-2 rounded-lg'>+</button>
            <button onClick={() => setCounter(counter - 1)} className='bg-red-500 text-white p-2 rounded-lg'>-</button>
        </div>
    </div>
  )
}

export default Counter