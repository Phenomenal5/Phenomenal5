import React from 'react'
import { useTodoContext } from '../context/TodoContext'

const TodoFilter = () => {
  const { filter , setFilter } = useTodoContext()
  return (
    <div className='flex justify-center gap-4 mt-4'>
        <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : ''}`}>All</button>
        <button onClick={() => setFilter('active')} className={`px-4 py-2 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : ''}`}>Active</button>
        <button onClick={() => setFilter('completed')} className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : ''}`}>Completed</button>
    </div>
  )
}

export default TodoFilter