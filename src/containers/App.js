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
    {todos.length ? <Footer /> : ''}
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ todos: state.todos, filter: state.filter, quote: state.quote })
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(App)
