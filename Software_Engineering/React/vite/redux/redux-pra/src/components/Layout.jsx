import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Navbar />
      <div className='flex'>
        <Sidebar />
        <main className='mt-14 ml-50 flex-1 p-4'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout