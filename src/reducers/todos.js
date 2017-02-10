import { ADD_TODO,
         DELETE_TODO,
         MARK_TODO_DONE,
         MARK_TODO_UNDONE,
         MARK_ALL_TODOS_DONE,
         MARK_ALL_TODOS_UNDONE,
         CLEAR_ALL_TODO } from '../constants/actionTypes'
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]
export function todo (state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        completed: false,
        id: state.length ? [...state].shift().id + 1 : 0
      }
    case MARK_TODO_DONE:
      return Object.assign({}, state, {completed: true})
    case MARK_TODO_UNDONE:
      return Object.assign({}, state, {completed: false})
    default:
      return state
  }
}
export function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [todo(state, action), ...state]
    case DELETE_TODO:
      return state.filter(x => x.id !== action.id)
    case MARK_TODO_DONE:
      return state.map(x => x.id === action.id ? todo(x, action) : x)
    case MARK_TODO_UNDONE:
      return state.map(x => x.id === action.id ? todo(x, action) : x)
    case MARK_ALL_TODOS_DONE:
      return state.map(x => Object.assign({}, x, {completed: true}))
    case MARK_ALL_TODOS_UNDONE:
      return state.map(x => Object.assign({}, x, {completed: false}))
    case CLEAR_ALL_TODO:
      return []
    default:
      return state
  }
}
