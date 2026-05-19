import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkTask, deleteTask } from '../redux/action'

const TaskList = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{cursor: 'pointer', textDecoration : task.completed ? "line-through" : "none"}} onClick={() => dispatch(checkTask(task))}>{task.title}</span>
                        <button onClick={() => dispatch(deleteTask(task))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList