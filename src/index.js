import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
import 'todomvc-app-css/index.css'

const store = createStore(reducer)
const root = document.querySelector('#root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root)
