/* global describe it expect */
import input from '../../src/reducers/input'
import * as types from '../../src/constants/actionTypes'

describe('input reducers', () => {
  it('should handle default state', () => {
    const currentState = undefined
    const action = {
      type: ''
    }
    const expectedResult = ''
    expect(input(currentState, action)).toEqual(expectedResult)
  })

  it('should handle FILTER_ALL', () => {
    const currentState = ''
    const action = {
      type: types.TEXT_INPUT,
      text: 'hellllo'
    }
    const expectedResult = 'hellllo'
    expect(input(currentState, action)).toEqual(expectedResult)
  })
})
