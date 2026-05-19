import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex items-center justify-center'>
        <h1 className='font-semibold '>Home Page 🏡</h1>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Home