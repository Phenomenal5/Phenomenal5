import { Heart, Search } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {ReactComponent as Cart} from '../assets/icon/Cart1.svg'

const Navbar = () => {
    const links = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Contact",
            path: "/contact"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Sign Up",
            path: "/about"
        }
    ]


  return (
    <div className='flex items-end border-b border-b-[hsla(0,0%,0%,0.3)] h-20'>
        <div className='flex items-center justify-around w-[100%] p-2 mb-1'>
            <div className='text-[1.5rem] font-bold'>
                Exclusive
            </div>
            <div className='space-x-5 text-[1rem] font-light'>
                {
                    links.map((link, index) => (
                        <NavLink to = {link.path} key={index} className={({isActive}) => isActive ? 'border-b border-b-gray-700' : ''}>{link.label}</NavLink>
                    ))
                }
            </div>
            <div className='flex items-center space-x-5'>
                <div className='flex bg-[#f5f5f5] pl-4 pr-2 py-1'>
                    <input type="text" placeholder='What are you looking for?'/><Search size={25} color='#000000'/>
                </div>
                <Heart />
                <Cart className = ''/>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar