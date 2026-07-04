import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'

const TodoForm = () => {
    const { addTodo } = useTodoContext()
    const [text , setText] = useState<string>('')

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

  return (
    <form className="flex my-4 gap-2" onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Add a new task' className='flex-1 p-2 border border-gray-300 rounded-l' />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Add</button>
    </form>
  )
}

export default TodoForm