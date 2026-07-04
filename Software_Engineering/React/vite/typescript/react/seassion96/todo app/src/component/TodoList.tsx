import React from 'react'
import { useTodoContext } from '../context/TodoContext'

const TodoList = () => {
  const { todos , toggleTodo , deleteTodo , filter } = useTodoContext()

    const filtered = filter === "all"
                    ? todos
                    : filter === "active"
                    ? todos.filter((todo) => !todo.completed)
                    : todos.filter((todo) => todo.completed);

  return (
    <div>
        <ul className='space-y-2'>
            {filtered.map(todo => (
                <li key={todo.id} className={`flex items-center justify-between p-2 border ${todo.completed ? 'bg-green-100' : ''}`}>
                    <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}>
                        {todo.text}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)} className='text-red-500'>Delete</button>
                </li>
            ))}
            {
                filtered.length === 0 && <li className='text-center text-gray-500'>No tasks available</li>
            }
        </ul>
    </div>
  )
}

export default TodoList