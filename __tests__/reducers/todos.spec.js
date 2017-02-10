/* global describe it expect */
import { todo, todos } from '../../src/reducers/todos'
import * as types from '../../src/constants/actionTypes'

describe('todo reducers', () => {
  it('should handle ADD_TODO', () => {
    const currentState = [{
      text: 'This is the first todo',
      completed: true,
      id: 0
    }]
    const action = {
      type: types.ADD_TODO,
      text: 'This is the second todo'
    }
    const expectedResult = {
      text: 'This is the second todo',
      completed: false,
      id: 1
    }
    expect(todo(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_DONE', () => {
    const currentState = {
      text: 'This is the first todo',
      completed: false,
      id: 0
    }
    const action = {
      type: types.MARK_TODO_DONE,
      id: 0
    }
    const expectedResult = {
      text: 'This is the first todo',
      completed: true,
      id: 0
    }
    expect(todo(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_UNDONE', () => {
    const currentState = {
      text: 'This is the first todo',
      completed: true,
      id: 0
    }
    const action = {
      type: types.MARK_TODO_UNDONE,
      id: 0
    }
    const expectedResult = {
      text: 'This is the first todo',
      completed: false,
      id: 0
    }
    expect(todo(currentState, action)).toEqual(expectedResult)
  })
})

describe('todos reducers', () => {
  it('should handle initial state', () => {
    const expectedResult = [{
      text: 'Use Redux',
      completed: false,
      id: 0
    }]
    expect(todos(undefined, {})).toEqual(expectedResult)
  })

  it('should handle ADD_TODO', () => {
    const action = {
      type: types.ADD_TODO,
      text: 'This is the first todo'
    }
    const expectedResult = [{
      text: 'This is the first todo',
      completed: false,
      id: 0
    }]
    expect(todos([], action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_DONE', () => {
    const currentState = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: false,
        id: 1
      }
    ]
    const action = {
      type: types.MARK_TODO_DONE,
      id: 1
    }
    const expectedResult = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: true,
        id: 1
      }
    ]
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_UNDONE', () => {
    const currentState = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: true,
        id: 1
      }
    ]
    const action = {
      type: types.MARK_TODO_UNDONE,
      id: 1
    }
    const expectedResult = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: false,
        id: 1
      }
    ]
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle DELETE_TODO', () => {
    const currentState = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: true,
        id: 1
      }
    ]
    const action = {
      type: types.DELETE_TODO,
      id: 1
    }
    const expectedResult = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      }
    ]
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_ALL_TODOS_DONE', () => {
    const currentState = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: false,
        id: 1
      }
    ]
    const action = {
      type: types.MARK_ALL_TODOS_DONE
    }
    const expectedResult = [
      {
        text: 'This is the first todo',
        completed: true,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: true,
        id: 1
      }
    ]
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_ALL_TODOS_UNDONE', () => {
    const currentState = [
      {
        text: 'This is the first todo',
        completed: true,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: true,
        id: 1
      }
    ]
    const action = {
      type: types.MARK_ALL_TODOS_UNDONE
    }
    const expectedResult = [
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: false,
        id: 1
      }
    ]
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle CLEAR_ALL_TODO', () => {
    const currentState = [
      {
        text: 'This is the first todo',
        completed: true,
        id: 0
      },
      {
        text: 'This is the second todo',
        completed: true,
        id: 1
      }
    ]
    const action = {
      type: types.CLEAR_ALL_TODO
    }
    const expectedResult = []
    expect(todos(currentState, action)).toEqual(expectedResult)
  })
})
