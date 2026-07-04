import React, { useState } from 'react'

const Form = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`Details: ${inputValue}`)
    }
  return (
    <form action="" className='p-6 bg-gray-200 rounded-lg shadow-lg space-y-4' onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} type="text" placeholder='Enter something...' className='border border-gray-300 p-2 rounded-lg w-full'/>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg'>Submit</button>
    </form>
  )
}

export default Form