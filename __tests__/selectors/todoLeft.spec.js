/* global describe it expect */
import getTodoLeft from '../../src/selectors/todoLeft'
import Immutable from 'immutable'

describe('getTodoLeft selector', () => {
  it('should handle getTodoLeft', () => {
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
      ]
    })
    const expectedResult = 1
    expect(getTodoLeft(currentState)).toEqual(expectedResult)
  })
})
