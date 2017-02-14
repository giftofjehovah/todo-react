import React, { PropTypes } from 'react'
import Header from '../components/Header'
import Footer from '../containers/Footer'
import actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../containers/Main'

const App = ({todos, filter, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <Main />
    {todos.length ? <Footer /> : ''}
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ todos: state.todos, filter: state.filter })
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(App)
