/* global describe it expect */
import rootReducer from '../../src/reducers/index'
import Immutable from 'immutable'

describe('index reducers', () => {
  it('should handle default state', () => {
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
