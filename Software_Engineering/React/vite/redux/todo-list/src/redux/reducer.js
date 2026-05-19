import { ADD_TASK, DELETE_TASK, CHECK_TASK } from "./action";


//  Define initial state
const initialState = {
    tasks : []
}

// Create the reducer function

export const taskReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks : [...state.tasks, {id : action.payload.id , title : action.payload.title , completed : false}]
            }
        case DELETE_TASK:
            return {
                tasks : state.tasks.filter(task => task.id !== action.payload.id)
            }
        case CHECK_TASK:
            return {
                tasks : state.tasks.map(task => task.id === action.payload.id ? {...task , completed : !task.completed} : task)
            }
        default:
            return state;
    }
}