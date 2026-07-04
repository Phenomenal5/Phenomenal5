import React from 'react'
import {Home, User, Bell, Settings, Users} from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const sidebarLinks = [
        {text : 'Home' , icon : <Home />, link : '/'},
        {text : 'Profile' , icon : <User />, link : '/profile'},
        {text : 'Friends' , icon : <Users />, link : '/friends'},
        {text : 'Notification' , icon : <Bell />, link : '/notification'},
        {text : 'Settings' , icon : <Settings />, link : '/settings'},
    ]
    return (
        <div className='fixed mt-14 h-screen p-4 border-r border-r-gray-100'>
            <ul>
                {sidebarLinks.map((link) => (
                    <Link key={link.text} className='flex items-center gap-8 p-2 hover:bg-gray-400' to={link.link}>
                        {link.icon}
                        <span>{link.text}</span>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar