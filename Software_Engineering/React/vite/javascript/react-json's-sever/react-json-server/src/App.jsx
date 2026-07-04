import React from 'react'
import UserList from './component/UserList'
import AddUser from './component/AddUser'

const App = () => {
  return (
    <div className='app'>
      <h1>Demo with JSON-SERVER</h1>
      <UserList />
      
      <AddUser />
    </div>
  )
}

export default App