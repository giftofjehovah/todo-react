/* global describe it expect beforeEach jest */
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Header from '../../src/components/Header'

describe('App components', () => {
  let renderer, result
  const props = {
    actions: {},
    getQuote: jest.fn(),
    quote: '',
    inputText: ''
  }
  beforeEach(() => {
    renderer = ReactTestUtils.createRenderer()
    renderer.render(<Header {...props} />)
    result = renderer.getRenderOutput()
  })

  it('type should be div', () => {
    expect(result.type).toBe('div')
  })

  it('class should be header', () => {
    expect(result.props.className).toBe('header')
  })

  it('class should have three children', () => {
    expect(result.props.children.length).toBe(3)
  })
})
