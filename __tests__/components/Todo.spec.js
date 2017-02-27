/* global describe it expect beforeEach jest */
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Todo from '../../src/components/Todo'
import Immutable from 'immutable'

describe('App components', () => {
  let renderer, result
  const props = {
    todo: Immutable.Map(),
    deleteTodo: jest.fn(),
    markTodoDone: jest.fn(),
    markTodoUndone: jest.fn()
  }
  beforeEach(() => {
    renderer = ReactTestUtils.createRenderer()
    renderer.render(<Todo {...props} />)
    result = renderer.getRenderOutput()
  })

  it('type should be li', () => {
    expect(result.type).toBe('li')
  })
})
