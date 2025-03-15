import { combineReducers, createStore } from "redux";
import { todoReducer } from "../Reducer/reducer";



export const store =  createStore(todoReducer)