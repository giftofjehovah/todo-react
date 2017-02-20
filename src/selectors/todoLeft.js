import { createSelector } from 'reselect'

const getTodoListState = (state) => state.todos

const getTodoLeft = createSelector([getTodoListState], (todos) => {
  return todos.reduce((a, b) => b.get('completed') ? a : a + 1, 0)
})

export default getTodoLeft
