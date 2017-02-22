import React, {PropTypes} from 'react'
import quotes from '../api/quotes'

class Header extends React.Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  static get propTypes () {
    return {
      actions: PropTypes.object.isRequired,
      getQuote: PropTypes.func.isRequired,
      quote: PropTypes.string.isRequired,
      inputText: PropTypes.string.isRequired
    }
  }
  componentDidMount () {
    const dummyAction = () => ({type: 'HI'})
    quotes.get(dummyAction, this.props.actions.updateQuoteToState, dummyAction)
  }
  handleChange (event) {
    this.props.actions.textInput(event.target.value)
  }
  handleSubmit (event) {
    if (event.keyCode === 13 && this.props.inputText.length > 0) this.props.actions.addTodo(this.props.inputText) && this.props.actions.textInput('')
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
          value={this.props.inputText} />
      </div>
    )
  }
}

export default Header
