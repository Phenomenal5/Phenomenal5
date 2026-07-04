import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user, logout } = useAuth()
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-lg rounded-md w-96 text-base flex flex-col items-center p-6'>
        <h1 className='font-bold text-2xl mb-2'>welcome, {user?.name}</h1>
        <p className='text-sm'>Email: {user?.email}</p>
        <button onClick={logout} className='bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer mt-4'>logout</button>
      </div>
    </div>
  )
}

export default Dashboard