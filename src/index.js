import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
import 'todomvc-app-css/index.css'

const store = createStore(reducer)
const app = document.querySelector('#app')
store.subscribe(() => {
  console.log('state is changing', store.getState())
})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app)
