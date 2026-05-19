import { taskReducer } from "./reducer";
import { createStore } from "redux";


export const store = createStore(taskReducer)