import React, { PropTypes } from 'react'
import {FILTER_ALL, FILTER_DONE, FILTER_ACTIVE} from '../constants/actionTypes'

class Footer extends React.Component {
  static get propTypes () {
    return {
      todos: PropTypes.array.isRequired,
      actions: PropTypes.object.isRequired,
      filter: PropTypes.string.isRequired
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
            <a href='#/all'
              className={this.props.filter === FILTER_ALL ? 'selected' : ''}
              onClick={this.props.actions.filterAll}>All</a>
            <a href='#/active'
              className={this.props.filter === FILTER_ACTIVE ? 'selected' : ''}
              onClick={this.props.actions.filterActive}>Active</a>
            <a href='#/completed'
              className={this.props.filter === FILTER_DONE ? 'selected' : ''}
              onClick={this.props.actions.filterDone}>Completed</a>
          </li>
        </ul>
        <button className='clear-completed' onClick={this.props.actions.clearAllTodos}>Clear</button>
      </div>
    )
  }
}

export default Footer
