import { use, Suspense } from 'react'
import { fetchTasks } from '../features/tasks/task.api'
import axios from 'axios'

const Task = () => {
    const [tasks, setTasks] = useState([])

    const getTodos = async() => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getTodos()
    }, [])

    const todos = use(getTodos())
    console.log(todos)

    //  use() : using promises inside components
    // Works with suspense
  return (
    <Suspense fallback={<p>Loading....</p>}>
        <h1>Tasks</h1>

    </Suspense>
  )
}

export default Task