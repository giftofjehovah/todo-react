/* global describe it expect */
import * as actions from '../../src/actions/todo'
import * as types from '../../src/constants/actionTypes'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const expectedResult = { type: types.ADD_TODO, text: 'This is a todo' }
    expect(actions.addTodo('This is a todo')).toEqual(expectedResult)
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    const expectedResult = { type: types.DELETE_TODO, id: 1 }
    expect(actions.deleteTodo(1)).toEqual(expectedResult)
  })

  it('markTodoDone should create MARK_TODO_DONE action', () => {
    const expectedResult = { type: types.MARK_TODO_DONE, id: 1 }
    expect(actions.markTodoDone(1)).toEqual(expectedResult)
  })

  it('markTodoUndone should create MARK_TODO_UNDONE action', () => {
    const expectedResult = { type: types.MARK_TODO_UNDONE, id: 1 }
    expect(actions.markTodoUndone(1)).toEqual(expectedResult)
  })

  it('markAllTodosDone should create MARK_ALL_TODOS_DONE action', () => {
    const expectedResult = { type: types.MARK_ALL_TODOS_DONE }
    expect(actions.markAllTodosDone()).toEqual(expectedResult)
  })

  it('markAllTodosUndone should create MARK_ALL_TODOS_UNDONE action', () => {
    const expectedResult = { type: types.MARK_ALL_TODOS_UNDONE }
    expect(actions.markAllTodosUndone()).toEqual(expectedResult)
  })

  it('clearAllTodos should create CLEAR_ALL_TODOS action', () => {
    const expectedResult = { type: types.CLEAR_ALL_TODOS }
    expect(actions.clearAllTodos()).toEqual(expectedResult)
  })
})
