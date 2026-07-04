// import React from 'react'
import Button from './component/Button'
import Counter from './component/Counter'
import Form from './component/Form'
import Greetings from './component/Greetings'
import UserList from './component/UserList'

const App = () => {
  return (
    <div>
      <Greetings name="John" age={30} />
      <Counter />
      <Form />
      <Button label='Click Me' type='danger'/>
      <UserList />    
    </div>
  )
}

export default App