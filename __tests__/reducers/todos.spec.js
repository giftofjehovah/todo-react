/* global describe it expect */
import { todo, todos } from '../../src/reducers/todos'
import * as types from '../../src/constants/actionTypes'
import Immutable from 'immutable'

describe('todo reducers', () => {
  it('should handle default state', () => {
    const currentState = Immutable.fromJS([{
      text: 'This is the first todo',
      completed: true,
      id: 0
    }])
    const action = {
      type: ''
    }
    const expectedResult = Immutable.fromJS([{
      text: 'This is the first todo',
      completed: true,
      id: 0
    }])
    expect(todo(currentState, action)).toEqual(expectedResult)
  })

  it('should handle ADD_TODO', () => {
    const currentState = Immutable.fromJS([{
      text: 'This is the first todo',
      completed: true,
      id: 0
    }])
    const action = {
      type: types.ADD_TODO,
      text: 'This is the second todo'
    }
    const expectedResult = Immutable.Map({
      text: 'This is the second todo',
      completed: false,
      id: 1
    })
    expect(todo(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_DONE', () => {
    const currentState = Immutable.Map({
      text: 'This is the first todo',
      completed: false,
      id: 0
    })
    const action = {
      type: types.MARK_TODO_DONE,
      id: 0
    }
    const expectedResult = Immutable.Map({
      text: 'This is the first todo',
      completed: true,
      id: 0
    })
    expect(todo(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_UNDONE', () => {
    const currentState = Immutable.Map({
      text: 'This is the first todo',
      completed: true,
      id: 0
    })
    const action = {
      type: types.MARK_TODO_UNDONE,
      id: 0
    }
    const expectedResult = Immutable.Map({
      text: 'This is the first todo',
      completed: false,
      id: 0
    })
    expect(todo(currentState, action)).toEqual(expectedResult)
  })
})

describe('todos reducers', () => {
  it('should handle initial state', () => {
    const expectedResult = Immutable.fromJS([{
      text: 'Use Redux',
      completed: false,
      id: 0
    }])
    expect(todos(undefined, {})).toEqual(expectedResult)
  })

  it('should handle ADD_TODO', () => {
    const action = {
      type: types.ADD_TODO,
      text: 'This is the first todo'
    }
    const expectedResult = Immutable.fromJS([{
      text: 'This is the first todo',
      completed: false,
      id: 0
    }])
    expect(todos(Immutable.List(), action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_DONE', () => {
    const currentState = Immutable.fromJS([
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
    ])
    const action = {
      type: types.MARK_TODO_DONE,
      id: 1
    }
    const expectedResult = Immutable.fromJS([
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
    ])
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_TODO_UNDONE', () => {
    const currentState = Immutable.fromJS([
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
    ])
    const action = {
      type: types.MARK_TODO_UNDONE,
      id: 1
    }
    const expectedResult = Immutable.fromJS([
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
    ])
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle DELETE_TODO', () => {
    const currentState = Immutable.fromJS([
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
    ])
    const action = {
      type: types.DELETE_TODO,
      id: 1
    }
    const expectedResult = Immutable.fromJS([
      {
        text: 'This is the first todo',
        completed: false,
        id: 0
      }
    ])
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_ALL_TODOS_DONE', () => {
    const currentState = Immutable.fromJS([
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
    ])
    const action = {
      type: types.MARK_ALL_TODOS_DONE
    }
    const expectedResult = Immutable.fromJS([
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
    ])
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle MARK_ALL_TODOS_UNDONE', () => {
    const currentState = Immutable.fromJS([
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
    ])
    const action = {
      type: types.MARK_ALL_TODOS_UNDONE
    }
    const expectedResult = Immutable.fromJS([
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
    ])
    expect(todos(currentState, action)).toEqual(expectedResult)
  })

  it('should handle CLEAR_ALL_TODO', () => {
    const currentState = Immutable.fromJS([
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
    ])
    const action = {
      type: types.CLEAR_ALL_TODOS
    }
    const expectedResult = Immutable.List()
    expect(todos(currentState, action)).toEqual(expectedResult)
  })
})
