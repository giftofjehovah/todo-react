import * as types from '../constants/actionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const markTodoDone = id => ({ type: types.MARK_TODO_DONE, id })
export const markTodoUndone = id => ({ type: types.MARK_TODO_UNDONE, id })
export const markAllTodosDone = () => ({ type: types.MARK_ALL_TODOS_DONE })
export const markAllTodosUndone = () => ({ type: types.MARK_ALL_TODOS_UNDONE })
export const clearAllTodos = () => ({ type: types.CLEAR_ALL_TODOS })
