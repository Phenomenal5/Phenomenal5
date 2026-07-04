import { useState , useEffect }from 'react'
import axios from 'axios'
import type { User } from '../types'

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)

    const fetchUsers = async () => {
        try {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>User List</h2>
        <ul className='space-y-2'>
            {users.map(user => (
                <li key={user.id} className='border-b py-2'>
                    <h3 className='font-semibold'>{user.name}</h3>
                    <p className='text-sm text-gray-600'>{user.email}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList