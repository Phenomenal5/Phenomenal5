import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-64 bg-white shadow p-4'>
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-3">
            <Link className='block hover:bg-gray-300 rounded px-3 py-2' to="/">Home</Link>
            <Link className='block hover:bg-gray-300 rounded px-3 py-2' to="/profile">Profile</Link>

            <Link className='block hover:bg-gray-300 rounded px-3 py-2' to="/admin">Users Managment</Link>
        </nav>
    </div>
  )
}

export default SideBar