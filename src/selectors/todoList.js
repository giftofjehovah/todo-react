import { createSelector } from 'reselect'
import { FILTER_ALL, FILTER_DONE, FILTER_ACTIVE } from '../constants/actionTypes'

const getFilterState = (state) => state.get('filter')
const getTodoListState = (state) => state.get('todos')

const getFilteredTodo = createSelector([getFilterState, getTodoListState], (filter, todos) => {
  const TODO_FILTERS = {
    [FILTER_ALL]: () => true,
    [FILTER_ACTIVE]: todo => !todo.get('completed'),
    [FILTER_DONE]: todo => todo.get('completed')
  }
  return todos.filter(TODO_FILTERS[filter])
})

export default getFilteredTodo
