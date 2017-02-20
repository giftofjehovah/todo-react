import React, {PropTypes} from 'react'
import quotes from '../api/quotes'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  static get propTypes () {
    return {
      addTodo: PropTypes.func.isRequired,
      getQuote: PropTypes.func.isRequired
    }
  }
  componentDidMount () {
    this.props.getQuote(quotes)
  }
  handleChange (event) {
    this.setState({ text: event.target.value })
  }
  handleSubmit (event) {
    if (event.keyCode === 13 && this.state.text.length > 0) this.props.addTodo(this.state.text) && this.setState({ text: '' })
  }
  render () {
    return (
      <div className='header'>
        <h1>todos</h1>
        <p>{this.props.quote}</p>
        <input
          type='text'
          className='new-todo'
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          value={this.state.text} />
      </div>
    )
  }
}

export default Header
