import React, { useState } from 'react'
import toast from 'react-hot-toast'
import API from '../api/api'
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    })
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await API.post("/auth/sign-up", {...formData, age: parseInt(formData.age)})
            if (response.status === 201) {
                toast.success(response.data.message)
                setFormData({name: "", email: "", password: "", age: ""})
            }
            navigate("/login")
        } catch (error) {
            toast.error("Problem when trying to create account")
        }
    }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow w-96'>
            <h2 className='text-2xl font-bold my-4'>Register</h2>
            <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder='Your Full Name' className='w-full border border-gray-200 p-2 mb-3' />
            <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder='Email' className='w-full border border-gray-200 p-2 mb-3' />
            <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} type="text" placeholder='Password' className='w-full border border-gray-200 p-2 mb-3' />
            <input value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} type="text" placeholder='age' className='w-full border border-gray-200 p-2 mb-3' />
            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer' >Register</button>
        </form>
        <div className='absolute bottom-4 text-center w-full'>
            <p className='mt-4'>Already have an account? <Link to="/login" className='text-blue-500 cursor-pointer'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register