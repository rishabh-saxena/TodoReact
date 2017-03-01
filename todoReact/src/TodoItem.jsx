import React, { Component } from 'react'
import '../views/index1.css'
export default class TodoItem extends Component {
  onKeyPress (event) {
    if (event.which === 13) {
      this.props.writeTodo(event.target.value)
    }
  }
  render () {
    return (
      <div>
        <input className="new-todo" type="text" id="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={this.onKeyPress.bind(this)} />
        <div className="main">
          <input className="toggle-all" type="checkbox" />
          <label for="toggle-all"></label>
        </div>
      </div>
    )
  }
}
