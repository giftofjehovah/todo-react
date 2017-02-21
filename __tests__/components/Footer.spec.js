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
    console.log(result.props.children[0])
  })

  it('type should be div', () => {
    expect(result.type).toBe('div')
  })

  it('class should be footer', () => {
    expect(result.props.className).toBe('footer')
  })

  it('class should have three children', () => {
    expect(result.props.children.length).toBe(3)
  })
})
