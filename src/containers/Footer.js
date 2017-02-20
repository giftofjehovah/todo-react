import Footer from '../components/Footer'
import actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getTodoLeft from '../selectors/todoLeft'

const mapStateToProps = state => ({ todoLeft: getTodoLeft(state), filter: state.get('filter') })
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
