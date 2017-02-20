// import { combineReducers } from 'redux'
import { todos } from './todos'
import filter from './filter'
import quote from './quote'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  todos,
  filter,
  quote
})

export default rootReducer
