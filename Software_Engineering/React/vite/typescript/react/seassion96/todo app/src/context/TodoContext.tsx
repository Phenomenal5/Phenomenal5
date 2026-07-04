import React , { createContext, useContext , useState } from "react";
import type { Filter, Todo } from "../types";



// Define the context shape (what data and functions we share globally)
interface TodoContextType {
    todos : Todo[],
    filter : Filter,
    addTodo : (text : string) => void // Function that returens nothing.(just update / displaye message ...)
    toggleTodo : (id : number) => void
    deleteTodo : (id : number) => void
    setFilter : (filter : Filter) => void
}



// Create the context with a default value of undefined
const TodoContext = createContext<TodoContextType | undefined>(undefined)


// Provider component to wrap children
export const TodoProvider = ({children} :{children : React.ReactNode}) => {
    
    const [todos , setTodos] = useState<Todo[]>([])
    const [filter , setFilter] = useState<Filter>("all")


    // Add a new todo
    const addTodo = (text : string) => {
        const newTodo : Todo = {id : Date.now() , text , completed : false}
        setTodos([...todos, newTodo])
    }


    // Toggle complete
    const toggleTodo = (id : number) => {
        setTodos(todos.map(item => item.id === id ? {...item , completed : !item.completed} : item))
    }


    // Delete a todo
    const deleteTodo = (id : number) => {
        setTodos(todos.filter(item => item.id !== id))
    }















    return (
        <TodoContext.Provider value={{todos , filter , addTodo , deleteTodo , toggleTodo , setFilter}}>
            {children}
        </TodoContext.Provider>
    )
}


// Custom hook to use the TodoContext
export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("Problem when we try to provide data from TodoContext");
    }
    return context;
};