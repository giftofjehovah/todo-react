import { combineReducers } from 'redux'
import { todos } from './todos'
import filter from './filter'
import quote from './quote'

const rootReducer = combineReducers({
  todos,
  filter,
  quote
})

export default rootReducer
