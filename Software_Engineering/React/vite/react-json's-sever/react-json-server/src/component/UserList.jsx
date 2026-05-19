import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const UserList = () => {


    const [users, setUsers] = useState([])

    const getUsersList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users')
            
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUsersList()
    },[])



console.log(users)


    return (
      <div className='users-list'>
        <h1>User List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
}

export default UserList