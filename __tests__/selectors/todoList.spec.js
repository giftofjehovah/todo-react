/* global describe it expect */
import getFilteredTodo from '../../src/selectors/todoList'
import Immutable from 'immutable'
import { FILTER_ALL, FILTER_DONE, FILTER_ACTIVE } from '../../src/constants/actionTypes'

describe('getFilteredTodo selector', () => {
  it('should handle FILTER_ALL filter', () => {
    const currentState = Immutable.fromJS({
      todos: [
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        },
        {
          text: 'Use React',
          completed: true,
          id: 1
        }
      ],
      filter: FILTER_ALL
    })
    const expectedResult = Immutable.fromJS([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      },
      {
        text: 'Use React',
        completed: true,
        id: 1
      }
    ])
    expect(getFilteredTodo(currentState)).toEqual(expectedResult)
  })

  it('should handle FILTER_DONE filter', () => {
    const currentState = Immutable.fromJS({
      todos: [
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        },
        {
          text: 'Use React',
          completed: true,
          id: 1
        }
      ],
      filter: FILTER_DONE
    })
    const expectedResult = Immutable.fromJS([
      {
        text: 'Use React',
        completed: true,
        id: 1
      }
    ])
    expect(getFilteredTodo(currentState)).toEqual(expectedResult)
  })

  it('should handle FILTER_ACTIVE filter', () => {
    const currentState = Immutable.fromJS({
      todos: [
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        },
        {
          text: 'Use React',
          completed: true,
          id: 1
        }
      ],
      filter: FILTER_ACTIVE
    })
    const expectedResult = Immutable.fromJS([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
    expect(getFilteredTodo(currentState)).toEqual(expectedResult)
  })
})
