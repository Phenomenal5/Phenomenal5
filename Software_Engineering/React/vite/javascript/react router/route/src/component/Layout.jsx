import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <nav className='bg-gray-200 p-4 h-10 flex items-center justify-around'>
            <Link to={'/'} >Home</Link>
            <Link to={'/products'}>Products</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout