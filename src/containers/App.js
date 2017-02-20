import React, { PropTypes } from 'react'
import Header from '../components/Header'
import Footer from '../containers/Footer'
import actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../containers/Main'

const App = ({todos, filter, quote, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} getQuote={actions.getQuote} quote={quote} />
    <Main />
    {todos.size ? <Footer /> : ''}
  </div>
)

App.propTypes = {
  todos: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ todos: state.get('todos'), filter: state.get('filter'), quote: state.get('quote') })
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(App)
