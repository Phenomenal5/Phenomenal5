import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import EmailContact from '../component/EmailContact'
import GenericContact from '../component/GenericContact'

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <nav>
                <Link to= '/contact/'>Email</Link> <Link to= '/contact/GenericContact'>contact</Link>
            </nav>
            {/* <Routes>
                <Route path='/' element = {<EmailContact />} />
                <Route path='/genericcontact' element = {<GenericContact />} />
            </Routes> */}
            <Outlet />
        </div>
    )
}

export default Contact