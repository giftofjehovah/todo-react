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
  const reducers = {
    [ADD_TODO]: () => Immutable.Map({
      text: action.text,
      completed: false,
      id: state.size ? state.first().get('id') + 1 : 0
    }),
    [MARK_TODO_DONE]: () => state.merge(Immutable.Map({completed: true})),
    [MARK_TODO_UNDONE]: () => state.merge(Immutable.Map({completed: false})),
    DEFAULT: () => state
  }
  return (reducers[action.type] || reducers.DEFAULT)()
}

export function todos (state = initialState, action) {
  const reducers = {
    [ADD_TODO]: () => state.unshift(todo(state, action)),
    [DELETE_TODO]: () => state.filter(x => x.get('id') !== action.id),
    [MARK_TODO_DONE]: () => state.map(x => x.get('id') === action.id ? todo(x, action) : x),
    [MARK_TODO_UNDONE]: () => state.map(x => x.get('id') === action.id ? todo(x, action) : x),
    [MARK_ALL_TODOS_DONE]: () => state.map(x => x.merge(Immutable.Map({completed: true}))),
    [MARK_ALL_TODOS_UNDONE]: () => state.map(x => x.merge(Immutable.Map({completed: false}))),
    [CLEAR_ALL_TODOS]: () => Immutable.List(),
    DEFAULT: () => state
  }
  return (reducers[action.type] || reducers.DEFAULT)()
}
