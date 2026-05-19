import React, { Children } from 'react'
import { isAuthenticated } from './auth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    if(!isAuthenticated()) {
        return <Navigate to='/login' />
    }
    
    return children
}

export default ProtectedRoute