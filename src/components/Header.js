import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <h1>todos</h1>
        <input type='text' className='new-todo' />
      </div>
    )
  }
}

export default Header
