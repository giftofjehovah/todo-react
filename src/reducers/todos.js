import { ADD_TODO,
         DELETE_TODO,
         MARK_TODO_DONE,
         MARK_TODO_UNDONE,
         MARK_ALL_TODOS_DONE,
         MARK_ALL_TODOS_UNDONE,
         CLEAR_ALL_TODOS } from '../constants/actionTypes'
import Immutable from 'immutable'
const initialState = Immutable.List([
  Immutable.Map({
    text: 'Use Redux',
    completed: false,
    id: 0
  })
])

export function todo (state, action) {
  switch (action.type) {
    case ADD_TODO:
      return Immutable.Map({
        text: action.text,
        completed: false,
        id: state.size ? state.first().get('id') + 1 : 0
      })
    case MARK_TODO_DONE:
      return state.merge(Immutable.Map({completed: true}))
    case MARK_TODO_UNDONE:
      return state.merge(Immutable.Map({completed: false}))
    default:
      return state
  }
}
export function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.unshift(todo(state, action))
    case DELETE_TODO:
      return state.filter(x => x.get('id') !== action.id)
    case MARK_TODO_DONE:
      return state.map(x => x.get('id') === action.id ? todo(x, action) : x)
    case MARK_TODO_UNDONE:
      return state.map(x => x.get('id') === action.id ? todo(x, action) : x)
    case MARK_ALL_TODOS_DONE:
      return state.map(x => x.merge(Immutable.Map({completed: true})))
    case MARK_ALL_TODOS_UNDONE:
      return state.map(x => x.merge(Immutable.Map({completed: false})))
    case CLEAR_ALL_TODOS:
      return Immutable.List()
    default:
      return state
  }
}
