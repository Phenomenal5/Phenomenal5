import { createStore, applyMiddleware } from "redux";
import { postReducer } from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(postReducer, applyMiddleware(thunk))