import React, { Component } from 'react'
export default class TodoActionItem extends Component {
  render () {
    return (
      <li id={this.props.todo.id} className='active'>
        <div className='view'>
          <input className='toggle' type='checkbox' id='todo-checkbox-{id}' checked={this.props.todo.status} />
          <label classId='todo-label-{id}'>{this.props.todo.description}</label>
          <input classId='todo-edit-textbox-{id}' className="edit" type='text' name='editableText' />
          <button classId='todo-button-{id}' className="destroy"></button>
        </div>
      </li>
    )
  }
}
