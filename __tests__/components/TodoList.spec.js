/* global describe it expect beforeEach */
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import TodoList from '../../src/components/TodoList'
import Immutable from 'immutable'

describe('App components', () => {
  let renderer, result
  const props = {
    todos: Immutable.List(),
    actions: {}
  }
  beforeEach(() => {
    renderer = ReactTestUtils.createRenderer()
    renderer.render(<TodoList {...props} />)
    result = renderer.getRenderOutput()
  })

  it('type should be div', () => {
    expect(result.type).toBe('div')
  })

  it('class should be main', () => {
    expect(result.props.className).toBe('main')
  })

  it('class should have two children', () => {
    expect(result.props.children.length).toBe(2)
  })
})
