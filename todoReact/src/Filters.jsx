import React, { Component } from 'react'
export default class Filters extends Component {
  render () {
    return (
      <div className="footer">
        <span className="todo-count">
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active" className >Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </div>
    )
  }
}
