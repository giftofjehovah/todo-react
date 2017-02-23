import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
import Immutable from 'immutable'
import asyncMiddleware, {actionsLogger} from './middleware/asyncMiddleware'
import 'todomvc-app-css/index.css'
import './styles.css'

function getStateFromLocalStorage () {
  const stringifyState = window.localStorage.getItem('todoStore')
  return stringifyState ? Immutable.fromJS(JSON.parse(stringifyState)) : undefined
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, getStateFromLocalStorage(), composeEnhancers(applyMiddleware(asyncMiddleware, actionsLogger)))
const app = document.querySelector('#app')
store.subscribe(() => {
  console.log('state is changing', store.getState())
})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app)
