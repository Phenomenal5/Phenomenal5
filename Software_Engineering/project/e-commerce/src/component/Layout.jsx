import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full'>
        <header>
            <Header />
            <Navbar />
        </header>
        <div  className='max-w-[80%] mx-auto'>
            <div className=" text-[1rem] font-light w-full">
                <div className='border-r border-r-[hsla(0,0%,0%,0.3)] pr-5'>
                    <Sidebar />
                </div>
                <div className='mx-auto'>
                    <Hero />
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
        
        <Footer />
    </div>
  )
}

export default Layout