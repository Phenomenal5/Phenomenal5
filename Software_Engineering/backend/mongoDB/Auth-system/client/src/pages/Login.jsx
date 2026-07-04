import React, { useState } from 'react'
import API from '../api/api'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'


const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const { login, setLoading, setUser } = useAuth()

  const navigator = useNavigate()




  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await API.post('/auth/login', form)
      if (response.status === 200) {
        setUser(response.data)
        setLoading(false)
        login(response.data)
        navigator("/")
      }
    } catch (error) {
      toast.error("Problem when trying to login")
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <form onSubmit={handleLogin} className='bg-white p-6 rounded shadow w-96'>
            <h2 className='text-2xl font-bold my-4'>Login</h2>
            <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} type="email" placeholder='Email' className='w-full border border-gray-200 p-2 mb-3' />
            <input value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} type="text" placeholder='Password' className='w-full border border-gray-200 p-2 mb-3' />
            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer' >Login</button>
            <div className='flex items-center'>
            <p>Don't have an account?</p>
            <Link to="/register" className=' text-blue-500 py-2 px-4 rounded-md cursor-pointer' >Register</Link>
        </div>
        </form>
        
    </div>
  )
}

export default Login