import React, { PropTypes } from 'react'
import Header from '../components/Header'
import Footer from '../containers/Footer'
import actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../containers/Main'
import ImmutablePropTypes from 'react-immutable-proptypes'

class App extends React.Component {
  static get propTypes () {
    return {
      todos: ImmutablePropTypes.list.isRequired,
      filter: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      actions: PropTypes.object.isRequired
    }
  }

  static get contextTypes () {
    return {
      store: React.PropTypes.object.isRequired
    }
  }

  componentDidMount () {
    window.addEventListener('beforeunload', () => this.saveStore())
  }

  saveStore () {
    const state = this.context.store.getState().toJS()
    const stringifyState = JSON.stringify(state)
    window.localStorage.setItem('todoStore', stringifyState)
  }

  render () {
    return (
      <div>
        <Header addTodo={this.props.actions.addTodo} getQuote={this.props.actions.getQuote} quote={this.props.quote} />
        <Main />
        {this.props.todos.size ? <Footer /> : ''}
      </div>
    )
  }
}

const mapStateToProps = state => ({ todos: state.get('todos'), filter: state.get('filter'), quote: state.get('quote') })
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(App)
