import React, {PropTypes} from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  static get propTypes () {
    return {
      todos: PropTypes.array.isRequired,
      actions: PropTypes.object.isRequired
    }
  }

  renderTodoList (state, actions) {
    return state
      .map(x => <Todo key={x.id} todo={x} {...actions} />)
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
          {this.renderTodoList(this.props.todos, this.props.actions)}
        </ul>
      </div>
    )
  }
}

export default TodoList
