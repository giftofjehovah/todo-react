import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './reducers'
import epic from './epics'
import App from './containers/App'
import Immutable from 'immutable'
import 'todomvc-app-css/index.css'
import './styles.css'

function getStateFromLocalStorage () {
  const stringifyState = window.localStorage.getItem('todoStore')
  return stringifyState ? Immutable.fromJS(JSON.parse(stringifyState)) : undefined
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware(epic)
const store = createStore(reducer, getStateFromLocalStorage(), composeEnhancers(applyMiddleware(epicMiddleware)))
const app = document.querySelector('#app')
store.subscribe(() => {
  console.log('state is changing', store.getState())
})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app)
