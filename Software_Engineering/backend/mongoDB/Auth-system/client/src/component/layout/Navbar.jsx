import React from 'react'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  return (
    <div className='bg-white shadow flex justify-between items-center px-6 py-3'>
      <h1 className='text-xl font-bold'>Welcome, {user?.name.split(" ")[0]}</h1>
      <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600' onClick={logout}>
        Logout
      </button>
    </div>
    
  )
}

export default Navbar