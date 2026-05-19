import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/login');
  }

  return (
    <div>
      <h2 >Welcome to Dashboard 👋</h2>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">Logout</button>
    </div>
  )
}

export default Dashboard