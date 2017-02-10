import React, { PropTypes } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const App = ({todos, filter, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <Main todos={todos} actions={actions} filter={filter} />
    {todos.length ? <Footer todos={todos} actions={actions} filter={filter} /> : ''}
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
