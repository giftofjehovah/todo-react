/* global describe it expect */
import { todos } from '../../src/reducers/todos'
import filter from '../../src/reducers/filter'
import quote from '../../src/reducers/quote'
import input from '../../src/reducers/input'
import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'

describe('index reducers', () => {
  it('should handle default state', () => {
    const rootReducer = combineReducers({
      todos,
      filter,
      quote,
      input
    })
    const currentState = undefined
    const action = {
      type: ''
    }
    const expectedResult = Immutable.fromJS({
      todos: [{
        text: 'Use Redux',
        completed: false,
        id: 0
      }],
      filter: 'FILTER_ALL',
      quote: 'loading quote...',
      input: ''
    })
    expect(rootReducer(currentState, action)).toEqual(expectedResult)
  })
})
