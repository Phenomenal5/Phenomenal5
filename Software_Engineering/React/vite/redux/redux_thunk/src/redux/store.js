import { use } from "react";
import { createStore , applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers";

export const store = createStore( userReducer, applyMiddleware(thunk))