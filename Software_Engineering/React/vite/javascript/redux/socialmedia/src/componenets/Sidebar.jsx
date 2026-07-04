import React from 'react'
import {Home, User, Bell, Settings} from 'lucide-react'

const Sidebar = () => {

    const sidebarLinks = [
        {text : 'Home' , icon : <Home />, link : '/'},
        {text : 'Profile' , icon : <User />, link : '/profile'},
        {text : 'Notification' , icon : <Bell />, link : '/notification'},
        {text : 'Settings' , icon : <Settings />, link : '/settings'},
    ]
    return (
        <div className='fixed mt-14 h-screen p-4 border-r border-r-gray-100'>
            <ul>
                {sidebarLinks.map((link) => (
                    <li key={link.text} className='flex items-center gap-8 p-2 hover:bg-gray-400'>
                        {link.icon}
                        <span>{link.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar