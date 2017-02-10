/* global describe it expect */
import filter from '../../src/reducers/filter'
import * as types from '../../src/constants/actionTypes'

describe('filter reducers', () => {
  it('should handle FILTER_ALL', () => {
    const currentState = ''
    const action = {
      type: types.FILTER_ALL
    }
    const expectedResult = 'FILTER_ALL'
    expect(filter(currentState, action)).toEqual(expectedResult)
  })

  it('should handle FILTER_DONE', () => {
    const currentState = ''
    const action = {
      type: types.FILTER_DONE
    }
    const expectedResult = 'FILTER_DONE'
    expect(filter(currentState, action)).toEqual(expectedResult)
  })

  it('should handle FILTER_ACTIVE', () => {
    const currentState = ''
    const action = {
      type: types.FILTER_ACTIVE
    }
    const expectedResult = 'FILTER_ACTIVE'
    expect(filter(currentState, action)).toEqual(expectedResult)
  })
})
