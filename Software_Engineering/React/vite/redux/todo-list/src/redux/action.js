export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const CHECK_TASK = 'CHECK_TASK'







export const addTask = (title) => ({type : ADD_TASK , payload : {id : Date.now() , title}})
export const deleteTask = (task) => ({type : DELETE_TASK , payload : task})
export const checkTask = (task) => ({type : CHECK_TASK , payload : task})