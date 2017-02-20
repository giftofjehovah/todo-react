import TodoList from '../components/TodoList'
import actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getFilteredTodo from '../selectors/todoList'

const mapStateToProps = state => ({ todos: getFilteredTodo(state) })
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
