import React from 'react'
import TodoForm from './component/TodoForm'
import { TodoProvider } from './context/TodoContext'
import TodoList from './component/TodoList'
import TodoFilter from './component/TodoFilter'

const App = () => {
  return (
    <TodoProvider>
      <div className='h-screen flex items-center justify-center bg-gray-100'>
        <div className='w-full max-w-md p-8 bg-white rounded shadow-lg'>
          <h1 className='text-3xl font-bold text-gray-800'>Todo App</h1>
          <TodoForm />
          <TodoList />
          <TodoFilter />
        </div>
      </div>
    </TodoProvider>
    
  )
}

export default App