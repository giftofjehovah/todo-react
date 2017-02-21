/* global describe it expect beforeEach */
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Footer from '../../src/components/Footer'

describe('App components', () => {
  let renderer, result
  const props = {
    todoLeft: 1,
    filter: 'FILTER_ALL',
    actions: {}
  }
  beforeEach(() => {
    renderer = ReactTestUtils.createRenderer()
    renderer.render(<Footer {...props} />)
    result = renderer.getRenderOutput()
  })

  it('type should be div', () => {
    expect(result.type).toBe('div')
  })
})
