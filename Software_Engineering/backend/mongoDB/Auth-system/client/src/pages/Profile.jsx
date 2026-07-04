import React from 'react'
import userAvata from "../assets/user.png"
import { useAuth } from '../context/AuthContext'
import API from '../api/api'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const Profile = () => {
  const { user, setUser } = useAuth()
  const [formDatas, setFormDatas] = React.useState({
    name: user?.name || '',
    email: user?.email || '',
    file: null
  })

  const getPhotoUrl = (photo) => {
    if (!photo) return userAvata

    const cleanPhoto = photo.replaceAll("\\", "/").replace(/^public\//, "")
    return `http://localhost:5000${cleanPhoto.startsWith("/") ? cleanPhoto : `/${cleanPhoto}`}`
  }

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    setFormDatas({...formDatas, file})
  }

  const updateProfile = async () => {
    try {
      const formData = new FormData()

      formData.append("name", formDatas.name)
      formData.append("email", formDatas.email)
      if (formDatas.file) {
        formData.append("photo", formDatas.file)
      }

      const response = await API.put("/users/update-me", formData, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
         }
      })

      console.log(response)
      if (response.status === 200) {
        setUser(response.data.user)
        setFormDatas({
          name: response.data.user.name || '',
          email: response.data.user.email || '',
          file: null
        })
        toast.success("Profile updated successfully")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Failed to update profile")
    }
  }

  useEffect(() => {
    if (user) {
      setFormDatas({
        name: user.name || '',
        email: user.email || '',
        file: null
      })
    }
  },[user])

  return (
    <div>
      <h1>My Profile</h1>
      <div className='flex flex-col items-center mb-4'>
        <img src={getPhotoUrl(user?.photo)} alt='profile picture' className='w-32 h-32 rounded-full object-cover' />

        <label htmlFor="image" className='bg-blue-500 mt-4 cursor-pointer text-white px-4 py-2 text-xl rounded-lg'>
          Change Photo 
        </label>
          <input id="image" type="file" accept="image/*" className='border border-gray-200' onChange={handlePhoto} />
      </div>
      <div>
        <input type="text" placeholder='Name' className='w-full mb-4 p-2 border rounded-lg' value={formDatas.name} onChange={(e) => setFormDatas({...formDatas, name: e.target.value})} />
        <input type="email" placeholder='Email' className='w-full mb-4 p-2 border rounded-lg' value={formDatas.email} onChange={(e) => setFormDatas({...formDatas, email: e.target.value})} />
        <button onClick={updateProfile} className='bg-green-500 text-white px-4 py-2 rounded-lg'>Save Changes</button>
      </div>
    </div>
  )
}

export default Profile
