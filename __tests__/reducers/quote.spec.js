/* global describe it expect */
import quote from '../../src/reducers/quote'
import { UPDATE_QUOTE_TO_STATE } from '../../src/constants/actionTypes'

describe('quote reducers', () => {
  it('should handle default state', () => {
    const currentState = undefined
    const action = {
      type: ''
    }
    const expectedResult = 'loading quote...'
    expect(quote(currentState, action)).toEqual(expectedResult)
  })

  it('should handle UPDATE_QUOTE_TO_STATE', () => {
    const currentState = ''
    const action = {
      type: UPDATE_QUOTE_TO_STATE,
      quote: 'I am your father'
    }
    const expectedResult = 'I am your father'
    expect(quote(currentState, action)).toEqual(expectedResult)
  })
})
