/* global describe it expect */
import * as actions from '../../src/actions/quote'
import * as types from '../../src/constants/actionTypes'

describe('quote actions', () => {
  it('getQuote should create GET_QUOTE action', () => {
    const api = () => new Promise()
    const expectedResult = { type: types.GET_QUOTE, api }
    expect(actions.getQuote(api)).toEqual(expectedResult)
  })

  it('updateQuoteToState should create UPDATE_QUOTE_TO_STATE action', () => {
    const quote = 'I am your father'
    const expectedResult = { type: types.UPDATE_QUOTE_TO_STATE, quote }
    expect(actions.updateQuoteToState(quote)).toEqual(expectedResult)
  })
})
