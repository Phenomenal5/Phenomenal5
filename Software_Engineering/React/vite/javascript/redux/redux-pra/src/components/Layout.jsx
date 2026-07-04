import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
      <div className='flex'>
        <Sidebar />
        <main className='mt-14 ml-50 flex-1 p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout