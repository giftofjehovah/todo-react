import React, {PropTypes} from 'react'
import Todo from './Todo'
import {FILTER_ALL, FILTER_DONE, FILTER_ACTIVE} from '../constants/actionTypes'

class Main extends React.Component {
  static get propTypes () {
    return {
      todos: PropTypes.array.isRequired,
      actions: PropTypes.object.isRequired,
      filter: PropTypes.string.isRequired
    }
  }

  renderTodoList (state, actions, filter) {
    return state
      .filter((item) => this.filterList(item, filter))
      .map(x => <Todo key={x.id} todo={x} {...actions} />)
  }

  filterList (todo, filter) {
    if (filter === FILTER_ALL) return true
    if (filter === FILTER_DONE) return todo.completed
    if (filter === FILTER_ACTIVE) return !todo.completed
  }

  handleToggle (event, actions) {
    event.target.checked ? actions.markAllTodosDone() : actions.markAllTodosUndone()
  }

  checkForAllCompleted (state) {
    return state.length ? state.every(x => x.completed) : false
  }

  render () {
    return (
      <div className='main'>
        <input type='checkbox' className='toggle-all' checked={this.checkForAllCompleted(this.props.todos)} onChange={(e) => this.handleToggle(e, this.props.actions)} />
        <ul className='todo-list'>
          {this.renderTodoList(this.props.todos, this.props.actions, this.props.filter)}
        </ul>
      </div>
    )
  }
}

export default Main
