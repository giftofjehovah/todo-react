import React, { PropTypes } from 'react'

class Footer extends React.Component {
  static get propTypes () {
    return {
      todos: PropTypes.array.isRequired,
      clearAllTodos: PropTypes.func.isRequired
    }
  }

  getTodosUndone (state) {
    return state.reduce((a, b) => b.completed ? a : a + 1, 0)
  }

  render () {
    return (
      <div className='footer'>
        <span className='todo-count'>
          <strong>{this.getTodosUndone(this.props.todos)}</strong>
          <span> item</span>
          <span> left</span>
        </span>
        <ul className='filters'>
          <li>
            <a href='#/all'>All</a>
            <a href='#/active'>Active</a>
            <a href='#/completed'>Completed</a>
          </li>
        </ul>
        <button className='clear-completed' onClick={this.props.clearAllTodos}>Clear</button>
      </div>
    )
  }
}

export default Footer
