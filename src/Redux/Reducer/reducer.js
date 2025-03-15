// ../Redux/reducers/todoReducer.js

import { ADD_TODO, FLITER_TODO, MARK_ALL_COMPLETED_TODO, MARK_ALL_INCOMPLETE_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, TOGGLE_TODO } from "../Action/actionTypes";

const initialState = {
    todos: [],
    filter: "ALL",
    search: ""
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text, completed: false }],
                filter: state.filter,
                search: state.search
            };

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload.id),
                filter: state.filter,
                search: state.search
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
                filter: state.filter,
                search: state.search
            };

        case MARK_COMPLETED_TODO:
            return {
                ...state,
                todos:[...state.todos.map((todo,index)=> index === action.payload.id? {...todo, completed: true } : todo)],
                filter:state.filter,
                search: state.search
            }
            case MARK_INCOMPLETE_TODO:
                return {
                    ...state,
                    todos: [...state.todos.map((todo,index)=> index === action.payload.id? {...todo, completed: false } : todo)],
                    filter:state.filter,
                    search: state.search
                }
                case MARK_ALL_COMPLETED_TODO:
                    return {
                        ...state,
                        todos: state.todos.map(todo => ({...todo, completed: true })),
                        filter:state.filter,
                        search: state.search
                    }

                    case MARK_ALL_INCOMPLETE_TODO:
                    return {
                        ...state,
                        todos: state.todos.map(todo => ({...todo, completed: false })),
                        filter:state.filter,
                        search: state.search
                    }
        case FLITER_TODO:
            return {
                ...state,
                todos: state.todos,
                filter: action.payload.id,
                search: state.search
            }
        default:
            return state;
    }
};

export default todoReducer;
