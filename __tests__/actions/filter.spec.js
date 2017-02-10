/* global describe it expect */
import * as actions from '../../src/actions/filter'
import * as types from '../../src/constants/actionTypes'

describe('filter actions', () => {
  it('filterAll should create FILTER_ALL action', () => {
    const expectedResult = { type: types.FILTER_ALL }
    expect(actions.filterAll()).toEqual(expectedResult)
  })

  it('filterDone should create FILTER_DONE action', () => {
    const expectedResult = { type: types.FILTER_DONE }
    expect(actions.filterDone()).toEqual(expectedResult)
  })

  it('filterActive should create FILTER_ACTIVE action', () => {
    const expectedResult = { type: types.FILTER_ACTIVE }
    expect(actions.filterActive()).toEqual(expectedResult)
  })
})
