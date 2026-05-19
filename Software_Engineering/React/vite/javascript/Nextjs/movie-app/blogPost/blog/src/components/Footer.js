import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-center text-gray-600'>
        <p>© {new Date().getFullYear()} My Blog App</p>
    </footer>
  )
}

export default Footer