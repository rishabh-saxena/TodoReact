import React, { Component } from 'react'
import {Link} from 'react-router'
export default class Filters extends Component {
  render () {
    return (
      <div className="footer">
        <span className="todo-count">
        </span>
        <ul className="filters">
          <li> <Link to={'/'} activeClassName="active">all</Link></li>
         <li> <Link to={'/active'} activeClassName="active">active</Link></li>
         <li><Link to={'/completed'} activeClassName="active">completed</Link></li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </div>
    )
  }
}
