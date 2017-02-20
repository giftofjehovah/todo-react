import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './reducers'
import epic from './epics'
import App from './containers/App'
import 'todomvc-app-css/index.css'
import './styles.css'

const epicMiddleware = createEpicMiddleware(epic)
const store = createStore(reducer, applyMiddleware(epicMiddleware))
const app = document.querySelector('#app')
store.subscribe(() => {
  console.log('state is changing', store.getState())
})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app)
