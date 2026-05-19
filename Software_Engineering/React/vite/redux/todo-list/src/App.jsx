import './App.css'
import TaskForm from './component/TaskForm'
import TaskList from './component/TaskList'

function App() {

  return (
    <div>
      <h1>📝 Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
