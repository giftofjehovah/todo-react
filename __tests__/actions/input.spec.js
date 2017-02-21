/* global describe it expect */
import * as actions from '../../src/actions/input'
import * as types from '../../src/constants/actionTypes'

describe('input actions', () => {
  it('textInput should create TEXT_INPUT action', () => {
    const text = 'hi'
    const expectedResult = { type: types.TEXT_INPUT, text }
    expect(actions.textInput(text)).toEqual(expectedResult)
  })
})
