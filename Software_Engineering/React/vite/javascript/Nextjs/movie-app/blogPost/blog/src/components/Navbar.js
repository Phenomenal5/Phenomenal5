import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-300 text-white p-4'>
        <div className='container flex gap-6 mx-auto'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/portfolio">Portfolio</Link>
        </div>
    </nav>
  )
}

export default Navbar