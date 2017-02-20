import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

class Todo extends React.Component {
  static get propTypes () {
    return {
      todo: ImmutablePropTypes.map.isRequired,
      deleteTodo: PropTypes.func.isRequired,
      markTodoDone: PropTypes.func.isRequired,
      markTodoUndone: PropTypes.func.isRequired
    }
  }

  handleToggle (event, id) {
    event.target.checked ? this.props.markTodoDone(id) : this.props.markTodoUndone(id)
  }

  render () {
    return (
      <li className={this.props.todo.completed ? 'completed' : ''}>
        <div className='view'>
          <input type='checkbox' className='toggle' checked={this.props.todo.get('completed')} onChange={(e) => this.handleToggle(e, this.props.todo.get('id'))} />
          <label>{this.props.todo.get('text')}</label>
          <button className='destroy' onClick={() => this.props.deleteTodo(this.props.todo.get('id'))} />
        </div>
      </li>
    )
  }
}

export default Todo
