import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
import 'todomvc-app-css/index.css'

const store = createStore(reducer)
console.log('initial state: ', store.getState())
store.subscribe(() => console.log('current state', store.getState()))
const app = document.querySelector('#app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app)
