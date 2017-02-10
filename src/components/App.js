import React, { PropTypes } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import * as todoActions from '../actions/todo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const App = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <Main todos={todos} actions={actions} />
    <Footer todos={todos} clearAllTodos={actions.clearAllTodos} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(todoActions, dispatch) })
export default connect(mapStateToProps, mapDispatchToProps)(App)
