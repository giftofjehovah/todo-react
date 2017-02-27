/* global describe it expect */
import actions from '../../src/actions/index'
import * as filterActions from '../../src/actions/filter'
import * as todoActions from '../../src/actions/todo'
import * as quoteActions from '../../src/actions/quote'
import * as inputActions from '../../src/actions/input'

describe('index actions', () => {
  it('should create all actions object', () => {
    const expectedResult = Object.assign({}, filterActions, todoActions, quoteActions, inputActions)
    expect(actions).toEqual(expectedResult)
  })
})
