import { todos } from './todos'
import filter from './filter'
import quote from './quote'
import input from './input'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  todos,
  filter,
  quote,
  input
})

export default rootReducer
