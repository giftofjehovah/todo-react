import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <span className='todo-count'>
          <strong>1</strong>
          <span> item</span>
          <span> left</span>
        </span>
        <ul className='filters'>
          <li>
            <a href='#/all'>All</a>
            <a href='#/active'>Active</a>
            <a href='#/completed'>Completed</a>
          </li>
        </ul>
        <button className='clear-completed'>Clear</button>
      </div>
    )
  }
}

export default Footer
