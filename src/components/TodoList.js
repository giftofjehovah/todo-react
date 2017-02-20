import React, {PropTypes} from 'react'
import Todo from './Todo'
import ImmutablePropTypes from 'react-immutable-proptypes'

class TodoList extends React.Component {
  static get propTypes () {
    return {
      todos: ImmutablePropTypes.list.isRequired,
      actions: PropTypes.object.isRequired
    }
  }

  renderTodoList (state, actions) {
    return state
      .map(x => <Todo key={x.get('id')} todo={x} {...actions} />)
  }

  handleToggle (event, actions) {
    event.target.checked ? actions.markAllTodosDone() : actions.markAllTodosUndone()
  }

  checkForAllCompleted (state) {
    return state.length ? state.every(x => x.get('completed')) : false
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
