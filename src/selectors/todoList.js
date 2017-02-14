import { createSelector } from 'reselect'
import {FILTER_ALL, FILTER_DONE, FILTER_ACTIVE} from '../constants/actionTypes'

const getFilterState = (state) => state.filter
const getTodoListState = (state) => state.todos

const getFilteredTodo = createSelector([getFilterState, getTodoListState], (filter, todos) => {
  const TODO_FILTERS = {
    [FILTER_ALL]: () => true,
    [FILTER_ACTIVE]: todo => !todo.completed,
    [FILTER_DONE]: todo => todo.completed
  }
  return todos.filter(TODO_FILTERS[filter])
})

export default getFilteredTodo
