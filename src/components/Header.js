import React, {PropTypes} from 'react'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
  }
  static get propTypes () {
    return {
      addTodo: PropTypes.func.isRequired
    }
  }
  handleChange (event) {
    this.setState({ text: event.target.value })
  }
  handleSubmit (event) {
    if (event.keyCode === 13) this.props.addTodo(this.state.text) && this.setState({ text: '' })
  }
  render () {
    return (
      <div className='header'>
        <h1>todos</h1>
        <input
          type='text'
          className='new-todo'
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
          value={this.state.text} />
      </div>
    )
  }
}

export default Header
