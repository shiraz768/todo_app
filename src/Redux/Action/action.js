import { ADD_TODO, FLITER_TODO, MARK_ALL_COMPLETED_TODO, MARK_ALL_INCOMPLETE_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actionTypes"


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: { text },
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: { id },
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: { id },
    }
}
export const markCompletedTodo = (id) => {
    return {
        type: MARK_COMPLETED_TODO,
        payload: { id },
    }
}
export const markIncompleteTodo = (id) => {
    return {
        type: MARK_INCOMPLETE_TODO,
        payload: { id },
    }
}

export const markAllCompleteTodo = () => {
    return {
        type: MARK_ALL_COMPLETED_TODO,
    }
}
export const markAllInCompleteTodo = () => {
    return {
        type: MARK_ALL_INCOMPLETE_TODO
    }
}


export const filterTodo = (filter)=>{
    return {
    type: FLITER_TODO,
    payload: {filter}
    }
}


export const searchTodo = (search)=>{
    return {
    type: SEARCH_TODO,
    payload: {search}
    }
}

// console.log(searchTodo("React"));
