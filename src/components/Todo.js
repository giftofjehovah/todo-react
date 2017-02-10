import React, { PropTypes } from 'react'

class Todo extends React.Component {
  static get propTypes () {
    return {
      todo: PropTypes.object.isRequired,
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
          <input type='checkbox' className='toggle' checked={this.props.todo.completed} onChange={(e) => this.handleToggle(e, this.props.todo.id)} />
          <label>{this.props.todo.text}</label>
          <button className='destroy' onClick={() => this.props.deleteTodo(this.props.todo.id)} />
        </div>
      </li>
    )
  }
}

export default Todo
